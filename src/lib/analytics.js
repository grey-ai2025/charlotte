const ANALYTICS_ENDPOINT = 'https://n8n.srv1203909.hstgr.cloud/webhook/analytics'

const getSessionId = () => {
  let sessionId = sessionStorage.getItem('_sid')
  if (!sessionId) {
    sessionId = crypto.randomUUID()
    sessionStorage.setItem('_sid', sessionId)
  }
  return sessionId
}

const getDeviceType = () => {
  const width = window.innerWidth
  if (width < 768) return 'mobile'
  if (width < 1024) return 'tablet'
  return 'desktop'
}

export const trackEvent = async (eventName, properties = {}) => {
  try {
    const payload = {
      event: eventName,
      properties: {
        ...properties,
        page_url: window.location.href,
        page_path: window.location.pathname,
        page_title: document.title,
        referrer: document.referrer,
        device_type: getDeviceType(),
        screen_width: window.innerWidth,
        session_id: getSessionId(),
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent,
      },
    }

    if (navigator.sendBeacon) {
      navigator.sendBeacon(ANALYTICS_ENDPOINT, JSON.stringify(payload))
    } else {
      await fetch(ANALYTICS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
      })
    }
  } catch (e) {
    // Silently fail - analytics should never break the site
  }
}

export const trackPageView = () => {
  trackEvent('page_viewed')
}

export const trackCTAClick = (buttonText, location) => {
  trackEvent('cta_clicked', { button_text: buttonText, location })
}

export const trackFormSubmission = (formType, success) => {
  trackEvent('form_submitted', { form_type: formType, success })
}

export const trackExternalLink = (url, location) => {
  trackEvent('external_link_clicked', { url, location })
}

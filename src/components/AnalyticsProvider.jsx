import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '../lib/analytics'

const AnalyticsProvider = () => {
  const location = useLocation()

  useEffect(() => {
    trackPageView()
  }, [location.pathname])

  return null
}

export default AnalyticsProvider

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Linkedin, Send, CheckCircle, MessageSquare } from 'lucide-react'
import ScrollFloat from './ScrollFloat'
import FadeContent from './FadeContent'
import { trackFormSubmission } from '../lib/analytics'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', inquiry: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('https://n8n.srv1203909.hstgr.cloud/webhook/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: window.location.href,
        }),
      })

      if (!response.ok) throw new Error('Failed to send message')

      trackFormSubmission('contact', true)
      setIsSuccess(true)
      setFormData({ name: '', email: '', inquiry: '', subject: '', message: '' })
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (err) {
      trackFormSubmission('contact', false)
      setError('Something went wrong. Please try again or email hello@charlottelewisjones.com directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section bg-warm-100/50">
      <div className="container">
        <div className="text-center mb-16">
          <span className="section-label mb-4 inline-block">Get in Touch</span>
          <ScrollFloat
            containerClassName="!my-0"
            textClassName="font-serif !text-[clamp(2rem,5vw,3.5rem)] !leading-[1.2] font-semibold text-charcoal-800"
          >
            Say Hello
          </ScrollFloat>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <FadeContent duration={800} threshold={0.2} blur>
            <div className="space-y-8">
              <p className="text-lg text-charcoal-700/80 leading-relaxed">
                Whether you&apos;re interested in speaking engagements, AI consulting through
                Grey AI, collaborations, or simply want to connect — I&apos;d love to hear
                from you.
              </p>

              <div className="space-y-5">
                <a
                  href="mailto:hello@charlottelewisjones.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-sage-500 flex items-center justify-center flex-shrink-0 group-hover:bg-sage-600 transition-colors">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-sage-500 font-medium">Email</p>
                    <p className="text-charcoal-700 group-hover:text-sage-600 transition-colors">
                      hello@charlottelewisjones.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/charlottelewisjones"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-sage-500 flex items-center justify-center flex-shrink-0 group-hover:bg-sage-600 transition-colors">
                    <Linkedin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-sage-500 font-medium">LinkedIn</p>
                    <p className="text-charcoal-700 group-hover:text-sage-600 transition-colors">
                      Connect on LinkedIn
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sage-500 flex items-center justify-center flex-shrink-0">
                    <MessageSquare size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-sage-500 font-medium">Speaking & Consulting</p>
                    <p className="text-charcoal-700/80">
                      Available for keynotes, panels &amp; advisory
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeContent>

          <FadeContent duration={800} delay={200} threshold={0.2} blur>
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="card flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-sage-500" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-charcoal-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-charcoal-700/70">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="card space-y-5"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiry" className="block text-sm font-medium text-charcoal-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      required
                      value={formData.inquiry}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="" disabled>Select an inquiry type</option>
                      <option value="speaking">Speaking Engagement</option>
                      <option value="consulting">AI Consulting</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="media">Media / Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-charcoal-700 mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Brief subject line"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your inquiry — speaking engagements, consulting, collaborations, or just say hello..."
                      className="input-field resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full text-base gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2">
                        <Send size={16} />
                        Send Message
                      </span>
                    )}
                  </button>
                  {error && (
                    <p className="text-red-500 text-sm text-center">{error}</p>
                  )}
                  <p className="text-xs text-charcoal-700/50 text-center pt-2">
                    Typically responds within 24 hours
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </FadeContent>
        </div>
      </div>
    </section>
  )
}

export default Contact

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Send,
  CheckCircle2,
  Loader2,
} from 'lucide-react'
import { FaLinkedinIn } from 'react-icons/fa'
import { contactInfo } from '../data/constants'
import { fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations'

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setFormState('sending')
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1500))
    setFormState('sent')
    setTimeout(() => {
      setFormState('idle')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: '#3B82F6',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      color: '#06B6D4',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: contactInfo.location,
      href: '#',
      color: '#38BDF8',
    },
    {
      icon: FaLinkedinIn,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: contactInfo.linkedin,
      color: '#0A66C2',
    },
    {
      icon: ExternalLink,
      label: 'Portfolio',
      value: 'View on Behance',
      href: contactInfo.portfolio,
      color: '#1769FF',
    },
  ]

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    background: 'rgba(17, 24, 39, 0.8)',
    border: '1px solid rgba(59, 130, 246, 0.15)',
    borderRadius: '12px',
    color: '#F9FAFB',
    fontSize: '14px',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'all 0.3s ease',
  } as const

  return (
    <section
      id="contact"
      className="section"
      ref={ref}
      style={{
        background: 'linear-gradient(180deg, var(--color-bg) 0%, rgba(17, 24, 39, 0.5) 50%, var(--color-bg) 100%)',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="section-header"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Interested in working together? I'd love to hear from you.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '48px',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Contact Info */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.2}
          >
            <h3
              style={{
                fontSize: '22px',
                fontWeight: 700,
                marginBottom: '8px',
                fontFamily: 'var(--font-heading)',
              }}
            >
              Contact Information
            </h3>
            <p style={{ fontSize: '14px', color: '#9CA3AF', marginBottom: '28px', lineHeight: 1.7 }}>
              Feel free to reach out through any of these channels. I'm always open to discussing new projects and opportunities.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {contactItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 6, boxShadow: `0 0 16px ${item.color}15` }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '16px 18px',
                    background: 'var(--color-bg-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: `${item.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <item.icon size={18} style={{ color: item.color }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2px' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 500, color: '#F9FAFB' }}>
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.3}
          >
            <motion.form
              onSubmit={handleSubmit}
              style={{
                padding: '32px',
                background: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top gradient line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, #3B82F6, #06B6D4)',
                }}
              />

              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  marginBottom: '24px',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                Send me a message
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}
                className="form-row"
              >
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#9CA3AF', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    style={inputStyle}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)'
                      e.currentTarget.style.boxShadow = '0 0 12px rgba(59, 130, 246, 0.15)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.15)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#9CA3AF', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    style={inputStyle}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)'
                      e.currentTarget.style.boxShadow = '0 0 12px rgba(59, 130, 246, 0.15)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.15)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#9CA3AF', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project inquiry, collaboration, etc."
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)'
                    e.currentTarget.style.boxShadow = '0 0 12px rgba(59, 130, 246, 0.15)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.15)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#9CA3AF', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  style={{
                    ...inputStyle,
                    resize: 'vertical' as const,
                    minHeight: '120px',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)'
                    e.currentTarget.style.boxShadow = '0 0 12px rgba(59, 130, 246, 0.15)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.15)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                disabled={formState !== 'idle'}
                style={{
                  width: '100%',
                  padding: '16px',
                  background:
                    formState === 'sent'
                      ? 'linear-gradient(135deg, #22C55E, #16A34A)'
                      : 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '15px',
                  fontWeight: 700,
                  cursor: formState === 'idle' ? 'pointer' : 'default',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-body)',
                  transition: 'all 0.3s ease',
                  opacity: formState === 'sending' ? 0.8 : 1,
                }}
              >
                {formState === 'idle' && (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
                {formState === 'sending' && (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
                      <Loader2 size={18} />
                    </motion.div>
                    Sending...
                  </>
                )}
                {formState === 'sent' && (
                  <>
                    <CheckCircle2 size={18} />
                    Message Sent!
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

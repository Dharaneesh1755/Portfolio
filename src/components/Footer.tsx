import { motion } from 'framer-motion'
import { ArrowUp, Heart, Mail } from 'lucide-react'
import { SiBehance } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'
import { navLinks, contactInfo } from '../data/constants'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(59, 130, 246, 0.1)',
        background: 'rgba(11, 17, 32, 0.8)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div
        className="container"
        style={{
          padding: '48px 24px 24px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr',
            gap: '40px',
            marginBottom: '40px',
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '28px',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '12px',
              }}
            >
              D.R.S
            </div>
            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.7,
                color: '#9CA3AF',
                maxWidth: '300px',
              }}
            >
              UI/UX Designer passionate about creating intuitive, accessible, and visually engaging digital experiences.
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              {[
                { icon: FaLinkedinIn, href: contactInfo.linkedin, color: '#0A66C2' },
                { icon: Mail, href: `mailto:${contactInfo.email}`, color: '#3B82F6' },
                { icon: SiBehance, href: contactInfo.portfolio, color: '#1769FF' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, boxShadow: `0 0 16px ${social.color}30` }}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(17, 24, 39, 0.8)',
                    border: '1px solid rgba(59, 130, 246, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9CA3AF',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#F9FAFB',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: '14px',
                    color: '#9CA3AF',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#3B82F6')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#F9FAFB',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ fontSize: '14px', color: '#9CA3AF' }}>{contactInfo.email}</span>
              <span style={{ fontSize: '14px', color: '#9CA3AF' }}>{contactInfo.phone}</span>
              <span style={{ fontSize: '14px', color: '#9CA3AF' }}>{contactInfo.location}</span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  background: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: '#22C55E',
                  width: 'fit-content',
                  marginTop: '4px',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#22C55E',
                  }}
                />
                Available for hire
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ fontSize: '13px', color: '#6B7280', display: 'flex', alignItems: 'center', gap: '4px' }}>
            © {new Date().getFullYear()} Dharaneesh R.S. Made with{' '}
            <Heart size={12} style={{ color: '#EF4444', fill: '#EF4444' }} /> in Chennai
          </p>

          <motion.button
            whileHover={{ y: -3, boxShadow: '0 0 16px rgba(59, 130, 246, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'white',
            }}
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}

import { motion } from 'framer-motion'
import { ArrowUp, Heart, Mail, Phone, MapPin } from 'lucide-react'
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
        borderTop: '1px solid rgba(59, 130, 246, 0.12)',
        background: 'rgba(11, 17, 32, 0.85)',
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
              DHARANEESH.R.S
            </div>
            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.7,
                color: '#9CA3AF',
                maxWidth: '340px',
              }}
            >
              Creative and user-focused UI/UX Designer specializing in user research, wireframing, bilingual design systems, and Figma interactive prototypes.
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              {[
                { icon: FaLinkedinIn, href: contactInfo.linkedin, color: '#0A66C2', title: 'LinkedIn' },
                { icon: SiBehance, href: contactInfo.portfolio, color: '#0057FF', title: 'Behance Portfolio' },
                { icon: Mail, href: `mailto:${contactInfo.email}`, color: '#3B82F6', title: 'Email' },
                { icon: Phone, href: `tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`, color: '#06B6D4', title: 'Phone' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  title={social.title}
                  whileHover={{ y: -3, boxShadow: `0 0 16px ${social.color}35` }}
                  style={{
                    width: '42px',
                    height: '42px',
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
              Quick Navigation
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
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#38BDF8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
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
              Contact & Info
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href={`mailto:${contactInfo.email}`}
                style={{ fontSize: '13px', color: '#9CA3AF', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#38BDF8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
              >
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}
                style={{ fontSize: '13px', color: '#9CA3AF', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#38BDF8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
              >
                {contactInfo.phone}
              </a>
              <span style={{ fontSize: '13px', color: '#9CA3AF' }}>{contactInfo.location}</span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  background: 'rgba(34, 197, 94, 0.12)',
                  border: '1px solid rgba(34, 197, 94, 0.25)',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#4ADE80',
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
                Immediate Joiner
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
            © {new Date().getFullYear()} Dharaneesh R.S. UI/UX Designer Portfolio.
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

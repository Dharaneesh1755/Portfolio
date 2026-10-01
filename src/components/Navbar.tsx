import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/constants'
import { useActiveSection, useScrollProgress } from '../hooks/useAnimations'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const progress = useScrollProgress()
  const activeSection = useActiveSection(
    navLinks.map((l) => l.href.replace('#', ''))
  )

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #3B82F6, #06B6D4)',
          zIndex: 1001,
        }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'fixed',
          top: 3,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '0 24px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: scrolled ? '12px 28px' : '18px 28px',
            borderRadius: scrolled ? '16px' : '0',
            background: scrolled ? 'rgba(11, 17, 32, 0.85)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            border: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            marginTop: scrolled ? '8px' : '0',
          }}
        >
          {/* Logo */}
          <a href="#home" style={{ textDecoration: 'none' }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '24px',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.5px',
              }}
            >
              D.R.S
            </motion.div>
          </a>

          {/* Desktop Nav */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    position: 'relative',
                    padding: '8px 16px',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: isActive ? '#F9FAFB' : '#9CA3AF',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    fontFamily: 'var(--font-body)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#F9FAFB'
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#9CA3AF'
                  }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '16px',
                        right: '16px',
                        height: '2px',
                        background: 'linear-gradient(90deg, #3B82F6, #06B6D4)',
                        borderRadius: '1px',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}

            {/* Hire Me Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                marginLeft: '12px',
                padding: '10px 24px',
                background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                color: 'white',
                fontSize: '14px',
                fontWeight: 600,
                borderRadius: '9999px',
                textDecoration: 'none',
                fontFamily: 'var(--font-body)',
              }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-toggle"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#F9FAFB',
              cursor: 'pointer',
              padding: '8px',
            }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'rgba(11, 17, 32, 0.98)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setIsOpen(false)}
                style={{
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#F9FAFB',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 }}
              onClick={() => setIsOpen(false)}
              style={{
                marginTop: '16px',
                padding: '14px 40px',
                background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                color: 'white',
                fontSize: '16px',
                fontWeight: 600,
                borderRadius: '9999px',
                textDecoration: 'none',
              }}
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </>
  )
}

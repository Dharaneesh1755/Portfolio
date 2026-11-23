import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, ExternalLink, Sparkles } from 'lucide-react'
import { SiBehance } from 'react-icons/si'
import { certifications, achievements, contactInfo } from '../data/constants'
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations'

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="certifications" className="section" ref={ref}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="section-header"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          <span className="section-label">Certificates & Recognition</span>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Professional learning credentials and demonstrated design accomplishments
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginBottom: '64px',
          }}
          className="cert-grid"
        >
          {certifications.map((cert) => {
            const IconComp = cert.icon
            return (
              <motion.div
                key={cert.title}
                variants={staggerItem}
                whileHover={{ y: -6, boxShadow: `0 0 24px ${cert.color}25` }}
                style={{
                  padding: '28px',
                  background: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '16px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {/* Top color accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: cert.color,
                  }}
                />

                <div>
                  {/* Badge Icon */}
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '14px',
                      background: `${cert.color}15`,
                      border: `1px solid ${cert.color}35`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    <IconComp size={26} style={{ color: cert.color }} />
                  </div>

                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#F9FAFB',
                      marginBottom: '8px',
                      fontFamily: 'var(--font-heading)',
                      lineHeight: 1.4,
                    }}
                  >
                    {cert.title}
                  </h3>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '20px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <span style={{ fontSize: '13px', color: '#38BDF8', fontWeight: 500 }}>
                      {cert.provider}
                    </span>
                    <span style={{ fontSize: '13px', color: '#4B5563' }}>•</span>
                    <span style={{ fontSize: '12px', color: '#9CA3AF' }}>{cert.platform}</span>
                  </div>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    background: `${cert.color}10`,
                    border: `1px solid ${cert.color}30`,
                    borderRadius: '9999px',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: cert.color,
                    width: 'fit-content',
                  }}
                >
                  <Sparkles size={13} />
                  <span>Verified Credential</span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0.4}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '32px',
            }}
          >
            <Award size={24} style={{ color: '#F59E0B' }} />
            <h3 style={{ fontSize: '22px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
              Key Achievements & Recognitions
            </h3>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
            }}
            className="cert-grid"
          >
            {achievements.map((ach) => (
              <motion.div
                key={ach.title}
                variants={staggerItem}
                whileHover={{ y: -4, boxShadow: '0 0 20px rgba(245, 158, 11, 0.15)' }}
                style={{
                  padding: '24px',
                  background: 'rgba(17, 24, 39, 0.6)',
                  border: '1px solid rgba(245, 158, 11, 0.18)',
                  borderRadius: '16px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    background: 'rgba(245, 158, 11, 0.12)',
                    border: '1px solid rgba(245, 158, 11, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                  }}
                >
                  <ach.icon size={24} style={{ color: '#F59E0B' }} />
                </div>
                <h4
                  style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#F9FAFB',
                    marginBottom: '8px',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {ach.title}
                </h4>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#9CA3AF', marginBottom: '16px' }}>
                  {ach.description}
                </p>

                {ach.title.includes('Behance') && (
                  <a
                    href={contactInfo.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginTop: 'auto',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#60A5FA',
                      textDecoration: 'none',
                    }}
                  >
                    <SiBehance size={14} />
                    <span>View Case Study</span>
                    <ExternalLink size={11} />
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cert-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, GraduationCap, Globe, Calendar, Sparkles, ArrowRight } from 'lucide-react'
import { aboutData, designProcess } from '../data/constants'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../utils/animations'

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const highlightIcons = [MapPin, GraduationCap, GraduationCap, Calendar, Globe, ArrowRight]

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          className="section-header"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Designing <span className="gradient-text">Experiences</span> That Matter
          </h2>
          <p className="section-subtitle">
            Passionate about creating intuitive digital products through research-driven design
          </p>
        </motion.div>

        {/* About Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'start',
            marginBottom: '80px',
          }}
          className="about-grid"
        >
          {/* Left - Text */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.2}
          >
            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.8,
                color: '#D1D5DB',
                marginBottom: '20px',
              }}
            >
              {aboutData.intro}
            </p>
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.8,
                color: '#9CA3AF',
                marginBottom: '32px',
              }}
            >
              {aboutData.description}
            </p>

            {/* Quick Info Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
              }}
            >
              {aboutData.highlights.map((item, i) => {
                const IconComp = highlightIcons[i] || Sparkles
                return (
                  <div
                    key={item.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '10px 14px',
                      background: 'rgba(17, 24, 39, 0.5)',
                      border: '1px solid rgba(59, 130, 246, 0.1)',
                      borderRadius: '10px',
                    }}
                  >
                    <IconComp size={16} style={{ color: '#3B82F6', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '11px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: '#F9FAFB' }}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.3}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '20px',
              }}
            >
              {aboutData.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4, boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)' }}
                  style={{
                    padding: '28px 20px',
                    background: 'var(--color-bg-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '16px',
                    textAlign: 'center',
                    cursor: 'default',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div
                    style={{
                      fontSize: '36px',
                      fontWeight: 800,
                      fontFamily: 'var(--font-heading)',
                      background: `linear-gradient(135deg, ${i % 2 === 0 ? '#3B82F6, #06B6D4' : '#38BDF8, #818CF8'})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      marginBottom: '4px',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      color: '#9CA3AF',
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Design Philosophy Card */}
            <motion.div
              whileHover={{ y: -2 }}
              style={{
                marginTop: '20px',
                padding: '24px',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(6, 182, 212, 0.08))',
                border: '1px solid rgba(59, 130, 246, 0.15)',
                borderRadius: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <Sparkles size={18} style={{ color: '#3B82F6' }} />
                <span style={{ fontSize: '15px', fontWeight: 700, color: '#F9FAFB' }}>
                  Design Philosophy
                </span>
              </div>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#9CA3AF' }}>
                I believe great design is invisible — it should feel natural and intuitive. 
                Every interaction should serve a purpose, and every pixel should earn its place.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Design Process */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h3
            variants={staggerItem}
            style={{
              textAlign: 'center',
              fontSize: '22px',
              fontWeight: 700,
              marginBottom: '40px',
              fontFamily: 'var(--font-heading)',
            }}
          >
            My Design <span className="gradient-text">Process</span>
          </motion.h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
            }}
            className="process-grid"
          >
            {designProcess.map((step, i) => (
              <motion.div
                key={step.title}
                variants={staggerItem}
                whileHover={{ y: -6, boxShadow: '0 0 20px rgba(59, 130, 246, 0.15)' }}
                style={{
                  padding: '28px 20px',
                  background: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '16px',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Step Number */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '16px',
                    fontSize: '48px',
                    fontWeight: 900,
                    fontFamily: 'var(--font-heading)',
                    opacity: 0.04,
                    color: '#3B82F6',
                  }}
                >
                  {step.step}
                </div>

                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(59, 130, 246, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                  }}
                >
                  <step.icon size={22} style={{ color: '#3B82F6' }} />
                </div>

                <h4
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    marginBottom: '8px',
                    color: '#F9FAFB',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {step.title}
                </h4>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#9CA3AF' }}>
                  {step.description}
                </p>

                {/* Connector line */}
                {i < designProcess.length - 1 && (
                  <div
                    className="process-connector"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: '-12px',
                      width: '24px',
                      height: '2px',
                      background: 'linear-gradient(90deg, rgba(59,130,246,0.3), transparent)',
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .process-connector { display: none !important; }
        }
        @media (max-width: 480px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

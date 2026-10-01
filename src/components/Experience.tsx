import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, BookOpen, FlaskConical } from 'lucide-react'
import { experiences, timelineItems } from '../data/constants'
import { fadeInUp, fadeInLeft, staggerContainer, staggerItem } from '../utils/animations'

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section
      id="experience"
      className="section"
      ref={ref}
      style={{
        background: 'linear-gradient(180deg, var(--color-bg) 0%, rgba(17, 24, 39, 0.3) 50%, var(--color-bg) 100%)',
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
          <span className="section-label">Experience & Education</span>
          <h2 className="section-title">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            From learning foundations to hands-on design experience
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'start',
          }}
          className="exp-grid"
        >
          {/* Experience Card */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.2}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(59, 130, 246, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Briefcase size={20} style={{ color: '#3B82F6' }} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                Work Experience
              </h3>
            </div>

            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, boxShadow: '0 0 20px rgba(59, 130, 246, 0.15)' }}
                style={{
                  padding: '28px',
                  background: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '16px',
                  marginBottom: '16px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Top accent */}
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

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#F9FAFB', fontFamily: 'var(--font-heading)' }}>
                      {exp.role}
                    </h4>
                    <p style={{ fontSize: '14px', color: '#3B82F6', fontWeight: 500 }}>{exp.company}</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                    <span
                      style={{
                        padding: '4px 12px',
                        background: 'rgba(59, 130, 246, 0.1)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        borderRadius: '9999px',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: '#38BDF8',
                      }}
                    >
                      {exp.type}
                    </span>
                    <span style={{ fontSize: '12px', color: '#9CA3AF', fontFamily: 'var(--font-mono)' }}>
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <ul style={{ listStyle: 'none', marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {exp.responsibilities.map((r, j) => (
                    <li
                      key={j}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '14px',
                        lineHeight: 1.6,
                        color: '#9CA3AF',
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                          marginTop: '7px',
                          flexShrink: 0,
                        }}
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Learning Journey Card */}
            <motion.div
              whileHover={{ y: -4 }}
              style={{
                padding: '24px',
                background: 'rgba(59, 130, 246, 0.05)',
                border: '1px solid rgba(59, 130, 246, 0.12)',
                borderRadius: '16px',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <FlaskConical size={18} style={{ color: '#06B6D4' }} />
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#F9FAFB', fontFamily: 'var(--font-heading)' }}>
                  Continuous Learning
                </h4>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Figma Mastery', 'UX Research Methods', 'Design Systems', 'Accessibility', 'Usability Testing', 'Design Thinking'].map((item) => (
                  <span
                    key={item}
                    style={{
                      padding: '6px 14px',
                      background: 'rgba(6, 182, 212, 0.1)',
                      border: '1px solid rgba(6, 182, 212, 0.2)',
                      borderRadius: '9999px',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: '#06B6D4',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(6, 182, 212, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <BookOpen size={20} style={{ color: '#06B6D4' }} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                Timeline
              </h3>
            </div>

            <div style={{ position: 'relative', paddingLeft: '32px' }}>
              {/* Vertical line */}
              <div
                style={{
                  position: 'absolute',
                  left: '11px',
                  top: 0,
                  bottom: 0,
                  width: '2px',
                  background: 'linear-gradient(180deg, #3B82F6, #06B6D4, transparent)',
                }}
              />

              {timelineItems.map((item, i) => {
                const colors = {
                  internship: '#3B82F6',
                  education: '#06B6D4',
                  achievement: '#F59E0B',
                }
                const color = colors[item.type]

                return (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    style={{
                      marginBottom: '24px',
                      position: 'relative',
                    }}
                  >
                    {/* Dot */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-27px',
                        top: '4px',
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        background: color,
                        border: '3px solid var(--color-bg)',
                        boxShadow: `0 0 10px ${color}40`,
                      }}
                    />

                    <motion.div
                      whileHover={{ x: 4 }}
                      style={{
                        padding: '20px',
                        background: 'var(--color-bg-card)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '12px',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <span
                          style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            color,
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          {item.year}
                        </span>
                        <span
                          style={{
                            padding: '2px 10px',
                            background: `${color}15`,
                            border: `1px solid ${color}30`,
                            borderRadius: '9999px',
                            fontSize: '10px',
                            fontWeight: 600,
                            color,
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                          }}
                        >
                          {item.type}
                        </span>
                      </div>
                      <h4
                        style={{
                          fontSize: '15px',
                          fontWeight: 700,
                          color: '#F9FAFB',
                          marginBottom: '4px',
                          fontFamily: 'var(--font-heading)',
                        }}
                      >
                        {item.title}
                      </h4>
                      <p style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '6px' }}>
                        {item.subtitle}
                      </p>
                      <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#6B7280' }}>
                        {item.description}
                      </p>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

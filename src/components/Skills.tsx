import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skillCategories, type SkillCategory } from '../data/constants'
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations'

function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6, boxShadow: '0 0 24px rgba(59, 130, 246, 0.15)' }}
      style={{
        padding: '28px',
        background: 'var(--color-bg-card)',
        border: '1px solid var(--color-border)',
        borderRadius: '16px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
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
          opacity: 0.6,
        }}
      />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '10px',
            background: 'rgba(59, 130, 246, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <category.icon size={20} style={{ color: '#3B82F6' }} />
        </div>
        <h3
          style={{
            fontSize: '16px',
            fontWeight: 700,
            color: '#F9FAFB',
            fontFamily: 'var(--font-heading)',
          }}
        >
          {category.title}
        </h3>
      </div>

      {/* Skills */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        {category.skills.map((skill) => (
          <div key={skill.name}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '6px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {skill.icon && (
                  <skill.icon
                    size={14}
                    style={{ color: '#38BDF8', flexShrink: 0 }}
                  />
                )}
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#D1D5DB',
                  }}
                >
                  {skill.name}
                </span>
              </div>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#3B82F6',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {skill.level}%
              </span>
            </div>
            <div className="progress-container">
              <motion.div
                className="progress-bar"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', ...skillCategories.map((c) => c.title)]

  const filtered =
    activeFilter === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.title === activeFilter)

  return (
    <section
      id="skills"
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
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">
            Tools & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive toolkit for crafting exceptional user experiences from research to prototype
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0.1}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '40px',
          }}
        >
          {filters.map((f) => (
            <motion.button
              key={f}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                border: `1px solid ${
                  activeFilter === f ? 'rgba(59, 130, 246, 0.5)' : 'rgba(255,255,255,0.08)'
                }`,
                background:
                  activeFilter === f
                    ? 'rgba(59, 130, 246, 0.15)'
                    : 'rgba(17, 24, 39, 0.5)',
                color: activeFilter === f ? '#3B82F6' : '#9CA3AF',
                fontSize: '13px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-body)',
              }}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
            }}
            className="skills-grid"
          >
            {filtered.map((cat) => (
              <SkillCard key={cat.title} category={cat} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

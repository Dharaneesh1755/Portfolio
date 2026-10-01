import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, ChevronDown, ChevronUp, Layers } from 'lucide-react'
import { projects } from '../data/constants'
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations'

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6 }}
      style={{
        background: 'var(--color-bg-card)',
        border: '1px solid var(--color-border)',
        borderRadius: '20px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Project Header Gradient */}
      <div
        style={{
          height: '200px',
          background: project.gradient,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />

        <div style={{ position: 'relative', textAlign: 'center' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 12px',
            }}
          >
            <project.icon size={28} style={{ color: 'white' }} />
          </div>
          <span
            style={{
              fontSize: '12px',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.8)',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Case Study #{index + 1}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '28px' }}>
        <h3
          style={{
            fontSize: '22px',
            fontWeight: 700,
            marginBottom: '4px',
            fontFamily: 'var(--font-heading)',
            color: '#F9FAFB',
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: '14px',
            color: '#3B82F6',
            fontWeight: 500,
            marginBottom: '16px',
            fontFamily: 'var(--font-mono)',
          }}
        >
          {project.subtitle}
        </p>
        <p
          style={{
            fontSize: '14px',
            lineHeight: 1.7,
            color: '#9CA3AF',
            marginBottom: '20px',
          }}
        >
          {project.overview}
        </p>

        {/* Tools */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '20px',
          }}
        >
          {project.tools.map((tool) => (
            <span
              key={tool}
              style={{
                padding: '4px 14px',
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                borderRadius: '9999px',
                fontSize: '12px',
                fontWeight: 500,
                color: '#38BDF8',
              }}
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Expandable Details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: 'hidden' }}
            >
              <div
                style={{
                  borderTop: '1px solid var(--color-border)',
                  paddingTop: '20px',
                  marginBottom: '20px',
                }}
              >
                {/* Problem */}
                <div style={{ marginBottom: '16px' }}>
                  <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#F87171', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Problem
                  </h4>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#9CA3AF' }}>
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div style={{ marginBottom: '16px' }}>
                  <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#34D399', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Solution
                  </h4>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#9CA3AF' }}>
                    {project.solution}
                  </p>
                </div>

                {/* Outcome */}
                <div style={{ marginBottom: '16px' }}>
                  <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#3B82F6', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Outcome
                  </h4>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#9CA3AF' }}>
                    {project.outcome}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#F9FAFB', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Key Features
                  </h4>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '8px',
                    }}
                  >
                    {project.features.map((f) => (
                      <div
                        key={f}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '13px',
                          color: '#9CA3AF',
                        }}
                      >
                        <Layers size={12} style={{ color: '#3B82F6', flexShrink: 0 }} />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setExpanded(!expanded)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 20px',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '9999px',
              color: '#3B82F6',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
            }}
          >
            {expanded ? 'Show Less' : 'View Details'}
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </motion.button>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 20px',
              background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
              borderRadius: '9999px',
              color: 'white',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            <ExternalLink size={14} />
            View on Behance
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="section-header"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          <span className="section-label">Featured Work</span>
          <h2 className="section-title">
            UX Case <span className="gradient-text">Studies</span>
          </h2>
          <p className="section-subtitle">
            Research-driven design projects showcasing end-to-end problem solving
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '32px',
          }}
          className="projects-grid"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

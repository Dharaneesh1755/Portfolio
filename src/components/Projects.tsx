import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, ChevronDown, ChevronUp, Layers, CheckCircle2 } from 'lucide-react'
import { SiBehance } from 'react-icons/si'
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
          height: '210px',
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
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Top Badges */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            display: 'flex',
            gap: '8px',
          }}
        >
          <span
            style={{
              padding: '4px 12px',
              background: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(8px)',
              borderRadius: '9999px',
              fontSize: '11px',
              fontWeight: 600,
              color: 'white',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {project.screensCount}
          </span>
        </div>

        <div style={{ position: 'relative', textAlign: 'center' }}>
          <div
            style={{
              width: '68px',
              height: '68px',
              borderRadius: '18px',
              background: 'rgba(255,255,255,0.22)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 12px',
            }}
          >
            <project.icon size={32} style={{ color: 'white' }} />
          </div>
          <span
            style={{
              fontSize: '12px',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.9)',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Academic UX Case Study #{index + 1}
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
            color: '#38BDF8',
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
                  <h4
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#F87171',
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}
                  >
                    Problem Statement
                  </h4>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#9CA3AF' }}>
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div style={{ marginBottom: '16px' }}>
                  <h4
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#34D399',
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}
                  >
                    Design Solution
                  </h4>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#9CA3AF' }}>
                    {project.solution}
                  </p>
                </div>

                {/* Outcome */}
                <div style={{ marginBottom: '16px' }}>
                  <h4
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#38BDF8',
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}
                  >
                    Outcome & Validation
                  </h4>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#9CA3AF' }}>
                    {project.outcome}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#F9FAFB',
                      marginBottom: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}
                  >
                    Key Project Highlights
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
                          color: '#D1D5DB',
                        }}
                      >
                        <CheckCircle2 size={13} style={{ color: '#38BDF8', flexShrink: 0 }} />
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
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setExpanded(!expanded)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 20px',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '9999px',
              color: '#38BDF8',
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
            href={project.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}
            whileTap={{ scale: 0.96 }}
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
            <SiBehance size={14} />
            <span>View on Behance</span>
            <ExternalLink size={12} style={{ marginLeft: '2px' }} />
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
          <span className="section-label">Academic Projects</span>
          <h2 className="section-title">
            Featured UX <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="section-subtitle">
            User-centered design projects documenting research, wireframing, bilingual design systems, and Figma prototypes
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

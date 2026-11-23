import { motion } from 'framer-motion'
import { Download, Mail, ArrowDown, ExternalLink, Sparkles, MapPin } from 'lucide-react'
import { SiBehance } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'
import { heroData, toolIcons, contactInfo } from '../data/constants'
import { useTypingEffect } from '../hooks/useAnimations'
import { fadeInUp } from '../utils/animations'

export default function Hero() {
  const typedText = useTypingEffect(heroData.roles, 80, 50, 2200)

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 24px 80px',
      }}
    >
      {/* Animated Background Blobs */}
      <div className="gradient-blob blob-1" />
      <div className="gradient-blob blob-2" />
      <div
        className="gradient-blob"
        style={{
          width: '260px',
          height: '260px',
          background: '#0EA5E9',
          top: '20%',
          left: '12%',
          animation: 'blobFloat 14s ease-in-out infinite',
          opacity: 0.08,
        }}
      />

      {/* Grid Pattern Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.07) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />

      {/* Floating Tool Icons */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        {toolIcons.map((tool, i) => {
          const positions = [
            { top: '15%', left: '8%' },
            { top: '22%', right: '10%' },
            { top: '60%', left: '6%' },
            { top: '72%', right: '9%' },
            { top: '38%', left: '4%' },
            { top: '48%', right: '6%' },
            { top: '82%', left: '16%' },
            { top: '28%', right: '18%' },
          ]
          const pos = positions[i % positions.length]
          return (
            <motion.div
              key={tool.label}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 0.22,
                y: [0, -15, 0],
              }}
              transition={{
                opacity: { duration: 1, delay: i * 0.2 },
                y: {
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.3,
                },
              }}
              style={{
                position: 'absolute',
                ...pos,
                fontSize: '28px',
                color: tool.color,
              }}
            >
              <tool.icon />
            </motion.div>
          )
        })}
      </div>

      {/* Main Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: '860px',
        }}
      >
        {/* Badges Container */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '24px',
          }}
        >
          {/* Status Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 18px',
              background: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.25)',
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: 600,
              color: '#4ADE80',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#22C55E',
                boxShadow: '0 0 10px rgba(34, 197, 94, 0.8)',
              }}
            />
            Immediate Joiner • Open to Roles
          </div>

          {/* Location Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: 500,
              color: '#38BDF8',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <MapPin size={14} style={{ color: '#38BDF8' }} />
            Chennai, India • Willing to Relocate
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
          style={{
            fontSize: 'clamp(38px, 7vw, 76px)',
            fontWeight: 900,
            fontFamily: 'var(--font-heading)',
            lineHeight: 1.1,
            marginBottom: '16px',
            letterSpacing: '-1.5px',
          }}
        >
          <span style={{ color: '#F9FAFB' }}>{heroData.greeting} </span>
          <br />
          <span className="gradient-text">{heroData.name}</span>
        </motion.h1>

        {/* Typing Role */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          style={{
            fontSize: 'clamp(18px, 3.2vw, 30px)',
            fontWeight: 600,
            color: '#9CA3AF',
            marginBottom: '24px',
            fontFamily: 'var(--font-mono)',
            minHeight: '44px',
          }}
        >
          <span style={{ color: '#38BDF8' }}>&gt; </span>
          <span style={{ color: '#F9FAFB' }}>{typedText}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            style={{
              display: 'inline-block',
              width: '3px',
              height: '28px',
              background: 'linear-gradient(180deg, #3B82F6, #06B6D4)',
              marginLeft: '4px',
              verticalAlign: 'text-bottom',
              borderRadius: '2px',
            }}
          />
        </motion.div>

        {/* Summary */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.45}
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: '#9CA3AF',
            maxWidth: '680px',
            margin: '0 auto 36px',
          }}
        >
          {heroData.summary}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '14px',
            justifyContent: 'center',
            marginBottom: '28px',
          }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)' }}
            whileTap={{ scale: 0.96 }}
            className="btn-primary"
          >
            <span><Sparkles size={18} /></span>
            <span>View Case Studies</span>
          </motion.a>

          <motion.a
            href={contactInfo.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="btn-outline"
            style={{
              borderColor: 'rgba(23, 105, 255, 0.4)',
              color: '#60A5FA',
            }}
          >
            <SiBehance size={18} />
            <span>Behance Profile</span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="btn-outline"
          >
            <Mail size={18} />
            <span>Contact Me</span>
          </motion.a>
        </motion.div>

        {/* Social Quick Links */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.7}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            alignItems: 'center',
          }}
        >
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              color: '#9CA3AF',
              textDecoration: 'none',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(10, 102, 194, 0.1)',
              border: '1px solid rgba(10, 102, 194, 0.25)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#38BDF8'
              e.currentTarget.style.borderColor = 'rgba(10, 102, 194, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#9CA3AF'
              e.currentTarget.style.borderColor = 'rgba(10, 102, 194, 0.25)'
            }}
          >
            <FaLinkedinIn size={14} color="#0A66C2" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${contactInfo.email}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              color: '#9CA3AF',
              textDecoration: 'none',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.25)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#38BDF8'
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#9CA3AF'
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.25)'
            }}
          >
            <Mail size={14} color="#3B82F6" />
            <span>{contactInfo.email}</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            marginTop: '48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span
            style={{
              fontSize: '12px',
              color: '#9CA3AF',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} style={{ color: '#3B82F6' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

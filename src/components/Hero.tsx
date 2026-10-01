import { motion } from 'framer-motion'
import { Download, Mail, ArrowDown } from 'lucide-react'
import { heroData, toolIcons } from '../data/constants'
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
          width: '250px',
          height: '250px',
          background: '#818CF8',
          top: '20%',
          left: '15%',
          animation: 'blobFloat 14s ease-in-out infinite',
          opacity: 0.08,
        }}
      />

      {/* Grid Pattern Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.06) 1px, transparent 0)`,
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
            { top: '20%', right: '10%' },
            { top: '60%', left: '5%' },
            { top: '70%', right: '8%' },
            { top: '35%', left: '3%' },
            { top: '45%', right: '5%' },
            { top: '80%', left: '15%' },
            { top: '25%', right: '18%' },
          ]
          const pos = positions[i % positions.length]
          return (
            <motion.div
              key={tool.label}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 0.2,
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
          maxWidth: '800px',
        }}
      >
        {/* Greeting Badge */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            borderRadius: '9999px',
            marginBottom: '24px',
            fontSize: '14px',
            fontWeight: 500,
            color: '#38BDF8',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#22C55E',
              animation: 'pulse-glow 2s ease-in-out infinite',
              boxShadow: '0 0 8px rgba(34, 197, 94, 0.5)',
            }}
          />
          Open to Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
          style={{
            fontSize: 'clamp(36px, 7vw, 72px)',
            fontWeight: 900,
            fontFamily: 'var(--font-heading)',
            lineHeight: 1.1,
            marginBottom: '16px',
            letterSpacing: '-2px',
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
            fontSize: 'clamp(18px, 3vw, 28px)',
            fontWeight: 500,
            color: '#9CA3AF',
            marginBottom: '24px',
            fontFamily: 'var(--font-mono)',
            minHeight: '40px',
          }}
        >
          {'> '}
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
            maxWidth: '620px',
            margin: '0 auto 40px',
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
            gap: '16px',
            justifyContent: 'center',
          }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            <span><Mail size={18} /></span>
            <span>{heroData.cta.secondary}</span>
          </motion.a>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline"
          >
            <span><Download size={18} /></span>
            <span>{heroData.cta.primary}</span>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            marginTop: '60px',
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

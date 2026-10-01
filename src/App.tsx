import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 400)
          return 100
        }
        return prev + 2
      })
    }, 30)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#0B1120',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
      }}
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '48px',
          fontWeight: 900,
          background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        D.R.S
      </motion.div>

      {/* Progress Bar */}
      <div
        style={{
          width: '200px',
          height: '4px',
          background: 'rgba(255, 255, 255, 0.06)',
          borderRadius: '9999px',
          overflow: 'hidden',
        }}
      >
        <motion.div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #3B82F6, #06B6D4)',
            borderRadius: '9999px',
            width: `${progress}%`,
          }}
        />
      </div>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{
          fontSize: '13px',
          color: '#9CA3AF',
          fontFamily: 'Space Grotesk, sans-serif',
          letterSpacing: '2px',
          textTransform: 'uppercase',
        }}
      >
        Loading Portfolio...
      </motion.p>
    </motion.div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  )
}

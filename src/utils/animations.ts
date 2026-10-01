import type { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export const floatingAnimation = {
  y: [0, -12, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

export const pulseGlow = {
  boxShadow: [
    '0 0 20px rgba(59, 130, 246, 0.3)',
    '0 0 40px rgba(59, 130, 246, 0.5)',
    '0 0 20px rgba(59, 130, 246, 0.3)',
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

export const slideInFromLeft: Variants = {
  hidden: { x: '-100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    x: '-100%',
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
}

export const navItemHover = {
  scale: 1.05,
  transition: { duration: 0.2 },
}

export const cardHover = {
  y: -6,
  transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
}

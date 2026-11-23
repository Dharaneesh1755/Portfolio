import {
  SiFigma,
  SiSketch,
  SiMiro,
  SiHtml5,
  SiBehance,
} from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'
import {
  Pen,
  Layout,
  Users,
  Search,
  Lightbulb,
  Layers,
  Smartphone,
  Eye,
  Target,
  Palette,
  MonitorSmartphone,
  Workflow,
  ClipboardList,
  MessageSquare,
  BarChart3,
  Grid3X3,
  PenTool,
  Paintbrush,
  Image,
  Code,
  Zap,
  Award,
  Globe,
  MapPin,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react'
import type { IconType } from 'react-icons'

/* ========================================
   NAVIGATION
   ======================================== */
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

/* ========================================
   HERO DATA
   ======================================== */
export const heroData = {
  greeting: "Hello, I'm",
  name: 'DHARANEESH.R.S',
  roles: [
    'UI/UX Designer',
    'UX Researcher',
    'Figma & Adobe XD Prototyper',
    'Design System Creator',
    'Design Thinker',
  ],
  summary:
    'Creative and user-focused fresher with a strong foundation in user-centered design, wireframing, and prototyping. Skilled in conducting user research, building design systems, and creating high-fidelity interactive prototypes using Figma and Adobe XD. Passionate about solving real user problems through intuitive, accessible, and visually engaging interfaces.',
  cta: {
    primary: 'View Case Studies',
    secondary: 'Get in Touch',
    tertiary: 'Behance Portfolio',
  },
}

/* ========================================
   ABOUT DATA
   ======================================== */
export const aboutData = {
  intro:
    'I am a creative and user-focused UI/UX Designer and fresher with a strong foundation in user-centered design, wireframing, and prototyping. Currently pursuing my B.Sc. in Information Technology at Government Arts College, Coimbatore (Bharathiar University).',
  description:
    'Skilled in conducting user research with 15+ participants, developing design systems, and creating high-fidelity interactive prototypes using Figma and Adobe XD. Passionate about solving real user problems through intuitive, accessible, and visually engaging interfaces, and seeking a UI/UX Designer role to contribute to end-to-end product design.',
  highlights: [
    { label: 'Location', value: 'Chennai, Tamil Nadu, India' },
    { label: 'Degree', value: 'B.Sc. (Information Technology)' },
    { label: 'College', value: 'Govt Arts College, Coimbatore' },
    { label: 'University', value: 'Bharathiar University (2023-2026)' },
    { label: 'Availability', value: 'Immediate Joiner' },
    { label: 'Relocation', value: 'Willing to Relocate (Yes)' },
    { label: 'Languages', value: 'English, Tamil' },
    { label: 'Schooling', value: 'RC Sacred Heart HSS (2022-2023)' },
  ],
  stats: [
    { value: '15+', label: 'User Interviews & Surveys' },
    { value: '41+', label: 'Screens Designed (25+16)' },
    { value: '2', label: 'Behance Case Studies' },
    { value: '1st/Finalist', label: 'College UI/UX Finalist' },
  ],
}

/* ========================================
   SKILLS DATA
   ======================================== */
export interface Skill {
  name: string
  level: number
  icon: IconType | LucideIcon | null
}

export interface SkillCategory {
  title: string
  icon: LucideIcon
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Design Tools',
    icon: Palette,
    skills: [
      { name: 'Figma', level: 95, icon: SiFigma },
      { name: 'Adobe XD', level: 88, icon: PenTool },
      { name: 'Adobe Photoshop', level: 78, icon: Image },
      { name: 'Adobe Illustrator', level: 75, icon: Paintbrush },
      { name: 'Sketch (basic)', level: 60, icon: SiSketch },
    ],
  },
  {
    title: 'Prototyping & Wireframing',
    icon: Pen,
    skills: [
      { name: 'Low & High-Fidelity Wireframes', level: 92, icon: Layout },
      { name: 'Interactive Prototypes', level: 94, icon: Smartphone },
      { name: 'Design Systems', level: 88, icon: Layers },
    ],
  },
  {
    title: 'UX Research',
    icon: Search,
    skills: [
      { name: 'User Interviews & Surveys', level: 90, icon: Users },
      { name: 'User Personas', level: 88, icon: Users },
      { name: 'User Journey Mapping', level: 86, icon: Workflow },
      { name: 'Usability Testing', level: 90, icon: Eye },
      { name: 'Card Sorting', level: 78, icon: Grid3X3 },
    ],
  },
  {
    title: 'Concepts & Principles',
    icon: Lightbulb,
    skills: [
      { name: 'Design Thinking', level: 92, icon: Lightbulb },
      { name: 'Information Architecture', level: 86, icon: Layout },
      { name: 'Accessibility (WCAG basics)', level: 82, icon: CheckCircle2 },
      { name: 'Responsive Design', level: 90, icon: MonitorSmartphone },
    ],
  },
  {
    title: 'Other Tools & Code',
    icon: Layers,
    skills: [
      { name: 'Figjam / Miro', level: 85, icon: SiMiro },
      { name: 'Zeplin', level: 75, icon: Layers },
      { name: 'HTML / CSS (basic)', level: 68, icon: Code },
    ],
  },
]

/* ========================================
   TOOLS ICONS (Floating in Hero)
   ======================================== */
export const toolIcons = [
  { icon: SiFigma, label: 'Figma', color: '#F24E1E' },
  { icon: PenTool, label: 'Adobe XD', color: '#FF61F6' },
  { icon: Image, label: 'Photoshop', color: '#31A8FF' },
  { icon: Paintbrush, label: 'Illustrator', color: '#FF9A00' },
  { icon: SiMiro, label: 'Miro / Figjam', color: '#FFD02F' },
  { icon: SiSketch, label: 'Sketch', color: '#F7B500' },
  { icon: SiHtml5, label: 'HTML/CSS', color: '#E34F26' },
  { icon: SiBehance, label: 'Behance', color: '#0057FF' },
]

/* ========================================
   PROJECTS DATA
   ======================================== */
export interface Project {
  id: number
  title: string
  subtitle: string
  overview: string
  problem: string
  solution: string
  outcome: string
  tools: string[]
  features: string[]
  gradient: string
  icon: LucideIcon
  behanceUrl: string
  screensCount: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Expense Tracker App Design',
    subtitle: 'End-to-End UX Case Study (25 Screens)',
    screensCount: '25 Screens',
    overview:
      'A comprehensive UX case study focused on identifying user pain points in daily personal expense management and designing an intuitive, accessible mobile app with interactive prototypes.',
    problem:
      'Users experienced high friction and abandonment in typical expense apps due to confusing navigation, tedious transaction input, and lack of clear visual summaries of their spending habits.',
    solution:
      'Conducted user interviews and surveys with 15+ participants to discover core pain points. Built user personas, journey maps, and structured information architecture before designing low-fidelity wireframes and 25 high-fidelity interactive screens in Figma.',
    outcome:
      'Conducted usability testing and iteratively refined design decisions based on direct user feedback. Fully published as a comprehensive 25-screen case study on Behance.',
    tools: ['Figma', 'Figjam', 'Google Forms', 'UX Research', 'Usability Testing'],
    features: [
      '15+ User Interviews & Surveys',
      'User Personas & Journey Maps',
      'Information Architecture & Flows',
      'Low & High-Fidelity Wireframes',
      '25 Interactive Figma Screens',
      'Usability Testing Iterations',
    ],
    gradient: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
    icon: BarChart3,
    behanceUrl: 'https://behance.net/dharaneeshrs',
  },
  {
    id: 2,
    title: 'Electricity Utility App Redesign',
    subtitle: 'Bilingual (English/Tamil) UX Redesign (16 Screens)',
    screensCount: '16 Screens',
    overview:
      'A strategic mobile app redesign for an electricity utility service engineered to make bill payments, power usage tracking, outage alerts, and complaint registrations seamless and dependable.',
    problem:
      'Electricity consumers frequently faced confusion with bill payment verification, lacked clarity on real-time outage alerts, and suffered from poor accessibility without regional language support.',
    solution:
      'Redesigned the entire payment and service flow from the ground up. Created a complete bilingual (English/Tamil) design system with standardized, accessible UI components across 16 screens, along with clickable interactive prototypes.',
    outcome:
      'Streamlined bill payment, outage notifications, and grievance tracking into an intuitive flow. Documented the research methodology, design decisions, and finalized screens in a published Behance case study.',
    tools: ['Figma', 'Bilingual UI (English/Tamil)', 'Design System', 'Prototyping', 'WCAG Basics'],
    features: [
      'Bilingual Support (English & Tamil)',
      '16-Screen Reusable Design System',
      'Instant Bill Payment Flow',
      'Real-time Outage Alerts & Tracking',
      'Grievance / Complaint Workflow',
      'Published Case Study on Behance',
    ],
    gradient: 'linear-gradient(135deg, #0EA5E9, #6366F1)',
    icon: Zap,
    behanceUrl: 'https://behance.net/dharaneeshrs',
  },
]

/* ========================================
   EXPERIENCE / PRACTICAL DESIGN DATA
   ======================================== */
export interface Experience {
  role: string
  company: string
  duration: string
  type: string
  responsibilities: string[]
}

export const experiences: Experience[] = [
  {
    role: 'UI/UX Designer (Academic & Case Study Projects)',
    company: 'Portfolio & Behance Publications',
    duration: '2023 - Present',
    type: 'Academic & Practical',
    responsibilities: [
      'Conducted qualitative user interviews and quantitative surveys with 15+ participants to pinpoint user friction in digital applications',
      'Created detailed user personas, empathy maps, user journey maps, and information architecture diagrams to drive design decisions',
      'Architected a 16-screen bilingual (English/Tamil) design system with reusable components, typography scales, and WCAG-compliant color contrasts',
      'Produced low-fidelity wireframes and high-fidelity interactive prototypes in Figma with micro-interactions and realistic user flows',
      'Executed moderated usability testing sessions, synthesized feedback, and iterated prototypes to optimize user task completion',
      'Published 2 comprehensive end-to-end case studies (25-screen and 16-screen) on Behance documenting research, wireframes, and design rationale',
    ],
  },
]

/* ========================================
   TIMELINE DATA (Education & Milestones)
   ======================================== */
export interface TimelineItem {
  year: string
  title: string
  subtitle: string
  description: string
  type: 'education' | 'achievement' | 'project'
  icon: LucideIcon
}

export const timelineItems: TimelineItem[] = [
  {
    year: '2023 - 2026',
    title: 'Bachelor of Science (Information Technology)',
    subtitle: 'Government Arts College, Coimbatore | Bharathiar University',
    description:
      'Pursuing undergraduate IT degree with deep focus on human-computer interaction, web technologies, and user experience methodologies.',
    type: 'education',
    icon: ClipboardList,
  },
  {
    year: '2024',
    title: 'Finalist - College-Level UI/UX Design Competition',
    subtitle: 'College Design Contest',
    description:
      'Recognized as a finalist for rapid prototyping, user empathy, and effective UI design in a competitive design challenge.',
    type: 'achievement',
    icon: Award,
  },
  {
    year: '2023 - 2024',
    title: 'Published Behance UX Case Studies',
    subtitle: 'Expense Tracker (25 Screens) & Electricity Utility Redesign (16 Screens)',
    description:
      'Conducted end-to-end user research, information architecture, wireframing, bilingual design systems, and published comprehensive case studies.',
    type: 'project',
    icon: Workflow,
  },
  {
    year: '2022 - 2023',
    title: 'Higher Secondary Certificate (12th Grade)',
    subtitle: 'RC Sacred Heart Higher Secondary School',
    description: 'Completed higher secondary school education with strong academic foundation.',
    type: 'education',
    icon: ClipboardList,
  },
]

/* ========================================
   CERTIFICATIONS DATA
   ======================================== */
export interface Certification {
  title: string
  provider: string
  platform: string
  icon: IconType | LucideIcon
  color: string
}

export const certifications: Certification[] = [
  {
    title: 'Figma UI/UX Designing Tool Certificate',
    provider: 'Lementro Global Learning Platform',
    platform: 'Certification Course',
    icon: SiFigma,
    color: '#F24E1E',
  },
  {
    title: 'Design Thinking for Beginners',
    provider: 'Simplilearn SkillUp',
    platform: 'SkillUp Certification',
    icon: Lightbulb,
    color: '#06B6D4',
  },
  {
    title: 'UI/UX Webinar',
    provider: 'Brand Monk Academy',
    platform: 'Professional Webinar',
    icon: MonitorSmartphone,
    color: '#3B82F6',
  },
]

/* ========================================
   ACHIEVEMENTS
   ======================================== */
export const achievements = [
  {
    title: 'Published 25-Screen Expense Tracker Case Study',
    description:
      'Researched with 15+ participants, designed personas, low/high-fi wireframes, and published an interactive 25-screen case study on Behance.',
    icon: Eye,
  },
  {
    title: 'Published 16-Screen Electricity App Redesign',
    description:
      'Engineered a complete bilingual (English/Tamil) design system with consistent reusable components and published on Behance.',
    icon: Zap,
  },
  {
    title: 'Finalist, College-Level UI/UX Design Competition',
    description:
      'Secured finalist position at college-level UI/UX competition demonstrating rapid wireframing and human-centric design thinking.',
    icon: Award,
  },
]

/* ========================================
   CONTACT DATA
   ======================================== */
export const contactInfo = {
  name: 'Dharaneesh R.S',
  role: 'UI/UX Designer',
  email: 'dharaneeshsuhas1755@gmail.com',
  phone: '+91-8122953599',
  location: 'Chennai, Tamil Nadu, India',
  linkedin: 'https://linkedin.com/in/dharaneesh-rs-059479357',
  portfolio: 'https://behance.net/dharaneeshrs',
  languages: 'English, Tamil',
  relocation: 'Willing to Relocate (Yes)',
  availability: 'Immediate Joiner',
}

/* ========================================
   PROCESS STEPS
   ======================================== */
export const designProcess = [
  {
    step: '01',
    title: 'Research',
    description:
      'User interviews (15+ participants), surveys, pain-point analysis, and persona mapping',
    icon: Search,
  },
  {
    step: '02',
    title: 'Define & Plan',
    description:
      'User journey mapping, information architecture, card sorting, and accessibility benchmarks',
    icon: Target,
  },
  {
    step: '03',
    title: 'Design & Prototype',
    description:
      'Low & high-fidelity wireframing, bilingual design systems, and interactive Figma prototyping',
    icon: Pen,
  },
  {
    step: '04',
    title: 'Test & Validate',
    description:
      'Usability testing, feedback evaluation, iterative refinement, and Behance case study documentation',
    icon: MessageSquare,
  },
]

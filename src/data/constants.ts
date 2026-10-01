import {
  SiGooglechrome,
  SiFigma,
  SiSketch,
  SiMiro,
  SiNotion,
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
  Share2,
  Code,
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
  name: 'DHARANEESH R.S',
  roles: [
    'UI/UX Designer',
    'Product Designer',
    'UX Researcher',
    'Design Thinker',
    'Prototyping Specialist',
  ],
  summary:
    'Creative and user-focused designer with a strong foundation in user-centered design, wireframing, and prototyping. Passionate about solving real user problems through intuitive, accessible, and visually engaging interfaces.',
  cta: {
    primary: 'Download Resume',
    secondary: 'Contact Me',
    tertiary: 'View Projects',
  },
}

/* ========================================
   ABOUT DATA
   ======================================== */
export const aboutData = {
  intro:
    'I am a creative and user-focused UI/UX Designer with a strong foundation in user-centered design principles. Currently pursuing my B.Sc. in Information Technology, I am passionate about crafting digital experiences that are not only beautiful but also functional and accessible.',
  description:
    'My approach combines rigorous user research with creative design thinking to deliver interfaces that solve real problems. From conducting user interviews with 20+ participants to building reusable design systems across 15+ screens, I bring both analytical precision and creative flair to every project.',
  highlights: [
    { label: 'Location', value: 'Chennai, Tamil Nadu' },
    { label: 'Education', value: 'B.Sc. Information Technology' },
    { label: 'University', value: 'Bharathiar University' },
    { label: 'Availability', value: 'Immediate Joiner' },
    { label: 'Languages', value: 'English, Tamil' },
    { label: 'Willing to Relocate', value: 'Yes' },
  ],
  stats: [
    { value: '20+', label: 'User Interviews' },
    { value: '15+', label: 'Screens Designed' },
    { value: '35%', label: 'Task Completion Boost' },
    { value: '1000+', label: 'Case Study Views' },
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
      { name: 'Figma', level: 92, icon: SiFigma },
      { name: 'Adobe XD', level: 85, icon: PenTool },
      { name: 'Sketch', level: 55, icon: SiSketch },
      { name: 'Photoshop', level: 75, icon: Image },
      { name: 'Illustrator', level: 70, icon: Paintbrush },
    ],
  },
  {
    title: 'Prototyping & Wireframing',
    icon: Pen,
    skills: [
      { name: 'Low-Fi Wireframes', level: 90, icon: null },
      { name: 'High-Fi Wireframes', level: 88, icon: null },
      { name: 'Interactive Prototypes', level: 90, icon: null },
      { name: 'Design Systems', level: 82, icon: null },
    ],
  },
  {
    title: 'UX Research',
    icon: Search,
    skills: [
      { name: 'User Interviews', level: 85, icon: null },
      { name: 'Surveys & Personas', level: 80, icon: null },
      { name: 'Journey Mapping', level: 82, icon: null },
      { name: 'Usability Testing', level: 85, icon: null },
      { name: 'Card Sorting', level: 70, icon: null },
    ],
  },
  {
    title: 'Design Concepts',
    icon: Lightbulb,
    skills: [
      { name: 'Design Thinking', level: 85, icon: null },
      { name: 'Information Architecture', level: 78, icon: null },
      { name: 'Accessibility (WCAG)', level: 72, icon: null },
      { name: 'Responsive Design', level: 85, icon: null },
    ],
  },
  {
    title: 'Collaboration Tools',
    icon: Layers,
    skills: [
      { name: 'Miro', level: 80, icon: SiMiro },
      { name: 'InVision', level: 70, icon: Share2 },
      { name: 'Notion', level: 75, icon: SiNotion },
      { name: 'Zeplin', level: 65, icon: null },
    ],
  },
  {
    title: 'Development',
    icon: MonitorSmartphone,
    skills: [
      { name: 'HTML', level: 60, icon: SiHtml5 },
      { name: 'CSS', level: 58, icon: Code },
    ],
  },
]

/* ========================================
   TOOLS ICONS (Floating)
   ======================================== */
export const toolIcons = [
  { icon: SiFigma, label: 'Figma', color: '#F24E1E' },
  { icon: PenTool, label: 'Adobe XD', color: '#FF61F6' },
  { icon: Image, label: 'Photoshop', color: '#31A8FF' },
  { icon: Paintbrush, label: 'Illustrator', color: '#FF9A00' },
  { icon: SiMiro, label: 'Miro', color: '#FFD02F' },
  { icon: SiSketch, label: 'Sketch', color: '#F7B500' },
  { icon: SiNotion, label: 'Notion', color: '#FFFFFF' },
  { icon: SiHtml5, label: 'HTML/CSS', color: '#E34F26' },
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
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Expense Tracker App',
    subtitle: 'UX Case Study & Redesign',
    overview:
      'A comprehensive UX case study focused on redesigning an expense tracker application to improve usability and user satisfaction through research-driven design decisions.',
    problem:
      'Users struggled with complex navigation and unintuitive expense categorization, leading to low task completion rates and app abandonment.',
    solution:
      'Conducted extensive user research with 20+ participants, created personas and journey maps, then redesigned the entire experience with simplified information architecture and intuitive interaction patterns.',
    outcome:
      'Improved task completion rate by 35% through iterative usability testing and design refinements, validated by multiple rounds of user feedback.',
    tools: ['Figma', 'Miro', 'Maze'],
    features: [
      'User Personas & Journey Maps',
      'Information Architecture',
      'Low & High-Fidelity Wireframes',
      'Interactive Prototypes',
      'Usability Testing',
      'Iterative Design',
    ],
    gradient: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
    icon: BarChart3,
  },
  {
    id: 2,
    title: 'E-Commerce Website',
    subtitle: 'Checkout Flow UX Redesign',
    overview:
      'A detailed UX case study aimed at reducing cart abandonment by redesigning the checkout experience of an e-commerce platform with a user-centered approach.',
    problem:
      'High cart abandonment rates due to a confusing, multi-step checkout process with poor error handling and lack of trust signals.',
    solution:
      'Built a comprehensive reusable design system with consistent components across 15+ screens. Streamlined the checkout flow based on moderated usability testing insights.',
    outcome:
      'Created a fully documented case study published on Behance. The redesigned checkout flow significantly reduced friction points identified through user testing.',
    tools: ['Adobe XD', 'Figma', 'Google Forms'],
    features: [
      'Design System',
      '15+ Screen Components',
      'Clickable Prototypes',
      'Moderated Usability Tests',
      'Checkout Flow Optimization',
      'Published Case Study',
    ],
    gradient: 'linear-gradient(135deg, #38BDF8, #818CF8)',
    icon: Grid3X3,
  },
]

/* ========================================
   EXPERIENCE DATA
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
    role: 'UI/UX Design Intern',
    company: 'Company Name, City',
    duration: 'Jun 2025 - Aug 2025',
    type: 'Internship',
    responsibilities: [
      'Collaborated with product managers and developers to design user flows for a new feature module',
      'Created wireframes and high-fidelity mockups in Figma, maintaining consistency with the existing design system',
      'Conducted usability testing with 10+ users and incorporated feedback into final designs',
    ],
  },
]

/* ========================================
   TIMELINE DATA
   ======================================== */
export interface TimelineItem {
  year: string
  title: string
  subtitle: string
  description: string
  type: 'education' | 'internship' | 'achievement'
  icon: LucideIcon
}

export const timelineItems: TimelineItem[] = [
  {
    year: '2025',
    title: 'UI/UX Design Intern',
    subtitle: 'Jun 2025 – Aug 2025',
    description:
      'Designed user flows, wireframes, and high-fidelity mockups. Conducted usability testing with 10+ users.',
    type: 'internship',
    icon: Workflow,
  },
  {
    year: '2023 – 2026',
    title: 'B.Sc. Information Technology',
    subtitle: 'Government Arts College, Coimbatore | Bharathiar University',
    description: 'Pursuing undergraduate degree with focus on IT fundamentals and design.',
    type: 'education',
    icon: ClipboardList,
  },
  {
    year: '2022 – 2023',
    title: 'Higher Secondary Certificate',
    subtitle: 'RC Sacred Heart Higher Secondary School',
    description: 'Completed 12th Grade with 74.1% score.',
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
    title: 'Google UX Design Professional Certificate',
    provider: 'Google',
    platform: 'Coursera',
    icon: SiGooglechrome,
    color: '#4285F4',
  },
  {
    title: 'UI/UX Design Specialization',
    provider: 'Certified',
    platform: 'Udemy / Coursera',
    icon: Layout,
    color: '#38BDF8',
  },
  {
    title: 'Figma for UI/UX Design',
    provider: 'Design+Code',
    platform: 'Udemy',
    icon: SiFigma,
    color: '#F24E1E',
  },
]

/* ========================================
   ACHIEVEMENTS
   ======================================== */
export const achievements = [
  {
    title: 'Published UX Case Studies',
    description: '2+ case studies on Behance/Medium with 1,000+ combined views',
    icon: Eye,
  },
  {
    title: 'Design Hackathon',
    description: 'Winner/Finalist at College-Level UI/UX Design Hackathon',
    icon: Target,
  },
  {
    title: 'Design Community',
    description: 'Active member of College Design/HCI Club',
    icon: Users,
  },
]

/* ========================================
   CONTACT DATA
   ======================================== */
export const contactInfo = {
  email: 'dharaneeshsuhas1755@gmail.com',
  phone: '+91-8122953599',
  location: 'Chennai, Tamil Nadu, India',
  linkedin: 'https://linkedin.com/in/dharaneesh-rs-059479357/',
  portfolio: 'https://behance.net/yourusername',
}

/* ========================================
   PROCESS STEPS
   ======================================== */
export const designProcess = [
  {
    step: '01',
    title: 'Research',
    description: 'User interviews, surveys, competitive analysis, and persona creation',
    icon: Search,
  },
  {
    step: '02',
    title: 'Define',
    description: 'User flows, information architecture, and journey mapping',
    icon: Target,
  },
  {
    step: '03',
    title: 'Design',
    description: 'Wireframes, high-fidelity mockups, and interactive prototypes',
    icon: Pen,
  },
  {
    step: '04',
    title: 'Test',
    description: 'Usability testing, iteration, and design validation',
    icon: MessageSquare,
  },
]

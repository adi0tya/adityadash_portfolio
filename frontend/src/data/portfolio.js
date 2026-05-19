// ── Single source of truth — synced from Adi-cv.pdf ──────────────────────

export const personal = {
  name: 'Aditya Dash',
  role: 'Full-Stack Developer',
  tagline: 'Building real-world web applications with clean code, modern interfaces, and scalable backend systems.',
  location: 'Bhubaneswar, India',
  email: 'contact.adityadash@gmail.com',
  phone: '+91 8260540773',
  github: 'https://github.com/adi0tya',
  linkedin: 'https://www.linkedin.com/in/aditya-dash-421748311',
}

export const about = {
  summary: `BCA second-year student passionate about full-stack web development. Experienced in building responsive web applications and developing backend systems using modern technologies. Interested in creating collaborative platforms and scalable web solutions while continuously improving programming and problem-solving skills.`,
  focus: [
    'Full-Stack Web Development',
    'Responsive UI Engineering',
    'Backend Systems & REST APIs',
    'Collaborative Platform Architecture',
    'Scalable Web Applications',
  ],
  strengths: ['Problem Solving', 'Fast Learner', 'Time Management', 'Leadership'],
}

export const education = {
  degree: 'Bachelor of Computer Applications (BCA)',
  institution: 'Birla Global University',
  location: 'Bhubaneswar',
  expected: '2024–2027',
  year: '2nd Year',
  coursework: ['Data Structures', 'Database Management Systems', 'Web Development'],
}

export const skills = {
  Frontend:  ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  Backend:   ['Node.js', 'Express.js'],
  Databases: ['MongoDB', 'MySQL'],
  Languages: ['Python', 'C'],
  Tools:     ['Git', 'GitHub', 'VS Code', 'REST APIs'],
}

export const projects = [
  {
    id: 'campussphere',
    name: 'CampusSphere ERP',
    tagline: 'Production-Level Campus Management System',
    description:
      'A production-level campus management ERP system with role-based dashboards for Admin, Faculty, Student, and Accountant. It includes authentication, attendance management, student and faculty management, fee management, notices, assignments, timetable scheduling, reports, analytics dashboards, and responsive enterprise UI.',
    problem:
      'Educational institutions needed a comprehensive, scalable ERP solution to manage all campus operations from a single platform with role-based access control.',
    features: [
      'Role-based dashboards (Admin, Faculty, Student, Accountant)',
      'JWT-based authentication & authorization',
      'Attendance management system',
      'Student & faculty management',
      'Fee management & payment tracking',
      'Notice board & announcements',
      'Assignment submission & grading',
      'Timetable scheduling',
      'Reports & analytics dashboards',
      'Responsive enterprise UI',
    ],
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT Authentication', 'Tailwind CSS'],
    github: 'https://github.com/adi0tya/CAMPUSSPHERE',
    live: 'https://campussphere-psi.vercel.app/',
    highlight: true,
  },
  {
    id: 'syncspace',
    name: 'SyncSpace',
    tagline: 'AI-Powered Real-Time Collaborative Workspace',
    description:
      'A production-grade, collaborative real-time workspace integrated with cutting-edge Gemini AI study copilots, ultra-low-latency Redis-cached chat history, Socket.io messaging, interactive Razorpay payment gateways for premium tiers, and full WebRTC voice/video room integrations.',
    problem:
      'Students and teams lacked a high-performance, single-workspace ecosystem that combines intelligent AI assistants, secure instant transactions, real-time collaboration, and persistent communication logs.',
    features: [
      'Gemini AI Study Copilot (AI Rate Limited planner & smart summary)',
      'High-performance Redis caching (JSON cache, persistent chat logs)',
      'Integrated Razorpay transactional gateway with secure payment tracking',
      'Socket.io real-time study rooms with active member lists',
      'WebRTC voice and video calls for seamless remote face-to-face syncs',
      'Secure file sharing system with persistent metadata',
      'Interactive study leaderboards and custom productivity logs',
    ],
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redis Cache', 'Socket.io', 'Razorpay', 'Gemini AI', 'Tailwind CSS'],
    github: 'https://github.com/adi0tya/Syncspace',
    live: 'https://syncspace-lake.vercel.app',
    highlight: true,
  },
]

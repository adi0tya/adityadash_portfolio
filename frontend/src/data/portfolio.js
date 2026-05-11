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
    live: 'https://campussphere-orcin.vercel.app',
    highlight: true,
  },
  {
    id: 'syncspace',
    name: 'SyncSpace',
    tagline: 'Collaborative Real-Time Study Platform',
    description:
      'A collaborative real-time study platform featuring rooms, chat, voice/video calls, file sharing, friend system, live messaging, and productivity tools for students. Built to enable seamless remote collaboration with integrated communication and productivity features.',
    problem:
      'Students lacked a unified platform for remote collaboration that combined communication, file sharing, and productivity tools without switching between multiple apps.',
    features: [
      'Real-time study rooms',
      'Live group chat & messaging',
      'Voice & video calls',
      'File sharing system',
      'Friend system & connections',
      'Pomodoro focus timer',
      'Study leaderboard',
      'User authentication & profiles',
    ],
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'REST APIs'],
    github: 'https://github.com/adi0tya/Syncspace',
    live: 'https://syncspace-lake.vercel.app',
    highlight: true,
  },
]

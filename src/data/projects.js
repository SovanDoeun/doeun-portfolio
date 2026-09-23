// ─────────────────────────────────────────────────────────────
// All project info lives here. Add screenshots to /public/images/projects/
// and reference them below. Leave github/demo as '' to hide those buttons
// until you have real links — never invent URLs.
// ─────────────────────────────────────────────────────────────

export const featuredProject = {
  id: 'school-management-system',
  name: 'School Management System',
  emoji: '🏫',
  short:
    'A modern school management system designed to help schools manage students, teachers, attendance, grades, classes, timetables, homework, examinations, notifications, and reports.',
  overview:
    'A full-stack mobile school management platform built with Flutter and a Node.js/Express/MySQL backend, covering the full daily workflow of a school across four distinct roles.',
  problem:
    'Schools often coordinate attendance, grades, timetables, and communication across disconnected paper records or spreadsheets, making it hard for administrators, teachers, students, and parents to stay in sync.',
  solution:
    'A single mobile system with role-based access, so each user — administrator, teacher, student, or parent — sees the tools and data relevant to them, backed by a shared REST API and MySQL database.',
  roles: ['Administrator', 'Teacher', 'Student', 'Parent'],
  features: [
    'Authentication & role-based access',
    'Student management',
    'Teacher management',
    'Class management',
    'Subject management',
    'Attendance (manual and QR-based)',
    'Grade management',
    'Timetable',
    'Homework',
    'Examination results',
    'Notifications',
    'Reports & analytics',
    'Role-specific dashboards',
  ],
  technologies: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'MySQL', 'REST API', 'JWT', 'Firebase'],
  challenges:
    'Coordinating a self-registration flow that correctly links parent and child accounts by phone number, and keeping the mobile client and API in sync as features and method signatures evolved.',
  results:
    'A working end-to-end system with role-based dashboards for all four user types, live attendance tracking, and a self-service registration flow — developed as an ongoing university project.',
  screenshots: ['/images/projects/formsignin.png'], // e.g. ['/images/projects/sms-dashboard.jpg', ...]
  github: '',
  demo: '',
  demoVideo: '',
}

export const projects = [
  {
    id: 'school-management-system',
    name: 'School Management System',
    short: 'Full-stack mobile system for managing students, teachers, attendance, grades, and more.',
    technologies: ['Flutter', 'Node.js', 'MySQL'],
    image: '/images/projects/formlogin.png',
    github: '',
    demo: '',
    featured: true,
  },
  {
    id: 'student-management-system',
    name: 'Student Management System',
    short: 'A system for tracking student records, enrollment, and academic information.',
    technologies: ['—'],
    image: '/images/projects/studentDashboard.png',
    github: '',
    demo: '',
  },
  {
    id: 'expense-tracker-app',
    name: 'Expense Tracker App',
    short: 'A mobile app for logging and reviewing personal expenses.',
    technologies: ['—'],
    image: '',
    github: '',
    demo: '',
  },
  {
    id: 'employee-management-system',
    name: 'Employee Management System',
    short: 'A system for managing employee records and related administrative tasks.',
    technologies: ['—'],
    image: '',
    github: '',
    demo: '',
  },
  {
    id: 'supermarket-billing-system',
    name: 'Supermarket Billing System',
    short: 'A point-of-sale style billing system for retail transactions.',
    technologies: ['—'],
    image: '',
    github: '',
    demo: '',
  },
  {
    id: 'computer-hardware-expert-system',
    name: 'Computer Hardware Expert System',
    short: 'A rule-based expert system for diagnosing computer hardware issues.',
    technologies: ['—'],
    image: '',
    github: '',
    demo: '',
  },
]

// Fill in real details for these as you document each project —
// currently only School Management System has full detail content above.

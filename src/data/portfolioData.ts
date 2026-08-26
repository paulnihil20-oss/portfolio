import { Project, Certificate, TimelineItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Paul Nihil',
  shortName: 'Paul',
  initials: 'PN',
  title: 'Computer Science Engineer & Full-Stack Developer',
  institution: 'Loyola-ICAM College of Engineering and Technology (LICET)',
  degree: 'B.E. Computer Science Engineering (2024 – 2028)',
  location: 'Madurai & Chennai, Tamil Nadu, India',
  coordinates: '9.9252° N, 78.1198° E // 13.0673° N, 80.2217° E',
  email: 'paulnihil20@gmail.com',
  phone: '+91 80122 23232',
  github: 'https://github.com/paulnihil20-oss',
  linkedin: 'https://www.linkedin.com/in/paulnihil-p-150a54328',
  resumePdf: '/Paul_Nihil_Resume.pdf',
  bioHeadline: 'I build digital experiences where technology meets architectural design.',
  bioSummary: `I'm a Computer Science Engineering student at Loyola-ICAM College of Engineering and Technology (Chennai) with roots in Madurai, India. I specialize in Full-Stack Web Development, Java systems engineering, database design, and intelligent computer vision applications. My work focuses on building clean, performant, and purposeful software solutions that solve real-world logistical and operational challenges.`,
  availability: 'Available for Software Engineering Roles & Select Freelance Commissions (2026)',
  edition: '2026 EDITION // ARCHIVE NO. 01'
};

export const PROJECTS: Project[] = [
  {
    id: 'smart-traffic',
    number: '01',
    title: 'Smart Traffic Signal & Emergency Priority System',
    category: 'Edge AI / Computer Vision / IoT',
    year: '2025',
    role: 'Lead Developer & Computer Vision Engineer',
    tagline: 'Autonomous traffic signal optimization with real-time emergency ambulance routing.',
    description: 'An AI-powered traffic management system that uses motion cameras and computer vision to dynamically calculate optimal signal timings based on real-time vehicle density. Automatically detects emergency service vehicles (ambulances, fire engines) and coordinates with city grid signals to grant immediate priority corridors from incident point to medical centers.',
    problem: 'Urban intersections suffer from static timer delays, causing congestion and severe transit delays for emergency ambulances navigating traffic gridlock.',
    solution: 'Engineered an edge computer vision pipeline with OpenCV and Python that counts live vehicles per lane, dynamically adjusts signal durations, and triggers instant green corridor sequencing upon detecting emergency vehicles.',
    architecture: [
      'Edge Camera Feed & Video Stream Preprocessing',
      'YOLO / OpenCV Object Detection & Vehicle Density Estimator',
      'Dynamic Signal Timing Optimizer (Density-Weighted Algorithm)',
      'Emergency Vehicle Siren & Visual Beacon Detection Protocol',
      'IoT Microcontroller Signal Relay / Grid Dispatch Interface'
    ],
    metrics: [
      'Up to 40% reduction in peak-hour intersection waiting time',
      '< 150ms vehicle detection latency per frame on edge hardware',
      'Automatic fail-safe protocol for concurrent emergency requests'
    ],
    technologies: ['Python', 'OpenCV', 'AI / ML', 'IoT', 'REST APIs'],
    githubUrl: 'https://github.com/paulnihil20-oss/smart-accident',
    image: '/images/smart_traffic.png'
  },
  {
    id: 'fintech-platform',
    number: '02',
    title: 'FinTech Intelligent Financial Tracker',
    category: 'Full-Stack Web & Financial Analytics',
    year: '2024',
    role: 'Full Stack Engineer & UI Architect',
    tagline: 'Automated personal finance tracking engine powered by bank SMS parsing and live gold rate telemetry.',
    description: 'A smart financial management platform tailored for middle-class families. Eliminates manual bookkeeping by parsing bank transaction SMS alerts into structured financial ledgers. Provides real-time category expense breakdowns, predictive monthly budget forecasting, and integrated live market commodity metrics including gold and silver rates.',
    problem: 'Most budget apps require tedious manual expense entry, leading to low user retention and inaccurate personal financial visibility.',
    solution: 'Built an automated ingest pipeline that parses transactional SMS data with regular expression heuristics, categorizes merchant transactions automatically, and provides interactive visual cashflow dashboards.',
    architecture: [
      'SMS Gateway / Webhook Transaction Parser Engine',
      'Categorization Rules & Merchant Normalization Engine',
      'Real-Time Live Commodity & Gold Rate REST API Feeds',
      'Interactive Expense Telemetry & Visual Cashflow Graphs',
      'Encrypted Local & Cloud Database Ledger Persistence'
    ],
    metrics: [
      'Zero manual entry required for 90%+ of standard bank transactions',
      'Live commodity price updates synced via external financial APIs',
      'Sub-second dashboard loading with optimized client-side state'
    ],
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'SMS API', 'Financial REST APIs'],
    githubUrl: 'https://github.com/paulnihil20-oss/lulaby',
    image: '/images/fintech.png'
  },
  {
    id: 'approvex',
    number: '03',
    title: 'ApproveX Campus Workflow Automation Platform',
    category: 'Enterprise Web Application',
    year: '2024',
    role: 'Full-Stack Developer & Database Architect',
    tagline: 'Paperless digital clearance and multi-tier approval system for educational institutions.',
    description: 'A comprehensive campus administrative management platform that digitizes student leave applications, on-duty permissions, and faculty sign-offs. Replaces physical signature chasing and paper forms with an auditable, multi-role digital approval matrix complete with status tracking and administrative oversight.',
    problem: 'Traditional university paper approvals waste hours for students and staff, frequently causing lost documents, delays, and zero audit trails.',
    solution: 'Designed a structured role-based access platform (Student, Faculty Advisor, HOD, Dean) with instant notification triggers, digital status stamping, and centralized record archiving.',
    architecture: [
      'Role-Based Access Control (RBAC) & Authentication Module',
      'Multi-Tier Workflow Engine with State Machine Transitions',
      'Relational Schema on MySQL for Audit Logs & Application History',
      'Responsive Web Client with Real-Time Approval Status Badges',
      'Administrative Analytics Dashboard for Departmental Reporting'
    ],
    metrics: [
      '100% elimination of paper requisition forms',
      'Approval turnaround dropped from days to minutes',
      'Tamper-proof digital timestamping for all signed clearances'
    ],
    technologies: ['Java', 'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'JDBC'],
    githubUrl: 'https://github.com/paulnihil20-oss/approvex',
    image: '/images/approvex.png'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'oracle-sql',
    number: '01',
    title: 'Oracle Database Programming with SQL',
    issuer: 'Oracle Academy',
    year: '2024',
    category: 'Database Architecture',
    description: 'Comprehensive professional certification covering relational database concepts, complex SQL queries, subqueries, join operations, constraints, schema design, and high-performance data manipulation on Oracle Database systems.',
    skills: ['SQL DDL/DML', 'Data Modeling', 'Subqueries & Joins', 'Database Optimization', 'Relational Schema'],
    pdfPath: '/certificates/oracle_sql.pdf',
    badge: 'ORACLE ACADEMY'
  },
  {
    id: 'oracle-plsql',
    number: '02',
    title: 'Oracle Database Programming with PL/SQL',
    issuer: 'Oracle Academy',
    year: '2024',
    category: 'Procedural Database Programming',
    description: 'Validated expertise in procedural database architecture including stored procedures, functions, packages, database triggers, exception handling, cursor management, and enterprise backend transaction management.',
    skills: ['PL/SQL Procedures', 'Database Triggers', 'Stored Functions', 'Cursors & Transactions', 'Error Handling'],
    pdfPath: '/certificates/oracle_plsql.pdf',
    badge: 'ORACLE ACADEMY'
  },
  {
    id: 'java-pro',
    number: '03',
    title: 'Java Professional Developer Certification',
    issuer: 'Udemy Professional',
    year: '2024',
    category: 'Software Engineering',
    description: 'Extensive programming certification covering Object-Oriented Programming (OOP), Java Collections Framework, Multi-threading, File I/O, Exception Handling, Data Structures, and Enterprise Application Design Patterns.',
    skills: ['Java Core & OOP', 'Collections Framework', 'Multi-Threading', 'Design Patterns', 'Data Structures'],
    pdfPath: '/certificates/java_certificate.pdf',
    badge: 'UDEMY CERTIFIED'
  },
  {
    id: 'figma-ux',
    number: '04',
    title: 'UI/UX Design & Prototyping Workshop',
    issuer: 'Figma Design Workshop',
    year: '2023',
    category: 'User Interface & Interaction Design',
    description: 'Hands-on design certification focused on modern UI/UX design systems, component architecture, auto-layout, interactive high-fidelity prototyping, design tokens, and developer handoff workflows.',
    skills: ['Design Systems', 'Auto-Layout', 'Interactive Prototyping', 'Component Architecture', 'Wireframing'],
    pdfPath: '/certificates/figma.pdf',
    badge: 'FIGMA WORKSHOP'
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: '2024 – 2028',
    period: 'PRESENT',
    title: 'B.E. in Computer Science Engineering',
    institution: 'Loyola-ICAM College of Engineering and Technology (LICET)',
    location: 'Chennai, Tamil Nadu',
    category: 'EDUCATION',
    description: 'Undergraduate engineering degree encompassing data structures, algorithms, operating systems, database management systems, computer networks, and full-stack software architecture. Actively engaged in technical symposiums and open-source project development.',
    highlights: [
      'Comprehensive focus on Software Engineering & Object-Oriented Systems',
      'Database programming with Oracle SQL and MySQL',
      'Building practical software projects addressing civic and campus workflow needs'
    ]
  },
  {
    year: '2024 – 2025',
    period: 'PROJECTS & RESEARCH',
    title: 'Edge AI & Enterprise Systems Development',
    institution: 'Independent & Academic Research',
    location: 'Chennai / Madurai',
    category: 'PROJECT',
    description: 'Engineered Smart Traffic Signal with OpenCV edge detection, ApproveX campus workflow software, and FinTech transaction analytics platform.',
    highlights: [
      'Applied computer vision to civic traffic optimization problems',
      'Developed end-to-end full stack web platforms with Java & JavaScript'
    ]
  },
  {
    year: '2024',
    period: 'CREDENTIALS',
    title: 'Professional Certifications in Oracle SQL, PL/SQL & Java',
    institution: 'Oracle Academy & Udemy',
    location: 'Global / Online',
    category: 'CERTIFICATION',
    description: 'Completed comprehensive rigorous certifications validating database engineering and object-oriented backend programming.',
    highlights: [
      'Oracle Academy certified in SQL & PL/SQL procedural programming',
      'Advanced Java enterprise foundations'
    ]
  },
  {
    year: '2022 – 2023',
    period: 'COMPLETED',
    title: 'Higher Secondary Certificate (HSC — 12th Standard)',
    institution: 'Maharishi Vidya Mandir Sr. Sec. School',
    location: 'Madurai, Tamil Nadu',
    category: 'EDUCATION',
    description: 'Completed higher secondary education with distinction in Computer Science, Mathematics, and Physical Sciences, laying foundational programming and algorithmic reasoning.',
    highlights: [
      'Core focus on Computer Science and Advanced Mathematics',
      'First principles of C and procedural logic'
    ]
  },
  {
    year: '2020 – 2021',
    period: 'COMPLETED',
    title: 'Secondary School Leaving Certificate (SSLC — 10th Standard)',
    institution: 'Maharishi Vidya Mandir Sr. Sec. School',
    location: 'Madurai, Tamil Nadu',
    category: 'EDUCATION',
    description: 'Graduated secondary school with excellent academic standing, discovering a keen passion for computing and digital systems.',
    highlights: [
      'Academic excellence across sciences and mathematics'
    ]
  }
];

export const SKILLS_MATRIX: SkillCategory[] = [
  {
    category: 'PROGRAMMING LANGUAGES',
    code: '01',
    skills: [
      { name: 'Java', level: 'Advanced', experience: '3+ Years', description: 'Core OOP, Collections, Multithreading, JDBC, Design Patterns' },
      { name: 'Python', level: 'Advanced', experience: '2+ Years', description: 'Computer Vision (OpenCV), Scripting, Data Processing, ML basics' },
      { name: 'SQL', level: 'Expert', experience: '2+ Years', description: 'Complex Queries, Subqueries, Joins, Schema Design, Optimization' },
      { name: 'PL/SQL', level: 'Proficient', experience: '1+ Years', description: 'Stored Procedures, Triggers, Functions, Cursor Management' },
      { name: 'C', level: 'Advanced', experience: '2+ Years', description: 'Memory Management, Pointers, Algorithms, Systems Foundations' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', experience: '2+ Years', description: 'DOM Manipulation, Async/Await, Web APIs, Modern Frontends' }
    ]
  },
  {
    category: 'FRONTEND ARCHITECTURE',
    code: '02',
    skills: [
      { name: 'React', level: 'Proficient', experience: '1+ Years', description: 'Component Architecture, Hooks, State Management, SPAs' },
      { name: 'HTML5 & Semantic Web', level: 'Expert', experience: '3+ Years', description: 'Accessible Markup, SEO Standards, Cross-Browser Compatibility' },
      { name: 'CSS3 & Modern Layouts', level: 'Expert', experience: '3+ Years', description: 'Flexbox, CSS Grid, Custom Properties, Kinetic Animations' },
      { name: 'Tailwind CSS', level: 'Advanced', experience: '2+ Years', description: 'Utility-First Systems, Custom Design Tokens, Responsive Grids' },
      { name: 'UI / UX Design', level: 'Advanced', experience: '2+ Years', description: 'Visual Hierarchy, Typography, Design Systems, User Research' }
    ]
  },
  {
    category: 'BACKEND & DATABASE',
    code: '03',
    skills: [
      { name: 'MySQL', level: 'Advanced', experience: '2+ Years', description: 'Relational Database Design, Indexing, Transaction Handling' },
      { name: 'Oracle Database', level: 'Advanced', experience: '2+ Years', description: 'Enterprise Data Structures, Stored Procedures, PL/SQL Execution' },
      { name: 'RESTful API Design', level: 'Advanced', experience: '2+ Years', description: 'Endpoint Architecture, JSON Serialization, HTTP Methods' },
      { name: 'Node.js Basics', level: 'Intermediate', experience: '1+ Years', description: 'Server Execution, Express Routing, Backend Middleware' },
      { name: 'JDBC', level: 'Advanced', experience: '2+ Years', description: 'Java Database Connectivity, Connection Pools, Prepared Statements' }
    ]
  },
  {
    category: 'ENGINEERING TOOLS & WORKFLOW',
    code: '04',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', experience: '3+ Years', description: 'Version Control, Branching Strategies, Pull Requests, CI/CD' },
      { name: 'Figma', level: 'Advanced', experience: '2+ Years', description: 'High-Fidelity Wireframes, Prototyping, Component Libraries' },
      { name: 'VS Code', level: 'Expert', experience: '3+ Years', description: 'Developer Tooling, Debugging, Extensions, Workflow Tuning' },
      { name: 'Linux / Terminal', level: 'Proficient', experience: '2+ Years', description: 'Shell Commands, Scripting, Process Management, Git CLI' }
    ]
  }
];

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
    id: 'specamp',
    number: '03',
    title: 'SpecAmp — AI Component Specification Validator',
    category: 'Developer Tooling / AI & Web Scraping',
    year: '2026',
    role: 'Full-Stack Developer & AI Pipeline Engineer',
    tagline: 'One MPN. Every source. One truth.',
    description: 'An AI-powered electronics component research tool that takes any manufacturer part number (MPN) and aggregates specifications from multiple distributor and datasheet sources — DigiKey, Mouser, Octopart, and manufacturer sites. Specs are extracted, normalized to comparable units, cross-validated, and confidence-scored so engineers can trust what they read.',
    problem: 'Hardware engineers waste hours juggling five browser tabs to verify a single resistor value, with no indication of which source is correct when they conflict.',
    solution: 'Built an automated pipeline that scrapes and parses each datasheet source into structured JSON, normalizes units deterministically in code (e.g. 100nF = 0.1µF = 100000pF), and flags disagreements with a confidence score and a 0–100% spec completeness rating per part. Supports full BOM batch lookup with CSV export.',
    architecture: [
      'MPN Input → Multi-Source Distributor & Datasheet Scraper',
      'LLM-Assisted Structured JSON Spec Extraction Pipeline',
      'Deterministic Unit Normalization Engine (no model conversion)',
      'Cross-Source Conflict Detection & Confidence Scoring Layer',
      'BOM Batch Processor with 7-Day Result Caching & CSV Export'
    ],
    metrics: [
      '3–5 independent sources validated per part lookup',
      'Units normalized deterministically — 100nF, 0.1µF, 100000pF all compare equally',
      '0–100% completeness score for every retrieved spec sheet'
    ],
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'AI / LLM', 'REST APIs'],
    githubUrl: 'https://github.com/paulnihil20-oss/specam',
    image: '/images/smart_traffic.png'
  },
  {
    id: 'approvex',
    number: '04',
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
    category: 'LANGUAGES',
    code: '01',
    skills: [
      { name: 'Java', level: 'Intermediate', experience: '2+ Years', description: 'OOP, Collections, JDBC, basic multithreading' },
      { name: 'Python', level: 'Intermediate', experience: '1+ Years', description: 'Scripting, OpenCV basics, data processing' },
      { name: 'C', level: 'Intermediate', experience: '1+ Years', description: 'Pointers, memory, algorithms' },
      { name: 'JavaScript', level: 'Intermediate', experience: '1+ Years', description: 'DOM, fetch API, basic async patterns' },
      { name: 'SQL / PL-SQL', level: 'Intermediate', experience: '1+ Years', description: 'Queries, joins, stored procedures, triggers' }
    ]
  },
  {
    category: 'WEB & UI',
    code: '02',
    skills: [
      { name: 'HTML & CSS', level: 'Intermediate', experience: '2+ Years', description: 'Semantic markup, flexbox, grid, responsive design' },
      { name: 'React', level: 'Intermediate', experience: '1+ Years', description: 'Components, hooks, basic state management' },
      { name: 'Tailwind CSS', level: 'Intermediate', experience: '1+ Years', description: 'Utility classes, responsive layouts' },
      { name: 'Figma', level: 'Intermediate', experience: '1+ Years', description: 'Wireframes, prototyping, basic design systems' }
    ]
  },
  {
    category: 'DATABASES & TOOLS',
    code: '03',
    skills: [
      { name: 'MySQL', level: 'Intermediate', experience: '1+ Years', description: 'Schema design, queries, basic indexing' },
      { name: 'Oracle DB', level: 'Intermediate', experience: '1+ Years', description: 'SQL & PL/SQL, stored procedures' },
      { name: 'Git & GitHub', level: 'Intermediate', experience: '2+ Years', description: 'Version control, branching, pull requests' },
      { name: 'VS Code', level: 'Intermediate', experience: '2+ Years', description: 'Day-to-day development environment' }
    ]
  }
];

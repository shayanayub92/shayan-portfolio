export const PERSONAL_INFO = {
  name: 'MUHAMMAD SHAYAN AYUB',
  shortName: 'Shayan Ayub',
  headline: 'Full Stack Developer | Backend Engineering | Cybersecurity',
  location: 'Pakistan',
  locationBadge: 'Pakistan · Open to International Relocation',
  careerObjective: 'Open to international relocation, subject to work authorization and role requirements.',
  email: 'muhammadshayanayub@gmail.com',
  github: 'https://github.com/shayanayub92',
  linkedin: 'https://www.linkedin.com/in/muhammad-shayan-ayub-31b8a524a/',
  avatar: '/dp.jfif',
  cvPath: '/Muhammad_Shayan_Ayub_CV.pdf', // Target path when uploaded to public/
  heroIntro:
    'I am a Computer Science graduate and Full Stack Web Developer with experience building web applications, integrating APIs, implementing authentication, and developing backend services. My technical interests include scalable backend systems, database-driven applications, application security, and cybersecurity investigations.',
  aboutSummary:
    'I am a Computer Science graduate from Mirpur University of Science and Technology (MUST), Pakistan, with professional experience in full-stack web development. I work with React.js, Python, FastAPI, PostgreSQL, Docker, Redis, Celery, WebSockets, and Tailwind CSS to develop web applications and backend functionality.\n\nAlongside software engineering, I have pursued hands-on cybersecurity learning involving HTTP security headers, OWASP Top 10 concepts, simulated attack-and-defense exercises, and PCAP-based malware traffic investigation.\n\nI am interested in building secure, reliable, and maintainable software systems and am seeking international opportunities in full-stack development, backend engineering, or entry-level cybersecurity.',
};

export const SKILL_CATEGORIES = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'C++', 'PHP', 'HTML and CSS'],
  },
  {
    title: 'Frontend Development',
    skills: ['React.js', 'Tailwind CSS', 'Responsive Web Design', 'Frontend & Backend API Integration'],
  },
  {
    title: 'Backend Engineering',
    skills: ['FastAPI', 'REST APIs', 'Authentication', 'WebSockets', 'Backend Application Development'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'SQL', 'pgAdmin'],
  },
  {
    title: 'Caching & Background Processing',
    skills: ['Redis', 'Celery'],
  },
  {
    title: 'Development Tools & Infrastructure',
    skills: ['Docker', 'Git', 'GitHub', 'Linux', 'VS Code'],
  },
  {
    title: 'Cybersecurity & Network Analysis',
    skills: [
      'OWASP Top 10 Concepts',
      'HTTP Security Headers',
      'Wireshark',
      'PCAP Analysis',
      'Network Traffic Investigation',
      'Nmap Fundamentals',
    ],
  },
  {
    title: 'Cloud Fundamentals',
    skills: [
      'Microsoft Azure Concepts',
      'Cloud Governance',
      'Cost Management',
      'Monitoring',
      'Security Fundamentals',
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    role: 'Full Stack Web Developer',
    company: 'HexaForge',
    period: 'June 2025 – Present',
    badge: 'Current Role',
    description:
      'Develop full-stack web applications in a collaborative, project-based development environment, contributing to frontend interfaces, backend functionality, API integration, and database-driven features.',
    responsibilities: [
      'Develop responsive user interfaces using React.js and Tailwind CSS.',
      'Build and integrate APIs connecting frontend applications with backend services.',
      'Implement authentication functionality in web applications.',
      'Develop backend components using Python and FastAPI.',
      'Work with PostgreSQL databases and database administration tools.',
      'Use Docker in application development and containerized workflows.',
      'Work with technologies including Redis, Celery, and WebSockets across development projects.',
    ],
    technologies: [
      'React.js',
      'Tailwind CSS',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'Docker',
      'Redis',
      'Celery',
      'WebSockets',
      'REST APIs',
    ],
  },
];

export const PROJECTS = [
  {
    id: 'digital-assets-marketplace',
    title: 'Digital Assets Marketplace',
    category: 'Full Stack',
    technologies: ['React.js', 'FastAPI', 'PostgreSQL', 'Docker'],
    description:
      'A full-stack digital asset marketplace designed to support digital asset listings, user interactions, and database-driven application functionality.',
    highlights: [
      'Full-stack web development with decoupled architecture',
      'Frontend and backend integration via performant REST APIs',
      'PostgreSQL data management and relational modeling',
      'Containerized development workflows using Docker',
    ],
    github: null, // Private / In development
    demo: null,
    status: 'Featured Full Stack Project',
    featured: true,
  },
  {
    id: 'student-issue-management',
    title: 'Student Issue Management System',
    category: 'Full Stack & APIs',
    technologies: ['Python', 'FastAPI', 'JavaScript', 'PostgreSQL'],
    description:
      'A university-focused application for reporting and managing student issues through a structured web-based system.',
    highlights: [
      'Backend API development with structured status transitions',
      'PostgreSQL database integration and relational record tracking',
      'Interactive frontend interface for ticket management',
      'Lifecycle tracking for issue submission, escalation, and resolution',
    ],
    github: 'https://github.com/shayanayub92/Strike-Management-System.git',
    demo: null,
    status: 'Verified Codebase Available',
    featured: true,
  },
  {
    id: 'ngo-donation-website',
    title: 'Islamabad NGO Donation Website',
    category: 'Web Application',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
    description:
      'A donation website developed for an NGO, designed to support donation-related workflows and transparent contribution tracking.',
    highlights: [
      'Relational database design in MySQL for transparent donor logs',
      'Administrative dashboard for tracking contribution records',
      'Responsive user interface tailored for humanitarian causes',
    ],
    github: 'https://github.com/shayanayub92/donate.git',
    demo: null,
    status: 'Verified Codebase Available',
    featured: false,
  },
  {
    id: 'mini-blog-app',
    title: 'Mini Blog Application',
    category: 'Web Application',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description:
      'A lightweight blogging application for creating and managing posts through a simple web interface.',
    highlights: [
      'Clean CRUD operations for blog posts and article entries',
      'Fast vanilla client-side rendering with responsive layouts',
      'Modular JavaScript structure for content management',
    ],
    github: 'https://github.com/shayanayub92/Mini-Blog-App.git',
    demo: null,
    status: 'Verified Codebase Available',
    featured: false,
  },
  {
    id: 'notes-keeping-app',
    title: 'Notes Keeping App',
    category: 'Web Application',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description:
      'A lightweight notes application for creating, editing, and organizing personal notes with persistent client storage.',
    highlights: [
      'Dynamic client-side note manipulation and search',
      'Clean responsive layout and fast state handling',
    ],
    github: 'https://github.com/shayanayub92/notes-keeping-app.git',
    demo: null,
    status: 'Verified Codebase Available',
    featured: false,
  },
  {
    id: 'quotes-web-app',
    title: 'Quotes Web App',
    category: 'Web Application',
    technologies: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    description:
      'A dynamic web application that connects to public quote APIs to fetch, format, and share inspirational thoughts with smooth transitions.',
    highlights: [
      'Asynchronous REST API consumption with graceful error handling',
      'Minimalist interactive UI with responsive typography',
    ],
    github: 'https://github.com/shayanayub92/quotes-api-webapp.git',
    demo: null,
    status: 'Verified Codebase Available',
    featured: false,
  },
];

export const CYBERSECURITY_LEARNING = [
  {
    id: 'cyberdefenders-danabot',
    title: 'DanaBot Digital Forensics Lab',
    platform: 'CyberDefenders',
    date: 'April 2025',
    category: 'Digital Forensics & Malware Investigation',
    description:
      'Completed a PCAP-based digital forensics investigation focused on identifying malware-related network communications and examining potential command-and-control activity.',
    tools: ['Wireshark', 'VirusTotal', 'ANY.RUN', 'NetworkMiner'],
    highlights: [
      'Packet-level network traffic analysis of infected host telemetry',
      'Extraction and inspection of suspicious payloads and DNS queries',
      'Correlating command-and-control (C2) communication patterns',
      'Evidence-based documentation of attack artifacts',
    ],
    verificationUrl: 'https://cyberdefenders.org/blueteam-ctf-challenges/achievements/Shayan_Ayub/danabot/',
  },
  {
    id: 'tryhackme-learning',
    title: 'Cybersecurity Learning & Practical Exercises',
    platform: 'TryHackMe',
    date: '2025',
    category: 'Hands-on Security Learning',
    description:
      'Completed more than 22 rooms covering cybersecurity fundamentals, ethical hacking, and penetration-testing concepts. Achieved a reported platform ranking in the top 25%.',
    tools: ['Nmap', 'Burp Suite', 'Linux', 'Network Fundamentals', 'Web Security'],
    highlights: [
      'Hands-on lab completion across 22+ interactive security challenges',
      'Network enumeration, vulnerability identification, and privilege escalation concepts',
      'Active learning platform achievement placing in the top 25% of participants',
    ],
    verificationUrl: 'https://tryhackme.com/p/ShayanAyub101',
    note: 'Presented as verified hands-on learning platform achievements.',
  },
  {
    id: 'must-cybersecurity-training',
    title: 'National Cybersecurity Training Program',
    platform: 'Mirpur University of Science & Technology (MUST)',
    date: '2025',
    category: 'Defensive & Offensive Security Training',
    description:
      'Completed cybersecurity training covering ethical hacking concepts, Security Operations Center (SOC) fundamentals, and practical cybersecurity topics.',
    tools: ['SOC Fundamentals', 'Ethical Hacking Concepts', 'Traffic Analysis', 'Security Controls'],
    highlights: [
      'Academic and practical training in incident handling and SOC operations',
      'Exploration of defensive countermeasures and secure network topologies',
      'Structured understanding of attack surfaces and threat mitigation',
    ],
    verificationUrl: null,
    note: 'Academic cybersecurity training program.',
  },
];

export const CERTIFICATIONS = [
  {
    id: 'hackerrank-cpp-sql',
    title: 'HackerRank Certifications (C++ and MySQL)',
    issuer: 'HackerRank',
    date: '2025',
    type: 'Skill Certification',
    description:
      'Earned credentials validating foundational algorithmic problem-solving in C++ and relational database querying, schema operations, and indexing in MySQL.',
    topics: ['C++ Problem Solving', 'MySQL Query Optimization', 'Relational Schemas', 'Data Structures'],
    verificationUrl: 'https://www.hackerrank.com/certificates/409a3827dfb5',
  },
  {
    id: 'ms-azure-fundamentals',
    title: 'Microsoft Azure Fundamentals & Cloud Concepts',
    issuer: 'Microsoft Learn',
    date: '2024–2025',
    type: 'Continuous Learning Record',
    description:
      'Completed foundational Microsoft Learn cloud curriculum modules exploring core cloud architectures, compliance standards, and cloud cost management.',
    topics: [
      'Cloud Computing Fundamentals',
      'Governance & Compliance',
      'Cost Management',
      'Monitoring & Telemetry',
      'Cloud Security Fundamentals',
    ],
    verificationUrl:
      'https://learn.microsoft.com/api/achievements/share/en-us/MuhammadShayanAyub-9156/3AV6PA9H?sharingId=96457741495030CA',
    note: 'Completed learning achievement record validating fundamental cloud concepts.',
  },
];

export const EDUCATION = {
  degree: 'Bachelor of Science in Computer Science (BSCS)',
  institution: 'Mirpur University of Science and Technology (MUST)',
  location: 'Pakistan',
  graduationDate: 'October 2026',
  transcriptStatus: 'Official DMC / transcript: Pending issuance',
  statusNote: 'Degree coursework completed; official documentation pending formal issuance.',
  relevantCourses: [
    'Data Structures & Algorithms',
    'Database Systems & Design',
    'Object-Oriented Programming (C++/Python)',
    'Computer Networks & Protocols',
    'Information & Network Security',
    'Operating Systems & Linux Architecture',
    'Software Engineering Methodologies',
  ],
};

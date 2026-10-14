import {
  HeroData,
  AboutData,
  SkillCategory,
  Experience,
  Project,
  ServiceCard,
  ContactInfo,
  NavItem,
} from '../models/portfolio.models';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_DATA: HeroData = {
  name: 'Deepak Sharma',
  title: 'Full Stack Developer | SharePoint Developer',
  headline: 'Building Modern Web Applications and Enterprise Solutions.',
  intro:
    'I am a Full Stack Developer specializing in MERN Stack, SharePoint Online, SPFx, React.js, Next.js, and Angular. I build scalable web applications, responsive user interfaces, document management systems, and business workflow automation solutions.',
  availabilityStatus: 'Open to opportunities',
  isAvailable: true,
  resumePath: 'assets/resume/deepak-sharma-resume.pdf',
  profileImagePath: 'assets/images/profile.jpg',
  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/deepaksharma',
      icon: 'fab fa-github',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/deepaksharma',
      icon: 'fab fa-linkedin',
    },
  ],
  techIcons: [
    { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
    { name: 'Angular', icon: 'fab fa-angular', color: '#DD0031' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: '#F7DF1E' },
    { name: 'Microsoft', icon: 'fab fa-microsoft', color: '#00A4EF' },
    { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
  ],
};

export const ABOUT_DATA: AboutData = {
  summary:
    'I am a passionate Full Stack Developer with expertise across modern web technologies and Microsoft enterprise platforms. My focus is on building scalable, high-performance applications that solve real business problems.',
  highlights: [
    { icon: 'fas fa-code', label: 'Full Stack Web Development' },
    { icon: 'fas fa-share-alt', label: 'SharePoint Online & SPFx' },
    { icon: 'fab fa-react', label: 'React.js & Next.js' },
    { icon: 'fab fa-angular', label: 'Angular Applications' },
    { icon: 'fas fa-plug', label: 'REST API Integration' },
    { icon: 'fas fa-cogs', label: 'Power Automate Workflows' },
    { icon: 'fas fa-folder-open', label: 'Document Management Systems' },
    { icon: 'fas fa-building', label: 'Enterprise Business Applications' },
    { icon: 'fas fa-users', label: 'Problem Solving & Teamwork' },
  ],
  yearsExperience: '3+',
  projectsCompleted: '20+',
  technologiesUsed: '15+',
  profileImagePath: 'assets/images/profile.jpg',
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: 'fas fa-desktop',
    color: '#61DAFB',
    skills: [
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3-alt' },
      { name: 'JavaScript', icon: 'fab fa-js-square' },
      { name: 'TypeScript', icon: 'fas fa-code' },
      { name: 'React.js', icon: 'fab fa-react' },
      { name: 'Next.js', icon: 'fas fa-arrow-right' },
      { name: 'Angular', icon: 'fab fa-angular' },
      { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
    ],
  },
  {
    title: 'Backend Development',
    icon: 'fas fa-server',
    color: '#339933',
    skills: [
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'Express.js', icon: 'fas fa-code' },
      { name: 'REST APIs', icon: 'fas fa-exchange-alt' },
      { name: 'Authentication', icon: 'fas fa-lock' },
      { name: 'Authorization', icon: 'fas fa-shield-alt' },
    ],
  },
  {
    title: 'Databases',
    icon: 'fas fa-database',
    color: '#FF6B6B',
    skills: [
      { name: 'MySQL', icon: 'fas fa-database' },
      { name: 'MongoDB', icon: 'fas fa-leaf' },
      { name: 'SQL', icon: 'fas fa-table' },
    ],
  },
  {
    title: 'Microsoft Technologies',
    icon: 'fab fa-microsoft',
    color: '#00A4EF',
    skills: [
      { name: 'SharePoint Online', icon: 'fab fa-microsoft' },
      { name: 'SPFx', icon: 'fas fa-puzzle-piece' },
      { name: 'SharePoint REST API', icon: 'fas fa-exchange-alt' },
      { name: 'Microsoft 365', icon: 'fab fa-microsoft' },
      { name: 'Power Automate', icon: 'fas fa-bolt' },
      { name: 'Power Apps', icon: 'fas fa-th' },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: 'fas fa-tools',
    color: '#A78BFA',
    skills: [
      { name: 'Git', icon: 'fab fa-git-alt' },
      { name: 'GitHub', icon: 'fab fa-github' },
      { name: 'VS Code', icon: 'fas fa-code' },
      { name: 'npm', icon: 'fab fa-npm' },
      { name: 'Azure Fundamentals', icon: 'fab fa-microsoft' },
    ],
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 1,
    company: 'Credent Infotech Services',
    role: 'Full Stack Developer',
    period: 'Jan 2023 – Present',
    location: 'Delhi, India',
    type: 'Full-time',
    responsibilities: [
      'Developed and maintained full-stack web applications using MERN Stack and Angular',
      'Built SharePoint Online solutions using SPFx framework and REST API',
      'Designed and implemented responsive UI components using React.js and Bootstrap',
      'Created Power Automate workflows to automate business processes',
      'Collaborated with cross-functional teams to deliver projects on time',
    ],
    technologies: [
      'React.js',
      'Node.js',
      'SharePoint',
      'SPFx',
      'Angular',
      'TypeScript',
    ],
    contributions: [
      'Delivered document management system that improved team productivity',
      'Automated manual workflows saving several hours per week',
      'Mentored junior developers on best practices',
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'Document Management System',
    description:
      'A centralized document management system built on SharePoint Online with SPFx web parts for a seamless user experience.',
    fullDescription:
      'A comprehensive document management system built on SharePoint Online using SPFx and React. Features include document upload, version control, metadata management, and team collaboration with permission-based access control.',
    category: 'SharePoint',
    technologies: [
      'SharePoint Online',
      'SPFx',
      'React',
      'REST API',
      'TypeScript',
    ],
    imageUrl: '',
    githubUrl: '',
    liveUrl: '',
    features: [
      'Document upload and version control',
      'Permission-based access control',
      'Metadata management',
      'Team collaboration features',
      'SharePoint search integration',
    ],
  },
  {
    id: 2,
    title: 'Employee Management System',
    description:
      'A full-featured employee management application built with Angular and a REST API backend connected to a MySQL database.',
    fullDescription:
      'A robust HR solution that handles employee records, attendance tracking, leave management, and payroll reporting. Built with Angular frontend, Node.js/Express backend, and MySQL database.',
    category: 'Angular',
    technologies: ['Angular', 'TypeScript', 'REST API', 'MySQL', 'Bootstrap'],
    imageUrl: '',
    githubUrl: '',
    liveUrl: '',
    features: [
      'Employee records management',
      'Attendance tracking',
      'Leave management',
      'Payroll reporting',
      'Role-based access control',
    ],
  },
  {
    id: 3,
    title: 'Vendor Management System',
    description:
      'A vendor portal integrating React frontend with Node.js/Express backend and SharePoint as a data store.',
    fullDescription:
      'A comprehensive vendor management portal enabling procurement teams to manage vendor relationships, track contracts, and automate approval workflows using SharePoint and Power Automate.',
    category: 'React',
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'SharePoint',
      'Power Automate',
    ],
    imageUrl: '',
    githubUrl: '',
    liveUrl: '',
    features: [
      'Vendor onboarding workflow',
      'Contract management',
      'Approval automation',
      'Performance dashboards',
      'Document repository',
    ],
  },
  {
    id: 4,
    title: 'Task Management Application',
    description:
      'A collaborative task management application with drag-and-drop support built with Angular and Bootstrap.',
    fullDescription:
      'A productive task management tool featuring Kanban boards, task assignments, priority management, and real-time collaboration features built with Angular 17.',
    category: 'Angular',
    technologies: ['Angular', 'Bootstrap', 'TypeScript', 'RxJS'],
    imageUrl: '',
    githubUrl: '',
    liveUrl: '',
    features: [
      'Kanban board with drag-and-drop',
      'Task assignment and prioritization',
      'Due date tracking',
      'Progress reporting',
      'Team collaboration',
    ],
  },
  {
    id: 5,
    title: 'MERN Stack Web Application',
    description:
      'A full-stack web application built with the complete MERN stack featuring JWT authentication and RESTful APIs.',
    fullDescription:
      'A scalable full-stack application built with MongoDB, Express.js, React.js, and Node.js. Features complete user authentication, authorization, CRUD operations, and a responsive dashboard.',
    category: 'MERN Stack',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
    imageUrl: '',
    githubUrl: '',
    liveUrl: '',
    features: [
      'JWT authentication and authorization',
      'RESTful API design',
      'MongoDB data modeling',
      'Responsive React dashboard',
      'CRUD operations',
    ],
  },
  {
    id: 6,
    title: 'Next.js Web Application',
    description:
      'A performant server-side rendered web application built with Next.js 14 and TypeScript with REST API integration.',
    fullDescription:
      'A modern Next.js application leveraging server-side rendering, static site generation, and the App Router architecture for optimal performance. Integrates with external REST APIs and features SEO optimization.',
    category: 'Next.js',
    technologies: ['Next.js', 'TypeScript', 'REST APIs', 'Tailwind CSS'],
    imageUrl: '',
    githubUrl: '',
    liveUrl: '',
    features: [
      'Server-side rendering (SSR)',
      'Static site generation (SSG)',
      'App Router architecture',
      'SEO optimization',
      'REST API integration',
    ],
  },
];

export const SERVICES_DATA: ServiceCard[] = [
  {
    title: 'Full Stack Development',
    icon: 'fas fa-layer-group',
    description:
      'End-to-end web application development covering frontend, backend, database design, and deployment.',
    features: [
      'Custom web applications',
      'Database design & optimization',
      'API development',
      'Cloud deployment',
    ],
    color: '#6366F1',
  },
  {
    title: 'MERN Stack Development',
    icon: 'fas fa-cubes',
    description:
      'Scalable applications using MongoDB, Express.js, React.js, and Node.js with modern practices.',
    features: [
      'React.js UI development',
      'Node.js/Express APIs',
      'MongoDB integration',
      'JWT authentication',
    ],
    color: '#10B981',
  },
  {
    title: 'SharePoint & SPFx Development',
    icon: 'fab fa-microsoft',
    description:
      'Enterprise SharePoint solutions, custom SPFx web parts, and Microsoft 365 integrations.',
    features: [
      'SPFx web parts',
      'SharePoint site customization',
      'Power Automate workflows',
      'M365 integration',
    ],
    color: '#0078D4',
  },
  {
    title: 'Angular Application Development',
    icon: 'fab fa-angular',
    description:
      'Robust, maintainable Angular applications with TypeScript, RxJS, and modern Angular features.',
    features: [
      'Standalone components',
      'State management',
      'Reactive Forms',
      'Angular Material UI',
    ],
    color: '#DD0031',
  },
  {
    title: 'React & Next.js Development',
    icon: 'fab fa-react',
    description:
      'Modern React applications and SSR/SSG Next.js solutions optimized for performance and SEO.',
    features: [
      'React component library',
      'Next.js App Router',
      'Server components',
      'SEO optimization',
    ],
    color: '#61DAFB',
  },
  {
    title: 'REST API Integration',
    icon: 'fas fa-plug',
    description:
      'Design, development, and integration of RESTful APIs to connect frontend applications with backend services.',
    features: [
      'API design & documentation',
      'Third-party integrations',
      'Authentication setup',
      'Error handling',
    ],
    color: '#F59E0B',
  },
  {
    title: 'Power Automate Workflows',
    icon: 'fas fa-bolt',
    description:
      'Business process automation using Power Automate and Microsoft Power Platform tools.',
    features: [
      'Workflow automation',
      'Approval processes',
      'Data sync flows',
      'Teams notifications',
    ],
    color: '#8B5CF6',
  },
  {
    title: 'Website Maintenance & Optimization',
    icon: 'fas fa-wrench',
    description:
      'Ongoing support, performance optimization, and feature enhancements for existing web applications.',
    features: [
      'Performance auditing',
      'Bug fixes',
      'Feature enhancements',
      'Security updates',
    ],
    color: '#EF4444',
  },
];

export const CONTACT_INFO: ContactInfo = {
  email: 'deepaksharma72068@gmail.com',
  github: 'https://github.com/deepaksharma',
  linkedin: 'https://linkedin.com/in/deepak-sharma-571935195',
  location: 'India',
};

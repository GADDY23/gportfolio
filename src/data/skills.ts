import {
  Code2,
  Braces,
  Database,
  Headphones,
  Wrench,
  UserRound,
  FileCode2,
  Palette,
  Languages,
  Atom,
  Wind,
  Layers,
  Server,
  Globe,
  Terminal,
  GitBranch,
  
  Monitor,
  Laptop,
  Wifi,
  Settings,
  HardDrive,
  ShieldCheck,
  Network,
  Brain,
  MessageCircle,
  Users,
  Lightbulb,
  Search,
  Gauge,
  Boxes,
  type LucideIcon,
} from "lucide-react";

export type Skill = {
  id: string;
  name: string;
  category: string;

  level: number;
  proficiency: string;

  icon: LucideIcon;

  description: string;
  experience: string;

  projects: string[];

  relatedSkills: string[];
  dependencies: string[];

  status: "unlocked" | "locked";
};

export const skills: Skill[] = [
  // ============================================================
  // PRIMARY SKILLS
  // ============================================================

  {
    id: "frontend",
    name: "Frontend",
    category: "Core Skill",
    level: 70,
    proficiency: "Advanced",
    icon: Code2,
    description:
      "Building responsive, interactive, and user-focused web interfaces using modern frontend technologies.",
    experience:
      "Academic projects and personal portfolio development.",
    projects: [
      "Personal Portfolio",
      "Web-Based Scheduling System",
    ],
    relatedSkills: [
      "html5",
      "css3",
      "javascript",
      "react",
      "tailwind",
      "bootstrap",
    ],
    dependencies: [],
    status: "unlocked",
  },

  {
    id: "backend",
    name: "Backend",
    category: "Core Skill",
    level: 70,
    proficiency: "Advanced",
    icon: Braces,
    description:
      "Developing server-side applications, APIs, authentication systems, and business logic.",
    experience:
      "Laravel-based academic and personal projects.",
    projects: [
      "Web-Based Scheduling System",
      "Personal Portfolio",
    ],
    relatedSkills: [
      "php",
      "laravel",
      "rest-api",
    ],
    dependencies: [],
    status: "unlocked",
  },

  {
    id: "database",
    name: "Database",
    category: "Core Skill",
    level: 70,
    proficiency: "Intermediate",
    icon: Database,
    description:
      "Designing and managing relational databases for web applications.",
    experience:
      "Database design and management using MySQL and MariaDB.",
    projects: [
      "Web-Based Scheduling System",
    ],
    relatedSkills: [
      "mysql",
      "mariadb",
    ],
    dependencies: [],
    status: "unlocked",
  },

  {
    id: "it-support",
    name: "IT Support",
    category: "Technical Support",
    level: 80,
    proficiency: "Advanced",
    icon: Headphones,
    description:
      "Troubleshooting hardware, software, network, and system issues while helping users resolve technical problems.",
    experience:
      "OJT and hands-on technical support experience.",
    projects: [
      "IT Support Internship",
      "PC Troubleshooting",
    ],
    relatedSkills: [
      "technical-support",
      "hardware",
      "software",
      "network",
    ],
    dependencies: [],
    status: "unlocked",
  },

  {
    id: "tools",
    name: "Tools",
    category: "Development Tools",
    level: 80,
    proficiency: "Advanced",
    icon: Wrench,
    description:
      "Using modern development and collaboration tools throughout the software development workflow.",
    experience:
      "Used across academic, personal, and development projects.",
    projects: [
      "Personal Portfolio",
      "Web-Based Scheduling System",
    ],
    relatedSkills: [
      "git",
      "github",
      "vscode",
      "laragon",
      "xampp",
    ],
    dependencies: [],
    status: "unlocked",
  },

  {
    id: "professional",
    name: "Professional",
    category: "Professional Skills",
    level: 85,
    proficiency: "Advanced",
    icon: UserRound,
    description:
      "Professional abilities that support effective problem solving, communication, teamwork, and continuous learning.",
    experience:
      "Developed through academic projects, capstone work, and professional experience.",
    projects: [
      "Capstone Project",
      "Personal Portfolio",
    ],
    relatedSkills: [
      "problem-solving",
      "communication",
      "teamwork",
    ],
    dependencies: [],
    status: "unlocked",
  },

  // ============================================================
  // FRONTEND
  // ============================================================

  {
    id: "html5",
    name: "HTML5",
    category: "Frontend",
    level: 90,
    proficiency: "Advanced",
    icon: FileCode2,
    description:
      "Semantic HTML structure for accessible and maintainable web applications.",
    experience: "Used throughout web development projects.",
    projects: ["Personal Portfolio"],
    relatedSkills: ["css3", "javascript"],
    dependencies: ["frontend"],
    status: "unlocked",
  },

  {
    id: "css3",
    name: "CSS3",
    category: "Frontend",
    level: 85,
    proficiency: "Advanced",
    icon: Palette,
    description:
      "Creating responsive layouts, animations, visual effects, and modern interfaces.",
    experience: "Used in multiple web projects.",
    projects: ["Personal Portfolio"],
    relatedSkills: ["html5", "tailwind"],
    dependencies: ["frontend"],
    status: "unlocked",
  },

  {
    id: "javascript",
    name: "JavaScript",
    category: "Frontend",
    level: 90,
    proficiency: "Advanced",
    icon: Languages,
    description:
      "Building interactive and dynamic web experiences.",
    experience:
      "Used for frontend interactions and application logic.",
    projects: ["Personal Portfolio"],
    relatedSkills: ["react", "html5"],
    dependencies: ["frontend"],
    status: "unlocked",
  },

  {
    id: "react",
    name: "React",
    category: "Frontend",
    level: 70,
    proficiency: "Advanced",
    icon: Atom,
    description:
      "Building reusable component-based user interfaces.",
    experience:
      "Used in modern portfolio and web development projects.",
    projects: ["Personal Portfolio"],
    relatedSkills: ["javascript", "nextjs"],
    dependencies: ["frontend"],
    status: "unlocked",
  },

  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    level: 80,
    proficiency: "Advanced",
    icon: Wind,
    description:
      "Creating responsive interfaces using utility-first CSS.",
    experience:
      "Used extensively for modern portfolio interfaces.",
    projects: ["Personal Portfolio"],
    relatedSkills: ["css3", "react"],
    dependencies: ["frontend"],
    status: "unlocked",
  },

  {
    id: "bootstrap",
    name: "Bootstrap",
    category: "Frontend",
    level: 80,
    proficiency: "Intermediate",
    icon: Layers,
    description:
      "Building responsive layouts using Bootstrap components and utilities.",
    experience: "Used in academic web projects.",
    projects: ["Academic Projects"],
    relatedSkills: ["html5", "css3"],
    dependencies: ["frontend"],
    status: "unlocked",
  },

  // ============================================================
  // BACKEND
  // ============================================================

  {
    id: "php",
    name: "PHP",
    category: "Backend",
    level: 90,
    proficiency: "Advanced",
    icon: Code2,
    description:
      "Developing server-side web applications and backend functionality.",
    experience:
      "Used extensively in Laravel projects.",
    projects: ["Web-Based Scheduling System"],
    relatedSkills: ["laravel", "rest-api"],
    dependencies: ["backend"],
    status: "unlocked",
  },

  {
    id: "laravel",
    name: "Laravel",
    category: "Backend",
    level: 90,
    proficiency: "Advanced",
    icon: Server,
    description:
      "Developing full-stack applications using the Laravel framework.",
    experience:
      "Used to develop the scheduling and assignment system.",
    projects: ["Web-Based Scheduling System"],
    relatedSkills: ["php", "mysql"],
    dependencies: ["backend"],
    status: "unlocked",
  },

  {
    id: "rest-api",
    name: "REST API",
    category: "Backend",
    level: 85,
    proficiency: "Intermediate",
    icon: Globe,
    description:
      "Designing and consuming RESTful APIs for application communication.",
    experience:
      "Applied in web application development.",
    projects: ["Web-Based Scheduling System"],
    relatedSkills: ["php", "laravel"],
    dependencies: ["backend"],
    status: "unlocked",
  },

  // ============================================================
  // DATABASE
  // ============================================================

  {
    id: "mysql",
    name: "MySQL",
    category: "Database",
    level: 90,
    proficiency: "Advanced",
    icon: Database,
    description:
      "Relational database design, queries, relationships, and management.",
    experience:
      "Used for academic and web application projects.",
    projects: ["Web-Based Scheduling System"],
    relatedSkills: ["laravel", "mariadb"],
    dependencies: ["database"],
    status: "unlocked",
  },

  {
    id: "mariadb",
    name: "MariaDB",
    category: "Database",
    level: 80,
    proficiency: "Intermediate",
    icon: Database,
    description:
      "Managing relational data using MariaDB.",
    experience:
      "Used during Laravel application development.",
    projects: ["Web-Based Scheduling System"],
    relatedSkills: ["mysql", "laravel"],
    dependencies: ["database"],
    status: "unlocked",
  },

  // ============================================================
  // TOOLS
  // ============================================================

  {
    id: "git",
    name: "Git",
    category: "Tools",
    level: 85,
    proficiency: "Advanced",
    icon: GitBranch,
    description:
      "Version control for tracking and managing software development changes.",
    experience:
      "Used for personal and academic projects.",
    projects: ["Personal Portfolio"],
    relatedSkills: ["github"],
    dependencies: ["tools"],
    status: "unlocked",
  },

  {
    id: "github",
    name: "GitHub",
    category: "Tools",
    level: 85,
    proficiency: "Advanced",
    icon: Boxes,
    description:
      "Repository hosting, collaboration, and project version management.",
    experience:
      "Used for source-code hosting and project deployment.",
    projects: ["Personal Portfolio"],
    relatedSkills: ["git"],
    dependencies: ["tools"],
    status: "unlocked",
  },

  {
    id: "vscode",
    name: "VS Code",
    category: "Tools",
    level: 90,
    proficiency: "Advanced",
    icon: Monitor,
    description:
      "Primary development environment for coding and debugging.",
    experience:
      "Used throughout software development projects.",
    projects: ["Personal Portfolio"],
    relatedSkills: ["git", "laragon"],
    dependencies: ["tools"],
    status: "unlocked",
  },

  {
    id: "laragon",
    name: "Laragon",
    category: "Tools",
    level: 85,
    proficiency: "Advanced",
    icon: Terminal,
    description:
      "Local development environment for PHP and Laravel applications.",
    experience:
      "Used for local Laravel development.",
    projects: ["Web-Based Scheduling System"],
    relatedSkills: ["laravel", "php"],
    dependencies: ["tools"],
    status: "unlocked",
  },

  {
    id: "xampp",
    name: "XAMPP",
    category: "Tools",
    level: 80,
    proficiency: "Intermediate",
    icon: Laptop,
    description:
      "Local Apache, PHP, and database development environment.",
    experience:
      "Used during academic web development.",
    projects: ["Academic Projects"],
    relatedSkills: ["php", "mysql"],
    dependencies: ["tools"],
    status: "unlocked",
  },

  // ============================================================
  // IT SUPPORT
  // ============================================================

  {
    id: "technical-support",
    name: "Technical Support",
    category: "IT Support",
    level: 80,
    proficiency: "Advanced",
    icon: Headphones,
    description:
      "Providing technical assistance and troubleshooting support to users.",
    experience:
      "Hands-on IT support experience during OJT.",
    projects: ["IT Support Internship"],
    relatedSkills: ["hardware", "software"],
    dependencies: ["it-support"],
    status: "unlocked",
  },

  {
    id: "hardware",
    name: "Hardware Troubleshooting",
    category: "IT Support",
    level: 70,
    proficiency: "Advanced",
    icon: HardDrive,
    description:
      "Diagnosing and resolving computer hardware issues.",
    experience:
      "Hands-on troubleshooting and computer maintenance.",
    projects: ["IT Support Internship"],
    relatedSkills: ["pc-assembly"],
    dependencies: ["it-support"],
    status: "unlocked",
  },

  {
    id: "software",
    name: "Software Troubleshooting",
    category: "IT Support",
    level: 80,
    proficiency: "Advanced",
    icon: Settings,
    description:
      "Diagnosing application, operating system, and software problems.",
    experience:
      "Provided software troubleshooting assistance during OJT.",
    projects: ["IT Support Internship"],
    relatedSkills: ["technical-support"],
    dependencies: ["it-support"],
    status: "unlocked",
  },

  {
    id: "network",
    name: "Network Troubleshooting",
    category: "IT Support",
    level: 75,
    proficiency: "Intermediate",
    icon: Wifi,
    description:
      "Diagnosing basic connectivity and network-related issues.",
    experience:
      "Applied during technical troubleshooting tasks.",
    projects: ["IT Support Internship"],
    relatedSkills: ["technical-support"],
    dependencies: ["it-support"],
    status: "unlocked",
  },

  {
    id: "pc-assembly",
    name: "PC Assembly",
    category: "IT Support",
    level: 70,
    proficiency: "Advanced",
    icon: Laptop,
    description:
      "Building, upgrading, and maintaining desktop computers.",
    experience:
      "Hands-on computer hardware experience.",
    projects: ["PC Troubleshooting"],
    relatedSkills: ["hardware"],
    dependencies: ["it-support"],
    status: "unlocked",
  },

  {
    id: "maintenance",
    name: "System Maintenance",
    category: "IT Support",
    level: 80,
    proficiency: "Advanced",
    icon: ShieldCheck,
    description:
      "Maintaining computer systems and ensuring reliable operation.",
    experience:
      "Applied through technical support and troubleshooting.",
    projects: ["IT Support Internship"],
    relatedSkills: ["hardware", "software"],
    dependencies: ["it-support"],
    status: "unlocked",
  },

  // ============================================================
  // PROFESSIONAL
  // ============================================================

  {
    id: "problem-solving",
    name: "Problem Solving",
    category: "Professional",
    level: 85,
    proficiency: "Advanced",
    icon: Lightbulb,
    description:
      "Breaking down technical problems and finding practical solutions.",
    experience:
      "Developed through capstone and software development projects.",
    projects: ["Capstone Project"],
    relatedSkills: ["analytical-thinking"],
    dependencies: ["professional"],
    status: "unlocked",
  },

  {
    id: "analytical-thinking",
    name: "Analytical Thinking",
    category: "Professional",
    level: 80,
    proficiency: "Advanced",
    icon: Search,
    description:
      "Analyzing requirements, systems, and technical problems.",
    experience:
      "Applied throughout academic software development.",
    projects: ["Capstone Project"],
    relatedSkills: ["problem-solving"],
    dependencies: ["professional"],
    status: "unlocked",
  },

  {
    id: "communication",
    name: "Communication",
    category: "Professional",
    level: 80,
    proficiency: "Advanced",
    icon: MessageCircle,
    description:
      "Communicating technical information clearly with users and teammates.",
    experience:
      "Developed through IT support and academic collaboration.",
    projects: ["IT Support Internship"],
    relatedSkills: ["teamwork"],
    dependencies: ["professional"],
    status: "unlocked",
  },

  {
    id: "adaptability",
    name: "Adaptability",
    category: "Professional",
    level: 90,
    proficiency: "Advanced",
    icon: Gauge,
    description:
      "Learning and adapting to new technologies and development environments.",
    experience:
      "Demonstrated through learning modern web technologies.",
    projects: ["Personal Portfolio"],
    relatedSkills: ["problem-solving"],
    dependencies: ["professional"],
    status: "unlocked",
  },

  {
    id: "teamwork",
    name: "Team Collaboration",
    category: "Professional",
    level: 90,
    proficiency: "Advanced",
    icon: Users,
    description:
      "Collaborating effectively with teammates on technical projects.",
    experience:
      "Developed through academic and capstone collaboration.",
    projects: ["Capstone Project"],
    relatedSkills: ["communication"],
    dependencies: ["professional"],
    status: "unlocked",
  },

  {
    id: "attention-detail",
    name: "Attention to Detail",
    category: "Professional",
    level: 90,
    proficiency: "Advanced",
    icon: Search,
    description:
      "Maintaining accuracy and quality when developing and troubleshooting systems.",
    experience:
      "Applied during software development and testing.",
    projects: ["Capstone Project"],
    relatedSkills: ["problem-solving"],
    dependencies: ["professional"],
    status: "unlocked",
  },
];
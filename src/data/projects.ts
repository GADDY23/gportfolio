export type Project = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  type: string;
  status: "Completed" | "In Progress";
  description: string;
  role: string;
  technologies: string[];
  features: string[];
  image?: string;
  video?: string;
  github?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: "scheduling-system",
    number: "01",

    title:
      "Web-Based Scheduling and Assignment System",

    subtitle:
      "Rooms • Teachers • Sections",

    type: "CAPSTONE PROJECT",

    status: "Completed",

    description:
      "A web-based scheduling and assignment system developed to help ACLC College of Taytay manage rooms, teachers, sections, subjects, and class schedules through a centralized platform.",

    role:
      "Full-Stack Developer",

    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "Tailwind CSS",
      "JavaScript",
      "Livewire",
      "Filament",
    ],

    features: [
      "Schedule management",
      "Room assignment",
      "Teacher assignment",
      "Section management",
      "Conflict detection",
      "Role-based access",
      "Centralized scheduling",
      "Administrative dashboard",
    ],

    /*
     * Put your project image inside:
     *
     * public/projects/
     *
     * Example:
     * public/projects/scheduling-system.png
     */

    image:
      "projects/scheduling.png",

    /*
     * Put your scheduling project video inside:
     *
     * public/projects/
     *
     * Example:
     * public/projects/schedulingvideo.mp4
     */

    video:
      "/projects/schedulingvideo.mp4",

    github:
      "https://github.com/",

    liveUrl: "",
  },

  {
    id: "academic-project",
    number: "02",

    title:
      "Academic Web Application",

    subtitle:
      "Academic Project",

    type: "ACADEMIC PROJECT",

    status: "Completed",

    description:
      "A web-based academic project created as part of my Information Systems studies. The project demonstrates practical application of web development, database management, and user interface design.",

    role:
      "Developer",

    technologies: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],

    features: [
      "Web-based interface",
      "Database integration",
      "CRUD functionality",
      "Responsive layout",
      "User interaction",
    ],

    image:
      "/projects/student.png",

    github:
      "https://github.com/",

    liveUrl: "",
  },

  {
    id: "personal-portfolio",
    number: "03",

    title:
      "Interactive Developer Portfolio",

    subtitle:
      "RPG / Game-Inspired Portfolio",

    type: "PERSONAL PROJECT",

    status: "In Progress",

    description:
      "An interactive personal portfolio designed with a futuristic RPG-inspired interface. The portfolio presents my experience, skills, projects, and professional profile through an interactive game-like interface.",

    role:
      "Designer & Full-Stack Developer",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React",
    ],

    features: [
      "Interactive loading screen",
      "Section rail navigation",
      "Profile HUD",
      "Animated experience section",
      "Interactive skill tree",
      "Project archive",
      "Responsive interface",
      "Game-inspired UI",
    ],

    image:
      "/projects/portfolio.png",

    github:
      "https://github.com/",

    liveUrl:
      "",
  },
];

export const getProject = (id: string) =>
  projects.find((project) => project.id === id);
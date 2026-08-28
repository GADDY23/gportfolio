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
      "A web-based scheduling and assignment system developed to help ACLC College of Taytay manage rooms, teachers, sections, subjects, and class schedules through a centralized platform. To steamline schedule management, the system allows administrators to assign rooms and teachers to sections, detect scheduling conflicts, and manage schedules efficiently.",

    role:
      "Lead Full-Stack Developer",

    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
      "Blade",
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
      "/videos/Schedulingvideo.mp4",

    github:
      "https://github.com/",

    liveUrl: "",
  },

 {
  id: "healthcare-hospital-system",
  number: "02",

  title:
    "Healthcare Hospital Management System",

  subtitle:
    "Patient Appointment & Hospital Management",

  type: "FULL-STACK WEB APPLICATION",

  status: "Completed",

  description:
    "A web-based healthcare management system designed to streamline hospital services, patient information, and appointment scheduling. The system allows patients to explore medical services, departments, and doctors, manage their profiles, and schedule appointments, while administrators can manage hospital records and appointments.",

  role:
    "Full-Stack Developer",

  technologies: [
    "Laravel",
    "PHP",
    "MySQL",
    "Blade",
    "Tailwind CSS",
    "JavaScript",
    "Filament",
  ],

  features: [
    "Patient registration",
    "Patient profile management",
    "Doctor directory",
    "Department management",
    "Hospital services",
    "Appointment scheduling",
    "Appointment tracking",
    "Administrative dashboard",
  ],

  image:
    "/projects/hp.png",

  github:
    "",

  liveUrl:
    "",
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
  {
  id: "saffron-table",
  number: "04",

  title:
    "Saffron Table Reservation Platform",

  subtitle:
    "Dining Experiences • Guest Registration • Online Booking",

  type: "FULL-STACK WEB APPLICATION",

  status: "Completed",

  description:
    "A responsive restaurant reservation platform built for Saffron Table. The system allows guests to explore dining experiences, view menus, register accounts, and book reservations online. Administrators can manage guest records, reservations, and system data through a secure admin panel.",

  role:
    "Full-Stack Developer",

  technologies: [
    "Laravel",
    "PHP",
    "MySQL",
    "Tailwind CSS",
    "JavaScript",
    "Filament",
  ],

  features: [
    "Responsive homepage with navigation",
    "Dining experiences showcase",
    "Menu display",
    "Guest registration and profile management",
    "Reservation booking and confirmation",
    "Admin login and role-based access",
    "User record management",
    "Reservation tracking dashboard",
  ],

  image:
    "/projects/table.png",

  github:
    "",

  liveUrl:
    "",
},

];

export const getProject = (id: string) =>
  projects.find((project) => project.id === id);
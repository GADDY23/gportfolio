export type Education = {
  id: string;
  year: string;
  degree: string;
  school: string;
  description: string;
  achievements: string[];
  technologies?: string[];
};

export const education: Education[] = [
  {
    id: "bsis",
    year: "2022 — 2026",

    degree:
      "Bachelor of Science in Information Systems",

    school:
      "ACLC College of Taytay",

    description:
      "Completed a Bachelor of Science in Information Systems with a focus on information technology, software development, database systems, web development, and information systems analysis.",

    achievements: [
      "Summa Cum Laude",
      "Best in Capstone",
    ],

    technologies: [
      "Web Development",
      "Database Management",
      "Systems Analysis",
      "Software Development",
    ],
  },
];
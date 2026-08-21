"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import GalaxyBackground from "@/components/background/GalaxyBackground";

type Experience = {
  side: "left" | "right";
  icon: string;
  type: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  link?: string;
};

const experiences: Experience[] = [
  {
    side: "left",
    icon: "🎓",
    type: "DEGREE",
    year: "2022 – 2026",
    title: "Bachelor of Science in Information Systems",
    organization: "ACLC College of Taytay",
    description:
      "Graduated with Summa Cum Laude honors and Best in Capstone recognition, with 5+ academic systems developed to address real-world needs.",
    link: "/#education",
  },

  {
    side: "right",
    icon: "💼",
    type: "INTERNSHIP",
    year: "2025",
    title: "IT Support Intern",
    organization: "Sagility — Bridgetowne, Pasig City",
    description:
      "Provided hands-on technical support by troubleshooting hardware and software issues and assisting end users with technical problems.",
  },

  {
    side: "left",
    icon: "🚀",
    type: "CAPSTONE PROJECT",
    year: "",
    title: "Full Stack Developer & Project Lead",
    organization: "Web-Based Scheduling and Assignment System",
    description:
      "Led the development of an automated scheduling platform that replaced manual workflows and reduced scheduling conflicts.",
    link: "/#projects",
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative flex h-screen w-full flex-col overflow-hidden px-6 py-5 md:px-16 lg:pr-44">
      <GalaxyBackground />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 shrink-0 text-center"
      >
        <p className="font-mono text-[8px] font-bold tracking-[0.35em] text-purple-400">
          JOURNEY
        </p>

        <h2 className="mt-1 text-2xl font-black text-white md:text-3xl">
          My Journey
        </h2>

        <p className="mt-1 font-mono text-[7px] tracking-wider text-white/30">
          EXPERIENCE • EDUCATION • PROJECTS
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div className="relative mx-auto flex min-h-0 w-full max-w-6xl flex-1 items-center">
        {/* CENTER LINE */}
        <div
          className="
            absolute
            bottom-4
            left-1/2
            top-4
            hidden
            w-px
            -translate-x-1/2
            bg-gradient-to-b
            from-transparent
            via-purple-500
            to-transparent
            md:block
          "
        />

        {/* CENTER GLOW */}
        <div
          className="
            absolute
            bottom-4
            left-1/2
            top-4
            hidden
            w-1
            -translate-x-1/2
            bg-purple-500/10
            blur-md
            md:block
          "
        />

        {/* ITEMS */}
        <div className="flex w-full flex-col justify-center gap-3 md:gap-4">
          {experiences.map((experience, index) => {
            const isLeft = experience.side === "left";

            return (
              <div
                key={`${experience.type}-${experience.title}`}
                className="relative grid grid-cols-1 md:grid-cols-2"
              >
                {/* LEFT */}
                <div
                  className={`flex ${
                    isLeft ? "md:justify-end md:pr-7" : ""
                  }`}
                >
                  {isLeft && (
                    <ExperienceCard
                      experience={experience}
                      index={index}
                    />
                  )}
                </div>

                {/* RIGHT */}
                <div
                  className={`flex ${
                    !isLeft ? "md:justify-start md:pl-7" : ""
                  }`}
                >
                  {!isLeft && (
                    <ExperienceCard
                      experience={experience}
                      index={index}
                    />
                  )}
                </div>

                {/* CENTER NODE */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    z-20
                    hidden
                    -translate-x-1/2
                    -translate-y-1/2
                    md:block
                  "
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-purple-500
                      bg-black
                      text-[10px]
                      shadow-[0_0_15px_rgba(168,85,247,0.5)]
                    "
                  >
                    {experience.icon}
                  </motion.div>
                </div>

                {/* CONNECTOR */}
                <div
                  className={`
                    absolute
                    top-1/2
                    hidden
                    h-px
                    w-7
                    -translate-y-1/2
                    bg-purple-500/60
                    md:block
                    ${
                      isLeft
                        ? "right-1/2 mr-3"
                        : "left-1/2 ml-3"
                    }
                  `}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   EXPERIENCE CARD
========================================================= */

function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -25 : 25,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -2,
      }}
      className="
        group
        relative
        h-[170px]
        w-full
        max-w-[500px]
        rounded-lg
        border
        border-purple-500/50
        bg-black/60
        px-4
        py-3
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-purple-400
        hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]
      "
    >
      {/* CORNERS */}
      <div className="absolute left-0 top-0 h-2.5 w-2.5 border-l border-t border-purple-400" />
      <div className="absolute right-0 top-0 h-2.5 w-2.5 border-r border-t border-purple-400" />
      <div className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b border-l border-purple-400" />
      <div className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b border-r border-purple-400" />

      {/* TITLE */}
      <div className="flex items-start gap-2">
        <span className="text-xs">{experience.icon}</span>

        <div className="min-w-0">
          <h3 className="text-sm font-black leading-tight text-white md:text-[15px]">
            {experience.title}
          </h3>

          <p className="mt-0.5 text-[10px] font-semibold text-purple-400">
            {experience.organization}
          </p>
        </div>
      </div>

      {/* META */}
      <div className="mt-2 flex items-center gap-2">
        <span
          className="
            rounded-full
            border
            border-emerald-500/60
            bg-emerald-500/10
            px-2
            py-0.5
            font-mono
            text-[7px]
            font-bold
            text-emerald-400
          "
        >
          {experience.type}
        </span>

        {experience.year && (
          <span className="font-mono text-[8px] text-white/40">
            {experience.year}
          </span>
        )}
      </div>

      {/* DESCRIPTION */}
      <p className="mt-2 text-[10px] leading-4 text-white/60 md:text-[11px]">
        {experience.description}
      </p>
      
    </motion.div>
  );
}
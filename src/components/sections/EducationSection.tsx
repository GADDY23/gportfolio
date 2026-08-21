"use client";
import GalaxyBackground from "@/components/background/GalaxyBackground";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Trophy,
  Award,
  BookOpen,
} from "lucide-react";

import { education } from "@/data/education";

export default function EducationSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden px-5 py-10 text-white md:px-10 lg:pr-44">
<GalaxyBackground />
      {/* Background grid */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div
          className="
            absolute
            inset-0
            [background-image:linear-gradient(rgba(168,85,247,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,.25)_1px,transparent_1px)]
            [background-size:40px_40px]
          "
        />
      </div>

      {/* Main container */}

      <div className="relative z-10 mx-auto w-full max-w-6xl">

        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-8 text-center"
        >
          <p className="font-mono text-[8px] font-bold tracking-[0.4em] text-purple-400">
            CHARACTER DEVELOPMENT
          </p>

          <h2 className="mt-2 text-3xl font-black uppercase tracking-wider md:text-4xl">
            Education
          </h2>

          <p className="mt-2 font-mono text-[7px] tracking-[0.25em] text-white/30">
            ACADEMIC PROGRESSION LOG
          </p>
        </motion.div>

        {/* Education cards */}

        <div className="space-y-8">

          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              className="relative"
            >

              {/* Timeline */}

              <div className="absolute left-5 top-10 bottom-[-32px] hidden w-px bg-gradient-to-b from-purple-500/60 via-cyan-400/30 to-transparent md:block" />

              {/* Timeline node */}

              <motion.div
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.12 + 0.2,
                }}
                className="
                  absolute
                  left-[11px]
                  top-8
                  hidden
                  h-3
                  w-3
                  rounded-full
                  border
                  border-cyan-300
                  bg-cyan-400
                  shadow-[0_0_15px_rgba(34,211,238,.7)]
                  md:block
                "
              />

              {/* Card */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-purple-500/25
                  bg-black/50
                  p-5
                  backdrop-blur-xl
                  md:ml-12
                  md:p-7
                "
              >

                {/* top glow */}

                <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/70 to-transparent" />

                {/* Header */}

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                  <div className="flex items-start gap-4">

                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-purple-400/30
                        bg-purple-500/[0.08]
                      "
                    >
                      <GraduationCap
                        size={22}
                        className="text-purple-300"
                      />
                    </div>

                    {/* Degree */}

                    <div>

                      <p className="font-mono text-[7px] tracking-[0.3em] text-purple-400">
                        EDUCATION RECORD
                      </p>

                      <h3 className="mt-1 text-lg font-black uppercase leading-tight md:text-2xl">
                        {item.degree}
                      </h3>

                      <p className="mt-1 text-[10px] text-cyan-300/70">
                        {item.school}
                      </p>

                    </div>

                  </div>

                  {/* Year */}

                  <div
                    className="
                      shrink-0
                      rounded-lg
                      border
                      border-cyan-400/20
                      bg-cyan-400/[0.04]
                      px-3
                      py-2
                      font-mono
                      text-[8px]
                      text-cyan-300
                    "
                  >
                    {item.year}
                  </div>

                </div>

                {/* Description */}

                <div className="mt-6">

                  <div className="flex items-center gap-2">

                    <BookOpen
                      size={13}
                      className="text-purple-400"
                    />

                    <span className="font-mono text-[7px] font-bold tracking-[0.25em] text-white/30">
                      ACADEMIC PROFILE
                    </span>

                  </div>

                  <p className="mt-2 max-w-3xl text-[10px] leading-5 text-white/50">
                    {item.description}
                  </p>

                </div>

                {/* Achievements */}

                <div className="mt-6">

                  <div className="flex items-center gap-2">

                    <Trophy
                      size={13}
                      className="text-yellow-300"
                    />

                    <span className="font-mono text-[7px] font-bold tracking-[0.25em] text-white/30">
                      ACHIEVEMENTS
                    </span>

                  </div>

                  <div className="mt-3 grid gap-2 sm:grid-cols-2">

                    {item.achievements.map(
                      (achievement) => (
                        <div
                          key={achievement}
                          className="
                            flex
                            items-center
                            gap-3
                            rounded-lg
                            border
                            border-yellow-400/15
                            bg-yellow-400/[0.03]
                            px-3
                            py-2.5
                          "
                        >

                          <Award
                            size={14}
                            className="shrink-0 text-yellow-300"
                          />

                          <span className="text-[9px] font-semibold text-white/65">
                            {achievement}
                          </span>

                        </div>
                      )
                    )}

                  </div>

                </div>

                {/* Areas */}

                {item.technologies &&
                  item.technologies.length > 0 && (
                    <div className="mt-6">

                      <p className="font-mono text-[7px] font-bold tracking-[0.25em] text-white/25">
                        AREAS OF STUDY
                      </p>

                      <div className="mt-2 flex flex-wrap gap-1.5">

                        {item.technologies.map(
                          (technology) => (
                            <span
                              key={technology}
                              className="
                                rounded-md
                                border
                                border-purple-500/20
                                bg-purple-500/[0.05]
                                px-2.5
                                py-1.5
                                font-mono
                                text-[7px]
                                text-purple-200/60
                              "
                            >
                              {technology}
                            </span>
                          )
                        )}

                      </div>

                    </div>
                  )}

              </div>

            </motion.div>
          ))}

        </div>

        {/* Completion indicator */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.7,
          }}
          className="mt-8 flex items-center justify-center gap-3"
        >

          <div className="h-px w-16 bg-purple-500/20" />

          <span className="font-mono text-[7px] tracking-[0.25em] text-white/20">
            ACADEMIC RECORD COMPLETE
          </span>

          <div className="h-px w-16 bg-purple-500/20" />

        </motion.div>

      </div>

    </section>
  );
}
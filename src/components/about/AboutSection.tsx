"use client";

import { motion } from "framer-motion";
import { ChevronDown, Crosshair } from "lucide-react";
import GalaxyBackground from "@/components/background/GalaxyBackground";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* =========================================================
          GALAXY BACKGROUND
      ========================================================== */}

      <GalaxyBackground />

      {/* Dark overlay for readability */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/35" />

      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.65)_100%)]" />

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-[1250px] px-6 py-24 md:px-12 lg:px-16">

          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

            {/* =================================================
                LEFT — ABOUT CONTENT
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              {/* Section label */}

              <div className="mb-7 flex items-center gap-3">
                <Crosshair
                  size={17}
                  strokeWidth={1.5}
                  className="text-purple-400"
                />

                <p className="font-mono text-sm font-bold tracking-[0.18em] text-purple-400">
                  ABOUT ME
                </p>
              </div>

              {/* Main heading */}

              <h1 className="max-w-[620px] text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl">
                Building reliable and
                <br />
                scalable web systems.
              </h1>

              {/* Description */}

              <p className="mt-7 max-w-[580px] text-base leading-7 text-slate-300 sm:text-lg">
                I'm a BS Information Systems graduate and aspiring Full Stack
                Developer with hands-on experience in web development and IT
                support. I build practical web applications using modern
                technologies, with a focus on clean design, usability, and
                solving real-world problems.
              </p>

              {/* Availability */}

              <div className="mt-8 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />

                <span className="font-mono text-[10px] tracking-[0.15em] text-white/45">
                  AVAILABLE FOR OPPORTUNITIES
                </span>
              </div>
            </motion.div>

            {/* =================================================
                RIGHT — INFORMATION CARDS
            ================================================== */}

            <div className="flex flex-col gap-5">

              {/* Mission */}

              <InfoCard
                label="MISSION"
                delay={0.25}
              >
                To build scalable, user-focused systems that solve real-world
                problems.
              </InfoCard>

              {/* Focus */}

              <motion.div
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.4,
                }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-md transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/[0.04]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-500/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <p className="relative font-mono text-xs font-bold tracking-[0.15em] text-purple-400">
                  FOCUS
                </p>

                <ul className="relative mt-4 space-y-3">
                  {[
                    "Software Development",
                    "Full Stack Web Development",
                    "System Design",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />

                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Growth */}

              <InfoCard
                label="GROWTH"
                delay={0.55}
              >
                Continuously developing my skills through hands-on projects,
                real-world experience, and emerging technologies.
              </InfoCard>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 0.8,
        }}
        className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-center"
      >
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-white/45">
          Scroll down to explore
        </span>

        <motion.div
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown
            size={16}
            strokeWidth={1.5}
            className="text-purple-400"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| Information Card
|--------------------------------------------------------------------------
*/

function InfoCard({
  label,
  children,
  delay,
}: {
  label: string;
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 25,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.7,
        delay,
      }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-md transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/[0.04]"
    >
      {/* Subtle hover glow */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-500/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <p className="relative font-mono text-xs font-bold tracking-[0.15em] text-purple-400">
        {label}
      </p>

      <p className="relative mt-4 text-sm leading-6 text-slate-300">
        {children}
      </p>
    </motion.div>
  );
}
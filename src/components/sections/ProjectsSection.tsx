"use client";
import GalaxyBackground from "@/components/background/GalaxyBackground";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import {
  projects,
  type Project,
} from "@/data/projects";

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] =
    useState<Project>(projects[0]);

  const selectProject = (project: Project) => {
    if (project.id === selectedProject.id) return;

    setSelectedProject(project);
  };

  return (
    <section className="relative flex h-screen w-full flex-col overflow-hidden px-4 py-5 text-white md:px-8 lg:pr-44">
      <GalaxyBackground />
      
      {/* =========================================
          BACKGROUND GRID
      ========================================= */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div
          className="
            absolute
            inset-0
            [background-image:linear-gradient(rgba(168,85,247,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,.2)_1px,transparent_1px)]
            [background-size:40px_40px]
          "
        />
      </div>

      {/* =========================================
          HEADER
      ========================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: -15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="relative z-10 shrink-0 text-center"
      >
        <p className="font-mono text-[8px] font-bold tracking-[0.4em] text-purple-400">
          PROJECT DATABASE
        </p>

        <h2 className="mt-1 text-2xl font-black uppercase tracking-wide md:text-3xl">
          Projects
        </h2>

        <p className="mt-1 font-mono text-[7px] tracking-[0.2em] text-white/30">
          SELECT A PROJECT TO VIEW DETAILS
        </p>
      </motion.div>

      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <div className="relative z-10 mx-auto mt-5 flex min-h-0 w-full max-w-[1250px] flex-1">

        {/* =======================================
            PROJECT LIST
        ======================================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="
            flex
            min-h-0
            w-full
            flex-col
            gap-3
            overflow-y-auto
            pb-5
            pr-1
            md:w-[38%]
            md:pr-4
          "
        >
          {projects.map((project) => {
            const active =
              selectedProject.id === project.id;

            return (
              <motion.button
                key={project.id}
                variants={itemVariants}
                type="button"
                onClick={() => selectProject(project)}
                className={`
                  group
                  relative
                  shrink-0
                  overflow-hidden
                  rounded-xl
                  border
                  p-4
                  text-left
                  backdrop-blur-md
                  transition-all
                  duration-300

                  ${
                    active
                      ? "border-cyan-400/60 bg-purple-500/[0.12] shadow-[0_0_25px_rgba(34,211,238,0.08)]"
                      : "border-purple-500/20 bg-black/40 hover:border-purple-400/40 hover:bg-purple-500/[0.06]"
                  }
                `}
              >
                {/* active indicator */}

                <motion.div
                  animate={{
                    opacity: active ? 1 : 0,
                  }}
                  className="absolute left-0 top-0 h-full w-[2px] bg-cyan-400"
                />

                <div className="flex items-start gap-3">

                  {/* number */}

                  <div
                    className={`
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      font-mono
                      text-[9px]
                      font-bold

                      ${
                        active
                          ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-300"
                          : "border-purple-500/20 text-purple-400/60"
                      }
                    `}
                  >
                    {project.number}
                  </div>

                  {/* text */}

                  <div className="min-w-0">

                    <p className="font-mono text-[6px] tracking-[0.25em] text-purple-400/70">
                      {project.type}
                    </p>

                    <h3
                      className={`
                        mt-1
                        text-[11px]
                        font-bold
                        uppercase
                        leading-4

                        ${
                          active
                            ? "text-white"
                            : "text-white/60 group-hover:text-white/90"
                        }
                      `}
                    >
                      {project.title}
                    </h3>

                    <p className="mt-1 text-[8px] text-white/30">
                      {project.subtitle}
                    </p>

                  </div>

                </div>

                {/* status */}

                <div className="mt-3 flex items-center justify-between">

                  <span
                    className={`
                      rounded-full
                      border
                      px-2
                      py-1
                      font-mono
                      text-[6px]

                      ${
                        project.status === "Completed"
                          ? "border-cyan-500/20 bg-cyan-500/5 text-cyan-400"
                          : "border-yellow-500/20 bg-yellow-500/5 text-yellow-400"
                      }
                    `}
                  >
                    {project.status}
                  </span>

                  <span className="font-mono text-[6px] text-white/20">
                    VIEW PROJECT →
                  </span>

                </div>

              </motion.button>
            );
          })}
        </motion.div>

        {/* =======================================
            PROJECT DETAILS
        ======================================= */}

        <div className="hidden min-h-0 flex-1 md:block">

          <AnimatePresence
            mode="wait"
          >
            <motion.div
              key={selectedProject.id}
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -15,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                relative
                ml-2
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-purple-500/25
                bg-black/55
                backdrop-blur-xl
              "
            >

              {/* project image */}

              <ProjectVisual
                project={selectedProject}
              />

              {/* details */}

              <div className="min-h-0 flex-1 overflow-y-auto p-5">

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <p className="font-mono text-[7px] tracking-[0.3em] text-purple-400">
                      PROJECT {selectedProject.number}
                    </p>

                    <h3 className="mt-1 text-xl font-black uppercase leading-tight md:text-2xl">
                      {selectedProject.title}
                    </h3>

                    <p className="mt-1 font-mono text-[8px] text-cyan-300/70">
                      {selectedProject.subtitle}
                    </p>

                  </div>

                  <span
                    className={`
                      shrink-0
                      rounded-full
                      border
                      px-2
                      py-1
                      font-mono
                      text-[6px]

                      ${
                        selectedProject.status === "Completed"
                          ? "border-cyan-500/30 bg-cyan-500/5 text-cyan-300"
                          : "border-yellow-500/30 bg-yellow-500/5 text-yellow-300"
                      }
                    `}
                  >
                    {selectedProject.status}
                  </span>

                </div>

                {/* description */}

                <div className="mt-5">

                  <SectionLabel>
                    DESCRIPTION
                  </SectionLabel>

                  <p className="mt-2 max-w-2xl text-[10px] leading-5 text-white/55">
                    {selectedProject.description}
                  </p>

                </div>

                {/* role */}

                <div className="mt-4">

                  <SectionLabel>
                    ROLE
                  </SectionLabel>

                  <p className="mt-1 text-[9px] text-white/60">
                    {selectedProject.role}
                  </p>

                </div>

                {/* technologies */}

                <div className="mt-4">

                  <SectionLabel>
                    TECHNOLOGIES
                  </SectionLabel>

                  <div className="mt-2 flex flex-wrap gap-1.5">

                    {selectedProject.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="
                            rounded-md
                            border
                            border-purple-500/20
                            bg-purple-500/[0.06]
                            px-2
                            py-1
                            font-mono
                            text-[7px]
                            text-purple-200/70
                          "
                        >
                          {technology}
                        </span>
                      )
                    )}

                  </div>

                </div>

                {/* features */}

                <div className="mt-4">

                  <SectionLabel>
                    KEY FEATURES
                  </SectionLabel>

                  <div className="mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2">

                    {selectedProject.features.map(
                      (feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-[8px] text-white/45"
                        >
                          <span className="text-cyan-400">
                            ◆
                          </span>

                          {feature}
                        </div>
                      )
                    )}

                  </div>

                </div>

                {/* buttons */}

                <div className="mt-5 flex flex-wrap gap-2">

                  {selectedProject.video && (
                    <a
                      href="#project-video"
                      className="
                        rounded-lg
                        border
                        border-cyan-400/30
                        bg-cyan-400/[0.06]
                        px-4
                        py-2
                        font-mono
                        text-[7px]
                        font-bold
                        tracking-wider
                        text-cyan-300
                        transition
                        hover:border-cyan-300
                        hover:bg-cyan-400/10
                      "
                    >
                      WATCH DEMO
                    </a>
                  )}

                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        rounded-lg
                        border
                        border-purple-400/30
                        bg-purple-400/[0.06]
                        px-4
                        py-2
                        font-mono
                        text-[7px]
                        font-bold
                        tracking-wider
                        text-purple-300
                        transition
                        hover:border-purple-300
                        hover:bg-purple-400/10
                      "
                    >
                      GITHUB
                    </a>
                  )}

                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        rounded-lg
                        border
                        border-white/15
                        bg-white/[0.03]
                        px-4
                        py-2
                        font-mono
                        text-[7px]
                        font-bold
                        tracking-wider
                        text-white/60
                        transition
                        hover:border-white/30
                        hover:text-white
                      "
                    >
                      LIVE PROJECT
                    </a>
                  )}

                </div>

                {/* video */}

                {selectedProject.video && (
                  <div
                    id="project-video"
                    className="mt-5 overflow-hidden rounded-xl border border-purple-500/20 bg-black"
                  >
                    <video
                      controls
                      preload="metadata"
                      className="w-full"
                    >
                      <source
                        src={selectedProject.video}
                        type="video/mp4"
                      />

                      Your browser does not support video playback.
                    </video>
                  </div>
                )}

              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>

      {/* =========================================
          MOBILE DETAILS
      ========================================= */}

      <div className="relative z-10 mt-3 md:hidden">

        <AnimatePresence mode="wait">

          <motion.div
            key={selectedProject.id}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              max-h-[48vh]
              overflow-y-auto
              rounded-xl
              border
              border-purple-500/25
              bg-black/60
              p-4
              backdrop-blur-xl
            "
          >

            <p className="font-mono text-[7px] tracking-[0.3em] text-purple-400">
              PROJECT {selectedProject.number}
            </p>

            <h3 className="mt-1 text-lg font-black uppercase">
              {selectedProject.title}
            </h3>

            <p className="mt-1 text-[8px] text-cyan-300/70">
              {selectedProject.subtitle}
            </p>

            <p className="mt-3 text-[9px] leading-4 text-white/50">
              {selectedProject.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-1">

              {selectedProject.technologies.map(
                (technology) => (
                  <span
                    key={technology}
                    className="
                      rounded
                      border
                      border-purple-500/20
                      px-2
                      py-1
                      font-mono
                      text-[6px]
                      text-purple-300/70
                    "
                  >
                    {technology}
                  </span>
                )
              )}

            </div>

            <div className="mt-4 flex flex-wrap gap-2">

              {selectedProject.video && (
                <a
                  href={selectedProject.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-md
                    border
                    border-cyan-400/30
                    px-3
                    py-2
                    font-mono
                    text-[7px]
                    text-cyan-300
                  "
                >
                  WATCH DEMO
                </a>
              )}

              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-md
                    border
                    border-purple-400/30
                    px-3
                    py-2
                    font-mono
                    text-[7px]
                    text-purple-300
                  "
                >
                  GITHUB
                </a>
              )}

            </div>

          </motion.div>

        </AnimatePresence>

      </div>

    </section>
  );
}

/* =============================================
   SMALL COMPONENTS
============================================= */

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="font-mono text-[7px] font-bold tracking-[0.25em] text-white/25">
      {children}
    </p>
  );
}

function ProjectVisual({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="relative h-[170px] shrink-0 overflow-hidden border-b border-purple-500/20 bg-black md:h-[190px]">

      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover opacity-70 transition duration-500"
        />
      ) : (
        <div className="flex h-full items-center justify-center">
          <div className="text-center">

            <div className="font-mono text-[8px] tracking-[0.4em] text-purple-400/60">
              PROJECT
            </div>

            <div className="mt-2 text-4xl font-black text-white/10">
              {project.number}
            </div>

          </div>
        </div>
      )}

      {/* overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="absolute bottom-3 left-4">

        <span className="rounded border border-cyan-400/30 bg-black/60 px-2 py-1 font-mono text-[6px] tracking-wider text-cyan-300">
          {project.type}
        </span>

      </div>

    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import {
  X,
  Briefcase,
  FolderKanban,
  Sparkles,
} from "lucide-react";

import type { Skill } from "@/data/skills";

type SkillDetailsProps = {
  skill: Skill;
  onClose: () => void;
};

export default function SkillDetails({
  skill,
  onClose,
}: SkillDetailsProps) {
  const Icon = skill.icon;

  return (
    <motion.aside
      initial={{
        opacity: 0,
        x: 30,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: 30,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        absolute
        right-0
        top-0
        z-30
        w-[340px]
        max-w-[calc(100%-16px)]
        rounded-2xl
        border
        border-purple-500/30
        bg-black/90
        p-6
        shadow-[0_0_50px_rgba(168,85,247,0.12)]
        backdrop-blur-xl
        md:w-[360px]
      "
    >
      {/* HEADER */}

      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-xl
              border
              border-purple-400/40
              bg-purple-500/10
            "
          >
            <Icon
              size={22}
              className="text-purple-300"
            />
          </div>

          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-purple-400">
              Skill Profile
            </p>

            <h3 className="mt-1 text-xl font-black uppercase text-white">
              {skill.name}
            </h3>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="
            rounded-lg
            border border-white/10
            p-2
            text-white/40
            transition
            hover:border-purple-400/40
            hover:text-white
          "
        >
          <X size={14} />
        </button>
      </div>

      {/* CATEGORY */}

      <p className="mt-2 text-xs uppercase tracking-widest text-white/30">
        {skill.category}
      </p>

      {/* PROGRESS */}

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-mono text-[9px] uppercase tracking-widest text-purple-300">
            Progression
          </span>

          <span className="font-mono text-xs font-bold text-cyan-300">
            {skill.level * 10}%
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: `${skill.level * 10}%`,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="
              h-full
              rounded-full
              bg-gradient-to-r
              from-purple-500
              via-fuchsia-400
              to-cyan-400
              shadow-[0_0_12px_rgba(34,211,238,0.5)]
            "
          />
        </div>
      </div>

      {/* BADGES */}

      <div className="mt-4 flex gap-2">
        <span
          className="
            rounded-full
            border border-cyan-400/30
            px-3 py-1
            font-mono text-[8px]
            uppercase tracking-wider
            text-cyan-300
          "
        >
          {skill.proficiency}
        </span>

        <span
          className="
            rounded-full
            border border-purple-400/30
            px-3 py-1
            font-mono text-[8px]
            uppercase tracking-wider
            text-purple-300
          "
        >
          LEVEL {skill.level}
        </span>
      </div>

      {/* DESCRIPTION */}

      <div className="mt-7">
        <div className="flex items-center gap-2">
          <Sparkles
            size={12}
            className="text-purple-400"
          />

          <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-purple-400">
            Description
          </p>
        </div>

        <p className="mt-3 text-sm leading-6 text-white/60">
          {skill.description}
        </p>
      </div>

      {/* EXPERIENCE */}

      <div className="mt-7">
        <div className="flex items-center gap-2">
          <Briefcase
            size={12}
            className="text-purple-400"
          />

          <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-purple-400">
            Experience
          </p>
        </div>

        <p className="mt-3 text-sm text-white/70">
          {skill.experience}
        </p>
      </div>

      {/* PROJECTS */}

      <div className="mt-7">
        <div className="flex items-center gap-2">
          <FolderKanban
            size={12}
            className="text-purple-400"
          />

          <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-purple-400">
            Projects
          </p>
        </div>

        <div className="mt-3 space-y-2">
          {skill.projects?.map((project) => (
            <div
              key={project}
              className="
                rounded-lg
                border border-white/10
                bg-white/[0.02]
                px-3 py-2
                text-xs
                text-white/70
              "
            >
              <span className="mr-2 text-cyan-400">
                ◆
              </span>

              {project}
            </div>
          ))}
        </div>
      </div>

      {/* RELATED SKILLS */}

      {skill.relatedSkills.length > 0 && (
        <div className="mt-7">
          <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-purple-400">
            Related Skills
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {skill.relatedSkills.map((id) => (
              <span
                key={id}
                className="
                  rounded-full
                  border border-purple-500/30
                  bg-purple-500/5
                  px-3 py-1
                  text-[9px]
                  text-white/60
                "
              >
                {id}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.aside>
  );
}
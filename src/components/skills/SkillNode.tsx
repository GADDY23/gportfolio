"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/data/skills";

type SkillNodeProps = {
  skill: Skill;
  primary?: boolean;
  selected?: boolean;
  connected?: boolean;
  dimmed?: boolean;
  onClick: () => void;
};

export default function SkillNode({
  skill,
  selected = false,
  connected = false,
  dimmed = false,
  onClick,
}: SkillNodeProps) {
  const Icon = skill.icon;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{
        scale: 1.06,
      }}
      whileTap={{
        scale: 0.96,
      }}
      animate={{
        opacity: dimmed ? 0.25 : 1,
        scale: selected ? 1.08 : 1,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative flex w-[120px] flex-col items-center"
    >
      {/* glow */}
      <div
        className={`
          pointer-events-none absolute
          h-24 w-24 rounded-full
          blur-2xl transition-opacity duration-300
          ${
            selected
              ? "bg-purple-500/40 opacity-100"
              : "bg-cyan-400/10 opacity-0 group-hover:opacity-100"
          }
        `}
      />

      {/* node */}
      <div
        className={`
          relative flex h-16 w-16
          items-center justify-center
          rounded-full border
          bg-black/90
          transition-all duration-300
          ${
            selected
              ? "border-purple-300 shadow-[0_0_30px_rgba(168,85,247,0.8)]"
              : connected
                ? "border-cyan-400/70"
                : "border-purple-500/50"
          }
        `}
      >
        <Icon
          size={26}
          strokeWidth={1.8}
          className={`
            transition-colors duration-300
            ${
              selected
                ? "text-white"
                : connected
                  ? "text-cyan-300"
                  : "text-white/70"
            }
          `}
        />

        {/* online/unlocked indicator */}
        <span
          className="
            absolute
            -right-1
            -top-1
            h-2.5
            w-2.5
            rounded-full
            bg-cyan-400
            shadow-[0_0_10px_rgba(34,211,238,0.9)]
          "
        />
      </div>

      {/* name */}
      <span
        className={`
          mt-3 text-center
          text-[10px] font-bold
          uppercase tracking-wide
          ${
            selected
              ? "text-white"
              : "text-white/70"
          }
        `}
      >
        {skill.name}
      </span>

      {/* level */}
      <span
        className="
          mt-1
          font-mono
          text-[8px]
          tracking-wider
          text-purple-400/70
        "
      >
        LVL {skill.level}
      </span>
    </motion.button>
  );
}
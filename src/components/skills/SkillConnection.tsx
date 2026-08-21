"use client";

import { motion } from "framer-motion";

type SkillConnectionProps = {
  vertical?: boolean;
  active?: boolean;
};

export default function SkillConnection({
  vertical = true,
  active = true,
}: SkillConnectionProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scaleY: vertical ? 0 : 1,
      }}
      animate={{
        opacity: active ? 1 : 0.25,
        scaleY: 1,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`
        pointer-events-none
        absolute
        ${
          vertical
            ? "left-1/2 top-0 h-7 w-px -translate-x-1/2"
            : "left-1/2 top-1/2 h-px w-full -translate-y-1/2"
        }
        ${
          active
            ? "bg-gradient-to-b from-purple-400 via-cyan-400 to-cyan-400 shadow-[0_0_8px_rgba(34,211,238,.7)]"
            : "bg-purple-500/20"
        }
      `}
    />
  );
}
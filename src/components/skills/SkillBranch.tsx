"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/data/skills";
import SkillNode from "./SkillNode";

type Props = {
  parent: Skill;
  children: Skill[];
  selectedSkill: Skill | null;
  onSelect: (skill: Skill) => void;
};

export default function SkillBranch({
  parent,
  children,
  selectedSkill,
  onSelect,
}: Props) {
  if (!children.length) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="relative mt-8 w-full"
    >
      {/* parent → children vertical line */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-7
          w-px
          -translate-x-1/2
          bg-gradient-to-b
          from-purple-400
          to-cyan-400
        "
      />

      {/* horizontal local connector */}
      <div
        className="
          absolute
          left-[15%]
          right-[15%]
          top-7
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-400/70
          to-transparent
        "
      />

      <div
        className="
          relative
          mx-auto
          grid
          w-full
          max-w-[520px]
          grid-cols-2
          justify-items-center
          gap-x-5
          gap-y-8
          pt-12
          sm:grid-cols-3
        "
      >
        {children.map((skill, index) => (
          <div
            key={skill.id}
            className="relative flex justify-center"
          >
            {/* vertical child connector */}
            <div
              className="
                absolute
                left-1/2
                top-[-20px]
                h-5
                w-px
                -translate-x-1/2
                bg-cyan-400/60
              "
            />

            <SkillNode
              skill={skill}
              selected={selectedSkill?.id === skill.id}
              dimmed={
                selectedSkill !== null &&
                selectedSkill.id !== skill.id
              }
              onClick={() => onSelect(skill)}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

import {
  skills,
  type Skill,
} from "@/data/skills";

import SkillNode from "./SkillNode";
import SkillBranch from "./SkillBranch";

const primaryIds = [
  "frontend",
  "backend",
  "database",
  "tools",
  "it-support",
  "professional",
];

function getSkill(id: string) {
  return skills.find(
    (skill) => skill.id === id
  );
}

export default function SkillTree({
  selectedSkill,
  onSelectSkill,
}: {
  selectedSkill: Skill | null;
  onSelectSkill: (
    skill: Skill
  ) => void;
}) {
  const [activePrimary, setActivePrimary] =
    useState<string | null>(null);

  /*
  |--------------------------------------------------------------------------
  | Current primary
  |--------------------------------------------------------------------------
  */

  const currentPrimary = useMemo(() => {
    if (!selectedSkill) {
      return activePrimary;
    }

    if (
      primaryIds.includes(selectedSkill.id)
    ) {
      return selectedSkill.id;
    }

    const primary = primaryIds
      .map(getSkill)
      .find((skill) =>
        skill?.children?.includes(
          selectedSkill.id
        )
      );

    return primary?.id ?? activePrimary;
  }, [selectedSkill, activePrimary]);

  /*
  |--------------------------------------------------------------------------
  | Select primary
  |--------------------------------------------------------------------------
  */

  const handlePrimaryClick = (
    skill: Skill
  ) => {
    if (activePrimary === skill.id) {
      setActivePrimary(null);
      return;
    }

    setActivePrimary(skill.id);
    onSelectSkill(skill);
  };

  return (
    <div className="relative w-full">
      {/* ================================================================
          CORE LINE
      ================================================================ */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          hidden
          h-10
          w-px
          -translate-x-1/2
          bg-gradient-to-b
          from-purple-400/70
          to-purple-500/10
          md:block
        "
      />

      {/* ================================================================
          CORE NODE
      ================================================================ */}

      <div
        className="
          relative
          z-20
          mb-8
          hidden
          justify-center
          md:flex
        "
      >
        <motion.div
          animate={{
            boxShadow: [
              "0 0 8px rgba(168,85,247,.2)",
              "0 0 22px rgba(168,85,247,.55)",
              "0 0 8px rgba(168,85,247,.2)",
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-purple-400/60
            bg-black
            font-mono
            text-sm
            text-purple-300
          "
        >
          ◆
        </motion.div>
      </div>

      {/* ================================================================
          SIX PRIMARY SKILLS
      ================================================================ */}

      <div
        className="
          grid
          grid-cols-2
          gap-x-5
          gap-y-10
          md:grid-cols-3
          lg:grid-cols-6
        "
      >
        {primaryIds.map((id) => {
          const skill = getSkill(id);

          if (!skill) return null;

          const selected =
            currentPrimary === skill.id;

          const dimmed =
            currentPrimary !== null &&
            !selected;

          const children =
            skill.children
              ?.map(getSkill)
              .filter(
                Boolean
              ) as Skill[];

          return (
            <motion.div
              key={skill.id}
              layout
              className="
                relative
                flex
                min-w-0
                flex-col
                items-center
              "
              animate={{
                opacity: dimmed ? 0.3 : 1,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              {/* primary node */}

              <SkillNode
                skill={skill}
                primary
                selected={selected}
                connected={selected}
                dimmed={dimmed}
                onClick={() =>
                  handlePrimaryClick(
                    skill
                  )
                }
              />

              {/* branch */}

              <AnimatePresence
                initial={false}
                mode="wait"
              >
                {selected &&
                  children.length > 0 && (
                    <SkillBranch
                      key={skill.id}
                      parent={skill}
                      children={children}
                      selectedSkill={
                        selectedSkill
                      }
                      onSelect={
                        onSelectSkill
                      }
                    />
                  )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
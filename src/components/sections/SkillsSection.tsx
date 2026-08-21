"use client";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  Code2,
  Braces,
  Database,
  Headphones,
  Wrench,
  UserRound,
  Monitor,
  Laptop,
  Wifi,
  Settings,
  LifeBuoy,
  Network,
  Server,
  GitBranch,
  
  FileCode2,
  Terminal,
  Package,
  HardDrive,
  ShieldCheck,
  MessageSquare,
  Brain,
  Users,
  Lightbulb,
  Target,
  CodeXml,
  X,
  Sparkles,
} from "lucide-react";

import { useMemo, useState } from "react";

import GalaxyBackground from "@/components/background/GalaxyBackground";

import {
  skills,
  type Skill,
} from "@/data/skills";

/* -------------------------------------------------------------------------- */
/* ICONS                                                                      */
/* -------------------------------------------------------------------------- */

const iconMap: Record<
  string,
  React.ComponentType<{
    size?: number;
    strokeWidth?: number;
    className?: string;
  }>
> = {
  frontend: Code2,
  backend: Braces,
  database: Database,
  "it-support": Headphones,
  tools: Wrench,
  professional: UserRound,

  html5: CodeXml,
  css3: Code2,
  javascript: Code2,
  react: Code2,
  tailwind: Sparkles,
  bootstrap: Package,

  php: Braces,
  laravel: Code2,
  "rest-api": Server,

  mysql: Database,
  mariadb: Database,

  git: GitBranch,
 
  vscode: FileCode2,
  laragon: Terminal,
  xampp: Server,

  "technical-support": Headphones,
  hardware: Monitor,
  software: Laptop,
  network: Wifi,
  "pc-assembly": HardDrive,
  maintenance: Settings,

  "problem-solving": Lightbulb,
  "analytical-thinking": Brain,
  communication: MessageSquare,
  adaptability: Target,
  teamwork: Users,
  "attention-detail": ShieldCheck,

  troubleshooting: LifeBuoy,
  "help-desk": Headphones,
  assistance: UserRound,
};

/* -------------------------------------------------------------------------- */
/* CATEGORY STRUCTURE                                                         */
/* -------------------------------------------------------------------------- */

const categories = [
  {
    id: "frontend",
    label: "FRONTEND",
    children: [
      "html5",
      "css3",
      "javascript",
      "react",
      "tailwind",
      "bootstrap",
    ],
  },

  {
    id: "backend",
    label: "BACKEND",
    children: [
      "php",
      "laravel",
      "rest-api",
    ],
  },

  {
    id: "database",
    label: "DATABASE",
    children: [
      "mysql",
      "mariadb",
    ],
  },

  {
    id: "it-support",
    label: "IT SUPPORT",
    children: [
      "technical-support",
      "hardware",
      "software",
      "network",
      "pc-assembly",
      "maintenance",
    ],
  },

  {
    id: "tools",
    label: "TOOLS",
    children: [
      "git",
      "github",
      "vscode",
      "laragon",
      "xampp",
    ],
  },

  {
    id: "professional",
    label: "PROFESSIONAL",
    children: [
      "problem-solving",
      "analytical-thinking",
      "communication",
      "adaptability",
      "teamwork",
      "attention-detail",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* HELPERS                                                                    */
/* -------------------------------------------------------------------------- */

function getSkill(id: string) {
  return skills.find(
    (skill) => skill.id === id
  );
}

function getIcon(id: string) {
  return iconMap[id] ?? Sparkles;
}

/* -------------------------------------------------------------------------- */
/* SKILL NODE                                                                  */
/* -------------------------------------------------------------------------- */

function SkillNode({
  skill,
  selected,
  dimmed,
  onClick,
  size = "primary",
}: {
  skill: Skill;
  selected?: boolean;
  dimmed?: boolean;
  onClick: () => void;
  size?: "primary" | "child";
}) {
  const Icon = getIcon(skill.id);

  const primary = size === "primary";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: dimmed ? 0.25 : 1,
        scale: selected ? 1.05 : 1,
      }}
      whileHover={{
        scale: selected ? 1.08 : 1.06,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        group
        relative
        flex
        flex-col
        items-center
        outline-none
        ${
          primary
            ? "w-[120px]"
            : "w-[100px]"
        }
      `}
    >
      {/* NODE */}

      <div
        className={`
          relative
          flex
          items-center
          justify-center
          rounded-full
          border
          transition-all
          duration-300

          ${
            primary
              ? "h-[78px] w-[78px]"
              : "h-[58px] w-[58px]"
          }

          ${
            selected
              ? `
                border-purple-300
                bg-purple-950/70
                shadow-[0_0_18px_rgba(168,85,247,.8),0_0_45px_rgba(168,85,247,.35)]
              `
              : `
                border-purple-500/70
                bg-black/70
                shadow-[0_0_12px_rgba(168,85,247,.18)]
              `
          }

          group-hover:border-cyan-300
          group-hover:shadow-[0_0_20px_rgba(34,211,238,.4)]
        `}
      >
        <Icon
          size={primary ? 29 : 22}
          strokeWidth={1.8}
          className={`
            transition-colors
            duration-300

            ${
              selected
                ? "text-white"
                : "text-white/80"
            }

            group-hover:text-cyan-300
          `}
        />

        {/* ONLINE DOT */}

        <span
          className="
            absolute
            -right-1
            top-1
            h-2
            w-2
            rounded-full
            bg-cyan-400
            shadow-[0_0_8px_rgba(34,211,238,.9)]
          "
        />

        {/* SELECTED RING */}

        {selected && (
          <motion.div
            layoutId="selected-ring"
            className="
              pointer-events-none
              absolute
              inset-[-7px]
              rounded-full
              border
              border-purple-400/60
            "
          />
        )}
      </div>

      {/* LABEL */}

      <div
        className={`
          mt-3
          text-center
          font-mono
          font-bold
          tracking-wide
          ${
            primary
              ? "text-[11px]"
              : "text-[9px]"
          }
          ${
            selected
              ? "text-white"
              : "text-white/70"
          }
        `}
      >
        {skill.name}
      </div>

      {/* LEVEL */}

      <div
        className="
          mt-1
          font-mono
          text-[8px]
          tracking-widest
          text-white/35
        "
      >
        LVL {Math.round(skill.level / 10)}
      </div>
    </motion.button>
  );
}

/* -------------------------------------------------------------------------- */
/* BRANCH                                                                      */
/* -------------------------------------------------------------------------- */

function SkillBranch({
  parent,
  children,
  selectedSkill,
  onSelect,
}: {
  parent: Skill;
  children: Skill[];
  selectedSkill: Skill;
  onSelect: (skill: Skill) => void;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
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
        relative
        mt-10
        w-full
      "
    >
      {/* VERTICAL PARENT CONNECTION */}

      <div
        className="
          absolute
          left-1/2
          top-[-38px]
          h-[38px]
          w-px
          -translate-x-1/2
          bg-cyan-400
          shadow-[0_0_10px_rgba(34,211,238,.8)]
        "
      />

      {/* HORIZONTAL BRANCH LINE */}

      <div
        className="
          absolute
          left-[8%]
          right-[8%]
          top-0
          h-px
          bg-cyan-400
          shadow-[0_0_8px_rgba(34,211,238,.7)]
        "
      />

      {/* CHILDREN */}

      <div
        className="
          grid
          grid-cols-2
          gap-x-6
          gap-y-10
          pt-7
          sm:grid-cols-3
          lg:grid-cols-6
        "
      >
        {children.map((child) => (
          <div
            key={child.id}
            className="
              relative
              flex
              justify-center
            "
          >
            {/* CHILD CONNECTION */}

            <div
              className="
                absolute
                left-1/2
                top-[-28px]
                h-[28px]
                w-px
                -translate-x-1/2
                bg-cyan-400
                shadow-[0_0_7px_rgba(34,211,238,.6)]
              "
            />

            <SkillNode
              skill={child}
              selected={
                selectedSkill.id === child.id
              }
              onClick={() =>
                onSelect(child)
              }
              size="child"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* DETAILS PANEL                                                              */
/* -------------------------------------------------------------------------- */

function SkillDetails({
  skill,
  onClose,
}: {
  skill: Skill;
  onClose: () => void;
}) {
  const Icon = getIcon(skill.id);

  const proficiency =
    skill.level >= 90
      ? "EXPERT"
      : skill.level >= 80
        ? "ADVANCED"
        : skill.level >= 70
          ? "INTERMEDIATE"
          : "BEGINNER";

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
        hidden
        w-[370px]
        max-w-[36%]
        rounded-xl
        border
        border-purple-500/40
        bg-black/80
        p-6
        shadow-[0_0_30px_rgba(168,85,247,.12)]
        backdrop-blur-xl
        lg:block
      "
    >
      {/* HEADER */}

      <div className="flex items-start justify-between">
        <div>
          <div
            className="
              font-mono
              text-[9px]
              font-bold
              tracking-[0.35em]
              text-purple-400
            "
          >
            SKILL PROFILE
          </div>

          <h3
            className="
              mt-3
              text-2xl
              font-black
              uppercase
              text-white
            "
          >
            {skill.name}
          </h3>

          <p
            className="
              mt-1
              font-mono
              text-[9px]
              uppercase
              tracking-wider
              text-white/40
            "
          >
            {skill.category}
          </p>
        </div>

        <button
          onClick={onClose}
          className="
            rounded-md
            border
            border-white/10
            p-2
            text-white/40
            transition
            hover:border-purple-400/50
            hover:text-white
          "
        >
          <X size={14} />
        </button>
      </div>

      {/* ICON */}

      <div
        className="
          mt-5
          flex
          items-center
          gap-3
        "
      >
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            border
            border-purple-400/50
            bg-purple-950/40
          "
        >
          <Icon
            size={20}
            className="text-cyan-300"
          />
        </div>

        <div>
          <div
            className="
              font-mono
              text-[8px]
              tracking-widest
              text-white/40
            "
          >
            PROFICIENCY
          </div>

          <div
            className="
              mt-1
              font-mono
              text-xs
              font-bold
              text-purple-300
            "
          >
            {proficiency}
          </div>
        </div>
      </div>

      {/* PROGRESS */}

      <div className="mt-6">
        <div
          className="
            flex
            items-center
            justify-between
            font-mono
            text-[9px]
          "
        >
          <span className="text-purple-400">
            PROGRESSION
          </span>

          <span className="text-cyan-300">
            {skill.level}%
          </span>
        </div>

        <div
          className="
            mt-2
            h-1.5
            overflow-hidden
            rounded-full
            bg-white/10
          "
        >
          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: `${skill.level}%`,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="
              h-full
              rounded-full
              bg-gradient-to-r
              from-purple-500
              via-fuchsia-400
              to-cyan-400
              shadow-[0_0_10px_rgba(34,211,238,.5)]
            "
          />
        </div>
      </div>

      {/* TAGS */}

      <div className="mt-5 flex gap-2">
        <span
          className="
            rounded-full
            border
            border-cyan-500/50
            px-3
            py-1
            font-mono
            text-[8px]
            text-cyan-300
          "
        >
          {proficiency}
        </span>

        <span
          className="
            rounded-full
            border
            border-purple-500/50
            px-3
            py-1
            font-mono
            text-[8px]
            text-purple-300
          "
        >
          LEVEL {Math.round(skill.level / 10)}
        </span>
      </div>

      {/* DESCRIPTION */}

      <div className="mt-7">
        <div
          className="
            font-mono
            text-[9px]
            font-bold
            tracking-[0.25em]
            text-purple-400
          "
        >
          DESCRIPTION
        </div>

        <p
          className="
            mt-3
            text-sm
            leading-6
            text-white/65
          "
        >
          {skill.description}
        </p>
      </div>

      {/* EXPERIENCE */}

      <div className="mt-6">
        <div
          className="
            font-mono
            text-[9px]
            font-bold
            tracking-[0.25em]
            text-purple-400
          "
        >
          EXPERIENCE
        </div>

        <p
          className="
            mt-3
            font-mono
            text-[10px]
            text-white/70
          "
        >
          {skill.experience ??
            "Hands-on academic and project experience"}
        </p>
      </div>

      {/* PROJECTS */}

      {skill.projects &&
        skill.projects.length > 0 && (
          <div className="mt-6">
            <div
              className="
                font-mono
                text-[9px]
                font-bold
                tracking-[0.25em]
                text-purple-400
              "
            >
              PROJECTS
            </div>

            <div className="mt-3 space-y-2">
              {skill.projects.map(
                (project) => (
                  <div
                    key={project}
                    className="
                      rounded-md
                      border
                      border-white/10
                      bg-white/[0.02]
                      px-3
                      py-2
                      text-xs
                      text-white/70
                    "
                  >
                    <span className="mr-2 text-cyan-400">
                      ◆
                    </span>

                    {project}
                  </div>
                )
              )}
            </div>
          </div>
        )}

      {/* RELATED */}

      {skill.relatedSkills &&
        skill.relatedSkills.length > 0 && (
          <div className="mt-6">
            <div
              className="
                font-mono
                text-[9px]
                font-bold
                tracking-[0.25em]
                text-purple-400
              "
            >
              RELATED SKILLS
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {skill.relatedSkills.map(
                (related) => {
                  const relatedSkill =
                    getSkill(related);

                  return (
                    <span
                      key={related}
                      className="
                        rounded-full
                        border
                        border-purple-500/30
                        px-3
                        py-1
                        font-mono
                        text-[8px]
                        text-white/60
                      "
                    >
                      {relatedSkill?.name ??
                        related}
                    </span>
                  );
                }
              )}
            </div>
          </div>
        )}
    </motion.aside>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN                                                                       */
/* -------------------------------------------------------------------------- */

export default function SkillsSection() {
  const [selectedSkill, setSelectedSkill] =
    useState<Skill | null>(null);

  const selectedCategory =
    selectedSkill &&
    categories.find(
      (category) =>
        category.id === selectedSkill.id
    );

  const activeParent =
    selectedSkill &&
    categories.find((category) =>
      category.children.includes(
        selectedSkill.id
      )
    );

  const activeCategoryId =
    selectedCategory?.id ??
    activeParent?.id ??
    null;

  const activeChildren =
    activeCategoryId
      ? categories.find(
          (category) =>
            category.id === activeCategoryId
        )?.children
      : [];

  const childSkills =
    activeChildren
      ?.map(getSkill)
      .filter(Boolean) as Skill[] | undefined;

  const handleSelect = (
    skill: Skill
  ) => {
    setSelectedSkill((current) =>
      current?.id === skill.id
        ? null
        : skill
    );
  };

  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#03030b]
        px-4
        py-5
        text-white
        md:px-6
        lg:px-8
        lg:pr-44
      "
    >
      {/* BACKGROUND */}

      <GalaxyBackground />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_45%_35%,rgba(124,58,237,.08),transparent_45%)]
        "
      />

      {/* HEADER */}

      <motion.header
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
          relative
          z-10
          mx-auto
          max-w-[1500px]
          text-center
        "
      >
        <p
          className="
            font-mono
            text-[8px]
            font-bold
            tracking-[0.5em]
            text-purple-400
          "
        >
          CHARACTER DEVELOPMENT
        </p>

        <h1
          className="
            mt-1
            text-4xl
            font-black
            uppercase
            tracking-tight
            md:text-5xl
          "
        >
          <span className="text-cyan-300">
            SKILL
          </span>{" "}
          TREE
        </h1>

        <p
          className="
            mt-2
            font-mono
            text-[9px]
            text-white/40
          "
        >
          Explore my technical abilities,
          development experience, and
          professional skills.
        </p>
      </motion.header>

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          mx-auto
          mt-7
          grid
          max-w-[1500px]
          gap-6
          lg:grid-cols-[minmax(0,1fr)_370px]
        "
      >
        {/* TREE PANEL */}

        <div
          className="
            relative
            min-h-[650px]
            overflow-hidden
            rounded-xl
            border
            border-purple-500/30
            bg-black/35
            p-5
            backdrop-blur-sm
          "
        >
          {/* PANEL HEADER */}

          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-white/10
              pb-4
            "
          >
            <div>
              <div
                className="
                  font-mono
                  text-[9px]
                  font-bold
                  tracking-[0.3em]
                  text-purple-400
                "
              >
                PLAYER ABILITIES
              </div>

              <div
                className="
                  mt-1
                  font-mono
                  text-[8px]
                  text-white/30
                "
              >
                SELECT A SKILL TO VIEW DETAILS
              </div>
            </div>

            <div
              className="
                rounded-full
                border
                border-purple-500/40
                px-3
                py-1
                font-mono
                text-[8px]
                text-purple-300
              "
            >
              {skills.length} NODES
            </div>
          </div>

          {/* CORE */}

          <div
            className="
              relative
              flex
              flex-col
              items-center
              pt-6
            "
          >
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-purple-400
                bg-black
                shadow-[0_0_25px_rgba(168,85,247,.45)]
              "
            >
              <Sparkles
                size={22}
                className="text-white"
              />
            </div>

            <div
              className="
                mt-2
                font-mono
                text-[10px]
                font-bold
              "
            >
              CORE SKILLS
            </div>

            <div
              className="
                mt-1
                font-mono
                text-[7px]
                text-white/40
              "
            >
              LVL MAX
            </div>

            {/* CORE LINE */}

            <div
              className="
                absolute
                left-1/2
                top-[82px]
                h-[70px]
                w-px
                -translate-x-1/2
                bg-purple-500/60
              "
            />
          </div>

          {/* PRIMARY TREE */}

          <div
            className="
              relative
              mt-12
            "
          >
            {/* PRIMARY HORIZONTAL LINE */}

            <div
              className="
                absolute
                left-[8%]
                right-[8%]
                top-0
                h-px
                bg-purple-500/70
                shadow-[0_0_8px_rgba(168,85,247,.5)]
              "
            />

            {/* PRIMARY NODES */}

            <div
              className="
                grid
                grid-cols-2
                gap-x-3
                gap-y-12
                pt-8
                sm:grid-cols-3
                lg:grid-cols-6
              "
            >
              {categories.map(
                (category) => {
                  const parent =
                    getSkill(category.id);

                  if (!parent) return null;

                  const selected =
                    activeCategoryId ===
                    category.id;

                  const dimmed =
                    selectedSkill !== null &&
                    !selected;

                  return (
                    <div
                      key={category.id}
                      className="
                        relative
                        flex
                        justify-center
                      "
                    >
                      {/* STEM */}

                      <div
                        className={`
                          absolute
                          left-1/2
                          top-[-32px]
                          h-[32px]
                          w-px
                          -translate-x-1/2
                          transition-all
                          duration-300
                          ${
                            selected
                              ? "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,.8)]"
                              : "bg-purple-500/50"
                          }
                        `}
                      />

                      <SkillNode
                        skill={parent}
                        selected={selected}
                        dimmed={dimmed}
                        onClick={() =>
                          handleSelect(
                            parent
                          )
                        }
                      />
                    </div>
                  );
                }
              )}
            </div>

            {/* EXPANDED BRANCH */}

            <AnimatePresence mode="wait">
              {activeCategoryId &&
                childSkills &&
                childSkills.length > 0 && (
                  <SkillBranch
                    key={activeCategoryId}
                    parent={
                      getSkill(
                        activeCategoryId
                      )!
                    }
                    children={
                      childSkills
                    }
                    selectedSkill={
                      selectedSkill!
                    }
                    onSelect={
                      handleSelect
                    }
                  />
                )}
            </AnimatePresence>
          </div>

          {/* MOBILE NOTE */}

          <div
            className="
              mt-10
              text-center
              font-mono
              text-[8px]
              tracking-[0.3em]
              text-cyan-400/50
            "
          >
            SELECT A NODE TO EXPAND
          </div>
        </div>

        {/* DETAILS */}

        <AnimatePresence mode="wait">
          {selectedSkill ? (
            <SkillDetails
              key={selectedSkill.id}
              skill={selectedSkill}
              onClose={() =>
                setSelectedSkill(null)
              }
            />
          ) : (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="
                hidden
                rounded-xl
                border
                border-purple-500/20
                bg-black/50
                p-8
                lg:block
              "
            >
              <div
                className="
                  flex
                  h-full
                  flex-col
                  items-center
                  justify-center
                  text-center
                "
              >
                <Sparkles
                  size={32}
                  className="
                    text-purple-400/50
                  "
                />

                <p
                  className="
                    mt-5
                    font-mono
                    text-[10px]
                    tracking-[0.3em]
                    text-white/40
                  "
                >
                  SKILL PROFILE
                </p>

                <p
                  className="
                    mt-2
                    max-w-[220px]
                    text-xs
                    leading-5
                    text-white/25
                  "
                >
                  Select a skill node
                  to inspect its
                  progression,
                  experience,
                  projects and
                  related abilities.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* MOBILE DETAIL */}

      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 30,
            }}
            className="
              relative
              z-20
              mt-6
              lg:hidden
            "
          >
            <div
              className="
                rounded-xl
                border
                border-purple-500/40
                bg-black/85
                p-5
                backdrop-blur-xl
              "
            >
              <div className="flex justify-between">
                <div>
                  <div
                    className="
                      font-mono
                      text-[8px]
                      tracking-widest
                      text-purple-400
                    "
                  >
                    SKILL PROFILE
                  </div>

                  <h3
                    className="
                      mt-2
                      text-xl
                      font-black
                    "
                  >
                    {selectedSkill.name}
                  </h3>
                </div>

                <button
                  onClick={() =>
                    setSelectedSkill(
                      null
                    )
                  }
                  className="
                    text-white/40
                    hover:text-white
                  "
                >
                  <X size={18} />
                </button>
              </div>

              <div className="mt-5">
                <div
                  className="
                    flex
                    justify-between
                    font-mono
                    text-[8px]
                  "
                >
                  <span className="text-purple-400">
                    PROGRESSION
                  </span>

                  <span className="text-cyan-300">
                    {
                      selectedSkill.level
                    }
                    %
                  </span>
                </div>

                <div
                  className="
                    mt-2
                    h-1.5
                    rounded-full
                    bg-white/10
                  "
                >
                  <div
                    className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-purple-500
                      to-cyan-400
                    "
                    style={{
                      width: `${selectedSkill.level}%`,
                    }}
                  />
                </div>
              </div>

              <p
                className="
                  mt-5
                  text-sm
                  leading-6
                  text-white/60
                "
              >
                {
                  selectedSkill.description
                }
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
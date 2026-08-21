"use client";

import { motion } from "framer-motion";

export type SectionId =
  | "about"
  | "experience"
  | "skills"
  | "projects"
  | "education"
  | "contact";

export const sections: {
  id: SectionId;
  label: string;
  number: string;
}[] = [
  {
    id: "about",
    label: "ABOUT",
    number: "01",
  },
  {
    id: "experience",
    label: "EXPERIENCE",
    number: "02",
  },
  {
    id: "skills",
    label: "SKILLS",
    number: "03",
  },
  {
    id: "projects",
    label: "PROJECTS",
    number: "04",
  },

  {
  id: "education",
  label: "EDUCATION",
  number: "05",
  },
  {
  id: "contact",
  label: "CONTACT",
  number: "06",},

];

interface SectionRailProps {
  activeSection: SectionId;
  onSelect: (id: SectionId) => void;
}

export default function SectionRail({
  activeSection,
  onSelect,
}: SectionRailProps) {
  const activeIndex = sections.findIndex(
    (section) => section.id === activeSection
  );

  /*
   * The selected item is always positioned in the center.
   * The entire list moves when activeIndex changes.
   */
  const ITEM_HEIGHT = 70;
  const CENTER_POSITION = 1;

  const translateY =
    (CENTER_POSITION - activeIndex) * ITEM_HEIGHT;

  return (
    <aside className="fixed right-0 top-1/2 z-[100] hidden -translate-y-1/2 md:block">
      <div className="relative h-[340px] overflow-hidden">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-5 px-8">
          <span className="font-mono text-[9px] font-bold tracking-[0.25em] text-white/35">
            SECTIONS
          </span>
        </div>

        {/* =====================================================
            RAIL VIEWPORT
        ====================================================== */}

        <div className="relative h-[420px] overflow-hidden">

          {/* Right rail */}

          <div className="absolute right-7 top-0 z-20 h-full w-px bg-white/10" />

          {/* ===================================================
              FIXED ACTIVE POSITION
          ==================================================== */}

          <div className="pointer-events-none absolute right-0 top-[70px] z-30 h-[70px] w-[250px]">

            {/* Active background */}

            <div className="absolute inset-y-0 right-0 w-full bg-black-500/[0.045]" />

            {/* Purple active rail */}

            <div className="absolute right-[-1px] top-1/2 h-10 w-[3px] -translate-y-1/2 rounded-full bg-purple-400 shadow-[0_0_14px_rgba(168,85,247,0.9)]" />

            {/* Active node */}

            <div className="absolute right-[22px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-purple-300 shadow-[0_0_15px_rgba(168,85,247,1)]" />

          </div>

          {/* ===================================================
              MOVING SECTION LIST
          ==================================================== */}

          <motion.div
            animate={{
              y: translateY,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 28,
              mass: 0.8,
            }}
            className="absolute left-0 top-0 w-full"
          >
            {sections.map((section, index) => {
              const active = section.id === activeSection;

              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => onSelect(section.id)}
                  className="group relative flex h-[70px] w-full items-center justify-end pr-12 text-right"
                >
                  {/* Section number */}

                  <motion.span
                    animate={{
                      opacity: active ? 1 : 0.25,
                      scale: active ? 1 : 0.9,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className={`mr-4 font-mono text-[9px] ${
                      active
                        ? "text-purple-400"
                        : "text-white/30"
                    }`}
                  >
                    {section.number}
                  </motion.span>

                  {/* Section text */}

                  <motion.span
                    animate={{
                      scale: active ? 1.4 : 1,
                      x: active ? -10 : 0,
                      color: active
                        ? "rgba(255,255,255,1)"
                        : "rgba(255,255,255,0.28)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 24,
                    }}
                    className="origin-right font-mono text-[11px] font-bold tracking-[0.14em]"
                  >
                    {section.label}
                  </motion.span>

                  {/* Small inactive rail nodes */}

                  {!active && (
                    <span className="absolute right-[24px] h-[5px] w-[5px] rounded-full bg-white/20 transition-all duration-300 group-hover:bg-purple-400" />
                  )}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* =====================================================
            CURRENT LOCATION
        ====================================================== */}

        <motion.div
          key={activeSection}
          initial={{
            opacity: 0,
            y: 5,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="mt-5 flex items-center justify-end gap-2 px-8"
        >
          <span className="font-mono text-[8px] tracking-[0.15em] text-white/25">
            LOCATION
          </span>

          <span className="h-1 w-1 rounded-full bg-purple-400" />

          <span className="font-mono text-[8px] font-bold tracking-[0.15em] text-purple-400">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(sections.length).padStart(2, "0")}
          </span>
        </motion.div>
      </div>
    </aside>
  );
}
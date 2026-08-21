"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import type { SectionId } from "@/components/navigation/SectionRail";

interface SectionTransitionProps {
  section: SectionId;
  direction: 1 | -1;
  children: ReactNode;
}

const variants = {
  enter: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? 70 : -70,
    scale: 0.985,
  }),

  center: {
    opacity: 1,
    y: 0,
    scale: 1,
  },

  exit: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? -70 : 70,
    scale: 0.985,
  }),
};

export default function SectionTransition({
  section,
  direction,
  children,
}: SectionTransitionProps) {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={section}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
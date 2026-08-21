"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import GalaxyBackground from "@/components/background/GalaxyBackground";
interface LoadingScreenProps {
  onComplete: () => void;
}

/*
|--------------------------------------------------------------------------
| Loading stages
|--------------------------------------------------------------------------
*/

const loadingStages = [
  {
    min: 0,
    max: 20,
    text: "INITIALIZING SYSTEM",
  },
  {
    min: 20,
    max: 40,
    text: "LOADING PROFILE",
  },
  {
    min: 40,
    max: 60,
    text: "LOADING SKILLS",
  },
  {
    min: 60,
    max: 80,
    text: "LOADING PROJECTS",
  },
  {
    min: 80,
    max: 101,
    text: "PREPARING PORTFOLIO",
  },
];

/*
|--------------------------------------------------------------------------
| Rotating tips
|--------------------------------------------------------------------------
*/

const tips = [
  "Scroll down to navigate",
  "Click the avatar to see profile",
  "Explore the skill constellation",
  "Check out my projects",
];

/*
|--------------------------------------------------------------------------
| Typewriter component
|--------------------------------------------------------------------------
*/

function TypewriterText({
  text,
  delay = 0,
  speed = 90,
}: {
  text: string;
  delay?: number;
  speed?: number;
}) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    const timeout = setTimeout(() => {
      let index = 0;

      interval = setInterval(() => {
        index += 1;

        setDisplayedText(text.slice(0, index));

        if (index >= text.length && interval) {
          clearInterval(interval);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);

      if (interval) {
        clearInterval(interval);
      }
    };
  }, [text, delay, speed]);

  return (
    <>
      {displayedText}
      <span className="ml-1 inline-block h-[0.9em] w-[2px] animate-pulse bg-purple-400 align-middle" />
    </>
  );
}

/*
|--------------------------------------------------------------------------
| Get current loading stage
|--------------------------------------------------------------------------
*/

function getLoadingStage(progress: number) {
  return (
    loadingStages.find(
      (stage) => progress >= stage.min && progress < stage.max
    ) ?? loadingStages[loadingStages.length - 1]
  );
}

/*
|--------------------------------------------------------------------------
| Loading Screen
|--------------------------------------------------------------------------
*/

export default function LoadingScreen({
  onComplete,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [tipIndex, setTipIndex] = useState(0);

  const currentStage = getLoadingStage(progress);

  /*
  |--------------------------------------------------------------------------
  | Loading progress
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const duration = 5000;
    const intervalTime = 30;
    const totalSteps = duration / intervalTime;
    const increment = 100 / totalSteps;

    const interval = setInterval(() => {
      setProgress((current) => {
        const next = Math.min(current + increment, 100);

        if (next >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onComplete();
          }, 700);
        }

        return next;
      });
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, [onComplete]);

  /*
  |--------------------------------------------------------------------------
  | Rotate tips
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((current) => (current + 1) % tips.length);
    }, 1800);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="fixed inset-0 z-[9999] overflow-hidden bg-[#080808] text-white"
      >
        {/* =====================================================
            SUBTLE GALAXY BACKGROUND
        ====================================================== */}
        <GalaxyBackground />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(124,58,237,0.10),transparent_45%)]" />

        <div className="absolute left-[10%] top-[5%] h-48 w-48 rounded-full bg-purple-700/10 blur-[100px]" />

        <div className="absolute right-[10%] top-[30%] h-56 w-56 rounded-full bg-fuchsia-700/10 blur-[110px]" />

        <div className="absolute bottom-[5%] left-[35%] h-48 w-48 rounded-full bg-purple-800/10 blur-[100px]" />

        {/* Very subtle scanlines */}

        <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:repeating-linear-gradient(to_bottom,transparent_0px,transparent_4px,rgba(255,255,255,0.4)_5px)]" />

        {/* Vignette */}

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.55)_100%)]" />

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-28">
          <div className="w-full max-w-4xl text-center">

            {/* =================================================
                HI, I'M
            ================================================== */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
              }}
              className="min-h-[45px] font-mono text-3xl font-bold tracking-[0.22em] text-white sm:text-4xl md:text-5xl"
            >
              <TypewriterText
                text="HI, I'M"
                speed={100}
              />
            </motion.p>

            {/* =================================================
                NAME
            ================================================== */}

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.9,
                duration: 0.5,
              }}
              className="mt-3 min-h-[60px] font-mono text-4xl font-black uppercase tracking-[0.1em] text-white drop-shadow-[0_0_12px_rgba(168,85,247,0.6)] sm:text-5xl md:text-6xl"
            >
              <TypewriterText
                text="GERALD S. RECAÑA"
                delay={900}
                speed={90}
              />
            </motion.h1>

            {/* =================================================
                DIVIDER
            ================================================== */}

            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: "18rem",
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 2.5,
              }}
              className="mx-auto mt-5 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent sm:w-96"
            />

            {/* =================================================
                WELCOME TEXT
            ================================================== */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 2.7,
              }}
              className="mt-5 font-mono text-base font-bold uppercase tracking-[0.18em] text-slate-200 sm:text-lg md:text-xl"
            >
              WELCOME TO MY PORTFOLIO
            </motion.p>

            {/* =================================================
                LOADING STATUS
            ================================================== */}

            <div className="mt-8 flex h-8 items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentStage.text}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="font-mono text-sm tracking-[0.14em] text-slate-300 sm:text-base"
                >
                  {currentStage.text}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* =================================================
                ROTATING TIPS
            ================================================== */}

            <div className="mt-5 flex h-6 items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={tips[tipIndex]}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="font-mono text-[10px] tracking-[0.08em] text-slate-500 sm:text-xs"
                >
                  <span className="text-purple-400">
                    TIP:
                  </span>{" "}
                  {tips[tipIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* =====================================================
            PROGRESS SECTION
        ====================================================== */}

        <div className="absolute bottom-8 left-1/2 w-full max-w-[700px] -translate-x-1/2 px-6">

          <div className="flex items-center gap-4">

            {/* Progress bar */}

            <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-white/10">

              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-400"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            {/* Percentage */}

            <span className="w-12 text-right font-mono text-xs font-bold text-slate-300">
              {Math.round(progress)}%
            </span>
          </div>

          {/* Bottom message */}

          <p className="mt-3 text-center font-mono text-[10px] tracking-[0.2em] text-slate-600">
            PLEASE WAIT...
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
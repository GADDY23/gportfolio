"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProfileHUD() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -35 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-5 top-5 z-[100] md:left-7 md:top-7"
    >
      <Link
        href="/profile"
        aria-label="Open Gerald's profile"
        className="group block"
      >
        {/* =====================================================
            HUD CONTAINER
        ====================================================== */}

        <div
          className="relative h-[88px] w-[340px] overflow-hidden border border-purple-500/50 bg-black/80 backdrop-blur-md transition-all duration-300 group-hover:border-purple-300/80 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] group-hover:scale-[1.015]"
          style={{
            clipPath:
              "polygon(0 0, 97% 0, 100% 15%, 100% 85%, 97% 100%, 0 100%)",
          }}
        >
          {/* ===================================================
              GALAXY / GRID BACKGROUND
          ==================================================== */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(168,85,247,0.35) 1px, transparent 1px),
                linear-gradient(90deg, rgba(168,85,247,0.35) 1px, transparent 1px)
              `,
              backgroundSize: "18px 18px",
            }}
          />

          {/* Purple ambient glow */}

          <div className="pointer-events-none absolute left-1/3 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-purple-600/10 blur-2xl" />

          {/* ===================================================
              TOP / BOTTOM HUD LINES
          ==================================================== */}

          <div className="absolute left-4 right-8 top-0 h-px bg-purple-300/70 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />

          <div className="absolute bottom-0 left-8 right-10 h-px bg-purple-500/30" />

          {/* ===================================================
              CORNER DETAILS
          ==================================================== */}

          <div className="absolute left-0 top-0 h-4 w-4 border-l border-t border-purple-300/70" />

          <div className="absolute right-0 top-0 h-4 w-4 border-r border-t border-purple-300/50" />

          <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-purple-500/40" />

          <div className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-purple-500/40" />

          {/* ===================================================
              GREEN STATUS DOT
          ==================================================== */}

          <motion.span
            animate={{
              opacity: [0.45, 1, 0.45],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[7px] top-1/2 z-30 h-2 w-2 -translate-y-1/2 rounded-full border border-black bg-green-400 shadow-[0_0_9px_rgba(74,222,128,0.95)]"
          />

          {/* ===================================================
              AVATAR
          ==================================================== */}

          <div className="absolute left-[18px] top-1/2 h-[68px] w-[68px] -translate-y-1/2">
            {/* Outer hexagon */}

            <div
              className="absolute inset-0 border border-purple-400/70 bg-purple-500/[0.06] shadow-[0_0_15px_rgba(168,85,247,0.2)]"
              style={{
                clipPath:
                  "polygon(50% 0%, 92% 25%, 92% 75%, 50% 100%, 8% 75%, 8% 25%)",
              }}
            />

            {/* Inner hexagon */}

            <div
              className="absolute inset-[4px] bg-purple-500/80"
              style={{
                clipPath:
                  "polygon(50% 0%, 92% 25%, 92% 75%, 50% 100%, 8% 75%, 8% 25%)",
              }}
            />

            {/* Actual picture */}

            <div
              className="absolute inset-[6px] overflow-hidden bg-black"
              style={{
                clipPath:
                  "polygon(50% 0%, 92% 25%, 92% 75%, 50% 100%, 8% 75%, 8% 25%)",
              }}
            >
              <Image
                src="/projects/avatar.jpg"
                alt="Gerald S. Recaña"
                fill
                priority
                sizes="68px"
                className="object-cover object-[75%_25%]"
              />

              {/* Avatar scan */}

              <motion.div
                animate={{
                  y: ["-120%", "220%"],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-0 h-1/4 w-full bg-gradient-to-b from-transparent via-purple-300/20 to-transparent"
              />
            </div>

            {/* Small purple glow */}

            <div className="pointer-events-none absolute inset-0 bg-purple-500/10 blur-md" />
          </div>

          {/* ===================================================
              PROFILE INFORMATION
          ==================================================== */}

          <div className="absolute left-[96px] right-3 top-[13px]">
            {/* NAME */}

            <div className="truncate font-mono text-[12px] font-bold tracking-[0.08em] text-white">
              GERALD S. RECAÑA
            </div>

            {/* ROLE */}

            <div className="mt-1 font-mono text-[7px] font-semibold tracking-[0.16em] text-purple-400">
              FULL STACK DEVELOPER
            </div>

            {/* LEVEL */}

            <div className="mt-[2px] flex items-center justify-between">
              <span className="font-mono text-[8px] font-bold tracking-[0.14em] text-purple-300">
                LVL 02
              </span>

              <span className="font-mono text-[6px] tracking-[0.12em] text-white/25">
                PLAYER PROFILE
              </span>
            </div>

            {/* =================================================
                XP BAR
            ================================================== */}

            <div className="mt-[2px] flex items-center gap-1">
              <div className="relative h-[4px] flex-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 2 }}
                  animate={{ width: "85%" }}
                  transition={{
                    duration: 1.4,
                    delay: 0.4,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-purple-600 via-purple-400 to-fuchsia-300 shadow-[0_0_7px_rgba(168,85,247,0.9)]"
                />

                {/* XP shine */}

                <motion.div
                  animate={{
                    x: ["-100%", "350%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-y-0 w-8 bg-white/30 blur-sm"
                />
              </div>

              <span className="shrink-0 font-mono text-[9px] font-bold text-purple-300">
                85% EXP
              </span>
            </div>
          </div>

          {/* ===================================================
              SMALL HUD DECORATION
          ==================================================== */}

          <div className="absolute bottom-[7px] right-3 flex items-center gap-1">
            <span className="h-[2px] w-7 bg-purple-500/40" />
            <span className="h-[2px] w-3 bg-purple-500/20" />
            <span className="h-[2px] w-1 bg-purple-400/60" />
          </div>

          {/* ===================================================
              MOVING SCAN LIGHT
          ==================================================== */}

          <motion.div
            animate={{
              x: ["-100%", "350%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute inset-y-0 w-14 bg-gradient-to-r from-transparent via-purple-400/[0.05] to-transparent"
          />
        </div>
      </Link>
    </motion.div>
  );
}
"use client";
import GalaxyBackground from "@/components/background/GalaxyBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Monitor,
  Phone,
  Mail,
  FileText,
  Trophy,
  ExternalLink,
  Code2,
  Globe,
} from "lucide-react";

export default function ProfilePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050507] text-white">
      
      {/* =====================================================
          GALAXY BACKGROUND
      ====================================================== */}
        <GalaxyBackground />
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        {/* Purple galaxy glow */}

        <div className="absolute left-[25%] top-[10%] h-[300px] w-[300px] rounded-full bg-purple-700/10 blur-[120px]" />

        <div className="absolute right-[15%] top-[25%] h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[140px]" />

        <div className="absolute bottom-[5%] left-[45%] h-[300px] w-[300px] rounded-full bg-fuchsia-700/10 blur-[140px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168,85,247,0.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168,85,247,0.35) 1px, transparent 1px)
            `,
            backgroundSize: "36px 36px",
          }}
        />

        {/* Scanlines */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.15) 4px)",
          }}
        />
      </div>

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="relative z-20 flex items-center justify-between px-5 py-5 md:px-8">

        <Link
           href="/?skipLoading=true#about"
          className="
            group
            flex
            items-center
            gap-2
            border
            border-purple-500/40
            bg-black/50
            px-4
            py-2
            font-mono
            text-[10px]
            font-bold
            tracking-[0.12em]
            text-white/60
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-purple-400
            hover:text-white
            hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]
          "
        >
          <ArrowLeft
            size={13}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />

          BACK TO HOME
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            absolute
            left-1/2
            -translate-x-1/2
            font-mono
            text-xl
            font-bold
            tracking-[0.18em]
            text-purple-200
            md:text-2xl
          "
        >
          <span className="mr-3 text-purple-500">◆</span>
          CHARACTER PROFILE
          <span className="ml-3 text-purple-500">◆</span>
        </motion.h1>

      </header>

      {/* =====================================================
          MAIN GRID
      ====================================================== */}

      <div className="relative z-10 mx-auto grid max-w-[1450px] gap-4 px-4 pb-5 md:px-6 lg:grid-cols-[0.9fr_1.15fr_0.9fr]">

        {/* ===================================================
            LEFT — CHARACTER
        ==================================================== */}

        <motion.section
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hud-panel relative flex min-h-[680px] flex-col overflow-hidden p-5"
        >

          <PanelTitle title="CHARACTER" />

          {/* Avatar */}

          <div className="flex flex-1 flex-col items-center justify-center">

            <div className="relative h-[330px] w-[255px]">

              {/* Glow */}

              <div className="absolute inset-10 rounded-full bg-purple-600/20 blur-[60px]" />

              {/* Outer frame */}

              <div
                className="
                  absolute
                  inset-0
                  border
                  border-purple-500/80
                  bg-purple-500/[0.03]
                  shadow-[0_0_25px_rgba(168,85,247,0.2)]
                "
                style={{
                  clipPath:
                    "polygon(8% 0, 92% 0, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0 92%, 0 8%)",
                }}
              />

              {/* Image frame */}

              <div
                className="
                  absolute
                  left-5
                  right-5
                  top-5
                  bottom-[45px]
                  overflow-hidden
                  border
                  border-purple-400/60
                  bg-black
                "
                style={{
                  clipPath:
                    "polygon(6% 0, 94% 0, 100% 6%, 100% 94%, 94% 100%, 6% 100%, 0 94%, 0 6%)",
                }}
              >

                <Image
                  src="/images/avatar.jpg"
                  alt="Gerald S. Recaña"
                  fill
                  priority
                  sizes="255px"
                  className="object-cover object-[50%_45%]"
                />

                {/* Image overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-purple-500/[0.05]" />

                {/* Scan line */}

                <motion.div
                  animate={{ y: ["-100%", "400%"] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    left-0
                    h-10
                    w-full
                    bg-gradient-to-b
                    from-transparent
                    via-purple-300/10
                    to-transparent
                  "
                />

              </div>

              {/* Corner brackets */}

              <div className="absolute left-2 top-2 h-5 w-5 border-l border-t border-purple-400" />

              <div className="absolute right-2 top-2 h-5 w-5 border-r border-t border-purple-400" />

              <div className="absolute bottom-[38px] left-2 h-5 w-5 border-b border-l border-purple-400" />

              <div className="absolute bottom-[38px] right-2 h-5 w-5 border-b border-r border-purple-400" />

            </div>

            {/* Description */}

            <p className="mt-2 max-w-[290px] text-center font-mono text-[9px] leading-5 text-white/50">
              A rising Full Stack Developer focused on building
              practical digital systems, solving real-world problems,
              and continuously improving through hands-on experience.
            </p>

          </div>

        </motion.section>

        {/* ===================================================
            CENTER
        ==================================================== */}

        <div className="flex flex-col gap-4">

          {/* PLAYER PROFILE */}

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hud-panel p-4"
          >

            <PanelTitle title="PLAYER PROFILE" />

            <div className="flex items-start justify-between gap-4">

              <div>

                <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
                  Gerald S. Recaña
                </h2>

                <div className="mt-2 font-mono text-[8px] tracking-[0.15em] text-white/40">
                  AGE LEVEL
                </div>

              </div>

              <div className="border border-purple-500/50 bg-purple-500/10 px-3 py-2 font-mono text-lg font-bold text-purple-300">
                LVL 22
              </div>

            </div>

            {/* Level */}

            <div className="mt-2">

              <div className="mb-1 flex justify-end font-mono text-[7px] text-green-400">
                85%
              </div>

              <ProgressBar
                value={85}
                type="green"
              />

            </div>

            {/* Class */}

            <div className="mt-4">

              <div className="font-mono text-[8px] text-white/30">
                CLASS
              </div>

              <div className="mt-1 text-sm font-bold">
                Full Stack Developer & IT Support
              </div>

            </div>

            {/* Status */}

            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-green-500/40 bg-green-500/10 px-3 py-1">

              <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />

              <span className="font-mono text-[8px] font-bold text-green-400">
                AVAILABLE FOR WORK
              </span>

            </div>

          </motion.section>

          {/* PROFILE DETAILS */}

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hud-panel p-4"
          >

            <PanelTitle title="PROFILE DETAILS" />

            <div className="grid gap-2">

              <InfoCard
                icon={<MapPin size={14} />}
                label="LOCATION"
                value="Taytay, Rizal, Philippines"
                wide
              />

              <div className="grid gap-2 sm:grid-cols-2">

                <InfoCard
                  icon={<Monitor size={14} />}
                  label="SPECIALIZATION"
                  value="Web Systems & IT Support"
                />

                <InfoCard
                  icon={<Phone size={14} />}
                  label="CONTACT"
                  value="09755829884"
                />

              </div>

              <InfoCard
                icon={<Mail size={14} />}
                label="EMAIL"
                value="geraldrecana03@gmail.com"
                wide
              />

            </div>

          </motion.section>

          {/* ACTIONS */}

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hud-panel p-4"
          >

            <PanelTitle title="AVAILABLE ACTIONS" />

            <div className="grid grid-cols-2 gap-2">

              <ActionButton
                icon={<Mail size={13} />}
                label="Email Me"
                href="mailto:geraldrecana03@gmail.com"
              />

              <ActionButton
                icon={<FileText size={13} />}
                label="Download Resume"
                href="/resume/resume.pdf"
              />

              <ActionButton
                icon={<Code2 size={13} />}
                label="GitHub"
                href="https://github.com/GADDY23/"
              />

              <ActionButton
                icon={<Globe size={13} />}
                label="LinkedIn"
                href="https://www.linkedin.com/in/gerald-reca%C3%B1a-203a99414/"
              />

            </div>

          </motion.section>

        </div>

        {/* ===================================================
            RIGHT
        ==================================================== */}

        <div className="flex flex-col gap-4">

          {/* CHARACTER STATS */}

          <motion.section
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="hud-panel p-4"
          >

            <PanelTitle title="CHARACTER STATS" />

            <div className="space-y-3">

              <SkillBar
                label="Frontend"
                value={80}
                type="blue"
              />

              <SkillBar
                label="Backend"
                value={90}
                type="purple"
              />

              <SkillBar
                label="IT Support"
                value={90}
                type="cyan"
              />

              <SkillBar
                label="Problem Solving"
                value={85}
                type="yellow"
              />

              <SkillBar
                label="Communication"
                value={80}
                type="pink"
              />

              <SkillBar
                label="Learning"
                value={95}
                type="green"
              />

            </div>

          </motion.section>

          {/* ACHIEVEMENTS */}

          <motion.section
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className="hud-panel p-4"
          >

            <PanelTitle title="ACHIEVEMENTS" />

            <div className="space-y-2">

              <Achievement
                title="Summa Cum Laude"
              />

              <Achievement
                title="BS Information Systems"
              />

              <Achievement
                title="Certified IT Support"
              />

              <Achievement
                title="Best in Capstone"
              />

            </div>

          </motion.section>

        </div>

      </div>

    </main>
  );
}

/* ============================================================
   PANEL TITLE
============================================================ */

function PanelTitle({
  title,
}: {
  title: string;
}) {
  return (
    <div className="mb-4 flex items-center gap-2 border-b border-purple-500/20 pb-2">

      <span className="text-[8px] text-purple-500">
        ◆
      </span>

      <span className="font-mono text-[9px] font-bold tracking-[0.18em] text-purple-400">
        {title}
      </span>

    </div>
  );
}

/* ============================================================
   INFO CARD
============================================================ */

function InfoCard({
  icon,
  label,
  value,
  wide = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 border border-white/10 bg-black/30 p-3 ${
        wide ? "w-full" : ""
      }`}
    >

      <div className="flex h-7 w-7 shrink-0 items-center justify-center border border-purple-500/30 bg-purple-500/10 text-purple-400">
        {icon}
      </div>

      <div className="min-w-0">

        <div className="font-mono text-[7px] font-bold text-white/35">
          {label}
        </div>

        <div className="mt-0.5 truncate text-[9px] font-semibold text-white/75">
          {value}
        </div>

      </div>

    </div>
  );
}

/* ============================================================
   PROGRESS BAR
============================================================ */

function ProgressBar({
  value,
  type,
}: {
  value: number;
  type: "green";
}) {
  return (
    <div className="h-[6px] overflow-hidden rounded-sm bg-white/10">

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="h-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.7)]"
      />

    </div>
  );
}

/* ============================================================
   CHARACTER STAT
============================================================ */

function SkillBar({
  label,
  value,
  type,
}: {
  label: string;
  value: number;
  type: "blue" | "purple" | "cyan" | "yellow" | "pink" | "green";
}) {
  const colors = {
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    cyan: "bg-cyan-400",
    yellow: "bg-yellow-400",
    pink: "bg-pink-400",
    green: "bg-green-400",
  };

  const glows = {
    blue: "shadow-[0_0_6px_rgba(59,130,246,0.7)]",
    purple: "shadow-[0_0_6px_rgba(168,85,247,0.7)]",
    cyan: "shadow-[0_0_6px_rgba(34,211,238,0.7)]",
    yellow: "shadow-[0_0_6px_rgba(250,204,21,0.7)]",
    pink: "shadow-[0_0_6px_rgba(244,114,182,0.7)]",
    green: "shadow-[0_0_6px_rgba(74,222,128,0.7)]",
  };

  return (
    <div>

      <div className="mb-1 flex items-center justify-between">

        <span className="font-mono text-[8px] font-bold text-white/70">
          {label}
        </span>

        <span className="font-mono text-[7px] text-white/40">
          {value}
        </span>

      </div>

      <div className="h-[5px] overflow-hidden rounded-full bg-white/10">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className={`h-full ${colors[type]} ${glows[type]}`}
        />

      </div>

    </div>
  );
}

/* ============================================================
   ACHIEVEMENT
============================================================ */

function Achievement({
  title,
}: {
  title: string;
}) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      className="
        flex
        items-center
        gap-3
        border
        border-purple-500/20
        bg-black/30
        px-3
        py-3
        transition-colors
        hover:border-purple-400/50
      "
    >

      <Trophy
        size={14}
        className="shrink-0 text-yellow-400"
      />

      <span className="font-mono text-[8px] font-bold text-white/70">
        {title}
      </span>

    </motion.div>
  );
}

/* ============================================================
   ACTION BUTTON
============================================================ */

function ActionButton({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="
        group
        flex
        items-center
        justify-center
        gap-2
        border
        border-purple-500/40
        bg-purple-500/[0.05]
        px-3
        py-3
        font-mono
        text-[8px]
        font-bold
        text-white/60
        transition-all
        duration-300
        hover:border-purple-400
        hover:bg-purple-500/10
        hover:text-white
        hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]
      "
    >
      {icon}

      {label}

      <ExternalLink
        size={9}
        className="opacity-0 transition-opacity group-hover:opacity-50"
      />
    </a>
  );
}
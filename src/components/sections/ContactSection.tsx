"use client";
import GalaxyBackground from "@/components/background/GalaxyBackground";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  MessageSquare,
  Radio,
  CheckCircle2,
  FileTextIcon,
} from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setSent(true);

    window.setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  return (
    <section
      className="
        relative
        flex
        min-h-screen
        w-full
        items-center
        overflow-hidden
        px-5
        py-10
        text-white
        md:px-10
        lg:pr-44
      "
    >
            <GalaxyBackground />
      {/* =========================================
          BACKGROUND GRID
      ========================================= */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div
          className="
            absolute
            inset-0
            [background-image:linear-gradient(rgba(168,85,247,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,.25)_1px,transparent_1px)]
            [background-size:40px_40px]
          "
        />
      </div>

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="relative z-10 mx-auto w-full max-w-6xl">

        {/* =======================================
            HEADER
        ======================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.45,
          }}
          className="mb-7 text-center"
        >
          <div className="flex items-center justify-center gap-2">

            <Radio
              size={12}
              className="text-cyan-400"
            />

            <p className="font-mono text-[8px] font-bold tracking-[0.4em] text-cyan-400">
              COMMUNICATION TERMINAL
            </p>

          </div>

          <h2 className="mt-2 text-3xl font-black uppercase tracking-wider md:text-4xl">
            Contact
          </h2>

          <p className="mt-2 font-mono text-[7px] tracking-[0.25em] text-white/30">
            THE MESSAGE IS ONLY FOR EXAMPLE!! EMAIL ME IN MY GMAIL
          </p>
        </motion.div>

        {/* =======================================
            CONTENT
        ======================================= */}

        <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr]">

          {/* =====================================
              LEFT — CONTACT INFO
          ===================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.45,
              delay: 0.1,
            }}
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-purple-500/25
              bg-black/50
              p-5
              backdrop-blur-xl
            "
          >

            {/* top line */}

            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/70 to-transparent" />

            <div className="flex items-center gap-2">

              <MessageSquare
                size={14}
                className="text-purple-400"
              />

              <p className="font-mono text-[7px] font-bold tracking-[0.25em] text-white/30">
                AVAILABLE CHANNELS
              </p>

            </div>

            <h3 className="mt-3 text-xl font-black uppercase">
              Let's Connect
            </h3>

            <p className="mt-2 text-[9px] leading-5 text-white/45">
              Have a project, job opportunity, or simply
              want to connect? Send me a message through
              the communication terminal.
            </p>

            {/* Contact cards */}

            <div className="mt-6 space-y-3">

              {/* Email */}

              <ContactItem
                icon={<Mail size={15} />}
                label="EMAIL"
                value="geraldrecana03@gmail.com"
                href="mailto:geraldrecana03@gmail.com"
              />

              {/* Resume */}

              <ContactItem
                icon={<FileTextIcon size={15} />}
                label="RESUME"
                value="Download Resume"
                href="/resume/resume.pdf"
              />

              {/* GitHub */}

              <ContactItem
                icon={
                    <span className="text-[11px] font-black">
                    GH
                    </span>
                }
                label="GITHUB"
                value="GitHub Profile"
                href="https://github.com/GADDY23/"
                />  

              {/* LinkedIn */}

                <ContactItem
                icon={
                    <span className="text-[10px] font-black">
                    in
                    </span>
                }
                label="LINKEDIN"
                value="LinkedIn Profile"
                href="https://www.linkedin.com/in/gerald-reca%C3%B1a-203a99414//"
                />

            </div>

            {/* Status */}

            <div
              className="
                mt-6
                flex
                items-center
                gap-3
                rounded-lg
                border
                border-cyan-400/15
                bg-cyan-400/[0.03]
                px-3
                py-3
              "
            >

              <span className="relative flex h-2.5 w-2.5">

                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-40" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,.8)]" />

              </span>

              <div>

                <p className="font-mono text-[7px] font-bold text-cyan-300">
                  ONLINE
                </p>

                <p className="font-mono text-[6px] text-white/25">
                  AVAILABLE FOR OPPORTUNITIES
                </p>

              </div>

            </div>

          </motion.div>

          {/* =====================================
              RIGHT — MESSAGE FORM
          ===================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.45,
              delay: 0.15,
            }}
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-purple-500/25
              bg-black/50
              p-5
              backdrop-blur-xl
              md:p-6
            "
          >

            {/* top line */}

            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

            {/* Form header */}

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-2">

                <Send
                  size={13}
                  className="text-cyan-400"
                />

                <p className="font-mono text-[7px] font-bold tracking-[0.25em] text-white/30">
                  TRANSMISSION
                </p>

              </div>

              <span className="font-mono text-[6px] text-cyan-400/50">
                SECURE CHANNEL
              </span>

            </div>

            <h3 className="mt-3 text-xl font-black uppercase">
              Send a Message
            </h3>

            {/* Form */}

            <form
              onSubmit={handleSubmit}
              className="mt-5 space-y-3"
            >

              {/* Name */}

              <TerminalInput
                label="NAME"
                name="name"
                placeholder="ENTER YOUR NAME"
                required
              />

              {/* Email */}

              <TerminalInput
                label="EMAIL"
                name="email"
                type="email"
                placeholder="ENTER YOUR EMAIL"
                required
              />

              {/* Subject */}

              <TerminalInput
                label="SUBJECT"
                name="subject"
                placeholder="MESSAGE SUBJECT"
                required
              />

              {/* Message */}

              <div>

                <label
                  htmlFor="message"
                  className="mb-1.5 block font-mono text-[7px] font-bold tracking-[0.2em] text-white/30"
                >
                  MESSAGE
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="ENTER YOUR MESSAGE..."
                  className="
                    w-full
                    resize-none
                    rounded-lg
                    border
                    border-purple-500/20
                    bg-black/40
                    px-3
                    py-2.5
                    font-mono
                    text-[8px]
                    text-white/70
                    outline-none
                    transition
                    placeholder:text-white/15
                    focus:border-cyan-400/50
                    focus:bg-cyan-400/[0.02]
                  "
                />

              </div>

              {/* Submit */}

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.01,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-cyan-400/30
                  bg-cyan-400/[0.05]
                  px-4
                  py-3
                  font-mono
                  text-[8px]
                  font-bold
                  tracking-[0.2em]
                  text-cyan-300
                  transition
                  hover:border-cyan-300
                  hover:bg-cyan-400/[0.1]
                  hover:shadow-[0_0_20px_rgba(34,211,238,.08)]
                "
              >

                {sent ? (
                  <>
                    <CheckCircle2 size={13} />
                    TRANSMISSION SENT
                  </>
                ) : (
                  <>
                    <Send size={13} />
                    SEND TRANSMISSION
                  </>
                )}

              </motion.button>

            </form>

          </motion.div>

        </div>

        {/* =======================================
            FOOTER
        ======================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.7,
          }}
          className="mt-6 flex items-center justify-center gap-3"
        >

          <div className="h-px w-12 bg-purple-500/20" />

          <span className="font-mono text-[6px] tracking-[0.3em] text-white/20">
            CONNECTION READY
          </span>

          <div className="h-px w-12 bg-purple-500/20" />

        </motion.div>

      </div>

    </section>
  );
}

/* =============================================
   CONTACT ITEM
============================================= */

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div
      className="
        group
        flex
        items-center
        gap-3
        rounded-lg
        border
        border-purple-500/15
        bg-white/[0.015]
        px-3
        py-3
        transition
        hover:border-cyan-400/30
        hover:bg-cyan-400/[0.025]
      "
    >

      <div
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-md
          border
          border-purple-500/20
          bg-purple-500/[0.05]
          text-purple-300
          transition
          group-hover:border-cyan-400/30
          group-hover:text-cyan-300
        "
      >
        {icon}
      </div>

      <div className="min-w-0">

        <p className="font-mono text-[6px] tracking-[0.2em] text-white/25">
          {label}
        </p>

        <p className="mt-0.5 truncate text-[8px] text-white/55 transition group-hover:text-white/80">
          {value}
        </p>

      </div>

    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={
        href.startsWith("http")
          ? "noopener noreferrer"
          : undefined
      }
    >
      {content}
    </a>
  );
}

/* =============================================
   INPUT
============================================= */

function TerminalInput({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="mb-1.5 block font-mono text-[7px] font-bold tracking-[0.2em] text-white/30"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="
          w-full
          rounded-lg
          border
          border-purple-500/20
          bg-black/40
          px-3
          py-2.5
          font-mono
          text-[8px]
          text-white/70
          outline-none
          transition
          placeholder:text-white/15
          focus:border-cyan-400/50
          focus:bg-cyan-400/[0.02]
        "
      />

    </div>
  );
}
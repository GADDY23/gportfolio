"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

import LoadingScreen from "@/components/loading/LoadingScreen";
import AboutSection from "@/components/about/AboutSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import SectionRail, {
  sections,
  type SectionId,
} from "@/components/navigation/SectionRail";
import ProfileHUD from "@/components/profile/ProfileHUD";
import SectionTransition from "@/components/transitions/SectionTransition";

import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

function PortfolioContent() {
  const searchParams = useSearchParams();
  const skipLoading = searchParams.get("skipLoading") === "true";

  const [loading, setLoading] = useState(!skipLoading);

  const [activeSection, setActiveSection] =
    useState<SectionId>("about");

  const [direction, setDirection] =
    useState<1 | -1>(1);

  const isTransitioning = useRef(false);

  /*
  |--------------------------------------------------------------------------
  | Change section
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!loading && window.location.hash === "#about") {
      const timeout = window.setTimeout(() => {
        document.getElementById("about")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);

      return () => {
        window.clearTimeout(timeout);
      };
    }
  }, [loading]);

  const changeSection = useCallback(
    (nextSection: SectionId) => {
      if (isTransitioning.current) return;

      if (nextSection === activeSection) return;

      const currentIndex = sections.findIndex(
        (section) => section.id === activeSection
      );

      const nextIndex = sections.findIndex(
        (section) => section.id === nextSection
      );

      const nextDirection: 1 | -1 =
        nextIndex > currentIndex ? 1 : -1;

      setDirection(nextDirection);
      setActiveSection(nextSection);

      isTransitioning.current = true;

      window.setTimeout(() => {
        isTransitioning.current = false;
      }, 650);
    },
    [activeSection]
  );

  /*
  |--------------------------------------------------------------------------
  | Mouse wheel navigation
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (loading) return;

    let wheelTimeout: number | undefined;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      if (isTransitioning.current) return;

      if (wheelTimeout) {
        window.clearTimeout(wheelTimeout);
      }

      wheelTimeout = window.setTimeout(() => {
        const currentIndex = sections.findIndex(
          (section) => section.id === activeSection
        );

        if (event.deltaY > 0) {
          const nextIndex = Math.min(
            currentIndex + 1,
            sections.length - 1
          );

          if (nextIndex !== currentIndex) {
            changeSection(sections[nextIndex].id);
          }
        }

        if (event.deltaY < 0) {
          const previousIndex = Math.max(
            currentIndex - 1,
            0
          );

          if (previousIndex !== currentIndex) {
            changeSection(sections[previousIndex].id);
          }
        }
      }, 40);
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);

      if (wheelTimeout) {
        window.clearTimeout(wheelTimeout);
      }
    };
  }, [loading, activeSection, changeSection]);

  /*
  |--------------------------------------------------------------------------
  | Keyboard navigation
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (loading) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key !== "ArrowDown" &&
        event.key !== "ArrowUp"
      ) {
        return;
      }

      event.preventDefault();

      const currentIndex = sections.findIndex(
        (section) => section.id === activeSection
      );

      if (event.key === "ArrowDown") {
        const nextIndex = Math.min(
          currentIndex + 1,
          sections.length - 1
        );

        if (nextIndex !== currentIndex) {
          changeSection(sections[nextIndex].id);
        }
      }

      if (event.key === "ArrowUp") {
        const previousIndex = Math.max(
          currentIndex - 1,
          0
        );

        if (previousIndex !== currentIndex) {
          changeSection(sections[previousIndex].id);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [loading, activeSection, changeSection]);

  /*
  |--------------------------------------------------------------------------
  | Loading screen
  |--------------------------------------------------------------------------
  */

  if (loading) {
    return (
      <LoadingScreen
        onComplete={() => setLoading(false)}
      />
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Portfolio
  |--------------------------------------------------------------------------
  */

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <ProfileHUD />

      <SectionRail
        activeSection={activeSection}
        onSelect={changeSection}
      />

      <SectionTransition
        section={activeSection}
        direction={direction}
      >
        {activeSection === "about" && (
          <AboutSection />
        )}

        {activeSection === "experience" && (
          <ExperienceSection />
        )}

        {activeSection === "skills" && (
          <SkillsSection />
        )}

        {activeSection === "projects" && (
          <ProjectsSection />
        )}

        {activeSection === "education" && (
          <EducationSection />
        )}

        {activeSection === "contact" && (
          <ContactSection />
        )}
      </SectionTransition>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <PortfolioContent />
    </Suspense>
  );
}
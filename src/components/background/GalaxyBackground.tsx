"use client";

import { useEffect, useState } from "react";

interface Star {
  id: number;
  left: number;
  top: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
}

export default function GalaxyBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 120 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));

    setStars(generatedStars);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#080B1A]" />

      <div className="absolute -left-1/4 -top-1/4 h-[70vh] w-[70vh] rounded-full bg-purple-700/10 blur-[120px]" />

      <div className="absolute -right-1/4 top-1/4 h-[60vh] w-[60vh] rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="absolute bottom-[-20%] left-1/3 h-[50vh] w-[50vh] rounded-full bg-fuchsia-600/10 blur-[130px]" />

      <div className="absolute inset-0">
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
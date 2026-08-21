"use client";

export default function SkillLegend() {
  return (
    <div
      className="
        flex
        flex-wrap
        items-center
        justify-center
        gap-x-4
        gap-y-2
        font-mono
        text-[7px]
        uppercase
        tracking-wider
        text-white/30
      "
    >
      <LegendItem
        dot="bg-purple-400"
        label="Primary"
      />

      <LegendItem
        dot="bg-cyan-400"
        label="Advanced"
      />

      <LegendItem
        dot="bg-white/30"
        label="Unlocked"
      />

      <span className="text-white/10">
        //
      </span>

      <span>
        Click node to inspect
      </span>
    </div>
  );
}

function LegendItem({
  dot,
  label,
}: {
  dot: string;
  label: string;
}) {
  return (
    <span className="flex items-center gap-1.5">
      <span
        className={`
          h-1.5
          w-1.5
          rounded-full
          ${dot}
        `}
      />

      {label}
    </span>
  );
}
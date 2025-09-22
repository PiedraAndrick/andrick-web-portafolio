"use client";
import Image from "next/image";

function abbr(name: string) {
  const parts = name.replace(/\(.*?\)/g, "").trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.replace(/[^a-zA-Z]/g, "").slice(0, 2).toUpperCase() || "•";
}

type TechPillProps = {
  name: string;
  icon?: string;
  appearance?: "chip" | "invert" | "ring"; // comportamiento del icono en dark
};

export function TechPill({ name, icon, appearance = "chip" }: TechPillProps) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-full bg-transparent px-3 py-1.5 text-sm
                 dark:text-neutral-200/90"
      title={name}
    >
      {icon ? (
        <span className="relative h-12 w-14 shrink-0 rounded-md bg-white ring-1 ring-black/5 overflow-hidden">
          <Image
            src={icon}
            alt={`${name} icon`}
            fill
            className="p-1 object-contain"
            sizes="60px"
          />
        </span>
      ) : (
        <span
          aria-hidden
          className="grid h-8 w-8 place-items-center rounded-md bg-neutral-200 text-[10px] font-semibold
                     dark:bg-neutral-800 shrink-0"
        >
          {abbr(name)}
        </span>
      )}
      <span className="text-[9px] sm:text-[0.9rem] md:text-[0.9rem]font-mono min-w-0 truncate ">{name}</span>
    </div>
  );
}

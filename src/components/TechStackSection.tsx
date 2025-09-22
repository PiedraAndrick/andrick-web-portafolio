"use client";

import { useMemo, useState } from "react";
import { TechPill } from "@/components/TechPill";

export type TechItem = {
  name: string;
  icon?: string;                 // ruta a /public/...
  appearance?: "chip" | "invert" | "ring";
  level?: "Básico" | "Intermedio" | "Avanzado" | "Experto";
  tags?: string[];               // p.ej. ["frontend","ts"]
};

type Props = {
  title?: string;
  subtitle?: string;
  items: TechItem[];
  showSearch?: boolean;
};

export default function TechStackSection({
  items
}: Props) {
  const [q] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return items;
    return items.filter((t) => {
      const haystack = [
        t.name,
        ...(t.tags || []),
        t.level || "",
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(term);
    });
  }, [q, items]);

  return (
    <section className="w-full">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5">
        {filtered.map((t) => (
          <li
            key={t.name}
            className="flex items-center rounded-xl  bg-transparent px-3 py-2
                       dark:bg-transparent"
          >
            <TechPill name={t.name} icon={t.icon} appearance={t.appearance} />
            {t.level && (
              <span className="text-[11px] px-2 py-1 rounded-md border border-white/50 text-neutral-800/80 dark:text-neutral-200">
                {t.level}
              </span>
            )}
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <p className="mt-6 text-sm text-neutral-400">Sin resultados.</p>
      )}
    </section>
  );
}

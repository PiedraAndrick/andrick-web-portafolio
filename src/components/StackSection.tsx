// (puede ser server component; no requiere "use client")
import { TechPill } from "@/components/TechPill";

export type Tech = { name: string; icon?: string; appearance?: "chip" | "invert" | "ring"; };

export function StackSection({
  title,
  description,
  items,
  appearance
}: {
  title: string;
  description?: string;
  items: Tech[];
  appearance?: "chip" | "invert" | "ring";
  
}) {
  return (
    <section className="space-y-5 rounded-lg ">
      <header>
        <h2 className="text-xl font-semibold text-center">{title}</h2>
        {description && (
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            {description}
          </p>
        )}
      </header>

      <ul className="grid grid-cols-2 sm:grid-cols-2 gap-4">
        {items.map((t) => (
          <li key={t.name}>
            <TechPill name={t.name} icon={t.icon} appearance={t.appearance} />
          </li>
        ))}
      </ul>
    </section>
  );
}

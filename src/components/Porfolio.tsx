"use client";

import MotionTransition from "@/components/MotionTransition";
import ProjectCard from "./ProjectCard";
import { porfolio } from "../../dataIndex";

export default function Porfolio() {
  return (
    <MotionTransition
      position="right"
      className="w-full"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 mb-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-20 sm:gap-6 gap-6 ">
          {porfolio.map((p) => (
            <div key={p.id} className="w-full">
              <ProjectCard
                images={p.images}
                altText={p.altText}
                githubLink={p.githubLink}
                techIcons={p.techIcons}
                title={p.title ?? `Proyecto #${p.id}`}
                description={p.description ?? "Sin descripción"}
              />
            </div>
          ))}
        </div>
      </div>
    </MotionTransition>
  );
}

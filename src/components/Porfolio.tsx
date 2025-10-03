"use client";

import MotionTransition from "@/components/MotionTransition";
import ProjectCard from "./ProjectCard";
import { PortfolioItem } from "../../dataIndex";

const porfolio: PortfolioItem[] = [
    {
        id: 1,
        images: [
            { src: "/ProjectoChatbot/img1.png", alt: "Pantalla inicio" },
            { src: "/ProjectoChatbot/img2.png", alt: "Dashboard" },
            { src: "/ProjectoChatbot/img3.png", alt: "Detalle" },
            { src: "/ProjectoChatbot/img4.png", alt: "Detalle" },
            { src: "/ProjectoChatbot/img5.png", alt: "Detalle" },
            { src: "/ProjectoChatbot/img6.png", alt: "Detalle" },
        ],
        title: "Chatbot Vocacional",
        description: "Desarrollo de chatbot Vocacional",
        altText: "Proyecto ejemplo",
        githubLink: "https://github.com",
        techIcons: [
            { src: "/Technologies/FastApi.png", alt: "FastAPI" },
            { src: "/Technologies/Angular.png", alt: "Angular" },
            { src: "/Technologies/Spacy.png", alt: "spaCy" },
        ],
    },
    {
        id: 2,
        images: [
            { src: "/ProjectoChatbot/img1.png", alt: "Pantalla inicio" },
            { src: "/ProjectoChatbot/img2.png", alt: "Dashboard" },
            { src: "/ProjectoChatbot/img3.png", alt: "Detalle" },
            { src: "/ProjectoChatbot/img4.png", alt: "Detalle" },
            { src: "/ProjectoChatbot/img5.png", alt: "Detalle" },
            { src: "/ProjectoChatbot/img6.png", alt: "Detalle" },
        ],
        title: "Proyecto 2",
        description: "Descripción breve del proyecto 2",
        altText: "Proyecto ejemplo",
        githubLink: "https://github.com",
        techIcons: [
            { src: "/window.svg", alt: "React" },
            { src: "/vercel.svg", alt: "Next.js" },
            { src: "/globe.svg", alt: "Node.js" },
        ],
    },
];

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

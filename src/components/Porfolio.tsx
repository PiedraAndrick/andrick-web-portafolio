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
            { src: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png", alt: "FastAPI" },
            { src: "/Technologies/Angular.png", alt: "Angular" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/SpaCy_logo.svg/1200px-SpaCy_logo.svg.png", alt: "spaCy" },
        ],
    },
    {
        id: 2,
        images: [
            { src: "/ProyectoBanquito/inicio.png", alt: "Pantalla inicio" },
            { src: "/ProyectoBanquito/inicio2.png", alt: "Prestamos" },
            { src: "/ProyectoBanquito/inicio3.png", alt: "Capital" },
            { src: "/ProyectoBanquito/inicio4.png", alt: "Cuotas" },
            { src: "/ProyectoBanquito/inicio5.png", alt: "Nuevo Prestamo" },
            { src: "/ProyectoBanquito/inicio6.png", alt: "Miembros" },
        ],
        title: "Proyecto Banco Familiar",
        description: "Sistema de prestamos por cuotas",
        altText: "Proyecto ejemplo",
        githubLink: "https://github.com",
        techIcons: [
            { src: "/Technologies/nextjs.png", alt: "Next.js" },
            { src: "/Technologies/Express.png", alt: "Express.js" },
            { src: "/Technologies/mysql.png", alt: "Mysql" },
        ],
    },
    {
        id: 3,
        images: [
            { src: "/ProyectoBanquito/inicio.png", alt: "Pantalla inicio" },
            { src: "/ProyectoBanquito/inicio2.png", alt: "Prestamos" },
            { src: "/ProyectoBanquito/inicio3.png", alt: "Capital" },
            { src: "/ProyectoBanquito/inicio4.png", alt: "Cuotas" },
            { src: "/ProyectoBanquito/inicio5.png", alt: "Nuevo Prestamo" },
            { src: "/ProyectoBanquito/inicio6.png", alt: "Miembros" },
        ],
        title: "Proyecto Banco Familiar",
        description: "Sistema de prestamos por cuotas",
        altText: "Proyecto ejemplo",
        githubLink: "https://github.com",
        techIcons: [
            { src: "/Technologies/nextjs.png", alt: "Next.js" },
            { src: "/Technologies/Express.png", alt: "Express.js" },
            { src: "/Technologies/mysql.png", alt: "Mysql" },
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

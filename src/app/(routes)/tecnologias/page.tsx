import type { Metadata } from "next";
import { StackSection, type Tech } from "@/components/StackSection";
import MotionTransition from "@/components/MotionTransition";
import TechStackSection, { TechItem } from "@/components/TechStackSection";
import TransitionPage from "@/components/TransisionPage";
import CoverParticles from "@/components/Cover-particles";

export const metadata: Metadata = {
  title: "Tecnologías | Tu Portafolio",
  description: "Tecnologías que domino en frontend, backend y otras áreas.",
};

// Coloca tus íconos en /public/tech/*.svg|png|webp
const frontend: Tech[] = [
  { name: "Angular", icon: "/Technologies/Angular.png", appearance: "chip" },
  { name: "Next.js", icon: "/Technologies/nextjs.png", appearance: "ring" },
  { name: "React", icon: "/Technologies/Reactpng.png", appearance: "ring" },
  { name: "Vue", icon: "/Technologies/vuejs.png" },
  { name: "Tailwind CSS", icon: "/Technologies/tailwind.png" },
];

const backend: Tech[] = [
  { name: "Node.js", icon: "/Technologies/node.png", appearance: "ring" },
  { name: "Express.js", icon: "/Technologies/Express.png" },
  { name: "NestJS", icon: "/Technologies/Nest.png" },
  { name: "FastAPI", icon: "/Technologies/FastAPI.png" }
];

const devopsYData: Tech[] = [
  { name: "PostgreSQL", icon: "/Technologies/postgrestsql.png" },
  { name: "MongoDB", icon: "/Technologies/mongodb.png" },
  { name: "Mysql", icon: "/Technologies/mysql.png" },
  { name: "Docker", icon: "/Technologies/docker.png" },
  { name: "Git / GitHub", icon: "/Technologies/github.png" },
  { name: "Jira", icon: "/Technologies/jira.png" },
];

const myTechs: TechItem[] = [
  { name: "TypeScript", icon: "/Technologies/Typescript.png", appearance: "invert", level: "Avanzado", tags: ["frontend", "backend", "ts"] },
  { name: "Java", icon: "/Technologies/java.png", appearance: "invert", level: "Intermedio", tags: ["backend", "JAVA"] },
  { name: "Python", icon: "/Technologies/python.png", appearance: "ring", level: "Intermedio", tags: ["backend", "py"] },
];

export default function TecnologiasPage() {
  return (
    <>
      <TransitionPage />
      <CoverParticles />
      <MotionTransition position="right">
        <div className="mx-auto max-w-6xl px-12">
          <div className="mb-4">
            <div className="px-4 sm:px-6 mb-7">
              <h1 className="text-3xl font-bold tracking-tight text-center">Lenguajes con mayor experiencia</h1>
              <p className="mt-2 text-sm text-cyan-300/90 dark:text-cyan-300/90 text-center mb-3">
                Lenguajes principales
              </p>
              <div>
                <TechStackSection items={myTechs} />
              </div>

            </div>
            <h1 className="text-3xl font-bold tracking-tight text-center">Tecnologías de dominio</h1>
            <p className="mt-2 text-sm text-cyan-300/90 dark:text-cyan-300/90 text-center">
              Un vistazo a mi stack principal en desarrollo web y herramientas de plataforma y datos.
            </p>
          </div>

          <div className="space-y-3 grid md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <StackSection
              title="Frontend"
              items={frontend}
            />
            <StackSection
              title="Backend"
              items={backend}
            />
            <StackSection
              title="DevOps & Data"
              items={devopsYData}
            />
          </div>
        </div>

      </MotionTransition>

    </>
  )
}

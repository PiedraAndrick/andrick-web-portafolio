import { bangers } from "@/lib";
import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <div className={`w-full h-full flex flex-col items-center p-6 gap-6`}>
        {/* Avatar + nombre */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/avatar.png"
            alt="Foto de Andrick Piedra"
            className="w-40 h-auto mx-auto "
          />
          <h1 className="mt-4 text-xl font-semibold">Andrick Piedra</h1>
          <p className="text-sm text-gray-400">Backend & Fullstack</p>
        </div>

        {/* Navegación vertical */}
        <nav className={`w-full text-center`}>
          <ul className={`${bangers.className} flex flex-col  text-2xl`}>
            <li>
              <Link
                href="/"
                className="block w-full rounded-lg px-3 py-2 hover:bg-white/5 transition"
              >
                Perfil
              </Link>
            </li>
            <li>
              <Link
                href="/portafolio"
                className="block w-full rounded-lg px-3 py-2 hover:bg-white/5 transition"
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                href="/experiencia"
                className="block w-full rounded-lg px-3 py-2 hover:bg-white/5 transition"
              >
                Experiencia
              </Link>
            </li>

            <li>
              <Link
                href="/tecnologias"
                className="block w-full rounded-lg px-3 py-2 hover:bg-white/5 transition"
              >
                Tecnologías
              </Link>
            </li>
          </ul>
        </nav>

        {/* Footer pequeño del aside */}
        <div className="mt-auto text-xs text-gray-500">
          <a
            href="mailto:andrickmpl20@gmail.com"
            className="hover:underline"
          >
            andrickmpl20@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import MotionTransition from "@/components/MotionTransition";

export default function Navar() {
  return (
    <MotionTransition position="bottom">
      <nav className="white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-red-100">
            Andrick Piedra
          </Link>
          <div className="space-x-6">
            <Link href="/" className="hover:text-blue-400">
              Perfil
            </Link>
            <Link href="/servicios" className="hover:text-blue-400">
              Proyectos
            </Link>
            <Link href="/contacto" className="hover:text-blue-400">
              Contacto
            </Link>
          </div>
        </div>
      </nav>
    </MotionTransition>
  );
}
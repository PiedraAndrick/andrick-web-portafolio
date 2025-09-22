import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Portafolio de Andrick Piedra",
  description: "Desarrollador Web | Backend & Fullstack",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={` min-h-screen bg-gray-950 text-white`}>
        <style>{`:root{ --sidebar-w: 16rem; }`}</style>
        <aside className="hidden lg:flex fixed inset-y-0 left-0 
                          w-[var(--sidebar-w)] border-r border-white/10 
                          bg-black backdrop-blur z-30">
          

          <div
            className="bg-any-gradient p-6  text-white"
          >
            <Sidebar />
          </div>
        </aside>

        <header className=" top-0 z-40 bg-transparent backdrop-blur 
                            lg:pl-[var(--sidebar-w)]">
          <Header />
        </header>
        <main className="p-4 pb-24 lg:pb-8 lg:pl-[var(--sidebar-w)] ">
          <div className="max-w-6xl mx-auto mt-10">{children}</div>
        </main>

        <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
          <Navbar />
        </div>
      </body>
    </html>
  );
}

// app/page.tsx (o donde tengas tu Home)

import CoverParticles from "@/components/Cover-particles";
import Introduction from "@/components/Introduction";
import TransitionPage from "@/components/TransisionPage";
export default function Home() {
  return (
    <>
      <main>
        <div className="flex min-h-[100vh] h-auto ">
          <CoverParticles />
          <TransitionPage />
          <Introduction/>
        </div>
      </main>


    </>
  );
}
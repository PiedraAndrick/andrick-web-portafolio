import CoverParticles from "@/components/Cover-particles";
import Porfolio from "@/components/Porfolio";
import TransitionPage from "@/components/TransisionPage";
export default function Portafolio() {
  return (
    <>
      <TransitionPage />
      <CoverParticles />
      <div className="w-full pt-4 pb-24 lg:pb-12">
        <Porfolio />
      </div>
    </>
  );
}
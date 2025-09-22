import CoverParticles from "@/components/Cover-particles";
import Introduction from "@/components/Introduction";
import TransitionPage from "@/components/TransisionPage";

export default function Home() {

    return(
        <main>
            <TransitionPage/>

            <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-to-r from-slate-900 to-purple-950 ">
                <CoverParticles/>
                <Introduction/>
            </div>
        </main>
    )


}
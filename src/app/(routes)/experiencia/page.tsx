import ContainerPage from "@/components/Container";
import { ImageBottomRight } from "@/components/ImageBottomRight";
import MotionTransition from "@/components/MotionTransition";
import TimeLine from "@/components/TimeLine";
import TransitionPage from "@/components/TransisionPage";

export default function Experiencia() {

    return (
        <>
            <MotionTransition position="right">
                <TransitionPage />
                <ContainerPage>
                    <ImageBottomRight w={500} y={500} src="/introavatar3.png" />
                    <h1 className="text-2xl items-center text-center md:text-left md:text-5xl">
                        Trayectora profesional
                    </h1>
                    <br />
                    <TimeLine />
                </ContainerPage>
            </MotionTransition>


        </>
    )


}
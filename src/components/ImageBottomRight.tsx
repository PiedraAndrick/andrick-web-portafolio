"use client"

import Image from "next/image";
import MotionTransition from "./MotionTransition";

interface ImageBottomRightProps {
    src: string
    w: number
    y: number
}

export function ImageBottomRight(props: ImageBottomRightProps) {
    const { src,w,y } = props
    return (
        <>
            <MotionTransition position="bottom" className="hidden 2xl:block absolute bottom-0 right-0">
                <Image src={src} width={w} height={y} className=" " alt="Particles " />
            </MotionTransition>
        </>

    )
}
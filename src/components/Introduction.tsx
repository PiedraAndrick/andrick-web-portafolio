"use client"
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import MotionTransition from "./MotionTransition";
import { bitcount, mogra } from "@/lib";
import DownloadPdf from "./DownloadPdf";

export default function Introduction() {
    return (
        <>
            <MotionTransition position="right" className=" w-full h-full">
                <div className="z-10 grid items-center  p-3  md:py-0 md:grid-cols-2  ">

                    <Image priority width="350" height="350" alt="Profile Pic" src="/introavatar1.png" className="mx-auto" />

                    <div className="flex flex-col mx-auto justify-center max-w-md">

                        <h1 className={`${bitcount.className} mb-5 mx-auto text-3xl leading-tight text-center md:text-left md:text-4xl md:mb-10`}>Si tienes una idea <br />
                            <TypeAnimation sequence={[
                                "puedes crearla",
                                1000,
                                "puedes programarla",
                                1000,
                                "puedes resolverla",
                                100
                            ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="font-bold text-amber-800 text-2xl text-center"
                            />
                        </h1>
                        <p className={`${mogra.className} mx-auto mb-2 md:mx-0 md:mb-8 text-[1rem] text-justify`} >
                            Ingeniero en Tecnologías de la Información con experiencia en el
                            desarrollo de aplicaciones web, especializado en el desarrollo backend.
                            He trabajado en proyectos escalables
                            aplicando tecnologías modernas como Kafka,Redis, JIRA y contenedores Docker.
                            <br /> <br />
                            Mi visión por la innovacion y genualidad me a llevado a fortalecer mis habilidades como freelancer en el desarrollo de soluciones
                            para aplicaciones web.
                        </p>

                        <div className="flex justify-center gap-3 md:justify-start md:gap-10">

                            <div
                                className="px-3 py-2 transition-all border-2 
                            cursor-pointer text-md w-fit rounded-xl hover:shadow-xl 
                            hover:shadow-indigo-950 mt-4">

                               <DownloadPdf />

                            </div>
                            
                        </div>

                    </div>

                </div>
            </MotionTransition>
        </>

    );
}
import MotionTransition from "@/components/MotionTransition";
import Link from "next/link";
import { socialNetworks } from "../../dataIndex";
import { wdxlLubrifontSC } from "@/lib";
export default function Header() {
    return (
        <MotionTransition position="bottom" className="container max-w-6xl mx-auto flex items-center justify-around py-3 px-3">
                <div className="container justify-between max-w-6xl mx-auto md:flex">
                    <Link href="/">
                        <h1 className={`${wdxlLubrifontSC.className} mx-3 my-3 text-5xl font-bold text-center md:text-left`}>
                            PORTAFOLIO <span className="text-blue-500/50 text-5xl ">WEB</span>
                        </h1> </Link>

                    <div className="flex items-center justify-center gap-7 mx-3">
                        {socialNetworks.map(({ logo, src, id }) => (
                            <Link key={id}
                                href={src}
                                target="_blank"
                                className="transition-all duration-300 hover:text-amber-600"
                            >
                                {logo}
                            </Link>
                        ))}
                    </div>
                </div>
        </MotionTransition>
    )
}
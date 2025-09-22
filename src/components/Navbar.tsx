"use client";
import { itemsNavbar } from "../../dataIndex";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MotionTransition from "@/components/MotionTransition";

export default function Navbar(){
    const router = usePathname()
    return(
        <MotionTransition position="right" className="px-3 py-2 rounded-full border border-white/10 bg-gray-900/70 backdrop-blur-sm shadow-xl">
            <nav>
                <div className=" flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
                {itemsNavbar.map((item)=>(
                    <div key={item.id}
                    className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-any-gradient ${router === item.link && 'bg-any-gradient' }`}>
                        <Link href={item.link}>{item.icon}</Link>
                    </div>
                ))}

                </div>
            </nav>
        </MotionTransition>
    );
}
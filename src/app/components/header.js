import Image from "next/image"
import { metadata } from "@/app/layout"

export default function HeaderComponent() {
    return (
        <header className="container mx-auto px-5">
            <div className="body py-[32px] flex items-center justify-between">
                <div className="left-side">
                    <a href="/">
                        <Image src="logo.svg" alt={metadata.title} width={163} height={36}/>
                    </a>
                </div>

                <div className="right-side">
                    <div className="menu-bar flex flex-col gap-[16px] cursor-pointer">
                        <span className="w-[60px] h-[3px] rounded-main bg-black-300"></span>
                        <span className="w-[60px] h-[3px] rounded-main bg-black-300"></span>
                    </div>
                </div>
            </div>
        </header>
    )
}
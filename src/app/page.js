import Image from "next/image"
import Hero from "@/app/components/hero"
import HeaderComponent from "@/app/components/header"
export default function Home() {
    return (
        <main className="">
            <HeaderComponent />
            <div className="mt-[50px] h-[calc(100vh-100px)] flex items-center justify-center">
                <Hero
                    img="/main-banner-image.jpg"
                />
                <i className="fa-light fa-computer-mouse-scrollwheel absolute bottom-[34px] text-[32px] fa-bounce"></i>

                <style>
                    {
                        `
                            i {
                              --fa-animation-duration: 2s;
                              --fa-animation-delay: 4s;
                            }
                        `
                    }
                </style>
            </div>
        </main>
    )
}

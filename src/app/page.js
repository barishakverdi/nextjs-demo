import Image from "next/image"
import Hero from "@/app/components/index/hero"
import HeaderComponent from "@/app/components/header"
import Tabs from "@/app/components/index/tabs"
import LogoSlider from "@/app/components/index/logoSlider";
export default function Home() {
    return (
        <main className="">
            <HeaderComponent />
            <div className="mt-[50px] mb-[160px] h-[calc(100vh-100px)] flex items-center justify-center animate-img">
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

            <Tabs
                mainTitle="Who are We?"
            />

            <LogoSlider />
        </main>
    )
}

import Image from "next/image"
import Hero from "@/app/components/index/hero"
import HeaderComponent from "@/app/components/header"
import Tabs from "@/app/components/index/tabs"
import LogoSlider from "@/app/components/index/logoSlider";
import Comments from "@/app/components/index/comments"
import Projects from "@/app/components/index/projects"
import Contact from "@/app/components/index/contact"
import Footer from "@/app/components/footer";
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
            <Comments
                title={"What did \n" + "Our Customers Say?"}
            />

            <Projects
                title="Latest Projects"
            />

            <Contact />

            <Footer />
        </main>
    )
}

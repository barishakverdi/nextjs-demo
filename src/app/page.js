import Hero from "@/app/components/index/hero";
import HeaderComponent from "@/app/components/header";
import Tabs from "@/app/components/index/tabs";
import LogoSlider from "@/app/components/index/logoSlider";
import Comments from "@/app/components/index/comments";
import Projects from "@/app/components/index/projects";
import Contact from "@/app/components/index/contact";
import Footer from "@/app/components/footer";

export default function Home() {
    return (
        <main className="relative group/mega">
            <HeaderComponent/>
            <div className="mt-[50px] mb-[160px] max-xl:mb-[80px] max-lg:mb-[50px] h-[calc(100vh-100px)] max-lg:h-auto flex items-center justify-center animate-img">
                <Hero img="/main-banner-image.jpg"/>
            </div>
            <Tabs mainTitle="Who are We?"/>
            <LogoSlider/>
            <Comments title={"What did \n" + "Our Customers Say?"}/>
            <Projects title="Latest Projects"/>
            <Contact/>
            <Footer/>
        </main>
    )
}

import HeaderComponent from "@/app/components/header"
import Footer from "@/app/components/footer";
import Hero from "@/app/about-us/components/hero";
import Accordion from "@/app/about-us/components/accordion";
import Ceo from "@/app/about-us/components/ceo";
export default function Page() {
    return (
        <main className="relative group/mega">
            <HeaderComponent />
            <Hero
                mainTitle="About Crealive"
            />
            <Accordion
                mainTitle="What we actually do?"
            />
            <Ceo/>
            <Footer
                revealReset={false}
            />
        </main>
    )
}

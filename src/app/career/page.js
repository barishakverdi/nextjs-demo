import HeaderComponent from "@/app/components/header";
import Footer from "@/app/components/footer";
import Hero from "@/app/career/components/hero";
import Content from "@/app/career/components/content";
import Ads from "@/app/career/components/ads";

export default function Page() {
    return (
        <main className="relative group/mega">
            <HeaderComponent/>
            <Hero/>
            <Content
                mainTitle="What we Offer?"
                subTitle="Young Team, Continuous Improvement"
                description={"Would you like to be part of the exciting journey in the world of software? We invite you to join us, a team that brings\n innovative projects to life."}
            />
            <Ads
                mainTitle="Job Ads"
            />
            <Footer/>
        </main>
    )
}
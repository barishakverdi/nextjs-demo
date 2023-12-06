import HeaderComponent from "@/app/components/header";
import Footer from "@/app/components/footer";
import Hero from "@/app/projects/project-detail/components/hero";
import Content from "@/app/projects/project-detail/components/content";

export default function Page() {
    return (
        <main className="relative group/mega">
            <HeaderComponent />
            <Hero
                mainTitle="Waveless"
                description="Our 15+ years of experience in the software world have enabled us to approach each project with a high level of expertise, delivering the best solutions to meet customer needs. The experience we have gained on each project has strengthened our mastery of technology and industry trends."
            />
            <Content
                url="https://www.example.com"
                link="example.com"
                image="project-image.png"
                mockup1="mockup-1.png"
                mockup1Dark="mockup-1-dark.png"
                mockup2="mockup-2.png"
                mockup2Dark="mockup-2-dark.png"
                projectOwner="Honey"
                projectDate="2023"
                sector="Jewelery"
                location="Istanbul / Turkey"
            />
            <Footer
                revealReset={false}
            />
        </main>
    )
}
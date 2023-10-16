import HeaderComponent from "@/app/components/header";
import Footer from "@/app/components/footer";
import Hero from "@/app/career/career-detail/components/hero";
import Content from "@/app/career/career-detail/components/content";
import CareerForm from "@/app/career/career-detail/components/form";

export default function Page() {
    const expectations = [
        "Knowledge of HTML, CSS, and JavaScript:  A strong foundational knowledge of essential web technologies including HTML, CSS, and JavaScript.",
        "Web Application Development Skills:  Proficiency in developing modern web applications, including user interface development.",
        "Responsive Web Design:  Ability to create designs that adapt to different screen sizes.",
        "CSS Framework Proficiency:  Familiarity with CSS frameworks such as Bootstrap or Tailwind for efficient and rapid design.",
        "Version Control:  Proficiency in using version control systems like Git.",
    ];

    const offers = [
        "Cutting-Edge Projects:  Join our team to work on cutting-edge projects in various industries, allowing you to expand your knowledge and expertise.",
        "Professional Growth:  We foster a culture of continuous learning. Take advantage of workshops, training sessions, and conferences to enhance your skills and knowledge.",
        "Collaborative Environment:  Be a part of a collaborative and innovative work environment where you can exchange ideas with a diverse team of professionals.",
        "Career Advancement:  We value internal talent and provide opportunities for career advancement. Your growth path is important to us.",
        "Flexibility:  Enjoy flexible work arrangements that promote a healthy work-life balance, including remote work options when applicable.",
    ]
    return (
        <main className="relative group/mega">
            <HeaderComponent/>
            <Hero
                mainTitle="Front-End Developer"
                description="We have an experienced and passionate team. The new member in the Front-End Developer position will join our experienced team, contributing to our projects and becoming a part of our agency's success story."
                date="Jun 23, 2023"
                // appCount={24}
            />
            <Content
                expectations={expectations}
                offers={offers}
            />
            <CareerForm />
            <Footer
                revealReset={false}
            />
        </main>
    )
}
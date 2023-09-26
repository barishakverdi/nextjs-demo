import HeaderComponent from "@/app/components/header";
import Footer from "@/app/components/footer";
import Hero from "@/app/contact/components/hero";
import ContactForm from "@/app/contact/components/form";

export default function Page() {
    return (
        <main className="relative group/mega">
            <HeaderComponent />
            <Hero />
            <ContactForm />
            <Footer
                revealReset={false}
            />
        </main>
    )
}
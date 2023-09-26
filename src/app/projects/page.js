import HeaderComponent from "@/app/components/header"
import Footer from "@/app/components/footer";
import Hero from "@/app/projects/components/hero"
import Customers from "@/app/projects/components/customers"
import BottomBanner from "@/app/projects/components/bottomBanner";
export default function Page() {
    return (
        <main className="relative group/mega">
            <HeaderComponent />
            <Hero
                mainTitle="Unique Projects"
            />
            <Customers />
            <BottomBanner />
            <Footer
                revealReset={false}
            />
        </main>
    )
}
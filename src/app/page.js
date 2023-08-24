import Image from "next/image"
import { Header } from "@/app/layout"
import { H1 } from "@/app/layout"
import Hero from "@/app/components/hero"
import HeaderComponent from "@/app/components/header"
export default function Home() {
    return (
        <main className="">
            <HeaderComponent />
            <div className="mt-[50px]">
                <Hero
                    img="/main-banner-image.jpg"
                />
            </div>
        </main>
    )
}

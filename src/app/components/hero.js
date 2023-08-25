import Image from "next/image"
import { H1 } from "@/app/layout"
import { metadata } from "@/app/layout"
import Button from "@/app/components/button"

export default function Hero({img}) {
    return (
        <section className="container mx-auto px-5 flex flex-col gap-[50px] [&_img]:w-full [&_img]:rounded-xl">
            <H1
                title={"Crealive. \n Your creative digital agency."}
                className=" whitespace-pre-line text-[74px] leading-[78px] text-center"
            />

            <div className="flex items-center gap-[20px] justify-center">
                <Button
                    link="/about-us"
                    title="About Us"
                    type="border-black-300 text-black-300 hover:border-secondary hover:text-secondary"
                />

                <Button
                    link="/contact"
                    title="Get Contact"
                    type="border-secondary text-secondary hover:border-secondaryHelper hover:text-white hover:bg-secondaryHelper"
                />
            </div>

            <Image src={img ? img : "/main-banner-image.jpg"} alt={metadata.title} width="1038" height="293" />
        </section>
    )
}
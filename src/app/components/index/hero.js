import Image from "next/image"
import { H1 } from "@/app/layout"
import { metadata } from "@/app/layout"
import Button from "@/app/components/button"
import { Lines } from "@/app/layout"

export default function Hero({img}) {
    return (
        <div>
            <Lines/>
            <section className="container mx-auto px-5 flex flex-col gap-[50px] pb-[200px] xl:pb-[100px] lg:pb-[50px] lg:px-3 relative items-center">
                <H1
                    title={"Crealive. \n Your creative digital agency."}
                    className=" whitespace-pre-line text-[74px] leading-[78px] tracking-[-2.22px] text-center animate-img max-[1366px]:text-[54px] max-[1366px]:leading-[58px] sm:text-[44px] sm:leading-[48px]"
                />

                <div className="flex items-center gap-[20px] justify-center animate-img">
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

                <div className="px-[100px] xl:px-[75px] lg:px-[50px] sm:px-[12px] w-full rounded-xl overflow-hidden [&_img]:w-full [&_img]:rounded-xl [&_img]:min-h-[300px] max-h-[900px]:[&_img] [&_img]:object-cover [&_img]:animate-h1">
                    <Image src={img ? img : "/main-banner-image.jpg"} alt={metadata.title} width="1038" height="293" />
                </div>
                <i className="fa-light fa-computer-mouse-scrollwheel lg:!hidden absolute bottom-[34px] text-[32px] fa-bounce"></i>

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
            </section>
        </div>
    )
}
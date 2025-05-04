import Image from "next/image"
import { H1 } from "@/app/layout"
import Button from "@/app/components/button"
import { Lines } from "@/app/layout"

export default function Hero({img}) {
    return (
        <div>
            <Lines/>
            <section className="container mx-auto px-5 flex flex-col gap-[50px] pb-[200px] max-xl:pb-[100px] max-lg:pb-[50px] max-lg:px-3 relative items-center">
                <H1
                    title={"Waveless. \n Your creative digital agency."}
                    className=" whitespace-pre-line text-[74px] leading-[78px] tracking-[-2.22px] dark:text-white text-center animate-img max-lg:animate-none max-[1366px]:text-[54px] max-[1366px]:leading-[58px] max-sm:text-[44px] max-sm:leading-[48px]"
                />

                <div className="flex items-center gap-[20px] justify-center animate-img">
                    <Button
                        link="/about-us"
                        title="About Us"
                        type="border-black-300 text-black-300 hover:border-secondary hover:text-secondary dark:border-white dark:text-white hover:dark:text-black-400 hover:dark:bg-white"
                    />

                    <Button
                        link="/contact"
                        title="Get Contact"
                        type="border-secondary text-secondary hover:border-secondaryHelper hover:text-white hover:bg-secondaryHelper"
                    />
                </div>

                <div className="px-[100px] max-xl:px-[75px] max-lg:px-[50px] max-sm:px-[12px] w-full rounded-xl overflow-hidden [&_img]:w-full [&_img]:rounded-xl [&_img]:min-h-[300px] max-h-[900px]:[&_img] [&_img]:object-cover [&_img]:animate-h1 max-lg:[&_img]:animate-none">
                    <Image src={img ? img : "/main-banner-image.jpg"} alt="Waveless" width="1038" height="293" />
                </div>
                <i className="fa-light fa-computer-mouse-scrollwheel max-lg:!hidden absolute bottom-[34px] text-[32px] fa-bounce dark:text-white"></i>

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
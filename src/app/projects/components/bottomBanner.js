'use client'
import Image from "next/image"
import { RevealList } from  'next-reveal'
import Button from "@/app/components/button";

export default function BottomBanner({mainTitle}) {
    return (
        <RevealList interval={100} delay={500} reset={false} >
            <section className="mb-[60px] sm:mb-[30px]">
                <div className="relative [&_img]:w-full [&_img]:h-auto [&_img]:min-h-[250px] [&_img]:object-cover  min-h-[344px] flex items-end">
                    <div className="flex flex-col items-center gap-[80px] lg:gap-[50px] sm:gap-[24px] absolute w-full top-0 lg:top-[30px] sm:top-[50px]">
                        <p className={"clashGroteskFamily text-[74px] leading-[78px] text-center tracking-[-2.22px] xl:text-[54px] xl:leading-[58px] sm:text-[44px] sm:leading-[48px]"}>{mainTitle ? mainTitle : "Let’s Create a Project Together"}</p>
                        <Button
                            link="/contact"
                            title="Get Contact"
                            type="border-white text-white hover:border-black-400 hover:text-black-400"
                        />
                    </div>
                    <Image src="/projects-area.png" alt="Projects" width={1440} height={292} />
                </div>
            </section>
        </RevealList>
    )
}
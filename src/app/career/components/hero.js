'use client'
import { RevealList } from  'next-reveal'
import Image from "next/image";

export default function Hero({mainTitle}) {
    return (
        <RevealList interval={100} delay={500} reset={false} >
            <section className="my-[100px] lg:my-[50px]">
                <div className="container mx-auto px-5 mb-[83px] lg:mb-[50px]">
                    <h1 className="font-['Clash_Grotesk'] text-[74px] leading-[78px] tracking-[-2.22px] text-black-400 text-center xl:text-[54px] xl:leading-[58px] sm:text-[44px] sm:leading-[48px]">{mainTitle ? mainTitle : "Job Opportunities"}</h1>
                </div>

                <div className="flex items-end lg:gap-[24px] lg:flex-col pl-[30px] pr-[100px] lg:px-0">
                    <div className="w-3/4 lg:w-full">
                        <div className="[&_img]:w-full [&_img]:h-auto rounded-xl overflow-hidden lg:rounded-none lg:[&_img]:min-h-[200px] lg:[&_img]:object-cover">
                            <Image src="/career-1.png" alt="Crealive Career" width={1110} height={354}/>
                        </div>
                    </div>
                    <div className="w-1/4 lg:w-full flex justify-end lg:justify-start lg:px-5">
                        <div className="relative [&_img]:w-[5px] [&_img]:h-[156px]">
                            <Image src="/line.png" alt="line" width={1} height={156} />
                            <p className="bg-backgroundColor [writing-mode:tb-rl] text-[12px] leading-[14px] tracking-[-0.36px] text-black-400 p-[5px_10px_5px_6px] absolute z-10 bottom-[18px] -left-[10px]">Scroll Down</p>
                        </div>
                    </div>
                </div>
            </section>
        </RevealList>
    )
}
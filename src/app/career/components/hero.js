'use client'
import { RevealList } from  'next-reveal'
import Image from "next/image";

export default function Hero({mainTitle}) {
    return (
        <RevealList interval={100} delay={500} reset={false} >
            <section className="my-[100px] max-lg:my-[50px]">
                <div className="container mx-auto px-5 mb-[83px] max-lg:mb-[50px]">
                    <h1 className={"clashGroteskFamily text-[74px] leading-[78px] tracking-[-2.22px] text-black-400 dark:text-white text-center max-xl:text-[54px] max-xl:leading-[58px] max-sm:text-[44px] max-sm:leading-[48px]"}>{mainTitle ? mainTitle : "Job Opportunities"}</h1>
                </div>

                <div className="flex items-end max-lg:gap-[24px] max-lg:flex-col pl-[30px] pr-[100px] max-lg:px-0">
                    <div className="w-3/4 max-lg:w-full">
                        <div className="[&_img]:w-full [&_img]:h-auto rounded-xl overflow-hidden max-lg:rounded-none max-lg:[&_img]:min-h-[200px] max-lg:[&_img]:object-cover">
                            <Image src="/career-1.png" alt="Waveless Career" width={1110} height={354}/>
                        </div>
                    </div>
                    <div className="w-1/4 max-lg:w-full flex justify-end max-lg:justify-start max-lg:px-5">
                        <div className="relative [&_img]:w-[5px] [&_img]:h-[156px] object-contain lineArrowDown">
                            <div className="dark:hidden">
                                <Image src="/line.png" alt="line" width={1} height={156} />
                            </div>
                            <div className="hidden dark:block">
                                <Image src="/line-white.png" alt="line" width={1} height={156} />
                            </div>
                            <p className="bg-backgroundColor dark:bg-darkBackgroundColor duration-300 ease-in-out [writing-mode:tb-rl] text-[12px] leading-[14px] tracking-[-0.36px] text-black-400 dark:text-white p-[5px_10px_5px_6px] absolute z-10 bottom-[18px] -left-[10px]">Scroll Down</p>
                        </div>
                    </div>
                </div>
            </section>
        </RevealList>
    )
}
'use client'
import Image from "next/image"
import { RevealList } from  'next-reveal'

export default function Hero({mainTitle}) {
    return (
        <RevealList interval={100} delay={500} reset={false} >
            <section className="my-[100px] max-lg:my-[50px] pb-[75px] max-lg:pb-[50px] max-md:pb-[30px] border-b border-black-400/[.15] dark:border-white/[.15]">
                <div className="container mx-auto px-5">
                    <div className="grid grid-cols-2 gap-[24px] max-lg:flex max-lg:flex-col">
                        <div className="w-full">
                            <h1 className={"clashGroteskFamily text-[74px] leading-[78px] tracking-[-2.22px] text-black-400 dark:text-white max-xl:text-[54px] max-xl:leading-[58px] max-sm:text-[44px] max-sm:leading-[48px] relative w-max after:absolute after:-top-[10px] after:right-[27px] after:w-[110px] after:h-[110px] after:border after:border-black-400/[.1] after:dark:border-white/[.1] after:rounded-full max-lg:after:hidden"}>{mainTitle ? mainTitle : "Unique Projects"}</h1>
                        </div>
                        <div className="w-full max-lg:hidden"></div>
                        <div className="w-full max-lg:hidden"></div>
                        <div className="w-full">
                            <p className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400 dark:text-light-400 mt-[60px] max-lg:mt-0">Our 15+ years of experience in the software world have enabled us to approach each project with a high level of expertise, delivering the best solutions to meet customer needs. The experience we have gained on each project has strengthened our mastery of technology and industry trends.</p>
                        </div>
                        <div className="w-full col-span-2">
                            <div className="relative [&_img]:w-[5px] [&_img]:h-[156px] object-contain">
                                <div className="dark:hidden">
                                    <Image src="/line.png" alt="line" width={1} height={156} priority={true} />
                                </div>
                                <div className="hidden dark:block">
                                    <Image src="/line-white.png" alt="line" width={1} height={156} priority={true} />
                                </div>
                                <p className="bg-backgroundColor dark:bg-darkBackgroundColor duration-300 ease-in-out [writing-mode:tb-rl] text-[12px] leading-[14px] tracking-[-0.36px] text-black-400 dark:text-white p-[5px_10px_5px_6px] absolute z-10 bottom-[18px] -left-[10px]">Scroll Down</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </RevealList>
    )
}
'use client'
import Image from "next/image"
import { RevealList } from  'next-reveal'

export default function Hero({mainTitle}) {
    return (
        <RevealList interval={100} delay={500} reset={false} >
            <section className="my-[100px] lg:my-[50px] pb-[75px] lg:pb-[50px] md:pb-[30px] border-b border-black-400/[.15]">
                <div className="container mx-auto px-5">
                    <div className="grid grid-cols-2 gap-[24px] lg:flex lg:flex-col">
                        <div className="w-full">
                            <h1 className={"clashGroteskFamily text-[74px] leading-[78px] tracking-[-2.22px] text-black-400 xl:text-[54px] xl:leading-[58px] sm:text-[44px] sm:leading-[48px] relative w-max after:absolute after:-top-[10px] after:right-[27px] after:w-[110px] after:h-[110px] after:border after:border-black-400/[.1] after:rounded-full lg:after:hidden"}>{mainTitle ? mainTitle : "Unique Projects"}</h1>
                        </div>
                        <div className="w-full lg:hidden"></div>
                        <div className="w-full lg:hidden"></div>
                        <div className="w-full">
                            <p className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400 mt-[60px] lg:mt-0">Our 15+ years of experience in the software world have enabled us to approach each project with a high level of expertise, delivering the best solutions to meet customer needs. The experience we have gained on each project has strengthened our mastery of technology and industry trends.</p>
                        </div>
                        <div className="w-full col-span-2">
                            <div className="relative [&_img]:w-[5px] [&_img]:h-[156px] object-contain">
                                <Image src="/line.png" alt="line" width={1} height={156} />
                                <p className="bg-backgroundColor [writing-mode:tb-rl] text-[12px] leading-[14px] tracking-[-0.36px] text-black-400 p-[5px_10px_5px_6px] absolute z-10 bottom-[18px] -left-[10px]">Scroll Down</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </RevealList>
    )
}
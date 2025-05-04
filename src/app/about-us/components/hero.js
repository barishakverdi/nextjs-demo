'use client'
import Image from "next/image"
import { RevealList } from  'next-reveal'

export default function Hero({mainTitle}) {
    return (
        <RevealList interval={100} delay={500} reset={false} >
            <section className="mt-[80px] pb-[75px] max-lg:mt-[50px] mb-[160px] max-xl:mb-[80px] max-lg:mb-[50px] border-b border-black-400/[.15] dark:border-white/[.15]">
                <div className="container mx-auto px-5">
                    <div className="flex items-center gap-[24px] max-lg:flex-col">
                        <div className="w-1/2 max-lg:w-full">
                            <div className="flex flex-col gap-[60px] max-lg:gap-[24px]">
                                <h1 className={"clashGroteskFamily text-[74px] leading-[78px] tracking-[-2.22px] text-black-400 dark:text-white max-xl:text-[54px] max-xl:leading-[58px] max-sm:text-[44px] max-sm:leading-[48px] relative w-max after:absolute after:-top-[10px] after:-right-[10px] after:w-[110px] after:h-[110px] after:border after:border-black-400/[.1] after:dark:border-white/[.1] after:rounded-full max-lg:after:hidden"}>
                                    {mainTitle ? mainTitle : "About Waveless"}
                                </h1>
                                <p className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400 dark:text-light-400">We are a leading software agency with over 15 years of experience in the software
                                    industry. Having completed more than 400 projects, we have provided value to numerous
                                    clients. Our customers are our top priority. We work diligently on every project to
                                    create tailored solutions that meet our clients unique needs.</p>
                            </div>
                        </div>
                        <div className="w-1/2 max-lg:w-full">
                            <div className="px-[20px] [&_img]:w-full max-md:px-0">
                                <Image src="/about-us.png" alt="About Waveless" priority={true} width={553} height={459} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </RevealList>
    )
}
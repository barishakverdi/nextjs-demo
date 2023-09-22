'use client'
import Image from "next/image"
import Script from "next/script"
import { RevealList } from  'next-reveal'

export default function Hero({mainTitle}) {
    return (
        <RevealList interval={100} delay={500} reset={true} >
            <section className="mt-[80px] pb-[75px] lg:mt-[50px] mb-[160px] xl:mb-[80px] lg:mb-[50px] border-b border-black-400/[.15]">
                <div className="container mx-auto px-5">
                    <div className="flex items-center gap-[24px] lg:flex-col">
                        <div className="w-1/2 lg:w-full">
                            <div className="flex flex-col gap-[60px] lg:gap-[24px]">
                                <h1 className="text-[74px] leading-[78px] tracking-[-2.22px] text-black-400 xl:text-[54px] xl:leading-[58px] sm:text-[44px] sm:leading-[48px] relative w-max after:absolute after:-top-[10px] after:-right-[10px] after:w-[110px] after:h-[110px] after:border after:border-black-400/[.1] after:rounded-full lg:after:hidden">
                                    {mainTitle ? mainTitle : "About Crealive"}
                                </h1>
                                <p className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400">We are a leading software agency with over 15 years of experience in the software
                                    industry. Having completed more than 400 projects, we have provided value to numerous
                                    clients. Our customers are our top priority. We work diligently on every project to
                                    create tailored solutions that meet our clients' unique needs.</p>
                            </div>
                        </div>
                        <div className="w-1/2 lg:w-full">
                            <div className="px-[20px] [&_img]:w-full md:px-0">
                                <Image src="/about-us.png" alt={"About Crealive "} width={553} height={459} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </RevealList>
    )
}
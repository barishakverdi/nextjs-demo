'use client'
import { RevealList } from  'next-reveal'

export default function Hero({mainTitle, description}) {
    return (
        <RevealList interval={100} delay={500} reset={true} >
            <section className="my-[100px] lg:my-[50px] pb-[60px] lg:pb-[30px] border-b border-black-400/[.15]">
                <div className="container mx-auto px-5">
                    <div className="flex flex-col gap-[30px] sm:gap-[24px]">
                        <h1 className={"clashGroteskFamily text-[74px] leading-[78px] tracking-[-2.22px] text-black-400 xl:text-[54px] xl:leading-[58px] sm:text-[44px] sm:leading-[48px]"}>{mainTitle ? mainTitle : "Project"}</h1>
                        <p className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400">{description ? description : "Description"}</p>
                    </div>
                </div>
            </section>
        </RevealList>
    )
}
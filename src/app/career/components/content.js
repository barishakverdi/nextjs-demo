'use client'
import { RevealList } from  'next-reveal'

export default function Content({mainTitle, subTitle, description}) {
    return (
        <RevealList interval={100} delay={500} reset={false} >
            <section className="pb-[160px] max-xl:pb-[80px] max-lg:pb-[50px] max-lg:border-b max-lg:border-black-400/[.15] max-lg:dark:border-white/[.15] max-lg:mb-[50px]">
                <div className="container mx-auto px-5">
                    <div className="flex flex-col gap-[100px] max-lg:gap-[50px] max-md:gap-[24px]">
                        <h2 className="text-[60px] leading-[74px] tracking-[-1.8px] text-black-400 dark:text-white max-lg:text-[50px] max-lg:leading-[64px] max-sm:text-[34px] max-sm:leading-[44px]">{mainTitle ? mainTitle : "What we Offer?"}</h2>
                        <div className="flex flex-col gap-[30px] max-md:gap-[24px] ml-auto max-lg:ml-0">
                            <h3 className="text-[48px] leading-[54px] tracking-[-1.44px] text-black-300 dark:text-light-200 max-xl:text-[38px] max-xl:leading-[44px] max-sm:text-[28px] max-sm:leading-[34px]">{subTitle ? subTitle : "Young Team, Continuous Improvement"}</h3>
                            <p className="whitespace-pre-line text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400 dark:text-light-400">{description ? description : ""}</p>
                        </div>
                    </div>
                </div>
            </section>
        </RevealList>
    )
}
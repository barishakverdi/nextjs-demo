'use client'
import { RevealList } from  'next-reveal'

export default function Content({expectations, offers}) {
    return (
        <RevealList interval={100} delay={500} reset={false} >
            <section className="mb-[100px] lg:mb-[50px]">
                <div className="container mx-auto px-5">
                    <div className="flex flex-col mb-[60px] lg:mb-[30px] pb-[60px] lg:pb-[30px] border-b border-black-400/[.15] dark:border-white/[.15]">
                        <div className="flex gap-[24px] lg:flex-col">
                            <div className="w-1/2 lg:w-full">
                                <h2 className="text-[60px] leading-[74px] tracking-[-1.8px] text-black-400 dark:text-white lg:text-[50px] lg:leading-[64px] sm:text-[34px] sm:leading-[44px]">What we Expect?</h2>
                            </div>
                            <div className="w-1/2 lg:w-full">
                                <ul className="flex flex-col gap-[16px]">
                                    {expectations.map((item, index) => (
                                        <li key={index} className="flex text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400 dark:text-light-400 [&_span]:!text-black-300 before:mr-[22px] lg:before:mr-[12px] before:mt-[14px] before:inline-block before:min-w-[10px] before:h-[10px] before:border before:border-secondary before:rounded-full">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex gap-[24px] lg:flex-col">
                            <div className="w-1/2 lg:w-full">
                                <h2 className="text-[60px] leading-[74px] tracking-[-1.8px] text-black-400 dark:text-white lg:text-[50px] lg:leading-[64px] sm:text-[34px] sm:leading-[44px]">What we Offer?</h2>
                            </div>
                            <div className="w-1/2 lg:w-full">
                                <ul className="flex flex-col gap-[16px]">
                                    {offers.map((item, index) => (
                                        <li key={index} className="flex text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400 dark:text-light-400 [&_span]:!text-black-300 before:mr-[22px] lg:before:mr-[12px] before:mt-[14px] before:inline-block before:min-w-[10px] before:h-[10px] before:border before:border-secondary before:rounded-full">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </RevealList>
    )
}
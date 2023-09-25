'use client'
import { RevealList } from  'next-reveal'
import { ClashGrotesk } from "@/app/layout"

export default function Hero({mainTitle, description, date, appCount}) {
    return (
        <RevealList interval={100} delay={500} reset={false} >
            <section className="my-[100px] lg:my-[50px] pb-[60px] lg:pb-[30px] border-b border-black-400/[.15]">
                <div className="container mx-auto px-5">
                    <div className="flex flex-col gap-[60px] lg:gap-[30px]">
                        <div className="flex flex-col gap-[24px]">
                            <h1 className={ClashGrotesk.className + " text-[74px] leading-[78px] tracking-[-2.22px] text-black-400 xl:text-[54px] xl:leading-[58px] sm:text-[44px] sm:leading-[48px]"}>{mainTitle}</h1>
                            <p className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400">{description}</p>
                        </div>

                        <div className="flex flex-col gap-[15px] [&_p]:flex [&_p]:items-center [&_p]:gap-[10px] [&_p]:text-[16px] [&_p]:leading-[18px] [&_p]:tracking-[-0.48px] [&_p]:text-black-300 [&_span]:text-[16px] [&_span]:leading-[18px] [&_span]:tracking-[-0.48px] [&_span]:text-gray-400 [&_span]:font-medium">
                            <p>Ad Publish Date: <span>{date}</span></p>
                            <p>Total Applications: <span className="!text-primary">{appCount}</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </RevealList>
    )
}
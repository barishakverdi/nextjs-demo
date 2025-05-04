'use client'
import Image from "next/image"
import Script from "next/script"
import { RevealList } from  'next-reveal'

export default function Ceo() {
    const ceo = {
            image: "ceo.png",
            name: "John Doe",
            position: "CEO, Founder"
        };

    const numbers = [
        {
            number: "15+ \nyears.",
        },

        {
            number: "400+ \nprojects.",
        },

        {
            number: "15+\nemployees."
        }
    ]
    return (
        <RevealList interval={100} delay={500} reset={false} >
            <section>
                <div className="[&_img]:!w-full [&_img]:!max-h-[500px] [&_img]:!h-auto [&_img]:!object-cover max-md:[&_img]:!h-[300px]">
                    <Image src="/about-us-2.png" alt="About Waveless" width={1440} height={500} style={{ width: "auto", height: "auto" }} />
                </div>
                <div className="bg-light-300 dark:bg-black-400 pt-[160px] max-xl:pt-[80px] max-lg:pt-[50px] pb-[120px] max-xl:pb-[80px] max-lg:pb-[50px] border-b border-black-400/[.15] dark:border-white/[.15]">
                    <div className="container mx-auto px-5">
                        <div className="flex gap-[24px] max-lg:flex-col">
                            <div className="w-1/2 max-lg:w-full">
                                <div className="flex flex-col gap-[24px]">
                                    <div className="max-w-[220px] max-h-[360px] [&_img]:w-full rounded-main overflow-hidden max-sm:max-w-full max-sm:w-full max-sm:max-h-max">
                                        <Image src={"/" + ceo.image} alt={"Waveless CEO, Founder"} width={220} height={360} />
                                    </div>
                                    <div className="flex flex-col gap-[10px]">
                                        <h4 className="text-[36px] leading-[42px] tracking-[-1.08px] text-black-400 dark:text-white">{ceo.name}</h4>
                                        <span className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400 dark:text-light-400">{ceo.position}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 max-lg:w-full flex">
                                <div className="flex flex-col justify-between gap-[24px] pb-[30px]">
                                    <p className="text-[48px] leading-[54px] tracking-[-1.44px] text-black-300 dark:text-light-200 max-xl:text-[38px] max-xl:leading-[44px] max-sm:text-[28px] max-sm:leading-[34px]">Waveless is a digital agency whose brands carry the future with common sense, strategy and new ideas.</p>
                                    <p className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400 dark:text-light-400">Our 15+ years of experience in the software world have enabled us to approach each project with a high level of expertise,.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-light-300 dark:bg-black-400 py-[120px] max-xl:py-[80px] max-lg:py-[50px]">
                    <div className="container mx-auto px-5">
                        <div className="grid grid-cols-3 max-md:grid-cols-2 gap-[40px]">
                            {numbers.map((item, index) => (
                                <p key={index} className="whitespace-pre text-[60px] leading-[74px] tracking-[-1.8px] text-black-400 dark:text-white max-lg:text-[50px] max-lg:leading-[64px] max-sm:text-[34px] max-sm:leading-[44px] max-md:last:col-span-2 max-md:text-center">{item.number}</p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="[&_img]:w-full [&_img]:max-h-[500px] [&_img]:h-auto [&_img]:object-cover mb-[100px] max-md:mb-[50px] max-md:[&_img]:h-[300px]">
                    <Image src="/about-us-3.png" alt="About Waveless" width={1440} height={500} />
                </div>
            </section>
        </RevealList>
    )
}
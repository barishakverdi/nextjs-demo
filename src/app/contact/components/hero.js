'use client'
import Image from "next/image"
import { RevealList } from  'next-reveal'

export default function Hero({mainTitle}) {
    return (
        <RevealList interval={100} delay={500} reset={false} >
            <section className="mt-[100px] max-lg:mt-[50px] mb-[120px] max-lg:mb-0">
                <div className="container mx-auto px-5 mb-[83px] max-lg:mb-[50px]">
                    <h1 className={"clashGroteskFamily text-[74px] leading-[78px] tracking-[-2.22px] text-black-400 dark:text-white max-xl:text-[54px] max-xl:leading-[58px] max-sm:text-[44px] max-sm:leading-[48px]"}>{mainTitle ? mainTitle : "Contact Us!"}</h1>
                </div>
                <div className="flex items-end justify-center gap-[24px] max-lg:flex-col relative">
                    <div className="container mx-auto px-5 absolute max-lg:static">
                        <div className="w-1/3 max-lg:w-full">
                            <div className="flex flex-col gap-[12px]">
                                <a href="tel:2575637401" className="w-max text-[18px] leading-[38px] tracking-[-0.54px] text-black-400 dark:text-white duration-300 ease-in-out hover:text-secondary hover:dark:text-primary">(257) 563-7401</a>
                                <a href="mailto:info@digital-agency.net" className="w-max text-[18px] leading-[38px] tracking-[-0.54px] text-black-400 dark:text-white duration-300 ease-in-out hover:text-secondary hover:dark:text-primary">info@digital-agency.net</a>
                                <p className="text-[18px] leading-[38px] tracking-[-0.54px] text-black-400 dark:text-white duration-300 ease-in-out hover:text-secondary hover:dark:text-primary">Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-end">
                        <div className="w-3/5 max-lg:w-full">
                            <div className="[&_img]:w-full [&_img]:h-auto max-lg:[&_img]:min-h-[250px] max-lg:[&_img]:object-cover rounded-l-xl overflow-hidden max-lg:rounded-none">
                                <Image src="/contact.png" alt="Waveless Contact" width={890} height={354} priority={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </RevealList>
    )
}
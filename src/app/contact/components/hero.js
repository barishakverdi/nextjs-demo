'use client'
import Image from "next/image"
import { RevealList } from  'next-reveal'

export default function Hero({mainTitle}) {
    return (
        <RevealList interval={100} delay={500} reset={false} >
            <section className="mt-[100px] lg:mt-[50px] mb-[120px] lg:mb-0">
                <div className="container mx-auto px-5 mb-[83px] lg:mb-[50px]">
                    <h1 className={"clashGroteskFamily text-[74px] leading-[78px] tracking-[-2.22px] text-black-400 dark:text-white xl:text-[54px] xl:leading-[58px] sm:text-[44px] sm:leading-[48px]"}>{mainTitle ? mainTitle : "Contact Us!"}</h1>
                </div>
                <div className="flex items-end justify-center gap-[24px] lg:flex-col relative">
                    <div className="container mx-auto px-5 absolute lg:static">
                        <div className="w-1/3 lg:w-full">
                            <div className="flex flex-col gap-[12px]">
                                <a href="tel:+902122814304" className="w-max text-[18px] leading-[38px] tracking-[-0.54px] text-black-400 dark:text-white duration-300 ease-in-out hover:text-secondary hover:dark:text-primary">+90 212 281 43 04</a>
                                <a href="mailto:info@crealive.net" className="w-max text-[18px] leading-[38px] tracking-[-0.54px] text-black-400 dark:text-white duration-300 ease-in-out hover:text-secondary hover:dark:text-primary">info@crealive.net</a>
                                <p className="text-[18px] leading-[38px] tracking-[-0.54px] text-black-400 dark:text-white duration-300 ease-in-out hover:text-secondary hover:dark:text-primary">Esentepe M. Kasap S. Özden Konak Apt. No:4/7, 34394, Şişli, İstanbul</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-end">
                        <div className="w-3/5 lg:w-full">
                            <div className="[&_img]:w-full [&_img]:h-auto lg:[&_img]:min-h-[250px] lg:[&_img]:object-cover rounded-l-xl overflow-hidden lg:rounded-none">
                                <Image src="/contact.png" alt="Crealive Contact" width={890} height={354} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </RevealList>
    )
}
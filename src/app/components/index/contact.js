'use client'
import Image from "next/image"
import { RevealList } from  'next-reveal'
import Button from "@/app/components/button"

export default function Contact({title}) {
    return (
        <RevealList interval={100} delay={500} reset={true} >
            <section className="my-[160px] max-xl:my-[80px] max-lg:my-[50px] py-[50px] max-lg:py-[30px] border-t border-b border-black-400/[.15] dark:border-white/[.15]">
                <div className="container mx-auto px-5">
                    <div className="flex items-center gap-[24px] flex-wrap max-lg:flex-col">
                        <div className="max-lg:w-full w-1/2 flex-1">
                            <div className="flex flex-col gap-[30px]">
                                <h4 className="text-[60px] leading-[74px] max-lg:text-[50px] max-lg:leading-[64px] max-sm:text-[34px] max-sm:leading-[44px] tracking-[-1.8px] text-black-400 dark:text-white">{title ? title : 'A Coffee?'}</h4>
                                <p className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400 dark:text-light-300">If you have any questions or would like to learn more about collaboration opportunities, please do not hesitate to get in touch with us.</p>
                                <Button
                                    title="Get Contact"
                                    link="/"
                                    type="border-black-300 text-black-300 hover:border-secondary hover:text-secondary w-max dark:border-white dark:text-white hover:dark:bg-white hover:dark:text-black-400"
                                />
                            </div>
                        </div>

                        <div className="max-lg:w-full w-1/2 flex-1">
                            <div className="[&_img]:w-full [&_img]:h-full [&_img]:object-cover max-h-[590px] rounded-xl overflow-hidden">
                                <Image src="/home-contact.jpg" alt="Contact Us" width={600} height={590} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </RevealList>
    )
}
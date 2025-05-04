'use client'
import {RevealList} from 'next-reveal'
import Button from "@/app/components/button";
import Image from "next/image";

export default function Footer({revealReset}) {
    const year = new Date();
    const menuOne = [
        {
            title: "About Us",
            link: "/about-us"
        },

        {
            title: "Projects",
            link: "/projects"
        },

        {
            title: "Career",
            link: "/career"
        },

        {
            title: "Contact",
            link: "/contact"
        },
    ]

    const menuTwo = [
        {
            title: "Facebook",
            link: "https://www.facebook.com"
        },

        {
            title: "Instagram",
            link: "https://www.instagram.com"
        },

        {
            title: "X",
            link: "https://twitter.com"
        },

        {
            title: "Linkedin",
            link: "https://www.linkedin.com"
        },

        // {
        //     title: "Pinterest",
        //     link: "https://tr.pinterest.com"
        // },
    ]
    return (
        <RevealList interval={100} delay={300} reset={revealReset} mobile={false}>
            <footer className="mb-[60px] max-md:mb-[45px]">
                <div className="container mx-auto px-5">
                    <div className="flex gap-[24px] max-lg:flex-col max-lg:gap-[34px]">
                        <div className="w-1/2 max-lg:w-full">
                            <div className="flex flex-col gap-[24px] max-lg:gap-[16px]">
                                <span className="text-[18px] leading-[18px] tracking-[-0.54px] text-black-400 dark:text-white">Job Opportunities</span>
                                <p className="text-[48px] leading-[54px] max-lg:text-[36px] max-lg:leading-[44px] max-sm:text-[30px] max-sm:leading-[38px] tracking-[-1.44px] text-black-400 dark:text-white">Want to
                                    improve yourself <br/> with us?</p>
                                <Button
                                    link="/career"
                                    title="Career"
                                    type="border-black-300 text-black-300 hover:border-secondary hover:text-secondary w-max dark:border-white dark:text-white hover:dark:bg-white hover:dark:text-black-400"
                                />
                            </div>
                        </div>

                        <div className="w-1/2 max-lg:w-full">
                            <div className="flex gap-[16px] w-full">
                                <div className="flex flex-col gap-[20px] w-full">
                                    <span
                                        className="text-[18px] leading-[18px] tracking-[-0.54px] text-black-400 dark:text-white">Waveless</span>
                                    <ul className="flex flex-col gap-[8px]">
                                        {
                                            menuOne.map((item, index) => (
                                                <li key={index}>
                                                    <a href={item.link}
                                                       className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400 dark:text-light-400 duration-300 ease-in-out hover:text-black-300 relative after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black-300 after:dark:bg-light-400 hover:after:w-full">{item.title}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-[20px] w-full">
                                    <span className="text-[18px] leading-[18px] tracking-[-0.54px] text-black-400 dark:text-white">Follow Us</span>
                                    <ul className="flex flex-col gap-[8px]">
                                        {
                                            menuTwo.map((item, index) => (
                                                <li key={index}>
                                                    <a href={item.link} target="_blank"
                                                       className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400 dark:text-light-400 transition-all duration-300 ease-in-out hover:text-black-300 relative after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black-300 after:dark:bg-light-400 hover:after:w-full">{item.title}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-[60px] mt-[60px] max-md:pt-[45px] max-md:mt-[45px] border-t border-black-400/[.15] dark:border-white/[.15]">
                    <div className="container mx-auto px-5">
                        <div className="grid grid-cols-3 max-md:flex max-md:flex-col max-md:items-center max-md:gap-[20px]">
                            <div className="digital-agency-logo">
                                <Image src="/logo.svg" alt="Waveless" width={163} height={36}/>
                            </div>

                            <div className="flex justify-center">
                                <p className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400 dark:text-light-400">
                                    All Rights Reserved © Waveless {year.getFullYear()}
                                </p>
                            </div>

                            <div className="flex justify-end">
                                <ul className="flex items-center gap-[25px]">
                                    <li className="relative after:w-[1px] after:h-[20px] after:bg-black-300/[.1] after:absolute after:-right-[13px] after:top-[8px]">
                                        <a href="/gdpr"
                                           className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400 dark:text-light-400 transition-all duration-300 ease-in-out hover:text-black-300">GDPR</a>
                                    </li>

                                    <li>
                                        <a href="/privacy-policy"
                                           className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400 dark:text-light-400 transition-all duration-300 ease-in-out hover:text-black-300">Privacy
                                            Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </RevealList>
    )
}
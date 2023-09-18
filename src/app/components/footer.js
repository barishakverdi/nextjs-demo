'use client'
import {RevealList} from 'next-reveal'
import Button from "@/app/components/button";
import Image from "next/image";

export default function Footer() {
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
            title: "Customers",
            link: "/customers"
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
            link: "/about-us"
        },

        {
            title: "Instagram",
            link: "/projects"
        },

        {
            title: "Twitter",
            link: "/customers"
        },

        {
            title: "Linkedin",
            link: "/career"
        },

        {
            title: "Threads",
            link: "/contact"
        },
    ]
    return (
        <RevealList interval={100} delay={500} reset={true} mobile={false}>
            <footer className="mb-[60px]">
                <div className="container mx-auto px-5">
                    <div className="flex gap-[24px] lg:flex-col">
                        <div className="w-1/2 lg:w-full">
                            <div className="flex flex-col gap-[24px]">
                                <span className="text-[18px] leading-[18px] tracking-[-0.54px] text-black-400">Job Opportunities</span>
                                <p className="text-[48px] leading-[54px] tracking-[-1.44px] text-black-400">Want to
                                    improve yourself <br/> with us?</p>
                                <Button
                                    link="/career"
                                    title="Career"
                                    type="border-black-300 text-black-300 hover:border-secondary hover:text-secondary w-max"
                                />
                            </div>
                        </div>

                        <div className="w-1/2 lg:w-full">
                            <div className="flex gap-[16px] w-full">
                                <div className="flex flex-col gap-[20px] w-full">
                                    <span
                                        className="text-[18px] leading-[18px] tracking-[-0.54px] text-black-400">Crealive</span>
                                    <ul className="flex flex-col gap-[8px]">
                                        {
                                            menuOne.map((item, index) => (
                                                <li key={index}>
                                                    <a href={item.link}
                                                       className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400 transition-all duration-300 ease-in-out hover:text-black-300">{item.title}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-[20px] w-full">
                                    <span className="text-[18px] leading-[18px] tracking-[-0.54px] text-black-400">Follow Us</span>
                                    <ul className="flex flex-col gap-[8px]">
                                        {
                                            menuTwo.map((item, index) => (
                                                <li key={index}>
                                                    <a href={item.link}
                                                       className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400 transition-all duration-300 ease-in-out hover:text-black-300">{item.title}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-[60px] mt-[60px] border-t border-black-400/[.15]">
                    <div className="container mx-auto px-5">
                        <div className="grid grid-cols-3 md:flex md:flex-col md:items-center md:gap-[20px]">
                            <div>
                                <Image src="/logo.svg" alt="Crealive" width={163} height={36}/>
                            </div>

                            <div className="flex justify-center">
                                <p className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400">All Rights
                                    Reserved © Crealive {year.getFullYear()}</p>
                            </div>

                            <div className="flex justify-end">
                                <ul className="flex items-center gap-[25px]">
                                    <li className="relative after:w-[1px] after:h-[20px] after:bg-black-300/[.1] after:absolute after:-right-[13px] after:top-[8px]">
                                        <a href="/gdpr"
                                           className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400 transition-all duration-300 ease-in-out hover:text-black-300">GDPR</a>
                                    </li>

                                    <li>
                                        <a href="/privacy-policy"
                                           className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400 transition-all duration-300 ease-in-out hover:text-black-300">Privacy
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
'use client'
import { RevealList } from  'next-reveal'
import Button from "@/app/components/button";
import Image from "next/image";

export default function Footer() {
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
        <RevealList interval={100} delay={500} reset={true} >
            <footer className="mb-[60px]">
                <div className="container mx-auto px-5">
                    <div className="flex gap-[24px] lg:flex-col">
                        <div className="w-1/2">
                            <div className="flex flex-col gap-[24px]">
                                <span className="text-[18px] leading-[18px] tracking-[-0.54px] text-black-400">Job Opportunities</span>
                                <p className="text-[48px] leading-[54px] tracking-[-1.44px] text-black-400">Want to improve yourself <br/> with us?</p>
                                <Button
                                    link="/career"
                                    title="Career"
                                    type="border-black-300 text-black-300 hover:border-secondary hover:text-secondary w-max"
                                />
                            </div>
                        </div>

                        <div className="w-1/2">
                            <div className="flex gap-[16px] w-full">
                                <div className="flex flex-col gap-[20px] w-full">
                                    <span className="text-[18px] leading-[18px] tracking-[-0.54px] text-black-400">Crealive</span>
                                    <ul className="flex flex-col gap-[8px]">
                                        {
                                            menuOne.map((item, index) => (
                                                <li key={index} >
                                                    <a href={item.link} className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400 transition-all duration-300 ease-in-out hover:text-black-300">{item.title}</a>
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
                                                <li key={index} >
                                                    <a href={item.link} className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400 transition-all duration-300 ease-in-out hover:text-black-300">{item.title}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </RevealList>
    )
}
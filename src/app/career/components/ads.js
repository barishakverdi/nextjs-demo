'use client'
import { RevealList } from  'next-reveal'
import Image from "next/image";

export default function Ads({mainTitle}) {
    const ads = [
        {
            icon: "code",
            title: "Front-End Developer",
            description: "We have an experienced and passionate team. The new member in the Front-End Developer position will join our experienced team, contributing to our projects and becoming a part of our agency's success story.",
            date: "Jun 23",
            color: "#88B94E",
            url: "/career/career-detail",
        },

        {
            icon: "code",
            title: "Back-End Developer",
            description: "We have an experienced and passionate team. The new member in the Front-End Developer position will join our experienced team, contributing to our projects and becoming a part of our agency's success story.",
            date: "Oct 01",
            color: "#EB5B64",
            url: "/career/career-detail",
        },

        {
            icon: "chart-user",
            title: "Sales Manager",
            description: "We have an experienced and passionate team. The new member in the Front-End Developer position will join our experienced team, contributing to our projects and becoming a part of our agency's success story.",
            date: "Nov 10",
            color: "#43A0F6",
            url: "/career/career-detail",
        },

        {
            icon: "magnifying-glass-chart",
            title: "SEO Analyst",
            description: "We have an experienced and passionate team. The new member in the Front-End Developer position will join our experienced team, contributing to our projects and becoming a part of our agency's success story.",
            date: "Jun 23",
            color: "#EDC90D",
            url: "/career/career-detail",
        },
    ]
    return (
        <RevealList interval={100} delay={500} reset={false} >
            <section className="mb-[100px] lg:mb-[50px]">
                <div className="container mx-auto px-5 flex justify-end lg:justify-start mb-[60px] lg:mb-[50px]">
                    <div className="w-3/4 lg:w-full">
                        <h3 className="text-[60px] leading-[74px] tracking-[-1.8px] text-black-400 dark:text-white lg:text-[50px] lg:leading-[64px] sm:text-[34px] sm:leading-[44px]">{mainTitle ? mainTitle : "Job Ads"}</h3>
                    </div>
                </div>
                
                <div className="mr-[60px] mb-[100px] lg:mb-[50px] lg:mr-0 [&_img]:w-full [&_img]:h-auto lg:[&_img]:min-h-[250px] [&_img]:object-cover rounded-r-xl lg:rounded-none overflow-hidden">
                    <Image src="/career-2.png" alt="Waveless Career" width={1380} height={355} />
                </div>

                <div className="container mx-auto px-5">
                    <div className="grid grid-cols-2 gap-[24px] sm:grid-cols-1">
                        {
                            ads.map((ad, index) => (
                                <a href={ad.url} key={index} className="flex flex-col gap-[24px] p-[30px] md:p-[15px] rounded-xl border border-black-300/[.08] dark:border-white/[.08] bg-white dark:bg-black-300/[.1] shadow-[0px_1px_0px_0px_rgba(23,_23,_23,_0.08)] dark:shadow-[0px_1px_0px_0px_rgba(255,_255,_255,_0.08)] transition-all duration-300 ease-in-out hover:bg-light-200 hover:border-helper hover:dark:border-helper hover:dark:bg-black-400">
                                    <div className="flex items-center gap-[12px]">
                                        <div className="w-[44px] h-[44px] rounded-full overflow-hidden flex items-center justify-center" style={{backgroundColor: ad.color}}>
                                            <i className={"fa-light fa-" + ad.icon + " text-[20px] text-white"}></i>
                                        </div>
                                        <h4 className="text-[36px] leading-[42px] tracking-[-1.08px] text-black-400 dark:text-white sm:text-[24px] sm:leading-[32px]">{ad.title}</h4>
                                    </div>
                                    <div className="flex flex-col gap-[16px]">
                                        <p className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400 dark:text-light-400 line-clamp-1">{ad.description}</p>
                                        <span className="text-[12px] leading-[14px] tracking-[-0.36px] text-black-300 dark:text-light-300">{ad.date}</span>
                                    </div>
                                </a>
                            ))
                        }
                    </div>
                </div>
            </section>
        </RevealList>
    )
}
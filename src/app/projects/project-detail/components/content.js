'use client'
import { RevealList } from  'next-reveal'
import Image from "next/image";

export default function Content({url, link, image, mockup1, mockup2, projectOwner, projectDate, sector, location}) {
    return (
        <RevealList interval={100} delay={500} reset={true} >
            <section className="mb-[100px] lg:mb-[50px]">
                <div className="container mx-auto px-[120px] lg:px-[60px] md:px-[30px] sm:px-5">
                    <div className="mb-[64px] lg:mb-[50px]">
                        <div className="flex flex-col rounded-main overflow-hidden group">
                            <div className="">
                                <a href={url} target="_blank" className="flex w-full max-h-[400px] [&_img]:w-full [&_img]:h-full [&_img]:object-cover relative overflow-hidden after:pointer-events-none after:w-full after:h-full after:absolute after:z-20 after:top-0 after:left-0 after:opacity-0 after:bg-gradient-to-b after:from-white/[0] after:to-white/[.4] after:transition-all after:duration-300 after:ease-in-out group-hover:after:opacity-100 shadow-[0px_2px_8px_3px_rgba(23,_23,_23,_0.05)]">
                                    <Image src={"/"+image} alt={projectOwner} width={1000} height={400} />
                                </a>
                            </div>
                            <div className="p-[16px_22px]">
                                <a href={url} className="flex items-center justify-between gap-[12px]">
                                    <h2 className="text-[36px] leading-[42px] tracking-[-1.08px] text-black-300 md:text-[26px] md:leading-[32px] after:w-0 after:h-[1px] after:bg-black-300 flex flex-col group-hover:after:w-full after:transition-all after:duration-300 after:ease-in-out">{link}</h2>
                                    <i className="fa-light fa-arrow-right text-[32px] text-black-300"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mb-[24px]">
                        <div className="flex items-center gap-[24px] lg:flex-col">
                            <div className="w-1/2 lg:w-full">
                                <div className="grid grid-cols-2 gap-[15px_8px] [&_p]:text-[18px] [&_p]:leading-[38px] [&_p]:tracking-[-0.54px] [&_p]:text-gray-400">
                                    <p>Project Owner</p>
                                    <p className="!text-black-300">{projectOwner}</p>
                                    <p>Project Date</p>
                                    <p className="!text-black-300">{projectDate}</p>
                                    <p>Sector</p>
                                    <p className="!text-black-300">{sector}</p>
                                    <p>Location</p>
                                    <p className="!text-black-300">{location}</p>
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-full">
                                <div className="[&_img]:w-full [&_img]:h-auto rounded-xl overflow-hidden">
                                    <Image src={"/"+mockup1} alt={projectOwner} width={487} height={364}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-[100px] lg:mb-[50px] rounded-xl overflow-hidden">
                        <Image src={"/"+mockup2} alt={projectOwner} width={1000} height={480}/>
                    </div>
                </div>
            </section>
        </RevealList>
    )
}
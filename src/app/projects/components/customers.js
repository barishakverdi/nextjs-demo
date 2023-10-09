'use client'
import Image from "next/image"
import { RevealList } from  'next-reveal'
import { projects } from "@/app/projects/components/customerList";

export default function Customers() {
    const logos = [];
    for (let i = 1; i <= 27; i++) {
        logos.push(
            <div key={i} className="flex justify-center items-center min-h-[100px] p-[24px_50px] lg:p-[16px] transition-all duration-300 ease-in-out lg:grayscale-0 grayscale hover:grayscale-0 hover:transition-all hover:ease-in-out hover:duration-300">
                <a href="https://example.com" className="block w-full h-max [&_img]:w-full [&_img]:h-auto [&_img]:aspect-video [&_img]:object-contain" target="_blank">
                    <Image src={"/clients/client-" + i + ".png"} alt={"client-" + i} width={163} height={36} loading={"lazy"} />
                </a>
            </div>
        )
    }
    return (
        <RevealList interval={100} delay={500} reset={false} >
            <section className="mb-[160px] xl:mb-[80px] lg:mb-[50px]">
                <div className="container mx-auto px-5">
                    <div className="px-[120px] xl:px-[80px] lg:px-[50] md:px-0">
                        <div className="grid grid-cols-2 gap-[50px] lg:gap-[24px] lg:grid-cols-1 mb-[100px] lg:mb-[50px] md:mb-[24px]">
                            {projects.map((project, index)=> (
                                <div className="w-full" key={index}>
                                    <div className="flex flex-col rounded-main overflow-hidden group">
                                        <div className="">
                                            <a href={project.url} className="flex w-full max-h-[450px] [&_img]:w-full [&_img]:h-full [&_img]:object-cover relative overflow-hidden after:pointer-events-none after:w-full after:h-full after:absolute after:z-20 after:top-0 after:left-0 after:opacity-0 after:bg-gradient-to-b after:from-white/[0] after:to-white/[.4] after:transition-all after:duration-300 after:ease-in-out group-hover:after:opacity-100 ">
                                                <Image src={project.image} alt={project.title} width={600} height={405} />
                                            </a>
                                        </div>
                                        <div className="p-[16px_22px] md:p-[16px]">
                                            <a href={project.url} className="flex items-center justify-between gap-[12px]">
                                                <h4 className="text-[36px] leading-[42px] tracking-[-1.08px] text-black-300 md:text-[26px] md:leading-[32px] after:w-0 after:h-[1px] after:bg-black-300 flex flex-col group-hover:after:w-full after:transition-all after:duration-300 after:ease-in-out">{project.title}</h4>
                                                <i className="fa-light fa-arrow-right text-[32px] text-black-300 md:text-[26px]"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-4 gap-[24px] lg:grid-cols-3 md:grid-cols-2">
                            {logos}
                        </div>
                    </div>
                </div>
            </section>
        </RevealList>
    )
}
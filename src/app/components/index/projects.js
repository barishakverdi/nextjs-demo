'use client'
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { RevealList } from  'next-reveal'
import 'swiper/css';
import {Autoplay, Navigation} from "swiper/modules";

export default function Projects({title}) {
    const projects = [
        {
            title: "Project 1",
            image: "project-1.jpg",
            url: "https://example.com",
        },

        {
            title: "Project 2",
            image: "project-2.jpg",
            url: "https://example.com",
        },

        {
            title: "Project 3",
            image: "project-3.jpg",
            url: "https://example.com",
        }
    ]
    return (
        <RevealList interval={100} delay={500} reset={true} >
            <section className="my-[160px]">
                <div className="container mx-auto px-5 [&_.swiper]:[overflow:revert]">
                    <h2 className="text-[60px] leading-[74px] text-black-400 tracking-[-1.8px] mb-[50px]">{title ? title : "Latest Projects"}</h2>
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        autoplay={{delay: 5000}}
                        speed={1000}
                        slidesPerView={2}
                        spaceBetween={24}
                        navigation={{enabled: true}}
                    >
                        {projects.map((project, index)=> (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col rounded-main overflow-hidden group">
                                    <div className="">
                                        <a href={project.url} target="_blank" className="flex w-full max-h-[450px] [&_img]:w-full [&_img]:h-full [&_img]:object-cover relative overflow-hidden after:pointer-events-none after:w-full after:h-full after:absolute after:z-20 after:top-0 after:left-0 after:opacity-0 after:bg-gradient-to-b after:from-white/[0] after:to-white/[.4] after:transition-all after:duration-300 after:ease-in-out group-hover:after:opacity-100 ">
                                            <Image src={"/"+project.image} alt={project.title} width={600} height={405} />
                                        </a>
                                    </div>
                                    <div className="p-[16px_22px]">
                                        <a href={project.url} className="flex items-center justify-between gap-[12px]">
                                            <h4 className="text-[36px] leading-[42px] tracking-[-1.08px] text-black-300 after:w-0 after:h-[1px] after:bg-black-300 flex flex-col group-hover:after:w-full after:transition-all after:duration-300 after:ease-in-out">{project.title}</h4>
                                            <i className="fa-light fa-arrow-right text-[32px] text-black-300"></i>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </RevealList>
    )
}
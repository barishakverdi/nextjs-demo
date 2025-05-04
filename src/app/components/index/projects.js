'use client'
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { RevealList } from  'next-reveal'
import 'swiper/css';
import {Autoplay, Navigation} from "swiper/modules";
import {projects} from "@/app/projects/components/customerList";
import Link from "next/link";

export default function Projects({title}) {
    return (
        <RevealList interval={100} delay={500} reset={true} >
            <section className="my-[160px] max-xl:my-[80px] max-lg:my-[50px]">
                <div className="container mx-auto px-5 [&_.swiper]:[overflow:revert]">
                    <h2 className="text-[60px] leading-[74px] max-lg:text-[50px] max-lg:leading-[64px] max-sm:text-[34px] max-sm:leading-[44px] text-black-400 dark:text-white tracking-[-1.8px] mb-[50px]">{title ? title : "Latest Projects"}</h2>
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        autoplay={{delay: 5000}}
                        speed={1000}
                        slidesPerView={1}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                        spaceBetween={24}
                        navigation={{enabled: true}}
                        className="[&_.swiper-wrapper_~_div]:absolute [&_.swiper-button-prev]:right-[54px] [&_.swiper-button-prev]:-top-[100px] max-lg:[&_.swiper-button-prev]:-top-[90px] [&_.swiper-button-next]:right-0 [&_.swiper-button-next]:-top-[100px] max-lg:[&_.swiper-button-next]:-top-[90px] [&_.swiper-wrapper_~_div]:w-[44px] [&_.swiper-wrapper_~_div]:h-[44px] [&_.swiper-wrapper_~_div]:border [&_.swiper-wrapper_~_div]:border-black-300/[.15] [&_.swiper-wrapper_~_div]:dark:border-white/[.15] [&_.swiper-wrapper_~_div]:rounded-full [&_.swiper-wrapper_~_div]:font-['Font_Awesome_6_Pro'] [&_.swiper-wrapper_~_div]:cursor-pointer [&_.swiper-wrapper_~_div]:duration-300 [&_.swiper-wrapper_~_div]:ease-in-out [&_.swiper-wrapper_~_div]:flex [&_.swiper-wrapper_~_div]:items-center [&_.swiper-wrapper_~_div]:justify-center [&_.swiper-wrapper_~_div]:before:text-[18px] [&_.swiper-wrapper_~_div]:text-black-300 [&_.swiper-wrapper_~_div]:dark:text-light-200 [&_.swiper-wrapper_~_div:hover]:text-black-400 [&_.swiper-wrapper_~_div:hover]:dark:text-white [&_.swiper-wrapper_~_div:hover]:border-black-400 [&_.swiper-wrapper_~_div:hover]:dark:border-white [&_.swiper-wrapper_~_div:hover]:scale-105 [&_.swiper-button-prev]:before:content-['\f060'] [&_.swiper-button-next]:before:content-['\f061'] [&_.swiper-wrapper_~_div.swiper-button-disabled]:opacity-50 [&_.swiper-wrapper_~_div.swiper-button-disabled]:cursor-not-allowed [&_.swiper-wrapper_~_div.swiper-button-disabled:hover]:text-black-300 [&_.swiper-wrapper_~_div.swiper-button-disabled:hover]:dark:text-light-300 [&_.swiper-wrapper_~_div.swiper-button-disabled:hover]:scale-100 [&_.swiper-wrapper_~_div.swiper-button-disabled:hover]:border-black-300/[.15] [&_.swiper-wrapper_~_div.swiper-button-disabled:hover]:dark:border-white/[.15]"
                    >
                        {projects.map((project, index)=> (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col rounded-main overflow-hidden group">
                                    <div className="">
                                        <Link href={project.url} className="flex w-full max-h-[450px] [&_img]:w-full [&_img]:h-full [&_img]:object-cover relative overflow-hidden after:pointer-events-none after:w-full after:h-full after:absolute after:z-20 after:top-0 after:left-0 after:opacity-0 after:bg-gradient-to-b after:from-white/[0] after:to-white/[.4] after:transition-all after:duration-300 after:ease-in-out group-hover:after:opacity-100 ">
                                            <Image src={project.image} alt={project.title} width={600} height={405} />
                                        </Link>
                                    </div>
                                    <div className="p-[16px_22px]">
                                        <Link href={project.url} className="flex items-center justify-between gap-[12px]">
                                            <h4 className="text-[36px] leading-[42px] tracking-[-1.08px] text-black-300 dark:text-light-200 max-md:text-[26px] max-md:leading-[32px] after:w-0 after:h-[1px] after:bg-black-300 after:dark:bg-light-200 flex flex-col group-hover:after:w-full after:transition-all after:duration-300 after:ease-in-out">{project.title}</h4>
                                            <i className="fa-light fa-arrow-right text-[32px] text-black-300 dark:text-light-300"></i>
                                        </Link>
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
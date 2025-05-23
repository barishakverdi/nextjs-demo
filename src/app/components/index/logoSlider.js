'use client'
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { RevealList } from  'next-reveal'
import 'swiper/css';
import {Autoplay, FreeMode} from "swiper/modules";

export default function LogoSlider({logo}) {
    const logoCount = 27;
    const logos = [];
    for (let i = 1; i <= logoCount; i++) {
        logos.push(
            <SwiperSlide key={i} className="transition-all duration-300 ease-in-out max-lg:grayscale-0 max-lg:dark:grayscale grayscale hover:dark:grayscale hover:grayscale-0 hover:transition-all hover:ease-in-out hover:duration-300 [&_img]:dark:invert">
                <div className="flex justify-center px-[70px] max-xmax-xl:px-[60px] max-xl:px-[40px] max-lg:px-[80px] max-md:px-[15px] [&_img]:w-full [&_img]:h-auto [&_img]:aspect-video [&_img]:object-contain">
                    <Image src={"/clients/client-" + i + ".png"} alt={"client-" + i} width={163} height={36} loading={"lazy"}/>
                </div>
            </SwiperSlide>)
    }
    return (
        <RevealList interval={100} delay={500} reset={true}>
            <section className="my-[160px] max-xl:my-[80px] max-lg:my-[60px] [&_.swiper-wrapper]:[transition-timing-function:linear]">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    autoplay={{delay: 0}}
                    grabCursor={true}
                    slidesPerView={3}
                    breakpoints={{
                        992: {
                            slidesPerView: 6,
                        },
                    }}
                    loop={true}
                    freeMode={true}
                    speed={3000}
                >
                    {logos}
                </Swiper>
            </section>
        </RevealList>
    )
}
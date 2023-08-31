'use client'
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { RevealList } from  'next-reveal'
import 'swiper/css';
import {Autoplay, FreeMode} from "swiper/modules";

export default function LogoSlider({logo}) {
    const slideCount = 20;
    const slides = [];
    for (let i = 0; i <= slideCount; i++) {
        slides.push(
            <SwiperSlide key={i} className="transition-all duration-300 ease-in-out opacity-30 hover:opacity-100 hover:transition-all hover:ease-in-out hover:duration-300">
                <Image src="logo.svg" alt="Crealive Logo" width={163} height={36} />
            </SwiperSlide>)
    }
    return (
        <section className="my-[160px]">
            <Swiper
                modules={[Autoplay, FreeMode]}
                autoplay={{delay: 0.5}}
                grabCursor={true}
                slidesPerView={6}
                loop={true}
                freeMode={true}
                speed={8000}
            >
                {slides}
            </Swiper>
        </section>
    )
}
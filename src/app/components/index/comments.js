'use client'
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { RevealList } from  'next-reveal'
import 'swiper/css';
import {Autoplay, FreeMode, Scrollbar} from "swiper/modules";

export default function Comments({title}) {
    const customers = [
        {
            title: "John Doe",
            position: "CEO at Crealive",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam?",
            image: "customer-1.jpeg",
        },

        {
            title: "John Diamond",
            position: "CEO at Crealive",
           comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam?",
            image: "customer-2.jpeg",
        },

        {
            title: "John Diamond",
            position: "CEO at Crealive",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam?",
            image: "customer-2.jpeg",
        },

        {
            title: "John Diamond",
            position: "CEO at Crealive",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam?",
            image: "customer-2.jpeg",
        },

        {
            title: "John Diamond",
            position: "CEO at Crealive",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam?",
            image: "customer-2.jpeg",
        },

        {
            title: "John Diamond",
            position: "CEO at Crealive",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deleniti doloremque odit repellat sunt ullam?",
            image: "customer-2.jpeg",
        },
    ]
    return (
        <RevealList interval={100} delay={500} reset={true}>
            <section className="mb-[160px]">
                <div className="container mx-auto px-5">
                    <div className="relative">
                        <h2 className="whitespace-pre-line text-[60px] leading-[74px] text-black-400 tracking-[-1.8px] mb-[60px]">{title ? title : "What did \n" + "Our Customers Say?"}</h2>
                        <Swiper
                            modules={[Autoplay, Scrollbar]}
                            autoplay={{delay: 10000}}
                            speed={2000}
                            slidesPerView={1}
                            spaceBetween={34}
                            scrollbar={{enabled: true, draggable: true}}
                            className="[&_.swiper-scrollbar]:h-[2px] [&_.swiper-scrollbar]:rounded-full [&_.swiper-scrollbar]:bg-light-400 [&_.swiper-scrollbar]:mt-[60px] [&_.swiper-scrollbar-drag]:h-[2px] [&_.swiper-scrollbar-drag]:bg-primary [&_.swiper-scrollbar-drag]:rounded-full ![overflow:revert]"
                        >
                            {customers.map((customer)=> (
                                <SwiperSlide key={customer} className="group ">
                                    <div className="p-[14px_24px] rounded-[48px] border-black-400 border borer-solid w-full opacity-40 transition-all duration-700 ease-in-out group-[&.swiper-slide-active]:opacity-100">
                                        <div className="flex items-center gap-[14px]">
                                            <div className="w-[70px] h-[70px] rounded-full border border-black-300 overflow-hidden [&_img]:w-full [&_img]:h-full [&_img]:object-cover">
                                                <Image src={"/"+customer.image} alt="Customer" width={70} height={70} />
                                            </div>
                                            <div className="flex flex-col gap-[8px]">
                                                <p className="text-[18px] leading-[18px] tracking-[-0.54px] text-black-300">{customer.title}, {customer.position}</p>
                                                <div className="flex items-center gap-[8px]">
                                                    <p className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400 line-clamp-1 max-w-[970px]">{customer.comment}</p>
                                                    <span className="text-[18px] leading-[38px] tracking-[-0.54px] text-black-400 cursor-pointer flex flex-col after:w-0 after:h-[1px] after:bg-black-400 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out group/read">
                                                        Read More
                                                        <div className="pointer-events-none absolute left-0 bottom-[-116px] w-full p-[14px] bg-light-200 rounded-xl text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400 opacity-0 transition-all duration-300 ease-in-out shadow-[0px_2px_8px_3px_rgba(23,23,23,0.05)] group-hover/read:opacity-100 group-hover/read:pointer-events-auto">
                                                            <p className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400 line-clamp-2">{customer.comment}</p>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </RevealList>
    )
}
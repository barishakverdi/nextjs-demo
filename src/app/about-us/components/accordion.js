'use client'
import { RevealList } from  'next-reveal'
import { Disclosure, Transition } from '@headlessui/react'

export default function Accordion({mainTitle}) {
    const accordionContent = [
        {
            title: "Creative Websites",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur illo molestiae molestias nisi officiis quasi quisquam repellat sed unde vitae."
        },

        {
            title: "E-Commerce Projects",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur illo molestiae molestias nisi officiis quasi quisquam repellat sed unde vitae."
        },

        {
            title: "Digital Marketing",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur illo molestiae molestias nisi officiis quasi quisquam repellat sed unde vitae."
        },

        {
            title: "SEO",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur illo molestiae molestias nisi officiis quasi quisquam repellat sed unde vitae."
        },
    ]

    return (
        <RevealList interval={100} delay={300} reset={false} >
            <section className="mb-[160px] xl:mb-[80px] lg:mb-[50px]">
                <div className="container mx-auto px-5">
                    <div className="flex gap-[24px] lg:flex-col">
                        <div className="w-1/2 lg:w-full">
                            <h2 className="text-[60px] leading-[74px] tracking-[-1.8px] text-black-400 dark:text-white lg:text-[50px] lg:leading-[64px] sm:text-[34px] sm:leading-[44px]">{mainTitle ? mainTitle : "What we actually do?"}</h2>
                        </div>
                        <div className="w-1/2 lg:w-full">
                            <div className="flex flex-col gap-[60px] lg:gap-[36px] px-[70px] xl:px-[60px] lg:px-[30] md:px-0">
                                {
                                    accordionContent.map((item, index) => (
                                        <div className="flex flex-col gap-[24px] pb-[20px] border-b border-black-400/[.1] dark:border-white/[.1] last:border-none" key={index}>
                                            <Disclosure defaultOpen={index === 0}>
                                                {({open}) => (
                                                    <>
                                                    <Disclosure.Button className={"flex items-center justify-between gap-[8px] "}>
                                                        <h3 className="text-[36px] leading-[42px] tracking-[-1.08px] text-black-400 dark:text-white sm:text-[24px] sm:leading-[32px]">{item.title}</h3>
                                                        <div className="flex items-center justify-center transition-all duration-300 ease-in-out [&_span]:transition-all [&_span]:duration-500 [&_span]:ease-in-out">
                                                            <span className="block w-[44px] sm:w-[32px] h-[3px] sm:h-[2px] bg-black-300 dark:bg-light-300 rounded-full ui-open:rotate-180"></span>
                                                            <span className="absolute block w-[44px] sm:w-[32px] h-[3px] sm:h-[2px] bg-black-300 dark:bg-light-300 rotate-90 rounded-full ui-open:rotate-180"></span>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Transition
                                                        show={open}
                                                        enter="transition duration-300 ease-out"
                                                        enterFrom="transform opacity-0"
                                                        enterTo="transform opacity-100"
                                                        leave="transition duration-300 ease-out"
                                                        leaveFrom="transform opacity-100"
                                                        leaveTo="transform opacity-0"
                                                    >
                                                        <Disclosure.Panel static>
                                                            <p className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400 dark:text-light-400">
                                                                {item.content}
                                                            </p>
                                                        </Disclosure.Panel>
                                                    </Transition>
                                                    </>
                                                )}
                                            </Disclosure>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </RevealList>
    )
}
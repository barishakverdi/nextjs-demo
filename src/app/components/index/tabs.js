'use client'
import Script from "next/script"
import { Tab, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { RevealList } from  'next-reveal'


export default function Tabs({ mainTitle }) {
    const tabs = ["About Us", "What we Do?", "Projects"]
    const contents = [
        {
            title: "Waveless",
            description: "We are a leading software agency with over 15 years of experience in the software industry. Having completed more than 400 projects, we have provided value to numerous clients. Our customers are our top priority. We work diligently on every project to create tailored solutions that meet our clients' unique needs.",
        },

        {
            title: "what we do title",
            description: "what we do description",
        },

        {
            title: "projects title",
            description: "projects description",
        },
    ]
    return (
        <RevealList interval={100} delay={300} reset={true}>
            <section className="mb-[160px] max-xl:mb-[80px] max-lg:mb-[50px]">
                <div className="container mx-auto px-5">
                    <h2 className="text-[60px] leading-[74px] tracking-[-1.8px] text-black-400 dark:text-white mb-[50px] max-lg:mb-[24px] max-lg:text-[50px] max-lg:leading-[64px] max-sm:text-[34px] max-sm:leading-[44px]">{mainTitle}</h2>
                    <div className="*:flex *items-end *gap-[24px] *:max-lg:flex-col *:max-lg:gap-[40px]">
                        <Tab.Group>
                            <div className="w-1/2 max-lg:w-full">
                                <div>
                                    <Tab.List className="flex flex-col gap-[40px] border-l border-solid border-black-400/[.15] dark:border-white/[.15] pl-[60px] max-lg:pl-[30px] max-md:pl-[24px] max-lg:gap-[30px]">
                                        {tabs.map((tabItem, a) => (
                                            <Tab key={tabItem} className={"ui-selected:opacity-100 ui-selected:pl-[42px] ui-selected:before:w-[30px] ui-selected::hover:opacity-100 text-left outline-0 cursor-pointer text-[40px] leading-[48px] max-sm:text-[30px] max-sm:leading-[38px] tracking-[-1.8px] text-black-300 dark:text-light-400 opacity-70 relative before:transition-all before:duration-700 before:ease-in-out before:content-[''] before:absolute before:left-0 before:top-[24px] before:w-0 before:h-[2px] before:bg-black-400 before:dark:bg-white before:rounded-full transition-all duration-700 ease-in-out hover:opacity-80 focus:outline-0 ui-selected:outline-0 ui-selected:[outline:none]"}>{tabItem}</Tab>
                                        ))}
                                    </Tab.List>
                                </div>
                            </div>

                            <div className="w-1/2 relative max-lg:w-full">
                                <div className="tabs-content">
                                    <Tab.Panels>
                                        {contents.map((contentItem, a) => (
                                            <Tab.Panel key={a.toString()}>
                                                <Transition
                                                    appear
                                                    show={true}
                                                    enter="transition-opacity duration-700"
                                                    enterFrom="opacity-0"
                                                    enterTo="opacity-100"
                                                    leave="transition-opacity duration-700"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                    as={Fragment} // ⚠️ className verilmiyor
                                                >
                                                    <div className="flex flex-col gap-[24px]"> {/* className buraya taşındı */}
                                                        {contentItem.title && (
                                                            <h3 className="text-[36px] leading-[42px] max-sm:text-[28px] max-sm:leading-[36px] tracking-[-1.08px] text-black-400 dark:text-white">{contentItem.title}</h3>
                                                        )}
                                                        {contentItem.description && (
                                                            <p className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400 dark:text-light-300">{contentItem.description}</p>
                                                        )}
                                                    </div>
                                                </Transition>
                                            </Tab.Panel>
                                        ))}
                                    </Tab.Panels>
                                </div>
                            </div>
                        </Tab.Group>
                    </div>
                </div>
            </section>
        </RevealList>

    )
}

// {contentItem.title ? <h3 className="text-[36px] leading-[42px] max-sm:text-[28px] max-sm:leading-[36px] tracking-[-1.08px] text-black-400 dark:text-white">{contentItem.title}</h3> : ""}
// {contentItem.description ? <p className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400 dark:text-light-300">{contentItem.description}</p> : ""}


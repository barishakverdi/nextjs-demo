'use client'
import { RevealList } from  'next-reveal'
import Image from "next/image";

export default function CareerForm() {
    return (
        <RevealList interval={100} delay={500} reset={false} >
            <section className="mb-[60px] max-lg:mb-[30px]">
                <div className="py-[60px] max-lg:py-[30px] bg-light-200 dark:bg-black-300">
                    <div className="container mx-auto px-5">
                        <div className="px-[260px] max-xl:px-[130px] max-lg:px-[60px] max-md:px-0">
                            <h3 className="text-[48px] leading-[54px] tracking-[-1.44px] text-black-300 dark:text-light-200 max-xl:text-[38px] max-xl:leading-[44px] max-sm:text-[28px] max-sm:leading-[34px] mb-[40px] max-lg:mb-[30px]">Ready to apply?</h3>
                            <form action="" method="post" className="[&_input]:bg-transparent [&_input]:w-full [&_input]:pb-[15px] [&_input]:border-b [&_input]:text-[16px] [&_input]:border-gray-300 [&_input]:dark:border-light-300 [&_input]:text-black-300 [&_input]:dark:text-light-300 [&_input:placeholder]:text-gray-300 [&_input:placeholder]:dark:text-light-400 [&_input]:duration-500 [&_input]:ease-in-out [&_input:focus]:border-b-secondary [&_input:focus]:text-black-300 [&_input:focus]:dark:text-white [&_input:focus]:outline-0 [&_input:focus-visible]:[outline:none]">
                                <div className="flex flex-col gap-[24px]">
                                    <div className="form-group flex flex-col gap-[4px]">
                                        <label htmlFor="name">
                                            <input type="text" name="name" id="name" minLength={5} maxLength={40} placeholder="Name, Surname" required/>
                                        </label>
                                    </div>

                                    <div className="form-group flex flex-col gap-[4px]">
                                        <label htmlFor="email">
                                            <input type="email" name="email" id="email" minLength={5} maxLength={50} placeholder="Email" required/>
                                        </label>
                                    </div>

                                    <div className="form-group flex flex-col gap-[4px] relative border-b border-b-gray-300 pb-[15px]">
                                        <label htmlFor="cv">
                                            <span className="text-gray-300 dark:text-light-400/[.4]">CV</span>
                                            <small className="text-[12px] leading-[14px] tracking-[-0.36px] text-gray-300 duration-300 ease-in-out hover:text-primary cursor-pointer absolute right-0 top-0 z-10">Upload</small>
                                            <input type="file" name="cv" id="cv" placeholder="CV" required className="appearance-none border-none pb-0 absolute right-0 w-max top-0 opacity-0"/>
                                        </label>
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="text-[18px] leading-[18px] tracking-[-0.54px] text-black-300 dark:text-white pb-[10px] border-b border-black-300 dark:border-white duration-300 ease-in-out hover:text-secondary hover:border-secondary hover:dark:text-primary hover:dark:border-primary">Apply Job</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="[&_img]:w-full [&_img]:h-auto max-lg:[&_img]:min-h-[200px] max-lg:[&_img]:object-cover">
                    <Image src="/career-3.png" alt="Waveless Career" width={1440} height={500} />
                </div>
            </section>
        </RevealList>
    )
}
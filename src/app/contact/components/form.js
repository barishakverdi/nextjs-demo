'use client'
import { RevealList } from  'next-reveal'

export default function ContactForm() {
    const options = [
        "Web Projects",
        "Mobile Projects",
        "Digital Marketing",
        "SEO",
        "Other",
    ]
    return (
        <RevealList interval={100} delay={500} reset={false} >
            <section className="mb-[120px] max-lg:mb-[50px]">
                <div className="mb-[120px] max-lg:mb-[50px] [&_iframe]:w-full [&_iframe]:dark:grayscale">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12058.433192179209!2d29.171217849691246!3d40.92433365578255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac46bfa05b1f5%3A0x60b14b9a32a817ef!2sMaltepe%20Piazza!5e0!3m2!1str!2str!4v1701880723575!5m2!1str!2str"
                        width="1440" height="450" style={{border: 0}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="container mx-auto px-5">
                    <h2 className="px-[260px] max-xl:px-[130px] max-lg:px-[60px] max-md:px-0 text-[48px] leading-[54px] tracking-[-1.44px] text-black-300 dark:text-light-200 max-xl:text-[38px] max-xl:leading-[44px] max-sm:text-[28px] max-sm:leading-[34px] mb-[40px] max-sm:mb-[24px]">Let’s Chat.</h2>
                    <div className="px-[260px] max-xl:px-[130px] max-lg:px-[60px] max-md:px-0">
                        <form action="" method="post" className="[&_input]:bg-transparent [&_input]:w-full [&_input]:pb-[15px] [&_input]:border-b [&_input]:text-[16px] [&_input]:border-gray-300 [&_input:placeholder]:text-gray-300 [&_input:placeholder]:dark:text-light-400 [&_input]:duration-500 [&_input]:ease-in-out [&_input:focus]:border-b-secondary [&_input]:text-black-300 [&_input]:dark:text-light-300 [&_input:focus]text-black-300 [&_input:focus]:outline-0 [&_input:focus-visible]:[outline:none]">
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

                                <div className="form-group flex flex-col gap-[4px]">
                                    <label htmlFor="phone">
                                        <input type="text" name="phone" id="phone" minLength={10} maxLength={11} placeholder="Phone"/>
                                    </label>
                                </div>

                                <div className="form-group flex flex-col gap-[4px]">
                                    <label htmlFor="subject">
                                        <select name="subject" id="subject" required defaultValue={options[0]} className="bg-transparent w-full pb-[15px] border-b text-[16px] border-gray-300 placeholder:text-gray-300 placeholder:dark:text-light-400 duration-500 ease-in-out focus:border-b-secondary text-black-300 dark:text-light-400/[.4] outline-0">
                                            {
                                                options.map((item, index) => (
                                                    <option value={item} key={index}>{item}</option>
                                                ))
                                            }
                                        </select>
                                    </label>
                                </div>

                                <div className="form-group flex flex-col gap-[4px]">
                                    <label htmlFor="message">
                                        <textarea name="message" id="message" className="resize-none bg-transparent w-full pb-[80px] border-b text-[16px] border-gray-300 placeholder:text-gray-300 placeholder:dark:text-light-400/[.4] duration-500 ease-in-out focus:border-b-secondary text-black-300 dark:text-light-200 outline-0 focus-visible:[outline:none]" minLength={10} maxLength={300} placeholder="Message"></textarea>
                                    </label>
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="text-[18px] leading-[18px] tracking-[-0.54px] text-black-300 dark:text-white pb-[10px] border-b border-black-300 dark:border-white duration-300 ease-in-out hover:text-secondary hover:border-secondary hover:dark:text-primary hover:dark:border-primary">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </RevealList>
    )
}
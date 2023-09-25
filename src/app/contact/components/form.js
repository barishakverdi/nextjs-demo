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
            <section className="mb-[120px] lg:mb-[50px]">
                <div className="mb-[120px] lg:mb-[50px] [&_iframe]:w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.0728243047315!2d29.008520976709743!3d41.067400771342236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab641a821efcf%3A0xc882f5fe3698810b!2sCrealive!5e0!3m2!1str!2str!4v1695649771864!5m2!1str!2str"
                        width="1440" height="450" style={{border: 0}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="container mx-auto px-5">
                    <h2 className="px-[260px] xl:px-[130px] lg:px-[60px] md:px-0 text-[48px] leading-[54px] tracking-[-1.44px] text-black-300 xl:text-[38px] xl:leading-[44px] sm:text-[28px] sm:leading-[34px] mb-[40px] sm:mb-[24px]">Let’s Chat.</h2>
                    <div className="px-[260px] xl:px-[130px] lg:px-[60px] md:px-0">
                        <form action="" method="post" className="[&_input]:bg-transparent [&_input]:w-full [&_input]:pb-[15px] [&_input]:border-b [&_input]:text-[16px] [&_input]:border-gray-300 [&_input:placeholder]:text-gray-300 [&_input]:duration-500 [&_input]:ease-in-out [&_input:focus]:border-b-secondary [&_input:focus]text-black-300 [&_input:focus]:outline-0">
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
                                        <select name="subject" id="subject" required defaultValue={options[0]} className="bg-transparent w-full pb-[15px] border-b text-[16px] border-gray-300 placeholder:text-gray-300 duration-500 ease-in-out focus:border-b-secondary text-black-300 outline-0">
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
                                        <textarea name="message" id="message" className="resize-none bg-transparent w-full pb-[80px] border-b text-[16px] border-gray-300 placeholder:text-gray-300 duration-500 ease-in-out focus:border-b-secondary text-black-300 outline-0" minLength={10} maxLength={300} placeholder="Message"></textarea>
                                    </label>
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="text-[18px] leading-[18px] tracking-[-0.54px] text-black-300 pb-[10px] border-b border-black-300 duration-300 ease-in-out hover:text-secondary hover:border-secondary">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </RevealList>
    )
}
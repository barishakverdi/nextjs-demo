'use client'
import Image from "next/image"
import Script from "next/script"

export default function HeaderComponent() {
    const menu = [
        {
            title: "About Us",
            link: "/about-us"
        },

        {
            title: "Projects",
            link: "/projects"
        },

        {
            title: "Career",
            link: "/career"
        },

        {
            title: "Contact",
            link: "/contact"
        },
    ]
    return (
        <header className="w-full z-20 transition-all duration-300 ease-in-out bg-backgroundColor dark:bg-darkBackgroundColor [&.fixed]:bg-white [&.fixed]:dark:bg-darkBackgroundColor top-0 animate-img">
            <div className="container mx-auto px-5 h-full">
                <div className="body py-[32px] flex items-center justify-between h-full">
                    <div className="left-side lg:[&_img]:w-[150px] lg:[&_img]:h-auto">
                        <a href="/" className="digital-agency-logo">
                            <Image src="/logo.svg" alt="digital-agency Logo" width={163} height={36}/>
                        </a>
                    </div>

                    <div className="right-side flex items-center gap-[20px]">
                        <div className="theme-switcher-container flex items-center gap-[8px]">
                            <i className="fa-light fa-sun-cloud duration-300 ease-in-out text-[20px] text-black-300 dark:text-white"></i>
                            <div className="theme-switcher cursor-pointer bg-black-300/[.01] dark:bg-white/[.1] border border-black-400/[.1] w-[55px] h-[26px] rounded-full relative duration-300 ease-linear dark:ease-out">
                                <div className="rounded-full absolute left-[2px] dark:left-auto dark:right-[2px] top-[2px] bg-black-300/[.05] dark:bg-white border border-black-400/[.1] w-[20px] h-[20px] duration-300 ease-in-out"></div>
                            </div>
                        </div>
                        <div className="menu-bar-button flex flex-col items-center justify-center gap-[16px] cursor-pointer group [&_span]:transition-all [&_span]:duration-700 [&_span]:ease-in-out hover:[&_span]:transition-all hover:[&_span]:duration-700 hover:[&_span]:ease-in-out">
                            <span className="w-[60px] h-[3px] rounded-main bg-black-300 dark:bg-white group-hover:-rotate-180"></span>
                            <span className="w-[60px] h-[3px] rounded-main bg-black-300 dark:bg-white group-hover:-rotate-180"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed -right-[100%] top-0 bg-white dark:bg-darkBackgroundColor z-30 w-full h-full pointer-events-none transition-all duration-700 ease-in-out group-[.mega-active]/mega:right-[0] group-[.mega-active]/mega:pointer-events-auto">
                <div className="absolute w-full h-full top-0 right-0 [&_img]:w-full [&_img]:h-full [&_img]:object-cover pointer-events-none z-10 md:hidden">
                    <Image src="/mega-menu.png" alt={"Mega Menu Image"} width={1440} height={900} />
                </div>

                <div className="absolute w-max h-full top-0 right-0 [&_img]:w-full [&_img]:h-full [&_img]:object-cover pointer-events-none z-10 hidden md:block sm:-right-[90px]">
                    <Image src="/mega-menu-mobile.png" alt={"Mega Menu Image"} width={500} height={900} />
                </div>

                <div className="h-full flex flex-col justify-between">
                    <div className="container mx-auto px-5 h-max z-20 relative">
                        <div className="flex items-center justify-between py-[32px] lg:[&_img]:w-[150px] lg:[&_img]:h-auto digital-agency-logo">
                            <Image src="/logo.svg" alt="digital-agency Logo" width={163} height={36}/>

                            <div className="menu-bar-close-button flex items-center justify-center bg-white w-[60px] h-[60px] rounded-full cursor-pointer group hover:scale-105 transition-all duration-300 ease-in-out [&_span]:transition-all [&_span]:duration-300 [&_span]:ease-in-out hover:[&_span]:transition-all hover:[&_span]:duration-300 hover:[&_span]:ease-in-out">
                                <span className="w-[40px] h-[2px] block rounded-main bg-black-300 [transform:translate(15px)_rotate(-45deg)] group-hover:[transform:translate(15px)_rotate(-35deg)]"></span>
                                <span className="w-[40px] h-[2px] block rounded-main bg-black-300 [transform:translate(-15px)_rotate(45deg)] group-hover:[transform:translate(-15px)_rotate(35deg)]"></span>
                            </div>
                        </div>

                        <div className="flex mt-[60px] xl:mt-[30px] h-full">
                            <ul className="flex flex-col gap-[40px]">
                                {
                                    menu.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.link} className="text-[48px] leading-[54px] tracking-[-1.44px] xl:text-[34px] xl:leading-[44px] text-black-400 dark:text-white duration-300 ease-in-out hover:!text-primary relative after:content-[''] after:duration-700 after:ease-in-out after:bottom-0 after:left-0 after:absolute after:bg-primary after:w-0 after:h-[1px] hover:after:w-full">{item.title}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="flex border-t border-black-400/[.15] dark:border-white/[.15] relative z-20 md:bg-white md:dark:bg-darkBackgroundColor">
                        <div className="container mx-auto px-5 py-[30px]">
                            <div className="flex items-center gap-[24px] [&_a]:text-[18px] [&_a]:leading-[38px] [&_a]:tracking-[-0.54px] [&_a]:text-black-400 [&_a]:dark:text-white [&_a]:duration-300 [&_a]:ease-in-out [&_a]:hover:[&_a]:text-primary">
                                <a href="tel:+2575637401" className="hover:text-primary relative after:w-[1px] after:h-[20px] after:bg-black-300/[.1] dark:after:bg-white/[.1] after:absolute after:-right-[13px] after:top-[8px]">(257) 563-7401</a>
                                <a href="mailto:info@digital-agency.net" className="hover:text-primary">info@digital-agency.net</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Script id="header" jsx>
                {
                    `
                        const header = document.getElementsByTagName("header")[0];
                        const html = document.getElementsByTagName("html")[0];
                        const main = document.getElementsByTagName("main")[0];
                        const body = document.getElementsByTagName("body")[0];
                        const menuButton = header.querySelector(".menu-bar-button")
                        const menuCloseButton = header.querySelector(".menu-bar-close-button")
                        const digitalAgencyLogo = document.querySelectorAll(".digital-agency-logo img")
                        const headerHeight = header.offsetHeight;
                        const headerOffset = document.createElement("div");
                        header.insertAdjacentElement("afterend", headerOffset);
                        
                        window.onscroll = function() {
                            headerOffset.style.height = parseInt(header.offsetHeight) + "px";
                            stickyHeader();
                        }
                        
                        function stickyHeader() {
                            if (window.scrollY > header.offsetTop) {
                                header.classList.add("fixed");
                                header.style.height = "80px";
                            } else {
                                header.classList.remove("fixed");
                                headerOffset.style.height = "0px";
                                header.style.height = parseInt(headerHeight) + "px";
                            }
                        }
                        
                        
                        menuButton.addEventListener("click", megaMenu);
                        menuCloseButton.addEventListener("click", megaMenu);
                        
                        function megaMenu() {
                            main.classList.toggle("mega-active")
                            body.classList.toggle("overflow-hidden")
                        }
                    `
                }
            </Script>
        </header>
    )
}


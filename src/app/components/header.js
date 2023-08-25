import Image from "next/image"
import { metadata } from "@/app/layout"
import Script from "next/script"

export default function HeaderComponent() {
    return (
        <header className="w-full z-30 transition-all duration-300 ease-in-out bg-backgroundColor [&.fixed]:bg-white top-0">
            <div className="container mx-auto px-5 h-full">
                <div className="body py-[32px] flex items-center justify-between h-full">
                    <div className="left-side">
                        <a href="/">
                            <Image src="logo.svg" alt={metadata.title} width={163} height={36}/>
                        </a>
                    </div>

                    <div className="right-side">
                        <div className="menu-bar flex flex-col gap-[16px] cursor-pointer">
                            <span className="w-[60px] h-[3px] rounded-main bg-black-300"></span>
                            <span className="w-[60px] h-[3px] rounded-main bg-black-300"></span>
                        </div>
                    </div>
                </div>
            </div>
            <Script id="header" jsx>
                {
                    `
                        const header = document.getElementsByTagName("header")[0];
                        const headerHeight = header.offsetHeight;
                        const headerOffset = document.createElement("div");
                        header.insertAdjacentElement("afterend", headerOffset);
                        
                        window.onscroll = function() {
                            headerOffset.style.paddingTop = parseInt(header.offsetHeight) + "px";
                            stickyHeader();
                        }
                        
                        function stickyHeader() {
                            if (window.scrollY > header.offsetTop) {
                                header.classList.add("fixed");
                                header.style.height = "80px";
                            } else {
                                header.classList.remove("fixed");
                                headerOffset.style.paddingTop = "0px";
                                header.style.height = parseInt(headerHeight) + "px";
                            }
                        }
                    `
                }
            </Script>
        </header>
    )
}


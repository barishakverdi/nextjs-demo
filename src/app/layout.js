import "./globals.css"
// import { Inter } from "next/font/google"
import localFont from "next/font/local"
import base from "./base.scss"
import Script from "next/script";

// const inter = Inter({ subsets: ["latin"] });
const Satoshi = localFont({
    src: [
        {
            path: './fonts/Satoshi-Regular.woff2',
            weight: '400',
            style: 'normal',
        },

        {
            path: './fonts/Satoshi-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
    ],
});


export const metadata = {
    title: "Waveless",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, beatae distinctio dolores ducimus recusandae totam.",
}



export const ClashGrotesk = localFont({
    src: [
        {
            path: './fonts/ClashGrotesk-Regular.woff2',
            weight: '400',
            style: 'normal',
        }
    ]
})

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#88b94e" />
                <meta name="msapplication-TileColor" content="#88b94e" />
                <meta name="theme-color" content="#ffffff" />
            </head>
            <body className={Satoshi.className + " selection:bg-primary/[.2] selection:text-primary"}>
                {children}
                <Script id="darkmode" jsx>
                    {
                        `   
                            const themeSwitcher = document.querySelector(".theme-switcher")
                            const currentTheme = localStorage.getItem("theme");
                        
                            if (currentTheme === "dark") {
                                html.classList.add("dark");
                                
                                digitalAgencyLogo.forEach(logo => {
                                    if (logo.getAttribute("src") === "/logo.svg") {
                                        logo.setAttribute("src", "/logo-white.svg")
                                    } else {
                                        logo.setAttribute("src", "/logo.svg")
                                    }
                                })
                            }
                            
                            function darkMode() {
                                if (html.classList.contains("dark")) {
                                    html.classList.remove("dark");
                                    localStorage.setItem("theme", "light");
                                } else {
                                    html.classList.add("dark");
                                    localStorage.setItem("theme", "dark");
                                }
                                
                                digitalAgencyLogo.forEach(logo => {
                                    if (logo.getAttribute("src") === "/logo.svg") {
                                        logo.setAttribute("src", "/logo-white.svg")
                                    } else {
                                        logo.setAttribute("src", "/logo.svg")
                                    }
                                })
                                
                                
                                if (themeSwitcher.previousElementSibling.classList.contains("fa-clouds-moon")) {
                                    themeSwitcher.previousElementSibling.classList.remove("fa-clouds-moon")
                                    themeSwitcher.previousElementSibling.classList.add("fa-sun-cloud")
                                } else {
                                    themeSwitcher.previousElementSibling.classList.add("fa-clouds-moon")
                                    themeSwitcher.previousElementSibling.classList.remove("fa-sun-cloud")
                                }
                            } 
                            
                            themeSwitcher.addEventListener("click", darkMode);
                        `
                    }
                </Script>
            </body>
        </html>
    )
}

export function H1({title, className}) {
    return (
        <h1 className={ClashGrotesk.className + className}>{title}</h1>
    )
}

export function Lines() {
    return (
        <div className="lines-wrapper w-full h-screen absolute top-0 left-0 before:content-[''] before:absolute before:top-[100px] before:left-0 before:w-full before:h-[1px] before:bg-black-400/[.15] dark:before:bg-white/[.15] lg:after:hidden after:absolute after:bottom-[100px] after:left-0 after:w-full after:h-[1px] after:bg-black-400/[.15] dark:after:bg-white/[.15] pointer-events-none">
            <div className="lines-container container h-full mx-auto border-l border-r border-solid border-black-400/[.15] dark:border-white/[.15] relative xl:hidden">
                <div className="absolute left-[-1px] w-[1px] h-[76px] bg-black-400 dark:bg-white animate-linear-line"></div>
                <div className="absolute right-[-1px] w-[1px] h-[76px] bg-black-400 dark:bg-white animate-linear-line-reverse"></div>
            </div>
        </div>
    )
}

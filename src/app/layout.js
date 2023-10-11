import "./globals.css"
// import { Inter } from "next/font/google"
import localFont from "next/font/local"
import base from "./base.scss"

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
    title: "Crealive",
    description: "Crealive e-ticaret, B2B, SEO, sosyal ağlar ve online pazarlama gibi çeşitli alanlarda, yeni fikirlerle markaları geleceğe taşıyan bir dijital ajanstır.",
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
            <body className={Satoshi.className + " selection:bg-primary/[.2] selection:text-primary"}>{children}</body>
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
        <div className="lines-wrapper w-full h-screen absolute top-0 left-0 before:content-[''] before:absolute before:top-[100px] before:left-0 before:w-full before:h-[1px] before:bg-black-400/[.15] lg:after:hidden after:absolute after:bottom-[100px] after:left-0 after:w-full after:h-[1px] after:bg-black-400/[.15] pointer-events-none">
            <div className="lines-container container h-full mx-auto border-l border-r border-solid border-black-400/[.15] relative xl:hidden">
                <div className="absolute left-[-1px] w-[1px] h-[76px] bg-black-400 animate-linear-line"></div>
                <div className="absolute right-[-1px] w-[1px] h-[76px] bg-black-400 animate-linear-line-reverse"></div>
            </div>
        </div>
    )
}

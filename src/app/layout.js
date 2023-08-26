import "./globals.css"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import base from "./base.scss"

const inter = Inter({ subsets: ["latin"] });
const Satoshi = localFont({
    src: [
        {
            path: './fonts/Satoshi-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
    ],
});

const ClashGrotesk = localFont({
    src: [
        {
            path: './fonts/ClashGrotesk-Regular.woff2',
            weight: '400',
            style: 'normal',
        }
    ]
})

export const metadata = {
    title: "Crealive",
    description: "Generated by create next app",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={Satoshi.className}>{children}</body>
        </html>
    )
}

export function H1({title, className}) {
    return (
        <h1 className={ClashGrotesk.className + className}>{title}</h1>
    )
}

export function createTitle({ head }) {
    return head ? head : "no Data"
}

export function Header({ titleClass, heading, head }) {
    const list = ["Barış", "Claw", "Başka biri"]

    return (
        <div>
            <h1 className={titleClass ? titleClass : "bg-blue-300"}> {heading} {createTitle({ head })}</h1>
            <ul>
                {list.map((listItem) => (
                    <li key={listItem}>{listItem}</li>
                ))}
            </ul>
        </div>
    )
}

export function Lines() {
    return (
        <div className="lines-wrapper w-full h-screen absolute top-0 left-0 before:content-[''] before:absolute before:top-[100px] before:left-0 before:w-full before:h-[1px] before:bg-black-400/[.15] after:absolute after:bottom-[100px] after:left-0 after:w-full after:h-[1px] after:bg-black-400/[.15] pointer-events-none">
            <div className="lines-container container h-full mx-auto border-l border-r border-solid border-black-400/[.15]">

            </div>
        </div>
    )
}

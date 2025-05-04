import Link from "next/link";

export default function Button({title, link, type}) {
    return (
        <Link href={link ?? '/'} className={type + " p-[16px_22px] border border-solid text-[18px] leading-[18px] tracking-[-0.54px] rounded-full transition-all duration-300 ease-in-out hover:transition-all hover:duration-300 hover:ease-in-out"}>{title}</Link>
    )
}
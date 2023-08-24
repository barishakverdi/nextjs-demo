export default function Button({title, link, type}) {
    return (
        <a href={link ? link : '/'} className={type + " p-[16px_22px] border border-solid text-[18px] leading-[18px] tracking-[-0.54px] rounded-full"}>{title}</a>
    )
}
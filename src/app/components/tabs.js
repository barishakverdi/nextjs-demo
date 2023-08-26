import Script from "next/script"
export default function Tabs({ mainTitle }) {
    const tabs = ["About Us", "What we Do?", "Projects"]
    const contents = [
        {
          title: "Crealive",
          description: "We are a leading software agency with over 15 years of experience in the software industry. Having completed more than 400 projects, we have provided value to numerous clients. Our customers are our top priority. We work diligently on every project to create tailored solutions that meet our clients' unique needs.",
        },

        {
            title: "what we do title",
            description: "what we do description",
        },

        {
            title: "projects title",
            description: "projects description",
        }
    ]
    return (
        <section className="mb-[160px]">
            <div className="container mx-auto px-5">
                <h2 className="text-[60px] leading-[74px] tracking-[-1.8px] text-black-400 mb-[50px]">{mainTitle}</h2>
                <div className="flex items-center gap-[24px]">
                    <div className="w-1/2">
                        <div className="tabs flex flex-col gap-[40px] border-l border-solid border-black-400/[.15] pl-[60px]">
                            {tabs.map((tabItem, a) => (
                                <span data-tab-id={a}
                                   className="cursor-pointer text-[40px] leading-[48px] tracking-[-1.8px] text-black-300 opacity-70 relative before:transition-all before:duration-700 before:ease-in-out before:content-[''] before:absolute before:left-0 before:top-[24px] before:w-0 before:h-[2px] before:bg-black-400 before:rounded-full transition-all duration-700 ease-in-out [&.active]:opacity-100 [&.active]:pl-[42px] [&.active]:before:w-[30px] hover:opacity-80 [&.active]:hover:opacity-100"
                                   key={tabItem}>{tabItem}</span>
                            ))}
                        </div>
                    </div>

                    <div className="w-1/2">
                        <div className="tabs-content">
                            {contents.map((contentItem, a) => (
                                <div className="content flex-col gap-[24px] hidden [&.active]:flex" key={contentItem.title} data-content-id={a}>
                                    {contentItem.title ? <h3 className="text-[36px] leading-[42px] tracking-[-1.08px] text-black-400">{contentItem.title}</h3> : ''}
                                    {contentItem.description ? <p className="text-[18px] leading-[38px] tracking-[-0.54px] text-gray-400">{contentItem.description}</p> : ''}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Script id="tab" jsx>
                {
                    `
                        const tabs = document.querySelector(".tabs");
                        const tab = tabs.querySelectorAll("span");
                        const tabContent = document.querySelector(".tabs-content");
                        const content = tabContent.querySelectorAll(".content");
                        
                        content.forEach(dataContent => {
                            const contentID = dataContent.getAttribute("data-content-id");
                            console.log(contentID);
                            
                            tab.forEach(item => {
                                const tabId = item.getAttribute("data-tab-id");
                                
                                item.addEventListener("click", function(e) {
                                    if (e.target.tabId === dataContent.contentID) {
                                        e.target.classList.toggle("active");
                                    }
                                })
                            })
                        })
                    `
                }
            </Script>
        </section>
    )
}

import Image from "next/image";

interface ToolItem {
    name: string
    src: string
    alt: string
    width: number
    height: number
    className: string
}

interface ToolsItemsProps {
    items: ToolItem[]
}

function ToolItems({items}: ToolsItemsProps) {
    return (
        <>
            {items.map((tool, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-[70px] h-[70px] bg-[#f5f5f5] rounded-xl" style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)' }}>
                        <Image
                        src={tool.src}
                        alt={tool.alt}
                        width={tool.width}
                        height={tool.height}
                        className={tool.className}
                        />
                    </div>
                    <p className="font-sans text-[#1A2B4C] font-medium text-sm pt-1.5">{tool.name}</p>
                </div>
            ))}
        </> 
    )
}

export default ToolItems;




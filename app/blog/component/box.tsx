import { GoArrowUpRight } from "react-icons/go";

interface BoxProps {
    link: string
    imgFile: string;
    imgPos: string;
    title: string;
}

function Box ({link, imgFile, imgPos, title}: BoxProps) {
    return (
        <div className="group relative bento-hover hover:scale-105 active:scale-105">
            <a href={link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10"/>
            <div className={`bg-cover ${imgPos} rounded-4xl flex justify-between items-start h-full relative z-0`}
            style={{
                backgroundImage: `url('/blogpage/${imgFile}')`,
                boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)'
            }}>
                <div className="pl-6 pt-6 md:pl-8 md:pt-8">
                    <h3 className="font-serif text-[#1A2B4C] font-bold text-md pb-1.5">{title}</h3>
                </div>
                <div className="pr-4 pt-4 md:pr-6 md:pt-6 opacity-0 group-hover:opacity-100 transition group-active:opacity-100">
                    <GoArrowUpRight className="text-3xl text-white/70 drop-shadow-sm" />
                </div>
            </div>
        </div>
    )
}

export default Box;
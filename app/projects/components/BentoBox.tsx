import Link from 'next/link';
import { GoArrowUpRight } from "react-icons/go";

interface BentoBoxProps {
    col: number;
    row: number;
    slug: string;
    imagefile: string;
    title: string;
    description: React.ReactNode;
}

function BentoBox({ col, row, slug, imagefile, title, description }: BentoBoxProps) {
    const BackdropReq = ['pid', 'iot', 'oldweb', 'curweb'];
    const IsBackdropReq = BackdropReq.includes(slug);
    const iotblur = slug === 'iot';
    {/*Since Tailwind can’t parse dynamic class names at build time, define colspan and rowspan beforehand*/}
    const colSpan = {
        4: 'md:col-span-4',
        6: 'md:col-span-6',
        10: 'md:col-span-10',
    }[col];

    const rowSpan = {
        4: 'md:row-span-4',
        5: 'md:row-span-5',
        9: 'md:row-span-9',
    }[row];

    return (
        <div className={`group h-[300px] md:h-auto relative ${colSpan} ${rowSpan} bento-hover hover:scale-105 active:scale-105`}>
            <Link href={`/projects/${slug}`} className="absolute inset-0 z-10"/>
            <div className="bg-cover bg-center rounded-4xl flex justify-between items-start h-full relative z-0" 
            style={{
                backgroundImage: `url('/projectpage/${imagefile}')`,
                boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)',
             }}>
                <div className="pl-6 pt-6 md:pl-8 md:pt-8">
                    <h3 className="font-serif text-[#1A2B4C] font-bold text-xs lg:text-sm pb-1.5">{title}</h3>
                    <p className={`font-sans font-semibold text-sm lg:text-base leading-5 
                        ${IsBackdropReq ? `backdrop-blur-xs ${!iotblur ? 'md:backdrop-blur-none' : ''} bg-gradient-to-br from-white/10 to-transparent md:bg-none`
                        : '' }`}
                    >
                     {description}
                    </p>
                </div>
                <div className="pr-4 pt-4 md:pr-6 md:pt-6 opacity-0 group-hover:opacity-100 transition group-active:opacity-100">
                    <GoArrowUpRight className="text-3xl text-white/70 drop-shadow-sm" />
                </div>
            </div>
        </div> 
    )
}

export default BentoBox;

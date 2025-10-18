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
        5: 'md:col-span-5',
        6: 'md:col-span-6',
        10: 'md:col-span-10',
    }[col];

    const rowSpan = {
        4: 'md:row-span-4',
        5: 'md:row-span-5',
        9: 'md:row-span-9',
    }[row];

    let linkElement;

    if (slug === 'oldweb') {
        linkElement = (
            <a href="https://github.com/agantal864/Dynamic-dummy-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"/>
        );
    } else if (slug === 'curweb') {
        linkElement = (
            <a href="https://github.com/agantal864/My-Personal-Website"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"/>
        );
    } else if (slug === 'sis') {
        linkElement = (
            <a href="https://github.com/agantal864/C-Programs"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"/>
        );
    } else if (slug === 'lifeblog') {
        linkElement = (
            <a href="https://github.com/agantal864/Life-Blog"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"/>
        ); 
    } else {
        linkElement = (
            <Link href={`/projects/${slug}`} className="absolute inset-0 z-10" />
        );
    }

    return (
        <div className={`group h-[300px] md:h-auto relative ${colSpan} ${rowSpan} bento-hover hover:scale-105 active:scale-105`}>
            {linkElement}
            <div className="bg-cover bg-center rounded-4xl flex justify-between items-start h-full relative z-0" 
            style={{
                backgroundImage: `url('/projectpage/${imagefile}')`,
                boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)',
             }}>
                {IsBackdropReq &&  <div className="md:hidden rounded-4xl pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/40 via-transparent to-transparent" />}
                <div className="pl-6 pt-6 md:pl-8 md:pt-8">
                    <h3 className="font-serif text-[#1A2B4C] font-bold text-xs lg:text-sm pb-1.5">{title}</h3>
                    <p className={`font-sans font-semibold text-sm lg:text-base leading-5 ${iotblur ? 'md:backdropblur-none backdrop-blur-xs bg-gradient-to-br from-white/10 to-transparent md:bg-none' : ''}`}>
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
               
                
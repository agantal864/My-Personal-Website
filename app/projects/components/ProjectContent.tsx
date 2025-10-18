import { ReactNode } from 'react';
interface ProjContentProps {
    title: string,
    paragraphs: ReactNode[]; 
}

function ProjContent({ title, paragraphs }: ProjContentProps) {
    return (
        <>
            <h1 className="font-serif font-normal text-[#1A2B4C] text-3xl md:text-4xl lg:text-5xl pb-6">{title}</h1>
            {paragraphs.map((p, index) => (
                <div key={index}>
                    {p}
                </div>
            ))}
        </>
    )
}

export default ProjContent;



interface ProjContentProps {
    title: string,
    paragraphs: string[]
}

function ProjContent({ title, paragraphs }: ProjContentProps) {
    return (
        <>
            <h1 className="font-serif font-normal text-[#1A2B4C] text-3xl md:text-4xl lg:text-5xl pb-6">{title}</h1>
            {paragraphs.map((p, index) => (
                <p key={index} className="font-sans text-sm md:text-base lg:text-lg leading-7 md:leading-8 lg:leading-9 pb-6">
                    {p}
                </p> ))}
        </>
    )
}

export default ProjContent;
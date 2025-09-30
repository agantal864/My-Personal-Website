interface ToolsContentProps {
    children: React.ReactNode;
}
function ToolsContent({children}: ToolsContentProps) {
    return (
        <>
            <h2 className="font-sans text-[#1A2B4C] text-lg lg:text-xl font-semibold pb-6">Tools & Technologies</h2>
            <div className="flex flex-wrap justify-start gap-4">
                {children}
            </div>
        </>
    )
}
export default ToolsContent;
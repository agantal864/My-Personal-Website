import Link from 'next/link';

interface ProjContentLayoutProps {
  id?: string
  children: React.ReactNode
}

function ProjContentLayout({id = "default-id", children}: ProjContentLayoutProps) {
    return (
        <section id={id} className="md:max-w-7xl md:mx-auto px-10 md:px-12 lg:px-20 py-4 md:py-8 lg:py-12 xl:py-16">
            <div className="flex flex-col w-full justify-start px-6 py-6 md:px-10 md:py-10 lg:px-15 lg:py-15 xl:px-20 xl:py-20 bg-[#f5f5f5] rounded-xl" style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)' }}>
                {children}
            </div>
            <div className="text-[#1A2B4C] pt-5">
                <Link href="\projects"> &lt; 
                <p className="inline-flex underline">Back to Projects</p></Link>
            </div>          
        </section>      
    )
}

export default ProjContentLayout;
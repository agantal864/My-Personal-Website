import Link from 'next/link';

interface ProjContentLayoutProps {
  children: React.ReactNode
}

function ProjContentLayout({children}: ProjContentLayoutProps) {
    return ( 
        <>   
            <div className="flex flex-col w-full justify-start px-6 py-6 md:px-10 md:py-10 lg:px-15 lg:py-15 xl:px-20 xl:py-20 bg-[#f5f5f5] rounded-xl" style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)' }}>
                {children}
            </div>
            <div className="text-[#1A2B4C] pt-5">
                <Link href="\projects"> &lt; 
                <p className="inline-flex underline">Back to Projects</p></Link>
            </div>    
        </>      
    )
}

export default ProjContentLayout;
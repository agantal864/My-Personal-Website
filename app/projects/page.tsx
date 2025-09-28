import { GoArrowUpRight } from "react-icons/go";

function Projects() {
    return (
        <section id="projects" className="md:max-w-7xl md:mx-auto px-4 py-4 pb-20 mb-20 sm:px-6 md:px-12 lg:px-20">
            <h1 className="font-serif font-normal text-[#1A2B4C] text-3xl md:text-3xl lg:text-4xl xl:text-5xl pt-4 md:pt-8 lg:pt-12">Projects</h1>
            <div className="flex w-full justify-center items-center pt-12">
                <div className="grid h-[1500px] w-full grid-cols-10 grid-rows-18 gap-6">
                    <div className="group col-span-6 row-span-5 bg-[url('/remote.png')] bg-cover bg-center rounded-4xl flex justify-between items-start bento-hover" style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)' }}>
                        <div className="pl-8 pt-8">
                            <h3 className="font-serif text-[#1A2B4C] font-bold text-sm pb-1.5">REMOTE MONITORING</h3>
                            <p className="font-sans font-semibold text-base leading-5">Design & Implementation <br /> of a oneM2M-based <br /> Remote Monitoring System</p>
                        </div>
                        <div className="pr-6 pt-6 opacity-0 group-hover:opacity-100 transition">
                            <GoArrowUpRight className="text-3xl text-white/70 drop-shadow-sm" />
                        </div>
                    </div>
                    <div className="group col-span-4 row-span-9 bg-[url('/robotics.png')] bg-cover bg-center rounded-4xl flex justify-between items-start bento-hover" style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)' }}>
                        <div className="pl-8 pt-8">
                            <h3 className="font-serif text-[#1A2B4C] font-bold text-sm pb-1.5">ROBOTICS</h3>
                            <p className="font-sans font-semibold text-base leading-5">PID controlled <br /> Arduino Robot</p>
                        </div>
                        <div className="pr-6 pt-6 opacity-0 group-hover:opacity-100 transition">
                            <GoArrowUpRight className="text-3xl text-white/70 drop-shadow-sm" />
                        </div>
                    </div>
                    <div className="group col-span-6 row-span-4 bg-[url('/iot.png')] bg-cover bg-center rounded-4xl flex justify-between items-start bento-hover" style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)' }}>
                        <div className="pl-8 pt-8">
                            <h3 className="font-serif text-[#1A2B4C] font-bold text-sm pb-1.5">IOT NETWORK</h3>
                            <p className="font-sans font-semibold text-base leading-5">Automated low-cost <br /> Room Theft <br /> Detection System</p>
                        </div>
                        <div className="pr-6 pt-6 opacity-0 group-hover:opacity-100 transition">
                            <GoArrowUpRight className="text-3xl text-white/70 drop-shadow-sm" />
                        </div>
                    </div>
                    <div className="group col-span-4 row-span-5 bg-[url('/webprev.png')] bg-cover bg-center rounded-4xl flex justify-between items-start bento-hover" style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)' }}>
                        <div className="pl-8 pt-8">
                            <h3 className="font-serif text-[#1A2B4C] font-bold text-sm pb-1.5">WEB DEVELOPMENT</h3>
                            <p className="font-sans font-semibold text-base leading-5">Old Personal <br /> Website</p>
                        </div>
                        <div className="pr-6 pt-6 opacity-0 group-hover:opacity-100 transition">
                            <GoArrowUpRight className="text-3xl text-white/70 drop-shadow-sm" />
                        </div>
                    </div>
                    <div className="group col-span-6 row-span-5 bg-[url('/webcur.png')] bg-cover bg-center rounded-4xl flex justify-between items-start bento-hover" style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)' }}>
                        <div className="pl-8 pt-8">
                            <h3 className="font-serif text-[#1A2B4C] font-bold text-sm pb-1.5">WEB DEVELOPMENT</h3>
                            <p className="font-sans font-semibold text-base leading-5">Current Personal <br /> Website</p>
                        </div>
                        <div className="pr-6 pt-6 opacity-0 group-hover:opacity-100 transition">
                            <GoArrowUpRight className="text-3xl text-white/70 drop-shadow-sm" />
                        </div>                       
                    </div>
                    <div className="group col-span-10 row-span-4 bg-[url('/prog.png')] bg-cover bg-center rounded-4xl flex justify-between items-start bento-hover" style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)' }}>
                        <div className="pl-8 pt-8">
                            <h3 className="font-serif text-[#1A2B4C] font-bold text-sm pb-1.5">PROGRAMMING</h3>
                            <p className="font-sans font-semibold text-base leading-5">Student Information<br /> System</p>
                        </div>
                        <div className="pr-6 pt-6 opacity-0 group-hover:opacity-100 transition">
                            <GoArrowUpRight className="text-3xl text-white/70 drop-shadow-sm" />
                        </div>                        
                    </div>
                </div>
            </div> 
        </section>
    )
}
export default Projects;
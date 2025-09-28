'use client';
import Link from 'next/link';
import { GoArrowUpRight } from "react-icons/go";

function Projects() {
    return (
        <section id="projects" className="md:max-w-7xl md:mx-auto px-4 py-4 pb-20 mb-20 sm:px-6 md:px-12 lg:px-20">
            <h1 className="font-serif font-normal text-[#1A2B4C] text-3xl md:text-3xl lg:text-4xl xl:text-5xl px-4 md:px-0 pt-4 md:pt-8 lg:pt-12">Projects</h1>
            <div className="flex w-full justify-center items-center pt-12">
                <div className="grid h-[1500px] w-full grid-cols-1 md:grid-cols-10 md:grid-rows-18 gap-6">   
                    <div className="group relative md:col-span-6 md:row-span-5 bento-hover">
                        <Link href="/m2m" className="absolute inset-0 z-10"/>
                        <div className="mx-4 md:mx-0 bg-[url('/remote.png')] bg-cover bg-center rounded-4xl flex justify-between items-start h-full relative z-0" style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)' }}>
                            <div className="pl-6 pt-6 md:pl-8 md:pt-8">
                                <h3 className="font-serif text-[#1A2B4C] font-bold text-xs lg:text-sm pb-1.5">REMOTE MONITORING</h3>
                                <p className="font-sans font-semibold text-sm lg:text-base leading-5">Design & Implementation <br /> of a oneM2M-based <br /> Remote Monitoring System</p>
                            </div>
                            <div className="pr-4 pt-4 md:pr-6 md:pt-6 opacity-0 group-hover:opacity-100 transition">
                                <GoArrowUpRight className="text-3xl text-white/70 drop-shadow-sm" />
                            </div>
                        </div>
                    </div>     
                    <div className="group relative md:col-span-4 md:row-span-9 bento-hover">
                        <Link href="/pid" className="absolute inset-0 z-10"/>
                        <div className="mx-4 md:mx-0 bg-[url('/robotics.png')] bg-cover bg-center rounded-4xl flex justify-between items-start h-full relative z-0" style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)' }}>   
                            <div className="pl-6 pt-6 md:pl-8 md:pt-8">
                                <h3 className="font-serif text-[#1A2B4C] font-bold text-xs lg:text-sm pb-1.5">ROBOTICS</h3>
                                <p className="font-sans font-semibold text-sm lg:text-base leading-5 backdrop-blur-xs md:backdrop-blur-none bg-gradient-to-br from-white/10 to-transparent md:bg-none">PID controlled <br /> Arduino Robot</p>
                            </div>
                            <div className="pr-4 pt-4 md:pr-6 md:pt-6 opacity-0 group-hover:opacity-100 transition">
                                <GoArrowUpRight className="text-3xl text-white/70 drop-shadow-sm" />
                            </div>     
                        </div>
                    </div>   
                    <div className="group relative md:col-span-6 md:row-span-4 bento-hover">
                            <Link href="/iot" className="absolute inset-0 z-10"/>
                            <div className="mx-4 md:mx-0 bg-[url('/iot.png')] bg-cover bg-center rounded-4xl flex justify-between items-start h-full relative z-0" style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)' }}>
                                <div className="pl-6 pt-6 md:pl-8 md:pt-8">
                                    <h3 className="font-serif text-[#1A2B4C] font-bold text-xs lg:text-sm pb-1.5">IOT NETWORK</h3>
                                    <p className="font-sans font-semibold text-sm lg:text-base leading-5 backdrop-blur-xs bg-gradient-to-br from-white/10 to-transparent">Automated <br className="md:block lg:hidden xl:hidden"/>low-cost <br /> Room Theft <br /> Detection System</p>
                                </div>
                                <div className="pr-4 pt-4 md:pr-6 md:pt-6 opacity-0 group-hover:opacity-100 transition">
                                    <GoArrowUpRight className="text-3xl text-white/70 drop-shadow-sm" />
                                </div>
                            </div>
                    </div>            
                    <div className="group relative md:col-span-4 md:row-span-5 bento-hover">
                        <Link href="/oldweb" className="absolute inset-0 z-10"/>
                        <div className="mx-4 md:mx-0 bg-[url('/webprev.png')] bg-cover bg-center rounded-4xl flex justify-between items-start h-full relative z-0" style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)' }}>
                            <div className="pl-6 pt-6 md:pl-8 md:pt-8">
                                <h3 className="font-serif text-[#1A2B4C] font-bold text-xs lg:text-sm pb-1.5">WEB DEVELOPMENT</h3>
                                <p className="font-sans font-semibold text-sm lg:text-base leading-5 backdrop-blur-xs md:backdrop-blur-none bg-gradient-to-br from-white/10 to-transparent md:bg-none">Old Personal <br /> Website</p>
                            </div>
                            <div className="pr-4 pt-4 md:pr-6 md:pt-6 opacity-0 group-hover:opacity-100 transition">
                                <GoArrowUpRight className="text-3xl text-white/70 drop-shadow-sm" />
                            </div>
                        </div>
                    </div>
                    <div className="group relative md:col-span-6 md:row-span-5 bento-hover">
                        <Link href="/curweb" className="absolute inset-0 z-10"/>
                        <div className="mx-4 md:mx-0 bg-[url('/webcur.png')] bg-cover bg-center rounded-4xl flex justify-between items-start h-full relative z-0" style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)' }}>
                            <div className="pl-6 pt-6 md:pl-8 md:pt-8">
                                <h3 className="font-serif text-[#1A2B4C] font-bold text-xs lg:text-sm pb-1.5">WEB DEVELOPMENT</h3>
                                <p className="font-sans font-semibold text-sm lg:text-base leading-5 backdrop-blur-xs md:backdrop-blur-none bg-gradient-to-br from-white/10 to-transparent md:bg-none">Current Personal <br /> Website</p>
                            </div>
                            <div className="pr-4 pt-4 md:pr-6 md:pt-6 opacity-0 group-hover:opacity-100 transition">
                                <GoArrowUpRight className="text-3xl text-white/70 drop-shadow-sm" />
                            </div>                       
                        </div>
                    </div>
                    <div className="group relative md:col-span-10 md:row-span-4 bento-hover">
                         <Link href="/sis" className="absolute inset-0 z-10"/>
                        <div className="md:mx-0 bg-[url('/prog.png')] bg-cover bg-center rounded-4xl flex justify-between items-start h-full relative z-0" style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)' }}>
                            <div className="pl-6 pt-6 md:pl-8 md:pt-8">
                                <h3 className="font-serif text-[#1A2B4C] font-bold text-xs lg:text-sm pb-1.5">PROGRAMMING</h3>
                                <p className="font-sans font-semibold text-sm lg:text-base leading-5">Student Information<br /> System</p>
                            </div>
                            <div className="pr-4 pt-4 md:pr-6 md:pt-6 opacity-0 group-hover:opacity-100 transition">
                                <GoArrowUpRight className="text-3xl text-white/70 drop-shadow-sm" />
                            </div>                        
                        </div>
                    </div>
                    
                </div>
            </div> 
        </section>
    )
}
export default Projects;
import Image from "next/image";
import Link from 'next/link';


function iot() {
    return (
        <div className="md:max-w-7xl md:mx-auto px-5 md:px-20 lg:px-25 xl:px-30 py-15 md:py-20 lg:py-25">
            <section id="m2m-project" className="flex flex-col w-full justify-start px-6 py-6 md:px-10 md:py-10 lg:px-15 lg:py-15 xl:px-20 xl:py-20 bg-[#f5f5f5] rounded-xl" style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)' }}>
                <h1 className="font-serif font-normal text-[#1A2B4C] text-3xl md:text-4xl lg:text-5xl pb-6">Design & Implementation of <br className="hidden lg:block" /> a oneM2M-based Remote <br className="hidden lg:block"/>  Monitoring System</h1>
                <p className="font-sans text-sm md:text-base lg:text-lg leading-7 md:leading-8 lg:leading-9 pb-6">
                    This project involves the design and implementation of a remote monitoring system for water supply
                    based on the oneM2M standard. The system enables real-time monitoring of various devices and sensors over the internet,
                    providing a future-proof, scalable and interoperable solution for IoT applications. Departing from the de facto standard 
                    of traditional vertical silos, the software design adopts a unified framework that provides reusable services across all layers of the application. </p>
                <p className="font-sans text-sm md:text-base lg:text-lg leading-7 md:leading-8 lg:leading-9 pb-6">
                    The system architecture consists of three main components: the application layer, the middle layer,
                    and the infrastructure layer. The device layer includes various sensors and wireless communication devices that collect
                    real-time data. The middle layer utilizes the oneM2M 
                    standard to facilitate communication between the application and infrastructure layer.
                </p>
                <p className="font-sans text-sm md:text-base lg:text-lg leading-7 md:leading-8 lg:leading-9 pb-6">
                    The project was a final-year capstone collaboration. 
                    My primary contribution focused on backend development, where I designed and
                    implemented gateway APIs that facilitate communication between IoT devices and 
                    the underlying infrastructure. These APIs enable interoperability across different
                    protocols and support the delivery of shared service functions throughout the system.
                </p>
                <p className="font-sans text-sm md:text-base lg:text-lg leading-7 md:leading-8 lg:leading-9 pb-6">
                    To date, this has been the most demanding project I’ve worked on, requiring tremendous
                    research and significant time investment. Its complexity and scope led to support 
                    through an R&D grant and an opportunity to present the work internationally.
                </p>
                <p className="font-sans text-sm md:text-base lg:text-lg leading-7 md:leading-8 lg:leading-9 pb-10">
                    📄 View published paper: &nbsp;
                    <a
                    href="https://ieeexplore.ieee.org/document/10903018"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#1A2B4C] transition">
                    IEEE Region 10 International Conference TENCON
                    </a>
                </p>
                <h2 className="font-sans text-[#1A2B4C] text-lg lg:text-xl font-semibold pb-6">Tools & Technologies</h2>
                <div className="flex flex-wrap justify-start gap-4">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-[70px] h-[70px] bg-[#f5f5f5] rounded-xl" style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)' }}>
                            <Image
                            src="/m2mpage/onem2mlogo.png"
                            alt="onem2m"
                            width={50}
                            height={50}
                            className="object-fill"
                            />
                        </div>
                        <p className="font-sans text-[#1A2B4C] font-medium text-sm pt-1.5">oneM2M</p>
                    </div>   
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-[70px] h-[70px] bg-[#f5f5f5] rounded-xl" style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)' }}>
                        <Image
                            src="/m2mpage/nodejs.png"
                            alt="nodejs"
                            width={70}
                            height={50}
                            className="object-contain rounded-xl"
                        />
                        </div>
                        <p className="font-sans text-[#1A2B4C] font-medium text-sm pt-1.5">NodeJS</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-[70px] h-[70px] bg-[#f5f5f5] rounded-xl" style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)' }}>
                        <Image
                            src="/m2mpage/acme.png"
                            alt="acme"
                            width={70}
                            height={50}
                            className="object-contain"
                        />
                        </div>
                        <p className="font-sans text-[#1A2B4C] font-medium text-sm pt-1.5">ACME</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-[70px] h-[70px] bg-[#f5f5f5] rounded-xl" style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)' }}>
                        <Image
                            src="/m2mpage/azure.png"
                            alt="azure"
                            width={70}
                            height={50}
                            className="object-contain"
                        />
                        </div>
                        <p className="font-sans text-[#1A2B4C] font-medium text-sm pt-1.5">Azure IoT</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-[70px] h-[70px] bg-[#f5f5f5] rounded-xl" style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)' }}>
                        <Image
                            src="/m2mpage/proxmox.png"
                            alt="proxmox"
                            width={70}
                            height={50}
                            className="object-contain"
                        />
                        </div>
                        <p className="font-sans text-[#1A2B4C] font-medium text-sm pt-1.5">Proxmox</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-[70px] h-[70px] bg-[#f5f5f5] rounded-xl" style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)' }}>
                        <Image
                            src="/m2mpage/postman.webp"
                            alt="postman"
                            width={50}
                            height={50}
                            className="object-contain"
                        />
                        </div>
                        <p className="font-sans text-[#1A2B4C] font-medium text-sm pt-1.5">Postman API</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-[70px] h-[70px] bg-[#f5f5f5] rounded-xl" style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)' }}>
                        <Image
                            src="/m2mpage/lora.png"
                            alt="lora"
                            width={50}
                            height={50}
                            className="object-contain"
                        />
                        </div>
                        <p className="font-sans text-[#1A2B4C] font-medium text-sm pt-1.5">LoRa</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-[70px] h-[70px] bg-[#f5f5f5] rounded-xl" style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)' }}>
                        <Image
                            src="/m2mpage/postgresql.png"
                            alt="postgresql"
                            width={40}
                            height={30}
                            className="object-contain"
                        />
                        </div>
                        <p className="font-sans text-[#1A2B4C] font-medium text-sm pt-1.5">Postgresql</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-[70px] h-[70px] bg-[#f5f5f5] rounded-xl" style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)' }}>
                        <Image
                            src="/m2mpage/matlab.png"
                            alt="matlab"
                            width={70}
                            height={50}
                            className="object-contain"
                        />
                        </div>
                        <p className="font-sans text-[#1A2B4C] font-medium text-sm pt-1.5">MATLAB</p>
                    </div>
                </div>
            </section>
            <div className="text-[#1A2B4C] pt-5">
                <Link href="\projects"> &lt; 
                <p className="inline-flex underline">Back to Projects</p></Link>
            </div>
            
        </div>
       
    )
}

export default iot;
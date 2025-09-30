import ProjContentLayout from '@/components/Project/ProjectContentLayout';
import ProjContent from '@/components/Project/ProjectContent';
import ToolsContent from '@/components/Project/ToolsContent';
import ToolsItems from '@/components/Project/ToolItems';

function oldweb() {
    return (
        <ProjContentLayout id="oldweb-project">
            <ProjContent
                title="Design & Implementation of a oneM2M-based Remote Monitoring System"
                paragraphs={[
                    `This project involves the design and implementation of a remote monitoring system for water supply
                    based on the oneM2M standard. The system enables real-time monitoring of various devices and sensors over the internet,
                    providing a future-proof, scalable and interoperable solution for IoT applications. Departing from the de facto standard 
                    of traditional vertical silos, the software design adopts a unified framework that provides reusable services across all layers of the application.`,
                    `The system architecture consists of three main components: the application layer, the middle layer,
                    and the infrastructure layer. The device layer includes various sensors and wireless communication devices that collect
                    real-time data. The middle layer utilizes the oneM2M 
                    standard to facilitate communication between the application and infrastructure layer.`,
                    `The project was a final-year capstone collaboration. 
                    My primary contribution focused on backend development, where I designed and
                    implemented gateway APIs that facilitate communication between IoT devices and 
                    the underlying infrastructure. These APIs enable interoperability across different
                    protocols and support the delivery of shared service functions throughout the system.`,
                    `To date, this has been the most demanding project I’ve worked on, requiring tremendous
                    research and significant time investment. Its complexity and scope led to support 
                    through an R&D grant and an opportunity to present the work internationally.`     
                ]}
            />
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
            <ToolsContent>
                <ToolsItems
                    items={[
                        { name: "oneM2M", src: "/m2mpage/onem2mlogo.png", alt: "onem2m", width: 50, height: 50, className: "object-fill" },
                        { name: "NodeJS", src: "/m2mpage/nodejs.png", alt: "nodejs", width: 70, height: 50, className: "object-contain rounded-xl" },
                        { name: "ACME", src: "/m2mpage/acme.png", alt: "acme", width: 70, height: 50, className: "object-contain" },
                        { name: "Azure IoT", src: "/m2mpage/azure.png", alt: "azure", width: 70, height: 50, className: "object-contain" },
                        { name: "Proxmox", src: "/m2mpage/proxmox.png", alt: "proxmox", width: 70, height: 50, className: "object-contain" },
                        { name: "Postman API", src: "/m2mpage/postman.webp", alt: "postman", width: 50, height: 50, className: "object-contain" },
                        { name: "LoRa", src: "/m2mpage/lora.png", alt: "lora", width: 50, height: 50, className: "object-contain" },
                        { name: "Postgresql", src: "/m2mpage/postgresql.png", alt: "postgresql", width: 40, height: 30, className: "object-contain" },
                        { name: "MATLAB", src: "/m2mpage/matlab.png", alt: "matlab", width: 70, height: 50, className: "object-contain" }
                    ]} 
                />
            </ToolsContent>
        </ProjContentLayout>     
    )
}

export default oldweb;


export type ToolItem = {
    name: string
    src: string
    alt: string
    width: number
    height: number
    className: string
}

export type Project = {
    title: string
    paragraphs: string[]
    tools: ToolItem[]
}

export interface BentoBoxProps {
    col: number;
    row: number;
    slug: string
    imagefile: string
    title: string
    description: React.ReactNode
}

const projects: Record<string, Project> = {
    m2m: {
        title: "Design & Implementation of a oneM2M-based Remote Monitoring System",
        paragraphs: [
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
        ],
        tools: [
            { name: "oneM2M", src: "/m2mpage/onem2mlogo.png", alt: "onem2m", width: 50, height: 50, className: "object-fill" },
            { name: "NodeJS", src: "/m2mpage/nodejs.png", alt: "nodejs", width: 70, height: 50, className: "object-contain rounded-xl" },
            { name: "ACME", src: "/m2mpage/acme.png", alt: "acme", width: 70, height: 50, className: "object-contain" },
            { name: "Azure IoT", src: "/m2mpage/azure.png", alt: "azure", width: 70, height: 50, className: "object-contain" },
            { name: "Proxmox", src: "/m2mpage/proxmox.png", alt: "proxmox", width: 70, height: 50, className: "object-contain" },
            { name: "Postman API", src: "/m2mpage/postman.webp", alt: "postman", width: 50, height: 50, className: "object-contain" },
            { name: "LoRa", src: "/m2mpage/lora.png", alt: "lora", width: 50, height: 50, className: "object-contain" },
            { name: "Postgresql", src: "/m2mpage/postgresql.png", alt: "postgresql", width: 40, height: 30, className: "object-contain" },
            { name: "MATLAB", src: "/m2mpage/matlab.png", alt: "matlab", width: 70, height: 50, className: "object-contain" }
        ]
    },
    pid: {
        title: "Design & Implementation of a oneM2M-based Remote Monitoring System",
        paragraphs: [
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
        ],
        tools: [
            { name: "oneM2M", src: "/m2mpage/onem2mlogo.png", alt: "onem2m", width: 50, height: 50, className: "object-fill" },
            { name: "NodeJS", src: "/m2mpage/nodejs.png", alt: "nodejs", width: 70, height: 50, className: "object-contain rounded-xl" },
            { name: "ACME", src: "/m2mpage/acme.png", alt: "acme", width: 70, height: 50, className: "object-contain" },
            { name: "Azure IoT", src: "/m2mpage/azure.png", alt: "azure", width: 70, height: 50, className: "object-contain" },
            { name: "Proxmox", src: "/m2mpage/proxmox.png", alt: "proxmox", width: 70, height: 50, className: "object-contain" },
            { name: "Postman API", src: "/m2mpage/postman.webp", alt: "postman", width: 50, height: 50, className: "object-contain" },
            { name: "LoRa", src: "/m2mpage/lora.png", alt: "lora", width: 50, height: 50, className: "object-contain" },
            { name: "Postgresql", src: "/m2mpage/postgresql.png", alt: "postgresql", width: 40, height: 30, className: "object-contain" },
            { name: "MATLAB", src: "/m2mpage/matlab.png", alt: "matlab", width: 70, height: 50, className: "object-contain" }
        ]
    },
    iot: {
        title: "Design & Implementation of a oneM2M-based Remote Monitoring System",
        paragraphs: [
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
        ],
        tools: [
            { name: "oneM2M", src: "/m2mpage/onem2mlogo.png", alt: "onem2m", width: 50, height: 50, className: "object-fill" },
            { name: "NodeJS", src: "/m2mpage/nodejs.png", alt: "nodejs", width: 70, height: 50, className: "object-contain rounded-xl" },
            { name: "ACME", src: "/m2mpage/acme.png", alt: "acme", width: 70, height: 50, className: "object-contain" },
            { name: "Azure IoT", src: "/m2mpage/azure.png", alt: "azure", width: 70, height: 50, className: "object-contain" },
            { name: "Proxmox", src: "/m2mpage/proxmox.png", alt: "proxmox", width: 70, height: 50, className: "object-contain" },
            { name: "Postman API", src: "/m2mpage/postman.webp", alt: "postman", width: 50, height: 50, className: "object-contain" },
            { name: "LoRa", src: "/m2mpage/lora.png", alt: "lora", width: 50, height: 50, className: "object-contain" },
            { name: "Postgresql", src: "/m2mpage/postgresql.png", alt: "postgresql", width: 40, height: 30, className: "object-contain" },
            { name: "MATLAB", src: "/m2mpage/matlab.png", alt: "matlab", width: 70, height: 50, className: "object-contain" }
        ]
    }, 
    oldweb: {
        title: "Design & Implementation of a oneM2M-based Remote Monitoring System",
        paragraphs: [
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
        ],
        tools: [
            { name: "oneM2M", src: "/m2mpage/onem2mlogo.png", alt: "onem2m", width: 50, height: 50, className: "object-fill" },
            { name: "NodeJS", src: "/m2mpage/nodejs.png", alt: "nodejs", width: 70, height: 50, className: "object-contain rounded-xl" },
            { name: "ACME", src: "/m2mpage/acme.png", alt: "acme", width: 70, height: 50, className: "object-contain" },
            { name: "Azure IoT", src: "/m2mpage/azure.png", alt: "azure", width: 70, height: 50, className: "object-contain" },
            { name: "Proxmox", src: "/m2mpage/proxmox.png", alt: "proxmox", width: 70, height: 50, className: "object-contain" },
            { name: "Postman API", src: "/m2mpage/postman.webp", alt: "postman", width: 50, height: 50, className: "object-contain" },
            { name: "LoRa", src: "/m2mpage/lora.png", alt: "lora", width: 50, height: 50, className: "object-contain" },
            { name: "Postgresql", src: "/m2mpage/postgresql.png", alt: "postgresql", width: 40, height: 30, className: "object-contain" },
            { name: "MATLAB", src: "/m2mpage/matlab.png", alt: "matlab", width: 70, height: 50, className: "object-contain" }
        ]
    },   
    curweb: {
        title: "Design & Implementation of a oneM2M-based Remote Monitoring System",
        paragraphs: [
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
        ],
        tools: [
            { name: "oneM2M", src: "/m2mpage/onem2mlogo.png", alt: "onem2m", width: 50, height: 50, className: "object-fill" },
            { name: "NodeJS", src: "/m2mpage/nodejs.png", alt: "nodejs", width: 70, height: 50, className: "object-contain rounded-xl" },
            { name: "ACME", src: "/m2mpage/acme.png", alt: "acme", width: 70, height: 50, className: "object-contain" },
            { name: "Azure IoT", src: "/m2mpage/azure.png", alt: "azure", width: 70, height: 50, className: "object-contain" },
            { name: "Proxmox", src: "/m2mpage/proxmox.png", alt: "proxmox", width: 70, height: 50, className: "object-contain" },
            { name: "Postman API", src: "/m2mpage/postman.webp", alt: "postman", width: 50, height: 50, className: "object-contain" },
            { name: "LoRa", src: "/m2mpage/lora.png", alt: "lora", width: 50, height: 50, className: "object-contain" },
            { name: "Postgresql", src: "/m2mpage/postgresql.png", alt: "postgresql", width: 40, height: 30, className: "object-contain" },
            { name: "MATLAB", src: "/m2mpage/matlab.png", alt: "matlab", width: 70, height: 50, className: "object-contain" }
        ]
    },
    sis: {
        title: "Design & Implementation of a oneM2M-based Remote Monitoring System",
        paragraphs: [
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
        ],
        tools: [
            { name: "oneM2M", src: "/m2mpage/onem2mlogo.png", alt: "onem2m", width: 50, height: 50, className: "object-fill" },
            { name: "NodeJS", src: "/m2mpage/nodejs.png", alt: "nodejs", width: 70, height: 50, className: "object-contain rounded-xl" },
            { name: "ACME", src: "/m2mpage/acme.png", alt: "acme", width: 70, height: 50, className: "object-contain" },
            { name: "Azure IoT", src: "/m2mpage/azure.png", alt: "azure", width: 70, height: 50, className: "object-contain" },
            { name: "Proxmox", src: "/m2mpage/proxmox.png", alt: "proxmox", width: 70, height: 50, className: "object-contain" },
            { name: "Postman API", src: "/m2mpage/postman.webp", alt: "postman", width: 50, height: 50, className: "object-contain" },
            { name: "LoRa", src: "/m2mpage/lora.png", alt: "lora", width: 50, height: 50, className: "object-contain" },
            { name: "Postgresql", src: "/m2mpage/postgresql.png", alt: "postgresql", width: 40, height: 30, className: "object-contain" },
            { name: "MATLAB", src: "/m2mpage/matlab.png", alt: "matlab", width: 70, height: 50, className: "object-contain" }
        ]
    }
}

export default projects

const BentoList: BentoBoxProps[] = [
  {
    col: 6,
    row: 5,
    slug: 'm2m',
    imagefile: 'remote.png',
    title: 'REMOTE MONITORING',
    description: (
      <>
        Design & Implementation <br />
        of a oneM2M-based <br />
        Remote Monitoring System
      </>
    ),
  },
  {
    col: 4, 
    row: 9,
    slug: 'pid',
    imagefile: 'robotics.png',
    title: 'ROBOTICS',
    description: (
      <>
        PID controlled <br />
        Arduino Robot
      </>
    ),
  },
  {
    col: 6,
    row: 4,
    slug: 'iot',
    imagefile: 'iot.png',
    title: 'ROBOTICS',
    description: (
      <>
        Automated <br className="md:block lg:hidden xl:hidden" />
        low-cost <br />
        Room Theft <br />
        Detection System
      </>
    ),
  },
  {
    col: 4,
    row: 5,
    slug: 'oldweb',
    imagefile: 'webprev.png',
    title: 'WEB DEVELOPMENT',
    description: (
      <>
        Old Personal <br />
        Website
      </>
    ),
  },
  {
    col: 6,
    row: 5,
    slug: 'curweb',
    imagefile: 'webcur.png',
    title: 'WEB DEVELOPMENT',
    description: (
      <>
        Current Personal <br />
        Website
      </>
    ),
  },
  {
    col: 10,
    row: 4,
    slug: 'sis',
    imagefile: 'prog.png',
    title: 'PROGRAMMING',
    description: (
      <>
        Student Information <br />
        System
      </>
    ),
  },
]

export { BentoList };
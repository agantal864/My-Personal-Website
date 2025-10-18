import { ReactNode } from 'react';
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
    paragraphs: ReactNode[]
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
        paragraphs:  [
          <p className="font-sans text-sm md:text-base lg:text-lg leading-7 md:leading-8 lg:leading-9 pb-6" key="m2m-1">
            <span className="font-bold">Problem</span> <br />
            <span className="font-medium">Utility</span>: Inefficient Non-Revenue Water (NRW) detection which commonly relies on manual inspection. <br />
            <span className="font-medium">Regulators</span>: Decentralized benchmarking of utility company performance, making oversight difficult. <br />
            <span className="font-medium">Consumers</span>: Lack of access to real-time water supply condition. <br />
            <span className="font-medium">Technology</span>: Fragmentation of IoT technologies caused by the de facto standard vertical silos architecture. <br />
          </p>,
          <p className="font-sans text-sm md:text-base lg:text-lg leading-7 md:leading-8 lg:leading-9 pb-6" key="m2m-2">
            <span className="font-bold">Solution</span> <br />
            An automated remote monitoring system for water supply with a unified framework that enables real-time monitoring of various devices and sensors over the internet,
            providing a future-proof, scalable and interoperable solution.
          </p>,
          <p className="font-sans text-sm md:text-base lg:text-lg leading-7 md:leading-8 lg:leading-9 pb-6" key="m2m-3">
            <span className="font-bold">System Architecture</span> <br />
            <span className="font-medium">Application layer:</span> includes various sensors and wireless communication devices that collect real-time data. <br />
            <span className="font-medium">Middle layer:</span> utilizes the oneM2M standard to facilitate communication between the application and infrastructure layer. <br />
            <span className="font-medium">Infrastructure layer:</span> connectivity and data acquisition backbone. <br />
          </p>,
          <p className="font-sans text-sm md:text-base lg:text-lg leading-7 md:leading-8 lg:leading-9 pb-6" key="m2m-4">
            <span className="font-bold">Primary Contribution</span> <br />
            As one of the researchers, my contribution primarily focused on backend development. I designed and implemented the gateway APIs and tested all endpoints that enable communication between IoT devices and its underlying infrastructure.
            One of the crucial milestones I undertook is enabling interoperability across protocols through protocol binding, allowing the delivery of shared service functions throughout the system.
          </p>,
          <p className="font-sans text-sm md:text-base lg:text-lg leading-7 md:leading-8 lg:leading-9 pb-6" key="m2m-5">
            The capstone project&apos;s complexity and scope led to support through an R&D grant and an opportunity to present the work internationally.
          </p>
    ],
        tools: [
            { name: "oneM2M", src: "/tools/onem2mlogo.png", alt: "onem2m", width: 50, height: 50, className: "object-fill" },
            { name: "NodeJS", src: "/tools/nodejs.png", alt: "nodejs", width: 70, height: 50, className: "object-contain rounded-xl" },
            { name: "ACME", src: "/tools/acme.png", alt: "acme", width: 70, height: 50, className: "object-contain" },
            { name: "Azure IoT", src: "/tools/azure.png", alt: "azure", width: 70, height: 50, className: "object-contain" },
            { name: "Proxmox", src: "/tools/proxmox.png", alt: "proxmox", width: 70, height: 50, className: "object-contain" },
            { name: "Postman API", src: "/tools/postman.webp", alt: "postman", width: 50, height: 50, className: "object-contain" },
            { name: "LoRa", src: "/tools/lora.png", alt: "lora", width: 50, height: 50, className: "object-contain" },
            { name: "Postgresql", src: "/tools/postgresql.png", alt: "postgresql", width: 40, height: 30, className: "object-contain" },
            { name: "MATLAB", src: "/tools/matlab.png", alt: "matlab", width: 70, height: 50, className: "object-contain" }
        ]
    },
    pid: {
        title: "PID controlled Arduino Robot",
        paragraphs: [
            <p className="font-sans text-sm md:text-base lg:text-lg leading-7 md:leading-8 lg:leading-9 pb-6" key="pid-1">
              This project features a robot built using Arduino and fine-tuned with a PID control algorithm to handle real-time sensor feedback.
              It is designed for sumo bot competitions and line path tracking, equipped with stability analysis to reduce overshoot, oscillations,
              and steady-state error. With proper tuning, it responds quickly and precisely to changes in its environment. The build showcases hands-on
              robotics, control systems, and smart automation using cheap and accessible components.
            </p>
        ],
        tools: [
            { name: "Arduino", src: "/tools/arduino.png", alt: "arduino", width: 50, height: 50, className: "object-fill" },
            { name: "MATLAB", src: "/tools/matlab.png", alt: "matlab", width: 70, height: 50, className: "object-contain" }
        ]
    },
    iot: {
        title: "Automated low-cost Room Theft Detection System",
        paragraphs: [
          <p className="font-sans text-sm md:text-base lg:text-lg leading-7 md:leading-8 lg:leading-9 pb-6" key="iot-1">
            <span className="font-bold">Problem</span> <br />
            Safety risks associated with hazard-prone laboratory rooms.
          </p>,
          <p className="font-sans text-sm md:text-base lg:text-lg leading-7 md:leading-8 lg:leading-9 pb-6" key="iot-2">
            <span className="font-bold">Solution</span> <br />
            An automated security and lighting system (with energy saving features)
          </p>,
          <p className="font-sans text-sm md:text-base lg:text-lg leading-7 md:leading-8 lg:leading-9 pb-6" key="iot-3">
            <span className="font-bold">Implementation</span> <br />
            Implemented using an embedded hardware. It is centered around the use of STM32&apos;s NUCLEO-F411RE, acting as the base microcontroller.
            Sensing devices used are high-capacity gyroscopes with an accelerometer, and a motion sensor.
            A custom daughter board was designed and built as an interface for sensors, communication module, and the microcontroller.
          </p>,
          <p className="font-sans text-sm md:text-base lg:text-lg leading-7 md:leading-8 lg:leading-9 pb-6" key="iot-4">
            <span className="font-bold">Telemetry</span> <br />
            Using the ESP8266 WiFi module, the telemetry was established via a 3rd party cloud integration with ample data storage and visualization tools.
            The chain rule feature was also utilized for the alert system that triggers on stimulus.
          </p>,
          <p className="font-sans text-sm md:text-base lg:text-lg leading-7 md:leading-8 lg:leading-9 pb-6" key="iot-5">
            <span className="font-bold">Development Structure</span> <br />
            Daughter board design, sensor interfacing (I2C, GPIO, SPI), WiFi–MCU integration, cloud connectivity, web application design, and alert system implementation.
          </p> 
        ],
        tools: [
            { name: "Thingsboard", src: "/tools/thingsboard.png", alt: "Thingsboard", width: 70, height: 50, className: "object-contain rounded-xl" },
            { name: "CubeIDE", src: "/tools/stm32.png", alt: "STM32CubeIDE", width: 70, height: 50, className: "object-contain" },
            { name: "TBEL", src: "/tools/Tebl.png", alt: "TBEL", width: 70, height: 50, className: "object-contain" },
            { name: "Javascript", src: "/tools/js.svg", alt: "Javascript", width: 50, height: 50, className: "object-fill" },
            { name: "KiCad", src: "/tools/kicad.png", alt: "KiCad", width: 70, height: 70, className: "object-contain" },
            { name: "MATLAB", src: "/tools/matlab.png", alt: "matlab", width: 70, height: 50, className: "object-contain" }
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
        Portfolio
      </>
    ),
  },  
  {
    col: 5,
    row: 4,
    slug: 'lifeblog',
    imagefile: 'lifeblog.png',
    title: 'WEB DEVELOPMENT',
    description: (
      <>
        Blog Website
      </>
    ),
  },
  {
    col: 5,
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
  }
]

export { BentoList };
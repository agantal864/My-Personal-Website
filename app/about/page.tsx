import Link from 'next/link';
import { HiDownload } from "react-icons/hi";


function About() {
  return (
    <section id="about" className="md:max-w-7xl md:mx-auto px-10 md:px-12 lg:px-20 py-4 md:py-8 lg:py-12 xl:py-16">
        <div className="flex flex-col-reverse lg:flex-row lg:items-start md:justify-center lg:justify-around gap-8">
          <div className="w-full md:w-auto text-justify lg:text-left space-y-4 xl:space-y-6">
            <h1 className="font-serif text-5xl md:text-5xl lg:text-6xl xl:text-7xl md:font-stretch-condensed font-bold text-[#1A2B4C]">I’m Zis.</h1>
            <h2 className="font-serif text-left text-2xl md:text-2xl lg:text-3xl xl:text-4xl md:font-stretch-condensed font-medium pb-6 lg:pb-8 xl:pb-12">An Electronics Engineering Graduate <br className="hidden lg:block xl:block" /> from the University of the Philippines.</h2>
            <p className="font-sans text-base xl:text-2xl leading-loose">
              I'm a fresh graduate and a licensed Electronics Engineer  <br className="hidden lg:block xl:block" />  
              with a background that bridges both <span className="font-bold text-[#1A2B4C]">hardware</span> and <span className="font-bold text-[#1A2B4C]">software</span>  <br className="hidden lg:block xl:block" />
              <span className="font-bold text-[#1A2B4C]">systems.</span> My journey merges both the physical and digital                                                       <br className="hidden lg:block xl:block" />
              worlds — where <span className="font-bold text-[#1A2B4C]">code</span> meets <span className="font-bold text-[#1A2B4C]">circuit.</span>                         <br className="hidden lg:block xl:block" />
            </p>
            <p className="font-sans text-base xl:text-2xl leading-loose">
              If I were to be described in one word, it would be <span className="font-bold text-[#1A2B4C]">hardworking.</span> 
            </p>

            <p className="font-sans text-base lg:text-base xl:text-2xl leading-loose pb-5">
              These days, I'm focused on expanding my expertise on                                                                                 <br className="hidden lg:block xl:block" />
              <span className="font-bold text-[#1A2B4C]">software engineering, embedded systems, and web </span>                                 <br className="hidden lg:block xl:block" />
              <span className="font-bold text-[#1A2B4C]">technologies,</span> with the goal of contributing to impactful                         <br className="hidden lg:block xl:block" />
              software and engineering solutions.                                                                                                  <br className="hidden lg:block xl:block" />
              &lt;/&gt;
            </p>
          <Link href="/about">
            <button className="text-[#1A2B4C] bg-[#FFC107]/40 noise-bg bg-opacity-100 filter brightness-110 font-semibold text-base px-8 py-4 mb-15 rounded-full hover:bg-[#FFC107] transition">
              <HiDownload className="inline mr-1.5 mb-1"/> Download Resume
            </button>
          </Link>

          </div>
          <div className="flex flex-col items-center">
            <img src="/aboutpage/gradpic.png" alt="Graduation Portrait"/>
            <img src="/aboutpage/esig.png" alt="E-signature" className="xl:pt-5 xl:ml-5"/>
          </div>
        </div>
    </section>
 )
} 

export default About;
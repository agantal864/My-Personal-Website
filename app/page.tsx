import Link from 'next/link';
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";


function HomePage() {
  return (

    <div className="md:max-w-7xl md:mx-auto">
      <section className="flex flex-col-reverse md:flex-row items-center justify-around gap-8 px-12 py-12">
        {/* Text Section */}
        <div className="w-full md:w-auto text-center md:text-left space-y-2 xl:space-y-4">
          <h1 className="font-serif text-5xl md:text-5xl lg:text-6xl xl:text-7xl md:font-stretch-condensed font-bold text-[#1A2B4C]">Holá, I'm Zis</h1>
          <h2 className="font-serif text-2xl md:text-2xl lg:text-3xl xl:text-4xl md:font-stretch-condensed font-medium">An aspiring software engineer</h2>
          <p className="text-base xl:text-2xl leading-loose my-4 py-4 xl:my-8 xl:py-8">
            Welcome to my <span className="font-light text-[#1A2B4C]">digital sanctuary</span>— where <br className="hidden lg:block xl:block" />
            <span className="font-semibold text-[#1A2B4C]"> electrons</span> meet <span className="font-semibold text-[#1A2B4C]">code</span>, and <span className="font-semibold text-[#1A2B4C]">code</span> becomes 
            <br className="hidden lg:block xl:block" /> <span className="font-light italic"> creativity.</span> &lt;/&gt;
          </p>
         
          <Link href="/about">
            <button className="text-[#1A2B4C] bg-[#FFC107]/40 noise-bg bg-opacity-100 filter brightness-110 font-semibold md:text-base lg:text-base xl:text-2xl px-8 py-4 lg:px-9 lg:py-5 rounded-full hover:bg-[#FFC107] transition">
              More About Me <FaArrowRightLong className="inline ml-1.5 mb-1"/>
            </button>
          </Link>

        </div>
        {/* Image Section */}
        <div className="w-full md:w-auto">
          <Image
            src="/herobg.png"
            alt="mypic"
            width={500}
            height={500}
            className="mx-auto"
          />
        </div>
      </section>
    </div>

 )
} 

export default HomePage






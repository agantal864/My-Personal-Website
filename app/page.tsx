import SectionLayout from './components/layout/SectionLayout';
import Button from './components/ui/button';
import SplitText from '@/app/components/ui/SplitText';
import Link from 'next/link';
import Image from "next/image";

function HomePage() {
  return (
    <SectionLayout id="hero">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-around gap-8">
          <div className="w-full lg:w-auto text-center lg:text-left space-y-2 xl:space-y-4">
            <SplitText
              text="Holá, I'm Zis"
              className="font-serif text-5xl md:text-5xl lg:text-6xl xl:text-7xl md:font-stretch-condensed font-bold text-[#1A2B4C]"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <h2 className="font-serif text-2xl md:text-2xl lg:text-3xl xl:text-4xl md:font-stretch-condensed font-medium">An aspiring software engineer</h2>
            <p className="text-base xl:text-2xl leading-loose my-4 py-4 xl:my-8 xl:py-8">
              Welcome to my <span className="font-light text-[#1A2B4C]">digital sanctuary</span>— where <br className="hidden lg:block xl:block" />
              <span className="font-semibold text-[#1A2B4C]"> electrons</span> meet <span className="font-semibold text-[#1A2B4C]">code</span>, and <span className="font-semibold text-[#1A2B4C]">code</span> becomes 
              <br className="hidden lg:block xl:block" /> <span className="font-light italic"> creativity.</span> &lt;/&gt;
            </p>
            <Link href="/about">
              <Button type="button" label="More About Me" large={true} icon="goto"/>
            </Link>
          </div>
          <div className="w-full md:w-auto">
            <Image
              src="/herobg.png"
              alt="mypic"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>
      </div>
    </SectionLayout>
 )
} 

export default HomePage






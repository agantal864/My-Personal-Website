import Link from 'next/link';
import { GoArrowUpRight } from "react-icons/go";


function Blog() {
  return (
  <section id="blog" className="md:max-w-7xl md:mx-auto px-10 md:px-12 lg:px-20 py-4 md:py-8 lg:py-12 xl:py-16">
    <h1 className="font-serif font-normal text-[#1A2B4C] text-3xl md:text-3xl lg:text-4xl xl:text-5xl pb-6 md:pb-8 lg:pb-10 xl:pb-12">Blog</h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 md:gird-rows-1 gap-6 h-[700px] md:h-[900px] lg:h-[500px]">
      <div className="group relative bento-hover">
        <Link href="/" className="absolute inset-0 z-10"/>
        <div className="bg-[url('/blogpage/life.jpg')] bg-cover bg-right rounded-4xl flex justify-between items-start h-full relative z-0" style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)' }}>
            <div className="pl-6 pt-6 md:pl-8 md:pt-8">
                <h3 className="font-serif text-[#1A2B4C] font-bold text-lg pb-1.5">LIFE</h3>
            </div>
            <div className="pr-4 pt-4 md:pr-6 md:pt-6 opacity-0 group-hover:opacity-100 transition">
                <GoArrowUpRight className="text-3xl text-white/70 drop-shadow-sm" />
            </div>
        </div>
      </div>
      <div className="group relative bento-hover">
        <Link href="/" className="absolute inset-0 z-10"/>
        <div className="bg-[url('/blogpage/dota.png')] bg-cover bg-left rounded-4xl flex justify-between items-start h-full relative z-0" style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)' }}>
            <div className="pl-6 pt-6 md:pl-8 md:pt-8">
                <h3 className="font-serif text-[#1A2B4C] font-bold text-lg pb-1.5">ESPORTS</h3>
            </div>
            <div className="pr-4 pt-4 md:pr-6 md:pt-6 opacity-0 group-hover:opacity-100 transition">
                <GoArrowUpRight className="text-3xl text-white/70 drop-shadow-sm" />
            </div>
        </div>
      </div>
    </div>
  </section>
 )
} 



export default Blog
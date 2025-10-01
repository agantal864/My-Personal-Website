import Link from 'next/link';
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import { RiTwitterXFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className="bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-10 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 pt-10 pb-5">
            {/* Left Section */}
            <div className="font-medium space-y-10 md:space-y-20">
                <div className="space-y-4">
                    <Image src="/websitelogo.svg" alt="Logo" width={60} height={30} />
                    <p className="text-sm">Built using Next.js & TailwindCSS</p>
                </div>
                <p className="text-sm">© 2025 Azis Agantal. All rights reserved.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              
              <div>          
                <ul className="text-[#1A2B4C] text-base font-bold space-y-0.5">  
                  <li><Link href={"/"}>Home</Link></li>
                  <li><Link href={"/projects"}>Projects</Link></li>
                  <li><Link href={"/about"}>About</Link></li>
                  <li><Link href={"/blog"}>Blog</Link></li>
                  <li><Link href={"/contact"}>Contact</Link></li>
                </ul>
              </div>

              <div>
                <ul className="space-y-0.5 text-base font-semibold"> 
                  <li className="text-[#1A2B4C] font-bold mb-2">Links</li> 
                  <li className="flex items-center"><a href="https://www.linkedin.com/in/azis-agantal-35a837212/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1A2B4C] transition"><FaLinkedin className="inline-flex text-lg mb-1 mr-1"/>Linkedin</a></li>
                  <li className="flex items-center"><a href="https://x.com/AgantalAzis" target="_blank" rel="noopener noreferrer" className="hover:text-[#1A2B4C] transition"><RiTwitterXFill className="inline-flex text-lg mb-1 mr-1"/>Twitter</a></li>
                  <li className="flex items-center"><a href="https://www.instagram.com/zsgntl/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1A2B4C] transition"><FaInstagram className="inline-flex text-lg mb-1 mr-1"/>Instagram</a></li>
                  <li className="flex items-center"><a href="https://github.com/agantal864" target="_blank" rel="noopener noreferrer" className="hover:text-[#1A2B4C] transition"><FaGithub className="inline-flex text-lg mb-1 mr-1"/>Github</a></li>
                </ul>
              </div>
            </div>            
        </div>
      </div>
    </footer>
  );
}

export default Footer

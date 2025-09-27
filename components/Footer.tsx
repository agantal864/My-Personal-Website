import Link from 'next/link';
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import { RiTwitterXFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className="bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
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
                  <li><Link href={"/"}>Projects</Link></li>
                  <li><Link href={"/about"}>About</Link></li>
                  <li><Link href={"/blog"}>Blog</Link></li>
                  <li><Link href={"/contact"}>Contact</Link></li>
                </ul>
              </div>

              <div>
                <ul className="space-y-0.5 text-base font-semibold"> 
                  <li className="text-[#1A2B4C] font-bold mb-2">Links</li> 
                  <li className="flex items-center"><FaLinkedin className="text-lg mr-1"/>Linkedin</li>
                  <li className="flex items-center"><RiTwitterXFill className="text-lg mr-1"/>Twitter</li>
                  <li className="flex items-center"><FaInstagram className="text-lg mr-1"/>Instagram</li>
                  <li className="flex items-center"><FaGithub className="text-lg mr-1"/>Github</li>
                </ul>
              </div>
            </div>            
        </div>
      </div>
    </footer>
  );
}

export default Footer

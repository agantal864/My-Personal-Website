'use client';
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { useState } from 'react';

function Navbar() {
    {/* used to track current pathname */}
    const pathname = usePathname(); 
    {/* 
      isOpen = false (by default)
      setIsOpen (function to flip the boolean logic of isOpen)
    */}
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
      { label: 'HOME', href: '/' },
      { label: 'PROJECTS', href: '/projects', match: ['/projects/m2m', '/projects/pid', '/projects/iot', '/projects/oldweb', '/projects/curweb', '/projects/sis'] },
      { label: 'ABOUT', href: '/about' },
      { label: 'BLOG', href: '/blog' },
      { label: 'CONTACT', href: '/contact' },
    ];  

    return (
      <nav className="top-0 z-50 backdrop:blur-xl">
        {/* Logo and navigation box */}
        <div className='max-w-7xl mx-auto px-10 md:px-12 lg:px-20'>
          <div className="flex items-center justify-between py-5">
            
            <Link href="/">
              {/* Logo + Brand (left side) */}
              <div className="flex items-center space-x-3">
                <Image 
                  src="/websitelogo.svg"
                  alt="navlogo"
                  width={70}
                  height={30}
                  className="object-contain"
                />
                {/* Hide Name logo in Mobile Size*/}
                <span className="hidden md:block text-[#3D3D3D] font-serif font-bold tracking-widest leading-tight uppercase subpixel-antialiased">
                  AZIS AGANTAL
                </span>
              </div>
            </Link>
          
            {/* Hamburger Button */}
            <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}> ☰ </button>

            {/* Desktop nav only */}
            <div className="hidden md:flex md:flex-row md:rounded-full md:text-sm lg:text-base md:space-x-0.5 md:px-3 md:py-2 lg:space-x-1 lg:px-6 lg:py-2.5 bg-[#f5f5f5] font-normal"
              style={{ boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.25)' }}>
              {navItems.map(({ label, href, match }) => {
                const isActive = pathname === href || match?.includes(pathname);
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`w-auto md:px-2.5 md:py-1 lg:px-4 lg:py-1 text-[#3D3D3D] ${
                      isActive ? 'rounded-full font-medium bg-[#FFC107]/80 noise-bg bg-opacity-100 filter brightness-110' : ''}`}>
                    {label}
                  </Link>
                 
                );
              })}
            </div>
          </div>

            {/* Navbox (right side) 
            Assumed in mobile state, md:xx for desktop

            w-full : Full width in mobile
            w-auto : automatically adjust width for desktop
            

            (Default) Mobile state
              ${isOpen ? 'flex' : 'hidden'} : if hamburger button is clicked, it will flex the div, by default the navbox is hidden (only hamburger icon shown) since we are in the mobile state
              If hamburger icon is not clicked:
                className={`w-full hidden flex-col ...`} or essentially reduced to className={`w-full hidden'}, which hides the menu
              If hamburger icon is clicked:
                className="w-full flex flex-col ..."
            Desktop
              className="w-auto hidden md:flex md:w-auto ..."
              by default isOpen is false, hence, the class hidden. However, 'hidden' class is overwritten by md:flex & md:flex-row
            */}

             {/* Mobile nav dropdown */}
            {isOpen && (
              <div className="flex flex-col items-start space-y-4 px-6 py-4 mt-2 rounded-lg bg-[#f5f5f5] font-normal md:hidden transition-all duration-300 ease-in-out"
              style={{ boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.25)' }}>
                {navItems.map(({ label, href, match }) => {
                  const isActive = pathname === href || match?.includes(pathname);
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`w-auto px-4 py-1 text-[#3D3D3D] ${
                        isActive ? 'rounded-full font-medium bg-[#FFC107]/80 noise-bg bg-opacity-100' : ''
                      }`}
                    >
                      {label}
                    </Link>
                  );
              })}
              </div>
            )}
        </div>
      </nav>
    )
}

export default Navbar



import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from 'react-hot-toast';
import { ThemeProvider} from "next-themes";

import Navbar from '@/app/components/common/Navbar';
import Footer from '@/app/components/common/Footer';
import Particles from '@/app/components/ui/bg';

const butler = localFont({
  src: [
    {
      path: "../public/fonts/Butler/Butler-UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Butler/Butler-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Butler/Butler.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Butler/Butler-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Butler/Butler-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Butler/Butler-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Butler/Butler-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-butler",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Azis Agantal | My Portfolio",
  description: "My personal portfolio website showcasing my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${butler.variable}`} suppressHydrationWarning>
      <body className="relative">
        <Toaster position="top-center" />
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <div className="fixed inset-0 -z-10">
            <Particles
              particleColors={['#FFC107/40']}
              particleCount={200}
              particleSpread={10}
              speed={0.2}
              particleBaseSize={150}
              moveParticlesOnHover={true}
              alphaParticles={true}
              disableRotation={false}
            />
          </div>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
              <main className="flex-grow">
                {children}
              </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>  
    </html>
  );
}

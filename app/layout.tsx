import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
  description: "Aspiring Software Engineer, Recent ECE graduate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${butler.variable}`}>
      <body>
         <div className="flex flex-col min-h-screen">
        <Navbar />
          <main className="flex-grow">
            {children}
          </main>
        <Footer />
        </div>
      </body>
    </html>
  );
}

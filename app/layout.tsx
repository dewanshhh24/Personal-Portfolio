import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { ReactNode } from "react";
import { Raleway } from "next/font/google";
import Particles from "../portfolio-react/Particles";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-raleway",
});

export const metadata = {
  title: "Dewansh Warjurkar Portfolio",
  description: "Web Developer Portfolio of Dewansh Warjurkar",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${raleway.className} scroll-smooth`}>
      <body className="relative bg-[#000d1b] text-[#ffe6c7] overflow-x-hidden">
        <Particles
          particleColors={['#fff', '#fff']}
          particleCount={300}
          particleSpread={14}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

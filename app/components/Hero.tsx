"use client";
import Navbar from "@/app/components/Navbar/Navlinks"
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <Navbar />

       <Image
        src="/hero-dg.jpg" // your image in public folder
        alt="Hero Background"
        fill // makes image cover the section
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority // loads immediately for hero
      /> 

      <div className="absolute inset-0 bg-black/30"></div>

    </section>
  );
}

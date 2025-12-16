"use client";
import Navbar from "@/app/components/Navbar/Navlinks"
import Image from "next/image";
import Button from "./Shopnow"
import Percentage from "./percentage";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-between z-50 py-4 px-4">
      <Navbar />

      <Image
        src="/hero-bg.jpg" // your image in public folder
        alt="Hero Background"
        fill // makes image cover the section
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority // loads immediately for hero
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="flex flex-col sm:flex-row justify-between px-4">
        <div className="relative  sm:text-left z-10 w-full md:w-1/2 gap-3 ">
          <h2 className="mt-20 text-white text-6xl sm:text-3xl md:text-7xl font-stretch-expanded  font-bold">
            Eco-friendly <span className="font-serif">Kitchenware</span> for a
            greener home
          </h2>
          <p className="text-white mt-9 mb-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            sit perspiciatis similique consequatur et accusamus voluptate
            veniam, officiis aspernatur, fugiat unde blanditiis molestias! Enim
            a labore necessitatibus accusamus ratione qui soluta, excepturi
            molestiae maiores explicabo modi molestias laudantium ipsum amet
            officia.
          </p>
          <Button />
        </div>
        <div className="z-1000">
          <Percentage />
        </div>
      </div>
    </section>
  );
}

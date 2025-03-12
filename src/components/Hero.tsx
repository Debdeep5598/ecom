"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full flex justify-center mb-6">
      <Image
        src="/sale.jpg" // Change to actual banner image
        alt="Top Banner"
        width={1024}
        height={200}
        className="rounded-lg shadow-lg w-full object-cover"
        priority
      />
    </section>
  );
};

export default Hero;

"use client";
import { Portafolio } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CardPortafolio({
  src,
  href,
  name,
  category,
}: Portafolio) {
  const [isHover, setIsHover] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Link
      href={href}
      target="_blank"
      className=" w-[300px] md:w-[340px] h-[300px] transition-all duration-100 relative overflow-hidden"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="600"
    >
      <span className=" rounded-xl bg-mossGreen-600 font-semibold py-1 px-3 absolute top-2 right-2 z-10">{category}</span>
      <div
        className={`absolute left-0 bg-mossGreen-900/90 w-[300px] md:w-[340px] h-[300px] z-10 transition-all duration-300  ${
          isHover ? "top-0" : "-top-[300px]"
        }`}
      >
        <div className=" w-full flex flex-col items-center justify-center gap-y-2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
          <h3 className=" text-4xl font-semibold text-center">{name}</h3>
          <p className="font-semibold text-xl">{category}</p>
        </div>
      </div>

      <Image
        src={src}
        className=" absolute top-0 left-0 w-full h-full object-cover "
        width={340}
        height={300}
        alt="imagen de fake-store"
      />
    </Link>
  );
}

"use client";
import { Portafolio } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function CardPortafolio({ src, href, name, category }: Portafolio) {
    const [isHover, setIsHover] = useState(false);
  return (
    <Link
      href={href}
      className=" w-[300px] md:w-[340px] h-[300px] transition-all duration-100 relative overflow-hidden"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={`absolute top-0 left-0 bg-mossGreen-900/90 w-[300px] md:w-[340px] h-[300px] z-10 transition-all duration-300  ${
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

"use client";
import Image from "next/image";
import { CardServices } from "@/interfaces/CardServices";
import React, { useState } from "react";

export default function CardService({
  title,
  icon,
  description,
  shadowColor,
  color,
}: CardServices) {
  const [isHoverIcon, setIsHoverIcon] = useState(false);
  console.log(`text-${shadowColor}`);
  return (
    <div
      className=" w-[280px] sm:w-[300px] lg:w-[340px] h-[300px] bg-[#142137] flex flex-col items-center justify-center gap-y-5"
      onMouseOver={() => setIsHoverIcon(true)}
      onMouseLeave={() => setIsHoverIcon(false)}
    >
      <Image
        src={icon}
        width={100}
        height={100}
        className={`${
          isHoverIcon ? ` shadow-xl shadow-${shadowColor} rounded-full ` : ""
        } transition-all duration-500`}
        alt={`Imagen de servicios ${title} `}
      />
      <h3
        className={`text-xl font-bold transition-all duration-300 ${
          isHoverIcon ? ` text-[${color}] ` : ``
        }`}
      >
        {title}
      </h3>
      <p className=" text-center text-base font-normal max-w-[250px]">
        {description}
      </p>
    </div>
  );
}

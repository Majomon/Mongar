/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import { CardServices } from "@/interfaces/CardServices";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CardService({
  title,
  icon,
  description,
}: CardServices) {
  const [isHoverIcon, setIsHoverIcon] = useState<boolean>(false);
  const [colorShadow, setColorShadow] = useState<string>("");
  const [colorTitle, setColorTitle] = useState<string>("");
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    switch (title) {
      case "Landing Page":
        setColorShadow("shadow-[#4DD038]");
        setColorTitle("text-[#4DD038]");
        break;
      case "CRM":
        setColorShadow("shadow-[#E8AA33]");
        setColorTitle("text-[#E8AA33]");
        break;
      case "E-commers":
        setColorShadow("shadow-[#DA3DC1]");
        setColorTitle("text-[#DA3DC1]");
        break;
      case "Rediseño Web":
        setColorShadow("shadow-[#12C0B6]");
        setColorTitle("text-[#12C0B6]");
        break;
      case "Sitios Web Coorporativos":
        setColorShadow("shadow-[#BF2121]");
        setColorTitle("text-[#BF2121]");
        break;
      case "Catalogo":
        setColorShadow("shadow-[#C0125B]");
        setColorTitle("text-[#C0125B]");
        break;
    }
  }, [title]);

  return (
    <div
      className={`w-[280px] sm:w-[300px] lg:w-[340px] h-[300px] bg-[#142137] flex flex-col items-center justify-center gap-y-5 cursor-pointer`}
      onMouseOver={() => setIsHoverIcon(true)}
      onMouseLeave={() => setIsHoverIcon(false)}
      data-aos="flip-right"
      data-aos-easing="ease-in-cubic"
      data-aos-duration="600"
    >
      <Image
        src={icon}
        width={100}
        height={100}
        className={`${
          isHoverIcon
            ? ` shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${colorShadow} rounded-full `
            : ""
        } transition-all duration-500`}
        alt={`Imagen de servicios ${title} `}
      />
      <h3
        className={`text-lg font-bold transition-all duration-300 ${
          isHoverIcon ? ` ${colorTitle} ` : ``
        }`}
      >
        {title}
      </h3>
      <p className=" text-center text-sm font-normal max-w-[250px]">
        {description}
      </p>
    </div>
  );
}

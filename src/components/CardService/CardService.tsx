import Image from "next/image";
import { CardServices } from "../../interfaces/cardServices";
import React from "react";

export default function CardService({ title, icon, description }:CardServices) {
  return (
    <div
      className=" w-[400px] h-[300px] bg-[#142137] flex flex-col items-center justify-center gap-y-5"
    >
      <Image
        src={icon}
        width={100}
        height={100}
        alt={`Imagen de servicios ${title}`}
      />
      <h3 className=" text-xl font-bold">{title}</h3>
      <p className=" text-center text-base font-normal max-w-[250px]">
        {description}
      </p>
    </div>
  );
}

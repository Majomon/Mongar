import Image from "next/image";
import React from "react";

export default function ImageHero() {
  return (
    <article className=" w-full md:w-[60%] lg:w-fit ">
      <Image
        src={"/image/imageHero.png"}
        width={730}
        height={578}
        alt="imagen de la seccion del Hero"
      />
    </article>
  );
}

'use client';
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ImageHero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <article className=" w-full md:w-[60%] lg:w-fit " data-aos="fade-left">
      <Image
        src={"/image/imageHero.png"}
        width={730}
        height={578}
        alt="imagen de la seccion del Hero"
      />
    </article>
  );
}

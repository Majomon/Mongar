'use client';
import Image from "next/image";
import React, { useEffect } from "react";
import ButtonGeneralMain from "../ButtonGeneralMain/ButtonGeneralMain";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContainTextHero() {
  
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <article className="flex flex-col items-center justify-center md:items-start gap-y-8 md:w-[40%] md:max-w-[525px]" data-aos="fade-right">
      <div className=" flex flex-col md:flex-row gap-x-5 md:items-start items-center">
        <Image
          src={"/svg/icon-titleMain.svg"}
          width={22}
          height={25}
          className=" rotate-90 md:rotate-0"
          alt="Item del titulo principal"
        />
        <h1 className=" text-4xl md:text-5xl font-normal text-mossGreen-500 text-center md:text-left">
          Diseño y Desarrollo <span className=" font-semibold">MONGAR</span>
        </h1>
      </div>
      <p className=" text-xl font-normal text-center md:text-left">
        Lorem ipsum dolor sit amet consectetur. Ut congue semper laoreet tortor
        nunc massa vel. Cursus et ac volutpat maecenas eu nisl sed. Varius enim
        risus pellentesque in varius
      </p>
      <ButtonGeneralMain label={"Lorem Contact"} href={"#"} />
    </article>
  );
}

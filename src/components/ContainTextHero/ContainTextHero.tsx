"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import ButtonGeneralMain from "../ButtonGeneralMain/ButtonGeneralMain";
import AOS from "aos";
import "aos/dist/aos.css";
import { ButtonGeneral } from "../ButtonGral/ButtonGeneral";

export default function ContainTextHero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <article
      className="flex flex-col items-center justify-center md:items-start gap-y-8 md:w-[40%] md:max-w-[525px]"
      data-aos="fade-right"
    >
      <div className=" flex flex-col md:flex-row gap-x-5 md:items-start items-center">
        <Image
          src={"/svg/icon-titleMain.svg"}
          width={22}
          height={25}
          className=" rotate-90 md:rotate-0"
          alt="Item del titulo principal"
        />
        <h1 className=" text-4xl md:text-5xl font-normal text-mossGreen-500 text-center md:text-left">
          Diseñamos Tu Éxito <span className=" font-semibold uppercase">Online</span>
        </h1>
      </div>
      <p className=" text-lg font-normal text-center md:text-left">
        ¿Necesitas un sitio web que impacte y funcione a la perfección? En
        MONGAR , creamos experiencias digitales únicas y personalizadas que dan
        vida a la esencia de tu marca.{" "}
      </p>
      {/* <ButtonGeneral href="#contacto" label="Ponete en contacto con nosotros" /> */}

      <ButtonGeneralMain label={"Contactate con nosotros"} href={"#"} />
    </article>
  );
}

"use client";
import { useEffect } from "react";
import ButtonGeneralMain from "../ButtonGeneralMain/ButtonGeneralMain";
import TitleGeneral from "../TitleGeneral/TitleGeneral";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContainTextSectionWe() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <article
      className=" flex flex-col items-center justify-center gap-y-5"
      data-aos="fade-up"
    >
      <TitleGeneral name="Nosotros" />
      <p className=" text-lg font-normal max-w-[612px] text-center">
        En Mongar, nos dedicamos al diseño y desarrollo web, creando
        experiencias digitales únicas. Transformamos ideas en sitios web
        impresionantes y funcionales. Desde páginas corporativas hasta comercio
        electrónico, hacemos crecer tu presencia online con soluciones
        innovadoras y personalizadas.
      </p>
      {/* <ButtonGeneralMain href="#" label="Lorem Button" /> */}
    </article>
  );
}

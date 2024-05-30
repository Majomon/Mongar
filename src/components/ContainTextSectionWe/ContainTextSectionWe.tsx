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
        Somos un equipo apasionado y comprometido con el mundo del desarrollo
        web. Nuestro viaje apenas comienza, pero nuestra determinación es
        infinita. Con cada proyecto, buscamos aprender y crecer, aprovechando
        nuestra creatividad y habilidades técnicas para superar desafíos y
        entregar resultados excepcionales.
      </p>
      <ButtonGeneralMain href="#" label="Empecemos ahora" />
    </article>
  );
}

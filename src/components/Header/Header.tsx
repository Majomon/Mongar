'use client';
import Image from "next/image";
import { MenuLinks } from "../MenuLinks/MenuLinks";
import { ButtonGeneral } from "../ButtonGral/ButtonGeneral";
import { NavbarResponsive } from "../NavbarResponsive/NavbarResponsive";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Header = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <header className="w-full h-[90px] bg-transparent">
      <nav className="w-full h-full px-8 flex items-center justify-between">
        <Image src={"/svg/Logo-main.svg"} alt="LogoMongar" width={38.5} height={55} data-aos="fade-down"/>
        <MenuLinks />
        <ButtonGeneral href="#contacto" label="Contactar" />
        <NavbarResponsive />
      </nav>
    </header>
  );
};

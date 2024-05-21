import Image from "next/image";
import Logo from "@/assets/Logo.png";
import { MenuLinks } from "../MenuLinks/MenuLinks";
import { ButtonGeneral } from "../ButtonContact/ButtonGeneral";
import { NavbarResponsive } from "../NavbarResponsive/NavbarResponsive";

export const Header = () => {
  return (
    <header className="w-full h-14 bg-darkBlue-950">
      <nav className="w-full h-full px-8 flex items-center justify-between">
        <Image src={Logo} alt="LogoMongar" width={20} height={20} />
        <MenuLinks />
        <ButtonGeneral href="#contact" label="Contactar" />
        <NavbarResponsive />
      </nav>
    </header>
  );
};

import Image from "next/image";
import { MenuLinks } from "../MenuLinks/MenuLinks";
import { ButtonGeneral } from "../ButtonGral/ButtonGeneral";
import { NavbarResponsive } from "../NavbarResponsive/NavbarResponsive";

export const Header = () => {
  return (
    <header className="w-full h-[90px] bg-transparent">
      <nav className="w-full h-full px-8 flex items-center justify-between">
        <Image src={"/svg/Logo-main.svg"} alt="LogoMongar" width={38.5} height={55} />
        <MenuLinks />
        <ButtonGeneral href="#contacto" label="Contactar" />
        <NavbarResponsive />
      </nav>
    </header>
  );
};

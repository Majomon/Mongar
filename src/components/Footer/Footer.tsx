import Image from "next/image";
import FooterImg from "@/assets/Footer.png";
import { MainFooter } from "./MainFooter";

export const Footer = () => {
  return (
    <footer className="w-full h-fit bg-darkBlue-950 relative">
      <Image src={FooterImg} alt="FooterImg" width={1800} height={1800} />
      <MainFooter />
    </footer>
  );
};

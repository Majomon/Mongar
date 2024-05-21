import FooterImg from "@/assets/Footer.png";
import Image from "next/image";
import { MainFooter } from "./MainFooter";

export const Footer = () => {
  return (
    <footer className="w-full h-fit bg-darkBlue-950 relative">
      <Image
        src={FooterImg}
        alt="FooterImg"
        width={2400}
        height={1800}
        className="hidden md:block mt-6"
      />
      <div className="h-40 bottom-0 bg-mossGreen-800 block md:hidden py-10 rounded-t-2xl" />
      <MainFooter />
    </footer>
  );
};

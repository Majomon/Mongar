import Logo from "@/assets/Logo.png";
import Image from "next/image";
import { MenuLinksFooter } from "./MenuLinksFooter";
import { Redes } from "./Redes";
import Link from "next/link";

export const MainFooter = () => {
  return (
    <div className="absolute inset-0 w-full h-git flex flex-col justify-center items-center gap-y-6">
      <Link href={"#inicio"}>
        <Image src={Logo} alt="Logo" width={20} height={20} />
      </Link>
      <MenuLinksFooter />
      <Redes />
      <div className="flex gap-2">
        <h3>Copyright ©</h3>
        <span>|</span>
        <h3>Mongar.tech</h3>
      </div>
    </div>
  );
};

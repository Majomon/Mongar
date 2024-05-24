import Image from "next/image";
import Link from "next/link";
import { MenuLinksFooter } from "./MenuLinksFooter";
import { Redes } from "./Redes";

export const MainFooter = () => {
  return (
    <div className="absolute inset-0 w-full flex flex-col justify-center items-center gap-2">
      <Link href={"#inicio"} className="">
        <Image src={"/svg/Logo-alternativeWhite.svg"} alt="Logo" width={38.5} height={55} />
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

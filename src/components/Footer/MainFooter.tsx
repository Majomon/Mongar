import Image from "next/image";
import Link from "next/link";
import { MenuLinksFooter } from "./MenuLinksFooter";
import { Redes } from "./Redes";

export const MainFooter = () => {
  return (
    <div className=" inset-0 w-full flex flex-col justify-center items-center gap-6">
      <Link href={"#inicio"} className="">
        <Image src={"/svg/Logo-alternativeWhite.svg"} alt="Logo" width={38.5} height={55} />
      </Link>
      <MenuLinksFooter />
      <Redes />
      <div className="flex gap-2 text-xl font-semibold">
        <h3>Copyright ©</h3>
        <span>|</span>
        <h3>Mongar</h3>
      </div>
    </div>
  );
};

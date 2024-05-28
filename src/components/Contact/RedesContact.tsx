import Image from "next/image";
import Link from "next/link";

export const RedesContact = () => {
  return (
    <div className="flex flex-col gap-10 text-xs">
      <Link
        href={"https://www.instagram.com/mongar.developer/"}
        target="_blank"
        className="flex items-center gap-x-4"
      >
        <Image
          src={"/svg/Instagram.svg"}
          alt="Instagram"
          width={26}
          height={26}
        />
        <p className=" text-base font-semibold">Mongar Developer</p>
      </Link>
      <Link
        href={
          "mailto:mongar.developer@gmail.com?subject=Consulta%20por%20desarrollo%20web"
        }
        className="flex gap-x-4"
      >
        <Image src={"/svg/Email.svg"} alt="Email" width={26} height={26} />
        <p className=" text-base font-semibold">mongar.developer@gmail.com</p>
      </Link>
      <Link
        href={"https://www.facebook.com/profile.php?id=61552618487476"}
        target="_blank"
        className="flex gap-x-4"
      >
        <Image
          src={"/svg/Facebook.svg"}
          alt="Facebook"
          width={26}
          height={26}
        />
        <p className=" text-base font-semibold">mongar.developer</p>
      </Link>
    </div>
  );
};

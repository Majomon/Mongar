import Image from "next/image";
import Link from "next/link";

export const Redes = () => {
  return (
    <div className="flex gap-4 justify-center items-center">
      <Link
        href={"https://www.instagram.com/mongar.developer/"}
        target="_blank"
      >
        <Image
          src={"/svg/Instagram.svg"}
          alt="Instagram"
          width={35}
          height={35}
        />
      </Link>
      <Link
        href={
          "mailto:mongar.developer@gmail.com?subject=Consulta%20por%20desarrollo%20web"
        }
      >
        <Image
          src={"/svg/Email.svg"}
          alt="Email"
          width={35}
          height={35}
        />
      </Link>
      <Link
        href={"https://www.facebook.com/profile.php?id=61552618487476"}
        target="_blank"
      >
        <Image
          src={"/svg/Facebook.svg"}
          alt="Facebook"
          width={35}
          height={35}
        />
      </Link>
    </div>
  );
};

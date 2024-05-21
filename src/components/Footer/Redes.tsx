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
          src={"/image/social/Instagram.png"}
          alt="Instagram"
          width={30}
          height={30}
        />
      </Link>
      <Link
        href={
          "mailto:mongar.developer@gmail.com?subject=Consulta%20por%20desarrollo%20web"
        }
      >
        <Image
          src={"/image/social/Email.png"}
          alt="Email"
          width={30}
          height={30}
        />
      </Link>
      <Link
        href={"https://www.facebook.com/profile.php?id=61552618487476"}
        target="_blank"
      >
        <Image
          src={"/image/social/Facebook.png"}
          alt="Facebook"
          width={30}
          height={30}
        />
      </Link>
    </div>
  );
};

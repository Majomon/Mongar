import Image from "next/image";
import React from "react";
import ContainTextHero from "../../ContainTextHero/ContainTextHero";
import ImageHero from "../../ImageHero/ImageHero";

export default function SectionHero() {
  return (
    <section className=" w-full h-fit md:h-[580px] flex flex-col-reverse md:flex-row items-center justify-around gap-4 px-3 relative">
      <ContainTextHero />
      {/* imagen principal del hero */}
      <ImageHero />
      {/* Elipce secundario */}
      <Image
        src={"/svg/Ellipse-hero-2.svg"}
        className=" absolute top-[100px] left-[200px] -z-40 min-[900px]:left-[150px] min-[900px]:top-[250px] lg:top-[30%] min-w-[500px]"
        width={706}
        height={706}
        alt="Elipce abajo"
      />
    </section>
  );
}

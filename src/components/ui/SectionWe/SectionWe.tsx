'use client';
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import ContainTextSectionWe from "../../ContainTextSectionWe/ContainTextSectionWe";

export default function SectionWe() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className= {`bg-[url('/svg/background-sectionWe.svg')] bg-no-repeat bg-cover bg-center sm:bg-top md:bg-left-top h-fit pt-40 pb-20 sm:pt-96 md:pt-0 md:pb-0 md:h-[800px] relative `} id="nosotros">
      <div className=" px-3 w-full h-fit flex flex-col md:flex-row items-center justify-between gap-8 max-w-[1040px] relative left-[50%] top-[42%] translate-x-[-50%] ">
        <Image
          src={"/image/Image-we-reference.png"}
          width={365}
          height={380}
          className="z-50"
          alt="imagen que hace referencia a nosotros"
          data-aos="fade-down"
        />
        <ContainTextSectionWe />
        
      </div>
    </section>
  );
}

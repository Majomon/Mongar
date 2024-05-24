import Image from "next/image";
import ContainTextSectionWe from "../../ContainTextSectionWe/ContainTextSectionWe";

export default function SectionWe() {
  return (
    <section className= {`bg-[url('/svg/Background-sectionWe-responsive.svg')] md:bg-[url('/svg/background-sectionWe.svg')] bg-no-repeat bg-cover bg-center md:bg-left-top h-[1200px] md:h-[800px] relative border`} id="nosotros">
      <div className=" px-3 w-full h-fit flex flex-col md:flex-row items-center justify-between gap-8 max-w-[1040px] relative left-[50%] top-[42%] translate-x-[-50%] ">
        {/* <article></article> */}
        <Image
          src={"/image/Image-we-reference.png"}
          width={365}
          height={380}
          className="z-50"
          alt="imagen que hace referencia a nosotros"
        />
        <ContainTextSectionWe />
      </div>
    </section>
  );
}

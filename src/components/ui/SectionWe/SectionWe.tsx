import Image from "next/image";
import ContainTextSectionWe from "../../ContainTextSectionWe/ContainTextSectionWe";

export default function SectionWe() {
  return (
    <section className=" bg-[url('/image/Background-Section-We.png')] bg-no-repeat bg-cover bg-center md:bg-left h-[1350px] md:h-[730px] relative">
      <div className="px-3 w-full h-fit flex flex-col md:flex-row items-center justify-between gap-8 max-w-[1040px] relative left-[50%] top-[38%] translate-x-[-50%] ">
        {/* <article></article> */}
        <Image
          src={"/image/Image-we-reference.png"}
          width={365}
          height={380}
          className=""
          alt="imagen que hace referencia a nosotros"
        />
        <ContainTextSectionWe />
      </div>
    </section>
  );
}

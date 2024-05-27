import TitleGeneral from "@/components/TitleGeneral/TitleGeneral";
import Image from "next/image";
import ContainCards from "@/components/ContainCards/ContainCards";

export default function SectionServices() {
  return (
    <section className=" w-full h-fit py-28 relative flex flex-col gap-y-14 items-center justify-center overflow-x-hidden" id="servicios">
      <Image
        src={"/svg/Ellipse-services.svg"}
        className=" absolute left-0 -top-1 -z-50"
        width={706}
        height={706}
        alt="Elipce arriba Servicios"
      />
      <TitleGeneral name="Servicios" />
      <ContainCards />
      <Image
        src={"/svg/Ellipse-hero-2.svg"}
        className=" absolute top-[15%] md:top-[20%] left-[50%] translate-x-[-50%] md:left-[100%] -z-50 min-w-[400px]"
        width={706}
        height={706}
        alt="Elipce arriba"
      />
      <Image
        src={"/svg/Ellipse-hero-2.svg"}
        className=" absolute top-[60%] left-[50%] translate-x-[-50%] -z-50 min-w-[400px] block md:hidden"
        width={706}
        height={706}
        alt="Elipce arriba"
      />
    </section>
  );
}

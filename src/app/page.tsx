import Image from "next/image";
import SectionWe from "../components/ui/SectionWe/SectionWe";
import SectionHero from "@/components/ui/SectionHero/SectionHero";
import { Contact } from "@/components/Contact/Contact";
import { Team } from "@/components/Team/Team";
import TitleGeneral from "@/components/TitleGeneral/TitleGeneral";
import CardService from "@/components/CardService/CardService";
import listServices from "../utils/ListServices";

export default function HomePage() {
  return (
    <main className=" w-full min-h-screen overflow-x-hidden min-[900px]:overflow-x-visible">
      {/* elipce primario */}
      <Image
        src={"/svg/Ellipse-Hero-1.svg"}
        className=" absolute top-[-100px] md:top-[-250px] left-[-150px] -z-40 min-w-[400px]"
        width={706}
        height={706}
        alt="Elipce arriba"
      />
      <Image
        src={"/svg/Ellipses-group.svg"}
        className=" absolute top-[150px] right-0 -z-40 hidden md:block"
        width={1000}
        height={820}
        alt="grpo de Elipces"
      />
      <SectionHero />
      <SectionWe />
      <section className=" w-full h-fit py-28 relative flex flex-col gap-y-14 items-center justify-center overflow-x-hidden">
        <Image
          src={"/svg/Ellipse-services.svg"}
          className=" absolute left-0 -top-1 -z-50"
          width={706}
          height={706}
          alt="Elipce arriba Servicios"
        />
        <TitleGeneral name="Servicios" />
        <article className=" flex gap-4 flex-wrap items-center justify-center">
          {/* Cards de los diversos servicios */}
          {listServices.map((item) => (
            <CardService
              key={item.title}
              title={item.title}
              icon={item.icon}
              description={item.description}
              shadowColor={item.shadowColor}
              color={item.color}
            />
          ))}
        </article>
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
      <Team />
      <Contact />
    </main>
  );
}

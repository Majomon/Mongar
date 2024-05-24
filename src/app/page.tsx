import Image from "next/image";
import SectionWe from "../components/ui/SectionWe/SectionWe";
import SectionHero from "@/components/ui/SectionHero/SectionHero";
import { Contact } from "@/components/Contact/Contact";
import { Team } from "@/components/Team/Team";
import TitleGeneral from "@/components/TitleGeneral/TitleGeneral";
import CardService from "@/components/CardService/CardService";
import listServices from "../utils/"

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
      <section className=" w-full h-[950px] relative flex flex-col gap-y-14 items-center justify-center">
        <TitleGeneral name="Servicios" />
        <article className=" flex gap-4 flex-wrap items-center justify-center">
          {/* Cards de los diversos servicios */}
          {listServices.map((item) => (
            <CardService
              key={item.title}
              title={item.title}
              icon={item.icon}
              description={item.description}
            />
          ))}
        </article>
      </section>
      <Team />
      <Contact />
    </main>
  );
}

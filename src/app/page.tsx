import { Contact } from "@/components/Contact/Contact";
import { Team } from "@/components/Team/Team";
import SectionHero from "@/components/ui/SectionHero/SectionHero";
import SectionServices from "@/components/ui/SectionServices/SectionServices";
import Image from "next/image";
import SectionWe from "../components/ui/SectionWe/SectionWe";
import TitleGeneral from "@/components/TitleGeneral/TitleGeneral";
import ButtonGeneralMain from "@/components/ButtonGeneralMain/ButtonGeneralMain";

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
      <SectionServices />
      <section className="py-28 flex flex-col gap-y-14 items-center justify-center bg-image-portafolio bg-no-repeat bg-cover bg-[center_bottom_24rem]">
        <TitleGeneral name="Portafolio" />
        <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className=" w-[340px] h-[300px] transition-all duration-100 hover:bg-mossGreen-800/90 relative">
            <Image src={"/image/FakeStore-TiendaOnline.png"} className=" absolute top-0 left-0 w-auto h-[300px] object-cover " width={340} height={300} alt="imagen de fake-store" />
          </div>
          <div className="border w-[340px] h-[300px]"></div>
          <div className="border w-[340px] h-[300px]"></div>
          <div className="border w-[340px] h-[300px]"></div>
          <div className="border w-[340px] h-[300px]"></div>
          <div className="border w-[340px] h-[300px]"></div>
        </article>
        <ButtonGeneralMain label="Ver mas" href={"#"} />
      </section>
      <Team />
      <Contact />
    </main>
  );
}

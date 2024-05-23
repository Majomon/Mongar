import Image from "next/image";
import SectionWe from "../components/ui/SectionWe/SectionWe";
import SectionHero from "@/components/ui/SectionHero/SectionHero";
import { Contact } from "@/components/Contact/Contact";

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
      <SectionHero />
      <SectionWe />
      <Contact />
    </main>
  );
}

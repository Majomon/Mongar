import Image from "next/image";
import SectionWe from "../components/ui/SectionWe/SectionWe";
import SectionHero from "../components/ui/SectionHero/SectionHero";

export default function HomePage() {
  return (
    <main className=" w-full min-h-screen overflow-x-hidden min-[900px]:overflow-x-visible">
      <SectionHero />
      <Image
        src={"/svg/Ellipse-Hero-1.svg"}
        className=" absolute top-[-150px] md:top-[-250px] left-[-150px] -z-40 min-w-[500px]"
        width={706}
        height={706}
        alt="Elipce arriba"
      />
      <SectionWe />
    </main>
  );
}

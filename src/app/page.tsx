import Image from "next/image";
import SectionWe from "../components/ui/SectionWe/SectionWe";

export default function HomePage() {
  return (
    <main className=" w-full min-h-screen relative overflow-x-hidden">
      <section className=" w-full h-[580px] ">
        <article>
          <Image src={"/public/svg/icon-titleMain.svg"} alt="Item del titulo principal" />
        </article>
        <p>
          Lorem ipsum dolor sit amet consectetur. Ut congue semper laoreet
          tortor nunc massa vel. Cursus et ac volutpat maecenas eu nisl sed.
          Varius enim risus pellentesque in varius
        </p>

        <Image
          src={"/svg/Ellipse-Hero-1.svg"}
          className=" absolute top-[-250px] left-[-150px] -z-40 "
          width={706}
          height={706}
          alt="Elipce arriba"
        />
        <Image
          src={"/svg/Ellipse-hero-2.svg"}
          className=" absolute top-[100px] left-[200px] -z-40 min-[900px]:left-[150px] min-[900px]:top-[250px]"
          width={706}
          height={706}
          alt="Elipce abajo"
        />
      </section>
      <SectionWe />
    </main>
  );
}

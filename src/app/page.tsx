import Image from "next/image";
import SectionWe from "../components/ui/SectionWe/SectionWe";
import ButtonGeneralMain from "@/components/ButtonGeneralMain/ButtonGeneralMain";

export default function HomePage() {
  return (
    <main className=" w-full min-h-screen relative overflow-hidden ">
      <section className=" w-full h-[580px] flex  items-center justify-around gap-4 px-3 ">
        <article className="flex flex-col gap-y-8 w-[40%] max-w-[525px]">
          <div className=" flex gap-x-5 ">
            <Image
              src={"/svg/icon-titleMain.svg"}
              width={22}
              height={25}
              alt="Item del titulo principal"
            />
            <h1 className=" text-5xl font-normal text-mossGreen-500">
              Diseño y Desarrollo <span className=" font-semibold">MONGAR</span>
            </h1>
          </div>
          <p className=" text-xl font-normal">
            Lorem ipsum dolor sit amet consectetur. Ut congue semper laoreet
            tortor nunc massa vel. Cursus et ac volutpat maecenas eu nisl sed.
            Varius enim risus pellentesque in varius
          </p>
          <ButtonGeneralMain label={"Lorem Contact"} href={"#"} />
        </article>
        {/* imagen principal del hero */}
        <article className=" w-[60%] lg:w-fit ">
          <Image src={"/image/imageHero.png"} width={730} height={578} alt="imagen de la seccion del Hero" />
        </article>
      </section>
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
      <SectionWe />
    </main>
  );
}

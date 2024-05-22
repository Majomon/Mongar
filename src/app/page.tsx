import Image from "next/image";
import SectionWe from "../components/ui/SectionWe/SectionWe";
import ButtonGeneralMain from "@/components/ButtonGeneralMain/ButtonGeneralMain";

export default function HomePage() {
  return (
    <main className=" w-full min-h-screen overflow-x-hidden min-[900px]:overflow-x-visible">
      <section className=" w-full h-fit md:h-[580px] flex flex-col-reverse md:flex-row items-center justify-around gap-4 px-3 relative">
        <article className="flex flex-col items-center justify-center md:items-start gap-y-8 md:w-[40%] md:max-w-[525px]">
          <div className=" flex flex-col md:flex-row gap-x-5 md:items-start items-center">
            <Image
              src={"/svg/icon-titleMain.svg"}
              width={22}
              height={25}
              className=" rotate-90 md:rotate-0"
              alt="Item del titulo principal"
            />
            <h1 className=" text-5xl font-normal text-mossGreen-500 text-center md:text-left">
              Diseño y Desarrollo <span className=" font-semibold">MONGAR</span>
            </h1>
          </div>
          <p className=" text-xl font-normal text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur. Ut congue semper laoreet
            tortor nunc massa vel. Cursus et ac volutpat maecenas eu nisl sed.
            Varius enim risus pellentesque in varius
          </p>
          <ButtonGeneralMain label={"Lorem Contact"} href={"#"} />
        </article>
        {/* imagen principal del hero */}
        <article className=" w-full md:w-[60%] lg:w-fit ">
          <Image
            src={"/image/imageHero.png"}
            width={730}
            height={578}
            alt="imagen de la seccion del Hero"
          />
        </article>
        <Image
          src={"/svg/Ellipse-hero-2.svg"}
          className=" absolute top-[100px] left-[200px] -z-40 min-[900px]:left-[150px] min-[900px]:top-[250px] lg:top-[30%] min-w-[500px]"
          width={706}
          height={706}
          alt="Elipce abajo"
        />
      </section>
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

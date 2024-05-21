
import Image from "next/image";

export default function HomePage() {
  return (
    <main className=" w-full min-h-screen">
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
          <article className=" flex flex-col items-center justify-center gap-y-5">
            {/* Hacer componente para title (reutilizable)*/}
            <span className=" flex items-center justify-center gap-x-5">
              <Image
                src={"/svg/item-titleGeneral.svg"}
                width={24}
                height={24}
                alt="item para el titulo -> izquierdo"
              />
              <h2 className=" text-4xl font-bold">Nosotros</h2>
              <Image
                src={"/svg/item-titleGeneral.svg"}
                width={24}
                height={24}
                alt="item para el titulo -> derecho"
              />
            </span>
            <p className=" text-lg font-normal max-w-[612px] text-center">
              Lorem ipsum dolor sit amet consectetur. Ut congue semper laoreet
              tortor nunc massa vel. Cursus et ac volutpat maecenas eu nisl sed.
              Varius enim risus pellentesque in varius Lorem ipsum dolor sit
              amet consectetur. Ut congue semper laoreet tortor nunc massa vel.
              Cursus et ac volutpat maecenas eu nisl sed. Varius enim risus
              pellentesque in varius
            </p>
            {/* Hacer componente para Button (reutilizable)*/}
            <button className=" w-full sm:w-fit font-semibold text-lg py-3 px-6 rounded-xl border-l-2 border-mossGreen-400 bg-gradient-to-r from-[#1DB48D]/20 to-[#0B493E]/10">
              Lorem Button
            </button>
          </article>
        </div>
      </section>
    </main>

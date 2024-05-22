import Image from "next/image";
import TitleGeneral from "../TitleGeneral/TitleGeneral";

export default function ContainTextSectionWe() {
  return (
    <article className=" flex flex-col items-center justify-center gap-y-5">
      <TitleGeneral name="Nosotros" />
      <p className=" text-lg font-normal max-w-[612px] text-center">
        Lorem ipsum dolor sit amet consectetur. Ut congue semper laoreet tortor
        nunc massa vel. Cursus et ac volutpat maecenas eu nisl sed. Varius enim
        risus pellentesque in varius Lorem ipsum dolor sit amet consectetur. Ut
        congue semper laoreet tortor nunc massa vel. Cursus et ac volutpat
        maecenas eu nisl sed. Varius enim risus pellentesque in varius
      </p>
      {/* Hacer componente para Button (reutilizable)*/}
      <button className=" w-full sm:w-fit font-semibold text-lg py-3 px-6 rounded-xl border-l-2 flex items-center justify-center border-mossGreen-400 bg-gradient-to-r from-[#1DB48D]/20 to-[#0B493E]/10 relative overflow-hidden transition-all duration-500 ease-in-out  hover:scale-105 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-mossGreen-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
        Lorem Button
      </button>
    </article>
  );
}

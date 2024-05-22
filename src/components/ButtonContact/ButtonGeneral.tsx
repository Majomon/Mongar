import PropsButton from "@/src/interfaces/PropButton";
import Link from "next/link";

export const ButtonGeneral = ({ label, href }: PropsButton) => {
  return (
    <Link href={href} className=" w-full sm:w-fit font-semibold text-lg py-3 px-6 rounded-xl border-l-2 flex items-center justify-center border-mossGreen-400 bg-gradient-to-r from-[#1DB48D]/20 to-[#0B493E]/10 relative overflow-hidden transition-all duration-500 ease-in-out  hover:scale-105 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-mossGreen-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
      { label }
    </Link>
  );
};

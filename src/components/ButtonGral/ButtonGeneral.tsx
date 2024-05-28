'use client';
import PropsButton from "@/interfaces/PropButton";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const ButtonGeneral = ({ label, href }: PropsButton) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="hidden md:flex w-full sm:w-fit font-semibold text-lg py-3 px-6 rounded-xl border-l-2 items-center justify-center border-mossGreen-400 bg-gradient-to-r from-[#1DB48D]/20 to-[#0B493E]/10 relative overflow-hidden transition-all duration-500 ease-in-out  hover:scale-105 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-mossGreen-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]" data-aos="fade-down">
      <Link href={href}>
        <span className="text-gray-200 ">{label}</span>
      </Link>
    </div>
  );
};

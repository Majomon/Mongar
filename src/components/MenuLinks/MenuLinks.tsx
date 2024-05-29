'use client';
import { listMenu } from "@/utils/ListMenuLinks";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const MenuLinks = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <ul className="hidden md:flex md:flex-row items-center gap-x-4" data-aos="fade-down">
      {listMenu.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>
            <span className="text-white text-lg font-normal hover:text-mossGreen-500 hover:border-b hover:pb-0.5 hover:border-mossGreen-500 transition-all duration-200">{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

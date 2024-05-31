"use client";

import { listMenu } from "@/utils/ListMenuLinks";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const NavbarResponsive = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClicIsOpen = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden cursor-pointer z-50">
      <section className="block">
        <Image
          src={"/svg/Menu-Chocolate.svg"}
          alt="MenuChocolate"
          width={30}
          height={30}
          onClick={handleClicIsOpen}
        />
      </section>
      <section
        className={`block ${
          isOpen ? "left-0" : "-left-[100%]"
        } transition-all duration-300  w-[100vw] h-screen fixed top-0 flex items-center justify-center bg-mossGreen-800/80 backdrop-blur`}
      >
        <div className=" border absolute top-3 right-3 py-2 px-3.5 font-semibold bg-white text-mossGreen-700 rounded-full"
          onClick={handleClicIsOpen}
        >
          X
        </div>
        <ul className="flex flex-col items-start gap-6 font-normal text-sm">
          {listMenu.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`font-semibold text-2xl hover:text-mossGreen-400 `}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </section>
    </div>
  );
};

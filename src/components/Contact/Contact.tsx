import Image from "next/image";
import { FormContact } from "./FormContact";
import { LinksContact } from "./LinksContact";

export const Contact = () => {
  return (
    <section
      id="contacto"
      className=" relative overflow-hidden h-fit pb-5"
    >
      
      <div className="hidden max-w-[1040px] h-[30rem] mx-auto lg:flex md:justify-center md:items-center my-16 px-3 ">
        <LinksContact />
        <FormContact />
      </div>
    </section>
  );
};

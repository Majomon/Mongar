"use client";
import TitleGeneral from "../TitleGeneral/TitleGeneral";
import { RedesContact } from "./RedesContact";

export const LinksContact = () => {
 
  return (
    <div
      className=" w-[40%] lg:w-[35%] h-[26rem] px-6 flex flex-col justify-center items-center gap-10 bg-gradient-formContact shadow-2xl relative left-16 "
   
    >
      <TitleGeneral name="Contactanos" />
      <RedesContact />
    </div>
  );
};

import { FormContact } from "./FormContact";
import { LinksContact } from "./LinksContact";

export const Contact = () => {
  return (
    <section
      id="contacto"
      className="hidden max-w-[1040px] h-[30rem] mx-auto md:flex md:justify-center md:items-center my-16 relative px-3"
    >
      <LinksContact />
      <FormContact />
    </section>
  );
};

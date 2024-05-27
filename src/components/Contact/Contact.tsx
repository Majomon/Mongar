import { FormContact } from "./FormContact";
import { LinksContact } from "./LinksContact";

export const Contact = () => {
  return (
    <section
      id="contacto"
      className="hidden lg:w-9/12 h-[30rem] mx-auto md:flex md:justify-center md:items-end my-16 relative"
    >
      <LinksContact />
      <FormContact />
    </section>
  );
};

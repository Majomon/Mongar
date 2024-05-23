import { FormContact } from "./FormContact";
import { LinksContact } from "./LinksContact";

export const Contact = () => {
  return (
    <section
      id="contacto"
      className="w-9/12 h-96 mx-auto flex justify-center items-end my-16"
    >
      <LinksContact />
      <FormContact />
    </section>
  );
};

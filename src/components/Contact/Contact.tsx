import { FormContact } from "./FormContact";
import { LinksContact } from "./LinksContact";

export const Contact = () => {
  return (
    <section
      id="contacto"
      className="w-10/12 mx-auto h-fit flex  justify-center items-center my-16"
    >
      <LinksContact />
      <FormContact />
    </section>
  );
};

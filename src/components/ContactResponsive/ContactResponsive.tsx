import TitleGeneral from "../TitleGeneral/TitleGeneral";
import { FormContactResponsive } from "./FormContact";
import { RedesContactResponsive } from "./RedesContact";

export const ContactResponsive = () => {
  return (
    <section
      id="contacto"
      className="w-full sm:w-11/12 mx-auto bg-gradient-formContact shadow-2xl flex flex-col justify-center py-10  lg:hidden"
    >
      <TitleGeneral name="Contactanos" />
      <RedesContactResponsive />
      <FormContactResponsive />
    </section>
  );
};

import TitleGeneral from "../TitleGeneral/TitleGeneral";
import { CartTestimonio } from "./CartTestimonio";

export const Testimonios = () => {
  return (
    <section id="testimonios" className="w-full bg-darkBlue-950">
      <div className="w-8/12 mx-auto flex gap-10 pb-10">
        <div className="w-6/12 flex flex-col gap-y-10">
          <TitleGeneral name="Testimonios" />
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            obcaecati totam eos quis harum eveniet non laboriosam qui, nemo
            delectus, dolorem, labore maxime vero consequatur libero sapiente
            amet tenetur officiis.
          </p>
        </div>
        <div className="w-6/12 h-fit p-10 border-l-2 border-mossGreen-500 bg-gradient-cartTestimonio">
          <CartTestimonio />
        </div>
      </div>
    </section>
  );
};

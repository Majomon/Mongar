import Image from "next/image";
import TitleGeneral from "../TitleGeneral/TitleGeneral";
import ButtonGeneralMain from "../ButtonGeneralMain/ButtonGeneralMain";

export default function ContainTextSectionWe() {
  return (
    <article className=" flex flex-col items-center justify-center gap-y-5">
      <TitleGeneral name="Nosotros" />
      <p className=" text-lg font-normal max-w-[612px] text-center">
        Lorem ipsum dolor sit amet consectetur. Ut congue semper laoreet tortor
        nunc massa vel. Cursus et ac volutpat maecenas eu nisl sed. Varius enim
        risus pellentesque in varius Lorem ipsum dolor sit amet consectetur. Ut
        congue semper laoreet tortor nunc massa vel. Cursus et ac volutpat
        maecenas eu nisl sed. Varius enim risus pellentesque in varius
      </p>
      <ButtonGeneralMain href="#" label="Lorem Button" />
    </article>
  );
}

import PropTitleGeneral from "@/src/interfaces/PropTitleGeneral";
import Image from "next/image";

export default function TitleGeneral({ name }: PropTitleGeneral) {
  return (
    <span className=" flex items-center justify-center gap-x-5">
      <Image
        src={"/svg/item-titleGeneral.svg"}
        width={24}
        height={24}
        alt="item para el titulo -> izquierdo"
      />
      <h2 className=" text-4xl font-bold">{ name }</h2>
      <Image
        src={"/svg/item-titleGeneral.svg"}
        width={24}
        height={24}
        alt="item para el titulo -> derecho"
      />
    </span>
  );
}

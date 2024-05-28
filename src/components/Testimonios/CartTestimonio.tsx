import MauriImg from "@/assets/Mauri.jpeg";
import Image from "next/image";

interface Props {
  name: string;
  profile: string;
}

export const CartTestimonio = ({ name, profile }: Props) => {
  return (
    <div className="p-4">
      <p className="text-base md:text-lg text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate ex
        libero.
      </p>
      <div className="w-full flex justify-center items-center gap-x-6 pt-10">
        <Image
          src={MauriImg}
          alt="Mauri"
          width={110}
          height={110}
          className=" object-cover border-2 w-[110px] h-[110px] border-mossGreen-500 rounded-full"
        />
        <div>
          <h2 className=" font-bold text-xl">{name}</h2>
          <h4 className=" font-normal text-base">{profile}</h4>
        </div>
      </div>
    </div>
  );
};

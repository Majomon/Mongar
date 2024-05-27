import TeamImg from "@/assets/Team.png";
import MauriImg from "@/assets/Mauri.jpeg";
import Image from "next/image";

export const CartTestimonio = () => {
  return (
    <div className="p-4">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate ex
        libero.
      </p>
      <div>
        <Image src={MauriImg} alt="Mauri" width={100} height={100} />
      </div>
    </div>
  );
};

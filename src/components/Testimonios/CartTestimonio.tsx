import MauriImg from "@/assets/Mauri.jpeg";
import Image from "next/image";

export const CartTestimonio = () => {
  return (
    <div className="p-4">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate ex
        libero.
      </p>
      <div className="w-full flex justify-center items-center gap-x-10 pt-10">
        <Image
          src={MauriImg}
          alt="Mauri"
          width={100}
          height={100}
          className="w-28 h-28 object-cover border-4 border-mossGreen-500 rounded-full"
        />
        <div>
          <h2>Mauri</h2>
          <h4>Developer</h4>
        </div>
      </div>
    </div>
  );
};

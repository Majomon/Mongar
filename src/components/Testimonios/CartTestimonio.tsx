import Image from "next/image";

interface Props {
  name: string;
  profile: string;
  label: string;
  image: string;
}

export const CartTestimonio = ({ name, profile, label, image }: Props) => {
  return (
    <div className="p-4">
      <p className="text-base md:text-lg text-center">{label}</p>
      <div className="w-full flex justify-center items-center gap-x-6 mt-6 overflow-hidden">
        <Image
          src={image}
          alt={name}
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

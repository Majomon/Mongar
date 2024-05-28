import Image from "next/image";
import { RedesTeam } from "./RedesTeam";
import { type CardTeams } from "@/interfaces";

export default function CardTeams({img, name, profession, networks}: CardTeams) {
  return (
    <div className="w-[300px] h-fit bg-gradient-cardTeam pb-2 ">
      <Image src={img} alt={name} width={300} height={300} className=" w-[300px] h-[300px] object-cover"/>
      <div className="flex flex-col items-center justify-center gap-y-2 h-[120px]">
        <h2 className="font-bold text-xl">{name}</h2>
        <p className="font-normal text-base text-center">{profession}</p>
        <RedesTeam redes={networks} />
      </div>
    </div>
  );
}

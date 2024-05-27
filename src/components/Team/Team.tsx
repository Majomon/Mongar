import Image from "next/image";
import TeamImg from "@/assets/Team.png";
import MauriImg from "@/assets/Mauri.jpeg";
import { RedesTeam } from "./RedesTeam";
import TitleGeneral from "../TitleGeneral/TitleGeneral";

const team = [
  {
    img: MauriImg,
    name: "Mauricio Monzón",
    area: "Full Stack Developer",
    redes: [
      {
        icon: "svg/Facebook.svg",
        name: "facebook",
        url: "https://www.facebook.com/mauri.monzon.568",
      },
      {
        icon: "svg/Instagram.svg",
        name: "instagram",
        url: "https://www.instagram.com/maurimonzon_j/",
      },
      {
        icon: "svg/Github.svg",
        name: "github",
        url: "https://github.com/Majomon",
      },
    ],
  },
  {
    img: MauriImg,
    name: "Mauricio Monzón",
    area: "Full Stack Developer",
    redes: [
      {
        icon: "svg/Facebook.svg",
        name: "facebook",
        url: "https://www.facebook.com/mauri.monzon.568",
      },
      {
        icon: "svg/Instagram.svg",
        name: "instagram",
        url: "https://www.instagram.com/maurimonzon_j/",
      },
      {
        icon: "svg/Behance.svg",
        name: "behance",
        url: "",
      },
      {
        icon: "svg/Github.svg",
        name: "github",
        url: "https://github.com/Majomon",
      },
    ],
  },
];

export const Team = () => {
  return (
    <section className="w-full h-fit relative py-10" id="equipo">
      <Image
        src={TeamImg}
        alt="Team"
        className="w-full h-full absolute -top-8 -z-10"
      />
      <TitleGeneral name="Equipo" />
      <div className="w-full flex flex-col sm:flex-row justify-center items-center py-6 gap-10">
        {team.map((pers, index) => (
          <div
            key={index}
            className="w-[250px] sm:w-[300px] h-fit bg-gradient-cardTeam pb-2"
          >
            <Image src={pers.img} alt={pers.name} width={300} height={300} />
            <div className="flex flex-col items-center justify-center gap-y-2">
              <h2 className="font-bold text-xl">{pers.name}</h2>
              <p className="font-normal text-xbase">{pers.area}</p>
              <RedesTeam redes={pers.redes} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

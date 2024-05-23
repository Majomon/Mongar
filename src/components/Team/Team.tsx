import Image from "next/image";
import TeamImg from "@/assets/Team.png";
import MauriImg from "@/assets/Mauri.jpeg";
import { RedesTeam } from "./RedesTeam";

const team = [
  {
    img: MauriImg,
    name: "Mauricio Monzón",
    area: "Full Stack Developer",
    redes: [
      {
        icon: "",
        name: "linkedin",
        url: "https://www.linkedin.com/in/mauricio-monzon/",
      },
      {
        icon: "",
        name: "facebook",
        facebook: "https://www.facebook.com/mauri.monzon.568",
      },
      {
        icon: "",
        name: "instagram",
        instagram: "https://www.instagram.com/maurimonzon_j/",
      },
      {
        icon: "",
        name: "github",
        github: "https://github.com/Majomon",
      },
    ],
  },
  {
    img: MauriImg,
    name: "Mauricio Monzón",
    area: "Full Stack Developer",
    redes: [
      {
        icon: "",
        name: "linkedin",
        url: "https://www.linkedin.com/in/mauricio-monzon/",
      },
      {
        icon: "",
        name: "facebook",
        facebook: "https://www.facebook.com/mauri.monzon.568",
      },
      {
        icon: "",
        name: "instagram",
        instagram: "https://www.instagram.com/maurimonzon_j/",
      },
      {
        icon: "",
        name: "behance",
        behance: "",
      },
      {
        icon: "",
        name: "github",
        github: "https://github.com/Majomon",
      },
    ],
  },
];

export const Team = () => {
  return (
    /*     <section className="w-full h-screen mx-auto flex justify-center items-end bg-[url('/svg/Team.svg')] bg-no-repeat bg-cover bg-center relative">
     */
    <section className="w-full h-[600px] relative py-10">
      <Image
        src={TeamImg}
        alt="Team"
        className="w-full h-full absolute -top-8 -z-10"
      />
      <div className="w-full h-fit flex justify-center items-center gap-2 z-50">
        <div className="w-6 h-6 rounded-full bg-mossGreen-500" />
        <h2 className="">Equipo</h2>
        <div className="w-6 h-6 rounded-full bg-mossGreen-500" />
      </div>
      <div className="w-full flex justify-center items-center py-6 gap-x-10">
        {team.map((pers, index) => (
          <div key={index} className="w-[300px] h-[400px]">
            <Image src={pers.img} alt={pers.name} width={300} height={300} />
            <div className="flex flex-col items-center justify-center gap-y-2">
              <h2 className="font-bold text-lg">{pers.name}</h2>
              <p className="font-semibold text-xs">{pers.area}</p>
              <div className="flex items-center justify-center gap-x-1"></div>
            </div>
            <RedesTeam redes={pers.redes} />
          </div>
        ))}
      </div>
    </section>
  );
};

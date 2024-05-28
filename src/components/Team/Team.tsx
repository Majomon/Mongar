import listTeam from "@/utils/listTeam";
import TitleGeneral from "../TitleGeneral/TitleGeneral";
import CardTeams from "./CardTeams";

export const Team = () => {
  return (
    <section className="w-full h-fit md:h-[730px] bg-cover bg-center md:bg-bottom py-10 bg-[url('/svg/Background-team.svg')]" id="equipo">
      <TitleGeneral name="Equipo" />
      <article className="w-full flex flex-col sm:flex-row justify-center items-center py-6 gap-10">
        {listTeam.map((pers, index) => (
          <CardTeams key={index} img={pers.img} name={pers.name} profession={pers.profession} networks={pers.networks}  />
        ))}
      </article>
    </section>
  );
};

import Image from "next/image";
import SectionWe from "../components/ui/SectionWe/SectionWe";
import SectionHero from "@/components/ui/SectionHero/SectionHero";
import { Contact } from "@/components/Contact/Contact";
import { Team } from "@/components/Team/Team";
import TitleGeneral from "@/components/TitleGeneral/TitleGeneral";

const listServices = [
  {
    icon: "/svg/Item-services-landingPage.svg",
    title: "Landing Page",
    description: `Lorem ipsum dolor sit amet consectetur. Ut congue semper laoreet
    tortor nunc massa vel.`,
  },
  {
    icon: "/svg/item-services-CRM.svg",
    title: "CRM",
    description: `Lorem ipsum dolor sit amet consectetur. Ut congue semper laoreet
    tortor nunc massa vel.`,
  },
  {
    icon: "/svg/Item-services-Ecommers.svg",
    title: "E-commers",
    description: `Lorem ipsum dolor sit amet consectetur. Ut congue semper laoreet
    tortor nunc massa vel.`,
  },
  {
    icon: "/svg/Item-services-desing.svg",
    title: "Rediseño Web",
    description: `Lorem ipsum dolor sit amet consectetur. Ut congue semper laoreet
    tortor nunc massa vel.`,
  },
  {
    icon: "/svg/Item-services-websiteCoding.svg",
    title: "Sitios Web Coorporativos",
    description: `Lorem ipsum dolor sit amet consectetur. Ut congue semper laoreet
    tortor nunc massa vel.`,
  },
  {
    icon: "/svg/item-services-catalog.svg",
    title: "Catalogo",
    description: `Lorem ipsum dolor sit amet consectetur. Ut congue semper laoreet
    tortor nunc massa vel.`,
  },
];

export default function HomePage() {
  return (
    <main className=" w-full min-h-screen overflow-x-hidden min-[900px]:overflow-x-visible">
      {/* elipce primario */}
      <Image
        src={"/svg/Ellipse-Hero-1.svg"}
        className=" absolute top-[-100px] md:top-[-250px] left-[-150px] -z-40 min-w-[400px]"
        width={706}
        height={706}
        alt="Elipce arriba"
      />
      <Image
        src={"/svg/Ellipses-group.svg"}
        className=" absolute top-[150px] right-0 -z-40 hidden md:block"
        width={1000}
        height={820}
        alt="grpo de Elipces"
      />
      <SectionHero />
      <SectionWe />
      <section className=" w-full h-[950px] relative flex flex-col gap-y-14 items-center justify-center">
        <TitleGeneral name="Servicios" />
        <article className=" flex gap-4 flex-wrap items-center justify-center">
          {/* Cards de los diversos servicios */}
          {listServices.map((item) => (
            <div key={item.title} className=" w-[400px] h-[300px] bg-[#142137] flex flex-col items-center justify-center gap-y-5">
              <Image
                src={item.icon}
                width={100}
                height={100}
                alt={`Imagen de servicios ${item.title}`}
              />
              <h3 className=" text-xl font-bold">{item.title}</h3>
              <p className=" text-center text-base font-normal max-w-[250px]">
                {item.description}
              </p>
            </div>
          ))}
        </article>
      </section>
      <Team />
      <Contact />
    </main>
  );
}

"use client";
import ButtonGeneralMain from "../../ButtonGeneralMain/ButtonGeneralMain";
import TitleGeneral from "../../TitleGeneral/TitleGeneral";
import CardPortafolio from "../../CardPortafolio/CardPortafolio"
import { Portafolio } from "@/interfaces";



const listCardProtafolio: Portafolio[] = [
    {
        src: "/image/FakeStore-TiendaOnline.png",
        href: "#",
        name: "Fake Store",
        category: "E-coomers",
    },
    {
        src: "/image/FotografiaExtrema-Cartel.png",
        href: "#",
        name: "FotografiaExtrema",
        category: "Diseño grafico",
    },
    {
        src: "/image/innmobiliaria-rediseño.png",
        href: "#",
        name: "Inmobiliaria",
        category: "Rediseño Web",
    },
    {
        src: "/image/Landing-page-Teeno.png",
        href: "#",
        name: "Teeno",
        category: "Landing Page",
    },
    {
        src: "/image/Ruslux-Inmobiliaria.png",
        href: "#",
        name: "Ruslux-Inmobiliaria",
        category: "Sitio web",
    },
    {
        src: "/image/Teza-Ecoomers.png",
        href: "#",
        name: "Teza",
        category: "E-commers",
    },
]

export default function SectionPortafolio() {
  return (
    <section className=" px-3 sm:px-0 py-28 flex flex-col gap-y-14 items-center justify-center bg-image-portafolio bg-no-repeat bg-cover bg-[center_bottom_24rem]">
      <TitleGeneral name="Portafolio" />
      <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* card de proyectos */}
        {listCardProtafolio.map(item => (
            <CardPortafolio key={item.name} src={item.src} href={item.href} name={item.name} category={item.category}  />
        ))}
      </article>
      <ButtonGeneralMain label="Ver mas" href={"#"} />
    </section>
  );
}

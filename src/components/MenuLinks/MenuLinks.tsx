import Link from "next/link";

interface ListMenu {
  name: string;
  href: string;
}

const listMenu: ListMenu[] = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Nosotros",
    href: "/",
  },
  {
    name: "Servicios",
    href: "/",
  },
  {
    name: "Portafolio",
    href: "/",
  },
  {
    name: "Testimonios",
    href: "/",
  },
  {
    name: "Equipo",
    href: "/",
  },
  {
    name: "Contacto",
    href: "/",
  },
];

export const MenuLinks = () => {
  return (
    <ul className="hidden lg:flex lg:flex-row items-center gap-x-4">
      {listMenu.map((item, index) => {
        return (
          <li key={index}>
            <Link href={item.href}>
              <span className="text-white">{item.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

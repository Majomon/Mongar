import { listMenu } from "@/utils/ListMenuLinks";
import Link from "next/link";

export const MenuLinksFooter = () => {
  return (
    <ul className="w-11/12 flex flex-wrap md:flex-row items-center justify-center gap-4">
      {listMenu.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>
            <span className="text-white text-xl font-normal hover:text-darkBlue-950 transition-all duration-300">{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

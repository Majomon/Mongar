import { listMenu } from "@/utils/ListMenuLinks";
import Link from "next/link";

export const MenuLinksFooter = () => {
  return (
    <ul className="w-11/12 flex flex-wrap md:flex-row items-center justify-center gap-x-4">
      {listMenu.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>
            <span className="text-white text-sm">{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

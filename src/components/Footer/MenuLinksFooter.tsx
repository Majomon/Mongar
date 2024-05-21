import { listMenu } from "@/utils/ListMenuLinks";
import Link from "next/link";

export const MenuLinksFooter = () => {
  return (
    <ul className="hidden md:flex md:flex-row items-center gap-x-4">
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

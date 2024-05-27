import { listMenu } from "@/utils/ListMenuLinks";
import Link from "next/link";

export const MenuLinks = () => {
  return (
    <ul className="hidden md:flex md:flex-row items-center gap-x-4">
      {listMenu.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>
            <span className="text-white text-lg font-normal hover:text-mossGreen-500 hover:border-b hover:pb-0.5 hover:border-mossGreen-500 transition-all duration-200">{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

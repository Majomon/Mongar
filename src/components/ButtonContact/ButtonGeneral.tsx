import Link from "next/link";

interface Props {
  label: string;
  href: string;
}

export const ButtonGeneral = ({ label, href }: Props) => {
  return (
    <div className="hidden md:flex py-2 px-6 rounded-xl bg-gradient-mossGreen border-l-2 border-mossGreen-400 cursor-pointer hover:border-mossGreen-200">
      <Link href={href}>
        <span className="text-gray-200 ">{label}</span>
      </Link>
    </div>
  );
};

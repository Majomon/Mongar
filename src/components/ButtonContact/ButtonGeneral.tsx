import Link from "next/link";

interface Props {
  label: string;
  href: string;
}

export const ButtonGeneral = ({ label, href }: Props) => {
  return (
    <div className="py-3 px-6 rounded-xl bg-mossGreen-500">
      <Link href={href}>
        <span className="text-white">{label}</span>
      </Link>
    </div>
  );
};

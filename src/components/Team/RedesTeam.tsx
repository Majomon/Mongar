import Image from "next/image";
import Link from "next/link";

// RedesTeam.tsx
interface Props {
  redes: {
    icon?: string;
    name?: string;
    url?: string;
  }[];
}

export const RedesTeam = ({ redes }: Props) => {
  return (
    <div className="flex items-center justify-center gap-x-2">
      {redes.map((red, index) => (
        <div key={index}>
          <Link href={red.url || ""} target="_blank">
            <Image
              src={red.icon || ""}
              alt={red.name || ""}
              width={20}
              height={20}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

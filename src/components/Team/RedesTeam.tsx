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
        <div key={index}>{red.name}</div>
      ))}
    </div>
  );
};

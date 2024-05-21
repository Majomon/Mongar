interface Props {
  label: string;
  href: string;
}

export const ButtonGeneral = ({ label, href }: Props) => {
  return (
    <div>
      <button className="text-white">Contactar</button>
    </div>
  );
};

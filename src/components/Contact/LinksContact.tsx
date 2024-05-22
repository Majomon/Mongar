import { RedesContact } from "./RedesContact";

export const LinksContact = () => {
  return (
    <div className="w-3/12 h-80 flex flex-col justify-center items-center gap-4 bg-gradient-formContact shadow-2xl">
      <div className="flex gap-4 items-center">
        <div className="w-6 h-6 rounded-full bg-mossGreen-500" />
        <h2 className="text-xl">Contactanos</h2>
        <div className="w-6 h-6 rounded-full bg-mossGreen-500" />
      </div>
      <RedesContact />
    </div>
  );
};

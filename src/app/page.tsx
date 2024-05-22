import Image from "next/image";
import SectionWe from "../components/ui/SectionWe/SectionWe";
import { Contact } from "@/components/Contact/Contact";

export default function HomePage() {
  return (
    <main className=" w-full min-h-screen">
      <SectionWe />
      <Contact />
    </main>
  );
}

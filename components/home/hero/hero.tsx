import Image from "next/image";
import { Button } from "@nextui-org/react";
import { FileText } from "lucide-react";
import PassportForm from "./passport-form";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-between w-full h-[calc(100vh-70px)]">
      <Image
        className="absolute inset-0 w-full h-full object-cover shrink-0"
        src="/assets/images/backgrounds/background.png"
        alt="herosection"
        fill
      />
      <div className="absolute w-full h-full bg-black/5 px-4"></div>

      <div className="absolute px-4 pt-4 inset-0 flex flex-col bottom-2 items-start justify-center text-left text-white text-xl sm:text-2xl lg:text-2xl font-semibold gap-20 lg:gap-32">
        {/* Texte principal */}
        <div className="bg-black/30 mx-auto relative right-0 md:right-80 justify-start p-8 flex flex-col gap-6">
          <div className="text-5xl">Bienvenue au <br />Tchad</div>
          <Button color="secondary" className="text-white">Prendre un rendez-vous</Button>
        </div>

        {/* Bouton bien espacé */}
        <div className="flex relative mx-auto justify-between items-center gap-4 md:gap-0 bg-primary w-full md:w-5/6 p-6">
          <div className="text-lg font-extralight flex items-center gap-2">
            <FileText size={32} className="text-white" />
            Demande de passeport et de visa
          </div>
          <PassportForm/>
        </div>
      </div>

      {/* Bouton gauche */}
      <div className="absolute hidden sm:flex lg:flex left-4 top-1/2 transform -translate-y-1/2 px-6 py-4 text-white bg-transparent border-2 border-white rounded-full cursor-pointer hover:bg-gray-200 transition">
        {"<"}
      </div>

      {/* Bouton droit */}
      <div className="absolute hidden sm:flex lg:flex right-4 top-1/2 transform -translate-y-1/2 px-6 py-4 text-white bg-transparent border-2 border-white rounded-full cursor-pointer hover:bg-gray-200 transition">
        {">"}
      </div>
    </div>
  );
}

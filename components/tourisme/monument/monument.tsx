import Image from "next/image";

type Monuments = {
  picture: string;
  title: string;
  subtitle: string;

};

const monument: Monuments[] = [
  {
    picture: "/assets/images/illustrations/tourisme/card1.png",
    title: "Lac Katam",
    subtitle: "Situé dans la région de l'Ennedi, le lac Katam est l'un des lacs du système d'Ounianga Kébir. Il se distingue par ses deux parties séparées par une étroite langue de sable, offrant des eaux aux teintes bleues et vertes en raison de la présence d'algues spécifiques.",
  },
  {
    picture: "/assets/images/illustrations/tourisme/card2.png",
    title: "Lac Fianga",
    subtitle: "Le lac Fianga, situé à la frontière entre le Tchad et le Cameroun, est alimenté par les eaux du Logone et du Mayo Kébbi. Ses niveaux d'eau varient selon les saisons, offrant des paysages changeants et une biodiversité riche.",
  },
  {
    picture: "/assets/images/illustrations/tourisme/card3.png",
    title: "Lac Tchad",
    subtitle: "Le lac Tchad est l'un des plus grands lacs d'Afrique, bien que sa superficie ait diminué au fil des décennies. Il reste une ressource vitale pour des millions de personnes et abrite une biodiversité unique.",
  },
  {
    picture: "/assets/images/illustrations/tourisme/card4.png",
    title: "Lac Yoa",
    subtitle: "Le lac Yoa est le plus grand des lacs d'Ounianga Kébir, avec une profondeur atteignant 20 mètres. Situé au cœur du désert du Sahara, il est alimenté par des nappes phréatiques fossiles, témoignant d'une époque où le climat de la région était plus humide.",
  },
  {
    picture: "/assets/images/illustrations/tourisme/card5.png",
    title: "Lac Fitri",
    subtitle: "Le lac Fitri, situé dans la région de Batha, est une zone humide importante pour l'agriculture et la pêche locales. Ses rives abritent une faune aviaire diversifiée, en faisant un lieu d'intérêt pour les ornithologues.",
  },
];

export default function Monument() {
  return (
        <div className="flex flex-col justify-around p-6 lg:p-20">
          <div className="flex justify-around gap-8 flex-col mt-3 lg:mt-10">
            {monument.map((items) => (
              <div
                key={items.title}
                className="flex flex-col md:flex-row items-center justify-center gap-8"
              >
                {/* Image */}
                <div className="relative flex-1 min-w-[300px]">
                  <Image
                    className="w-full h-auto object-contain"
                    src={items.picture}
                    alt={items.title}
                    width={300}
                    height={250}
                  />
                </div>

                {/* Texte */}
                <div className="flex flex-col gap-1 justify-center flex-1">
                  <div className="text-secondary text-5xl font-semibold">
                    {items.title}
                  </div>
                  <div className="font-mulish text-xl md:text-base">
                    {items.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  );
}
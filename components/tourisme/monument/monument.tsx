import { Button } from "@nextui-org/react";
import Image from "next/image";

type Monuments = {
  picture: string;
  title: string;
  subtitle: string;

};

const monument: Monuments[] = [
  {
    picture:
      "/assets/images/illustrations/tourisme/card_1.png",
    title: "Les lacs Ounianga",
    subtitle: "Également appelés les perles du désert, les lacs Ounianga sont une succession d’une dizaine de lacs dont le plus connu, l’Ounianga Kébir. Le spectacle d’oasis au milieu du désert est saisissant de beauté. Si vous avez l’occasion de visiter les lacs Ounianga pendant l’une des rares saisons de pluie, vous aurez le privilège d’admirer les caravanes organisées par les populations avoisinantes.",
  },
  {
    picture:
      "/assets/images/illustrations/tourisme/card_2.png",
    title: "Le parc national de Zakouma",
    subtitle: "Comptant parmi les plus grands parcs d’Afrique, le parc national de Zakouma dispose d’une réserve naturelle unique. Un safari et un campement au cœur du parc vous offrent l’opportunité d’observer de près la faune exceptionnelle du Tchad. La ville abritant le parc n’est pas sans attrait non plus. Plongez le temps d’un séjour dans le quotidien des habitants de Zakouma, dépaysement garanti."
  },
  {
    picture:
      "/assets/images/illustrations/tourisme/card_3.png",
    title: "La mosquée Fayçal",
    subtitle:"Si l’architecture et les édifices religieux vous fascinent, ne quittez pas N’Djamena sans avoir visité la mosquée Fayçal. Subventionnée par le roi Fayçal d’Arabie Saoudite, la mosquée en impose par ses minarets. En tenue décente, en dehors des heures de prière et sur autorisation de l’imam, vous avez la possibilité de visiter l’intérieur."
},
  {
    picture:
      "/assets/images/illustrations/tourisme/card_4.png",
    title: "Le lac Léré",
    subtitle: "L’ouest du Tchad conserve une tranquillité que le temps ne semble pas altérer. Sur la route de Léré, vous prendrez du plaisir à admirer le paysage, succession de falaises et de vallées verdoyantes. Au bord du lac, se côtoient pêcheurs lavandières et baigneurs. Le lac est connu pour être encore l’un des rares à abriter des lamantins, une espèce rare et protégée. Dans les filets des pêcheurs, on retrouve de délicieuses carpes qui n’attendent plus que d’être fumées." 
},
  {
    picture:
      "/assets/images/illustrations/tourisme/card_5.png",
    title: "Le musée national",
    subtitle: "À la croisée des routes caravanières et considéré comme le berceau de l’humanité grâce à des découvertes paléontologiques majeures, le Tchad est riche de son histoire et de sa culture. Au musée national situé à N’Djamena, vous aurez le loisir d’admirer le Tchad au fil du temps. Des expositions permanentes et temporaires explorent l’archéologie, la paléontologie, l’histoire et la culture des divers peuples qui ont vécu au Tchad il y a quelques milliers d’années."
 },
  {
    picture:
      "/assets/images/illustrations/tourisme/card_6.png",
    title: "Le massif du Tibesti",
    subtitle: "Une grande partie du Tchad est couverte par le désert. Au nord du pays, on retrouve celui du Tibesti et son massif montagneux. Les plus aventuriers pourraient en envisager l’ascension jusqu’à son point culminant, l’Emi koussi. Plus haut sommet du Tchad et du Sahara, l’Emi Koussi est un volcan éteint qui offre une vue panoramique du désert. Le Tibesti, c’est également des palmeraies, des sources thermales et des gravures rupestres qui ne laissent aucun visiteur indifférent."
},
  {
    picture:
      "/assets/images/illustrations/tourisme/card_7.png",
    title: "Les iles flottantes du lac Tchad",
    subtitle: "Le lac Tchad est célèbre pour sa faune et sa flore, mais aussi pour ses magnifiques iles flottantes. À bord d’une pirogue, vous prendrez du plaisir à les admirer depuis les eaux douces du lac. Vous pourrez observer de près la grande diversité d’espèces dont les éléphants, les hippopotames et divers oiseaux migratoires. Comme vous pourrez le constater, le temps semble suspendu quand on vogue sur le lac Tchad."
},
  
];
export default function Monument() {
  return (
    <div className="flex flex-col justify-around p-6 lg:p-20">
      
      <div className="flex justify-around gap-8 flex-col mt-3 lg:mt-10">
        {monument.map((items) => {
          return (
            <div
              key={items.title} 
              className="flex flex-col md:flex-row justify-center gap-8"
            >
              <div className="overflow-hidden  relative">
                              <Image
                                  className="w-full h-auto object-cover"
                                  src={items.picture}
                                  alt={items.title}
                                  width={300} 
                                  height={250} 
                                  objectFit="cover" 
                              />
                              
                </div>
                <div className="flex flex-col gap-1 justify-around flex-1">
                  <div className="text-secondary text-5xl font-semibold">
                    {items.title}
                  </div>
                  <div className="font-mulish text-xl md:text-base">
                    {items.subtitle}
                  </div>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
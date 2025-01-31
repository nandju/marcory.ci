import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Presentation(){
    return(
    <div className="flex flex-col gap-4 p-6 m-4">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 p-6 m-4">
        <div className="relative w-80 h-80">
          <Image
            src="/assets/images/illustrations/page-accueil/country.png"
            alt="histoire-3"
            layout="fill"
            objectFit="contain"

          />
        </div>
          <div className="flex flex-col  gap-8">
            <div className="text-secondary text-3xl font-semibold">
            Bienvenue à l'ambassade du TCHAD à Abidjan,<br />en Côte d'Ivoire
            </div>
            <div className="font-mulish">
            L'ambassade du Tchad à Abidjan est accréditée en Côte d'Ivoire pour le maintien et le renforcement des <br />relations diplomatiques entre le Tchad et la Côte d'Ivoire. La mission est également responsable de la <br /> coordination, de la promotion et de la protection des intérêts nationaux du Tchad et des Tchadiens dans <br />le pays hôte de manière à contribuer de manière significative à l'amélioration de la sécurité et au <br />développement socio-économique du pays.
            </div>
          </div>

      </div>
      <div className="flex flex-col-reverse md:flex-row-reverse justify-between gap-4 p-6 m-4">
        <div className="relative w-80 h-80">
          <Image
            src="/assets/images/illustrations/page-accueil/leader.png"
            alt="histoire-3"
            layout="fill"
            objectFit="contain"

          />
        </div>
          <div className="flex flex-col gap-8">
            <div className="text-secondary text-3xl font-semibold">
            Mot de l’Ambassadeur
            </div>
            <div className="font-mulish">
            L’Ambassade du Tchad en République fédérale d’Côte D’Ivoire a pour mission de mettre en <br /> œuvre la politique étrangère de la République du Tchad relative aux diverses relations <br /> politiques, économiques, culturelles, etc en Côte D’Ivoire et dans les autres pays sous <br /> juridiction. <br />
            Notre site qui permet ainsi que d’autres canaux de favoriser ces diverses relations est <br /> au service de tous et de toutes ceux et celles qui veulent avoir des informations sur le Tchad et <br /> sur les services que peut offrir le service des Affaires Consulaires aux ressortissants <br /> Tchadiens et à toute personne ou groupes, sociétés ou Associations désireuses de visiter le <br /> Tchad, Pays de Toumaï.
            </div>
          </div>

      </div>
    </div>
    );
}
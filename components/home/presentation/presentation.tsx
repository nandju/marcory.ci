import Image from "next/image";

export default function Presentation() {
  return (
    <div className="flex flex-col gap-4 p-6 m-4">
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-4">
        <div className="relative w-80 h-80 shrink-0">
          <Image
            src="/assets/images/illustrations/page-accueil/leader.png"
            alt="histoire-3"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col gap-8 max-w-screen-sm">
          <div className="text-secondary text-3xl md:text-3xl font-semibold">
            Mot de l’Ambassadeur
          </div>
          <div className="font-mulish text-justify text-sm md:text-base">
            L’Ambassade du Tchad en République fédérale d’Côte D’Ivoire a pour
            mission de mettre en œuvre la politique étrangère de la République
            du Tchad relative aux diverses relations politiques, économiques,
            culturelles, etc en Côte D’Ivoire et dans les autres pays sous
            juridiction. Notre site qui permet ainsi que d’autres canaux de
            favoriser ces diverses relations est au service de tous et de toutes
            ceux et celles qui veulent avoir des informations sur le Tchad et
            sur les services que peut offrir le service des Affaires Consulaires
            aux ressortissants Tchadiens et à toute personne ou groupes,
            sociétés ou Associations désireuses de visiter le Tchad, Pays de
            Toumaï.
          </div>
        </div>
      </div>
    </div>
  );
}

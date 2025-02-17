import Image from "next/image";

export default function Ambassadeur() {
  return (
    <div className="p-6 m-4 md:p-12 space-y-8 mx-auto max-w-screen-xl">
      <div className="text-secondary text-3xl md:text-5xl font-semibold">
        L&apos;AMBASSADEUR
      </div>
      <div className="flex flex-col-reverse md:flex-row items-stretch justify-around gap-4 md:gap-12">
        <div className="relative w-full max-w-96 h-[400px] md:h-[500px]">
          <Image
            src="/assets/images/illustrations/ambassade/ambassadeur.png"
            alt="histoire-3"
            fill
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-4 flex justify-center ">
            <div className="  flex flex-col gap-2 justify-start font-mulish border px-6 border-white text-white">
              <div className="text-xl">Gonfouli SOUARIBA</div>
              <div className="text-base">
                Ambassadeur du Tchad en Côte d&apos;Ivoire
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-between flex-1">
          <div className="text-secondary text-xl md:text-3xl font-semibold">
            Bienvenue sur le Site de l&apos;Ambassade du Tchad en Côte d’Ivoire
          </div>
          <div className="font-mulish text-sm md:text-base text-justify">
            L&apos;Ambassade de la République du Tchad auprès de la République
            de Turquie, placée sous l&apos;autorité de Son Excellence Monsieur
            Gonfouli SOUARIBA, Ambassadeur Extraordinaire et Plénipotentiaire, a
            été créée en 2014 avec Résidence à Ankara. Outre, son Ambassade dont
            le siège se trouve à Ankara, capitale administrative et politique de
            la Turquie, le Tchad dispose d&apos;un Consulat honoraire à
            Istanbul. Il n&apos;est pas superflu de rappeler que
            l&apos;Ambassade du Tchad en Turquie a pour vocation de promouvoir
            de bonnes relations entre nos deux (02) pays (Tchad et Turquie).
            L&apos;objectif principal de notre site est donc de fournir à tous
            l&apos;actualité la plus récente dans le développement de nos
            relations, les meilleures informations et services en vue de
            faciliter les séjours en Turquie de nos compatriotes, et enfin,
            d&apos;offrir aux visiteurs de tous horizons, une vision
            authentique, multidimensionnelle et complète du Tchad. Nous avons
            l&apos;immense plaisir de vous guider à travers le Tchad, Pays de
            Toumaî, Berceau de l&apos;Humanité, avec ses paysages pittoresques
            et variés, constitués des zones montagneuses, forêts, savanes,
            déserts et surtout de deux (02) Sites inscrits sur la liste du
            Patrimoine Mondial de l&apos;UNESCO à savoir les Lacs
            d&apos;Ounianga et les Massifs de l&apos;Ennedi. Aussi, voudrais-je
            profiter de cette opportunité pour vous souhaiter, au nom du
            Gouvernement de la République du Tchad et au mien propre, la
            cordiale bienvenue sur notre site.
          </div>

          <div className="font-mulish font-extrabold md:font-bold text-lg text-center py-8">
            Sincères et chalereuses salutations <br /> Son Excellence Monsieur Gonfouli
            SOUARIBA, <br /> Ambassadeur de la République du Tchad auprès de la
            République de Turquie.
          </div>
        </div>
      </div>
    </div>
  );
}

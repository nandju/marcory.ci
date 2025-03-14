import Image from "next/image";

export default function Ambassadeur() {
  return (
    <div className="p-6 m-4 lg:p-12 space-y-8 mx-auto max-w-screen-xl">
      <div className="text-secondary text-3xl lg:text-5xl font-semibold">
        L&apos;AMBASSADEUR
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-stretch justify-around gap-4 lg:gap-12">
        <div className="relative w-full max-w-96 h-[400px] lg:h-[650px] mx-auto">
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
          Bienvenue sur le site de l&apos;Ambassade.
          </div>
          <div className="font-mulish text-sm md:text-base text-justify">
            La R&eacute;publique du Tchad, pays de Touma&iuml;, de par sa position g&eacute;ographique strat&eacute;gique, occupe une place de choix au c&oelig;ur du continent africain. Le pays, apr&egrave;s une transition politique r&eacute;ussie en trois ann&eacute;es, sous le leadership du Marechal du Tchad, Mahamat Idriss DEBY ITNO, Pr&eacute;sident de la R&eacute;publique, Chef de l&apos;&Eacute;tat, amorce des pas de g&eacute;ant pour son d&eacute;collage &eacute;conomique. Le programme politique du Chef de l&apos;&Eacute;tat est structur&eacute; autour de douze chantiers, comprenant chacun plusieurs actions notamment la paix, la s&eacute;curit&eacute; nationale, la promotion d&apos;un &Eacute;tat solidaire….
            
            Le programme de d&eacute;veloppement intitul&eacute; <span className="font-bold"> &quot;Vision 2030, le Tchad que nous voulons&quot; </span>, ax&eacute; sur l&apos;agenda 2063 de l&apos;Union Africaine et de l&apos;agenda 2030 des Nations Unies promulgu&eacute;s par les Chefs des &Eacute;tats membres de l&apos;Union Africaine est en cours d&apos;ex&eacute;cution. Ce programme bas&eacute; sur une ex&eacute;cution pragmatique a pour objectif de faire du Tchad un pays &eacute;mergent &agrave; l&apos;horizon 2030.
            
            L&apos;Ambassade du Tchad en R&eacute;publique de C&ocirc;te d&apos;Ivoire a juridiction dans quatre autres pays notamment : le Ghana, la Guin&eacute;e, la Sierra Leone et le Liberia. Les objectifs principaux de la mission sont le maintien et le renforcement des relations diplomatiques entre le Tchad et ces cinq pays. Cette diplomatie tous azimuts embrasse les domaines aussi vari&eacute;s que l&apos;&eacute;conomie, la culture et tout ce que comporte la coop&eacute;ration moderne entre les pays &eacute;pris de paix et ayant en partage des int&eacute;r&ecirc;ts communs.
            
            La mission de la Haute Repr&eacute;sentation du Tchad en C&ocirc;te d&apos;Ivoire consiste &eacute;galement &agrave; prot&eacute;ger les int&eacute;r&ecirc;ts de sa communaut&eacute; dans les cinq pays de sa juridiction, conform&eacute;ment aux usages diplomatiques.
            
            La plateforme qui vous est propos&eacute;e constitue une r&eacute;f&eacute;rence unique et efficace pour obtenir des informations g&eacute;n&eacute;rales sur le Tchad, afin de promouvoir efficacement le commerce, les investissements, le tourisme et la culture.
            
            Toute l&apos;&eacute;quipe de l&apos;Ambassade sera toujours &agrave; votre disposition pour vous r&eacute;server un accueil chaleureux, pas seulement aux Tchadiens, mais &agrave; tous ceux d&apos;autres pays qui souhaitent avoir des informations essentielles sur les services que nous offrons, notamment la d&eacute;livrance des visas et autres documents administratifs (carte consulaire, acte de naissance, acte de mariage et de d&eacute;c&egrave;s…).
            
            En attendant une visite physique que nous esp&eacute;rons proche, soyez les bienvenus au &quot;Tchad virtuel&quot;.
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

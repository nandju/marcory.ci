import Image from "next/image";

export default function President() {
  return (
    <div className="p-8 mb-10">
      <div className="flex flex-col justify-center gap-10">
        <div className="text-secondary ml-0 md:ml-4 text-3xl font-semibold text-center md:text-start">
          UN PAYS QUI ÉMERGE
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Image */}
          <div className="flex flex-1 justify-center w-full max-w-3xl">
            <Image
              className="w-auto h-[900px] object-contain"
              src="/assets/images/illustrations/tourisme/Photo_Officielle_final.png"
              alt="profil"
              width={300}
              height={250}
            />
          </div>

          {/* Texte avec puces */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg w-full">
          <div className="font-extrabold text-gray-700 text-xl">MON PROJET POUR LE TCHAD</div>
            <ul className="list-disc list-inside space-y-3 text-gray-700 font-mulish">
              <li><span className="font-bold">CHANTIER 1 :</span> RENFORCER LA PAIX, LA RÉCONCILIATION NATIONALE ET LA SÉCURITÉ POUR TOUS LES TCHADIENS</li>
              <li><span className="font-bold">CHANTIER 2 :</span> RÉFORMER L’ÉTAT, BÂTIR UNE RÉPUBLIQUE FORTE ET JUSTE</li>
              <li><span className="font-bold">CHANTIER 3 :</span> PROMOUVOIR UN ÉTAT SOLIDAIRE POUR TOUS</li>
              <li><span className="font-bold">CHANTIER 4 :</span> REFONDER LE SYSTÈME ÉDUCATIF ET BÂTIR UN PLAN AMBITIEUX POUR LA JEUNESSE ET LES SPORTS</li>
              <li><span className="font-bold">CHANTIER 5 :</span> PROMOUVOIR LES DROITS DE LA FEMME ET SON RÔLE DANS LA SOCIÉTÉ</li>
              <li><span className="font-bold">CHANTIER 6 :</span> DÉVELOPPER UNE ÉCONOMIE RÉSILIENTE ET DIVERSIFIÉE</li>
              <li><span className="font-bold">CHANTIER 7 :</span> RENDRE L’EAU ET L’ÉNERGIE ACCESSIBLES À TOUS</li>
              <li><span className="font-bold">CHANTIER 8 :</span> CONSTRUIRE LES INFRASTRUCTURES DU DÉSENCLAVEMENT</li>
              <li><span className="font-bold">CHANTIER 9 :</span> INDUSTRIALISER NOTRE AGRICULTURE ET NOTRE ÉLEVAGE</li>
              <li><span className="font-bold">CHANTIER 10 :</span> POURSUIVRE LA MODERNISATION DE NOTRE SYSTÈME DE SANTÉ</li>
              <li><span className="font-bold">CHANTIER 11 :</span> RENFORCER LE RAYONNEMENT DU TCHAD À L’ÉTRANGER ET FAIRE DE LA DIASPORA UN VÉRITABLE LEVIER DE DÉVELOPPEMENT. </li>
              <li><span className="font-bold">CHANTIER 12 :</span> PROMOUVOIR LES MERVEILLES CULTURELLES ET TOURISTIQUES DU TCHAD</li>
            </ul>
            <div className="mt-6 flex flex-col gap-3">
            <div className=" font-semibold text-gray-900">
              Maréchal du Tchad IDRISS DEBY ITNO <br />
              Président de la République
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}



export default function Experience(){
    return(
        <div className="font-mulish m-6">
            <div className="flex flex-col md:flex-row justify-center gap-2 py-4">
                <div className="bg-primary text-white px-2 md:px-12 py-1 font-medium rounded-full md:rounded-b-md cursor-pointer text-center">Biographie et Expérience Professionnelles</div>
                <div className="bg-gray-300 text-white px-2 md:px-12 py-1 rounded-full md:rounded-b-md hover:bg-gray-400 cursor-pointer text-center">Autres Expériences</div>
                <div className="bg-gray-300 text-white px-2 md:px-12 py-1 rounded-full md:rounded-b-md hover:bg-gray-400 cursor-pointer text-center">Certificats Obtenus</div>
                <div className="bg-gray-300 text-white px-2 md:px-12 py-1 rounded-full md:rounded-b-md hover:bg-gray-400 cursor-pointer text-center">Galerie Photo</div>
            </div>
            <div className="flex flex-col justify-start gap-6 py-4 ml-0 md:ml-24">
                <div>Nom et Pénoms: Gonfouli SOUARIBA</div>
                <div>Date et Lieu de Naissance: le 15 janvier 1976 à Faya-Largeau (B.E.T)</div>
                <div>Profil: Juriste et Enarque de Formation (ENAM du Tchad)</div>
                <div>Profession actuelle: Ambassadeur.</div>
            </div>
            <div className="py-4 ml-0 md:ml-24">
                <div className=" text-gray-700 text-lg font-semibold md:font-normal pb-6">Expériences Professionnelles</div>
                <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Ancien Ministre de la Formation professionnelle et des Petits Métiers (05 février 2017 au 07 mai 2018);</li>
                <li>Ancien Gouverneur des Régions ci-après:</li>
                <li>1 Région du Lac-Tchad, chef lieu de la ville de Bol (2011);</li>
                <li>20 Région de l&apos;Ennedi Est, chef lieu de la ville d&apos;Amdjarass (2013);</li>
                <li>0 Région du Guéra, chef lieu de la ville de Mongo (2015);</li>
                <li>0 Région du Bahr Elghazel, chef lieu de la ville de Moussoro (2016 jusqu&apos;au - 04 février 2017).</li>
                <li>Ancien Député au titre de la 2ème Législature (2002-2011);</li>
                <li>Ancien juge Titulaire à la Haute Cour de Justice au titre de l&apos;Assemblée Nationale de 2002 2011 (2ème Législature);</li>
                <li>Ancien Responsable de la Chambre Administrative de la Cour Suprême du Tchad de 2001-2002. etc.</li>
                </ul>
            </div>
        </div>
    );
}
import { Link } from "@nextui-org/react";


export default function Statistic(){
    return(
        <div id="statistic" className="font-mulish m-8 pb-6">
            <div className="flex flex-col md:flex-row justify-center gap-2 py-4">
                <Link href="#statistic"><div className="bg-primary text-white px-2 md:px-40 py-1 font-medium rounded-full md:rounded-b-md cursor-pointer text-center">Chiffres clés</div></Link>
                <Link href="#history"><div className="bg-gray-300 text-white px-2 md:px-40 py-1 rounded-full md:rounded-b-md hover:bg-gray-400 cursor-pointer text-center">Histoire</div></Link>
                <Link href="#geography"><div className="bg-gray-300 text-white px-2 md:px-40 py-1 rounded-full md:rounded-b-md hover:bg-gray-400 cursor-pointer text-center">Géographie</div></Link>
            </div>
            <div className="space-y-2 ml-10">
            <ul className="list-disc list-outside pl-5 space-y-2">
                <li>Capitale : N’Djaména</li>
                <li>Superficie : 1 284 000 km²</li>
                <li>Population : 16 877 357 habitants (2020)</li>
                <li>Densité : 13 hab/km²</li>
                <li>Religions : Islam (env. 60%) – Christianisme (env. 30%) – Autres (10%)</li>
                <li>Langues officielles : Arabe et Français</li>
                <li>Monnaie : Franc CFA</li>
                <li>PIB (en milliard de fcfa) : 3 232</li>
                <li>PIB/hab : 1.000 US$</li>
                <li>Principales villes : Sarh, Moundou, Abéché</li>
            </ul>
            </div>
        </div>
    );
}
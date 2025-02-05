

export default function Statistic(){
    return(
        <div className="font-mulish m-8 pb-6">
            <div className="flex flex-row justify-center gap-2 py-4">
                <div className="bg-primary text-white px-40 py-1 font-medium rounded-t-md cursor-pointer">Chiffres clés</div>
                <div className="bg-gray-300 text-white px-40 py-1 rounded-t-md hover:bg-gray-400 cursor-pointer">Histoire</div>
                <div className="bg-gray-300 text-white px-40 py-1 rounded-t-md hover:bg-gray-400 cursor-pointer">Géographie</div>
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
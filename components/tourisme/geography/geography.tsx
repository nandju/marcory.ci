import { Link } from "@nextui-org/react";

export default function Geography(){
    return(
        <div id="geography" className="font-mulish m-8 pb-6">
            <div className="flex flex-col md:flex-row justify-center gap-2 py-4">
            <Link href="tchad-s"><div className="bg-gray-300 text-white px-2 md:px-40 py-1 rounded-full md:rounded-b-md hover:bg-gray-400 cursor-pointer text-center w-full md:w-auto">Chiffres clés</div></Link>
            <Link href="tchad-h"><div className="bg-gray-300 text-white px-2 md:px-40 py-1 rounded-full md:rounded-b-md hover:bg-gray-400 cursor-pointer text-center w-full md:w-auto">Histoire</div></Link>
            <Link href="tchad-g"><div className="bg-primary text-white px-2 md:px-40 py-1 font-medium rounded-full md:rounded-b-md cursor-pointer text-center w-full md:w-auto">Géographie</div></Link>
            </div>
            <div>
            <div className="space-y-2 mx-10">
            <div className="pb-6"></div>
            <ul className="list-disc list-outside pl-5 space-y-2">
                <li>Trait d’union entre le Maghreb et l’Afrique noire, carrefour des caravanes transsahariennes et berceau des civilisations nomades, ce pays cristallise en lui les contrastes entre le désert du Nord et la savane du Sud, les ascétiques traditions musulmanes et les rites animistes ou chrétiens élaborés, les populations nomades vivant au rythme de leur chameau et au gré de pâturages, et les agriculteurs sédentaires s’employant à domestiquer la terre et à lui donner un visage humain.
                </li>
                <li>Le Tchad est un pays d’Afrique centrale qui s’étend sur un territoire d’une superficie de 1.284.000 km2, 560 km2 sont à vocation agricole. Vingtième pays au monde par sa superficie, le Tchad est le cinquième pays le plus grand pays d’Afrique après le Soudan, l’Algérie, la République Démocratique du Congo et la Libye.
                </li>
                <li>Ce pays se caractérise par son immensité (2 fois plus grands que la France) mais aussi par son enclavement et son éloignement de la mer. Il est situé à 1700 km de Douala (Cameroun) et 2 400 km de Port Soudan sur la mer rouge.
                </li>
                <li>Ses frontières sont communes avec le Soudan à l’Est, la République Centrafricaine et le Cameroun du Sud, le Nigeria à l’Ouest, le Niger au Nord –Ouest et la Libye au Nord.
                </li>
            </ul>
            </div>
            <div className="space-y-2 mx-10">
            <div className=" text-gray-700 text-lg py-6">Relief</div>
            <ul className="list-disc list-outside pl-5 space-y-2">
                <li>Le relief du Tchad est comparable à une cuvette bordée par deux couronnes de montagnes et de plateau : au Nord avec le massif de Tibesti ( 3415 m au volcan de l’Emi Koussi) et à l’Est par le plateau gréseux de l’Ouaddaï (1360m) s’abaissant vers le Sud-Ouest. La zone la plus basse est occupée par le Lac Tchad, réceptacle final de vastes plaines d’inondation des fleuves Chari et Logone.
                </li>
                <li>Ces deux fleuves constituent l’unique réseau fluvial : le Cari coule sur 1200km depuis la Centrafrique et son principal affluent le Logone naît au Cameroun sur 1000km. Tous deux confluent à l’approche de la capitale. Ils sont en partie navigables quatre mois par an. Il y a cinq lacs principaux : Tchad, Fitri, Iro, Lere, Tekem. Les eaux y sont très poissonneuses mais rendues dangereuses par la bilharziose et le ver de Guinée
                </li>
            </ul>
            </div>
            <div className="space-y-2 mx-10">
            <div className=" text-gray-700 text-lg py-6">Climat et Végétation</div>
            <ul className="list-disc list-outside pl-5 space-y-2">
                <li>Le climat est un climat tropical humide au sud (zone soudanienne la plus arrosée et la plus peuplée), offrant un paysage de savane arborée et de forêt plus clairsemée à l’approche des villages en raison de la coupe abusive du bois. Le climat de la zone centrale est de type sahélien caractérisé par une steppe épineuse, fortement marqué par une saison sèche plus longue que la saison des pluies. Le Nord, soumis à un climat saharien désertique aux paysages contrastés, représente la moitié de la superficie du pays.
                </li>
                <li>L’harmattan, un vent continental sec et chaud, est porteur de vents en provenance de l’Est et du Nord-Ouest du Sahara. La mousson, équatoriale, humide et fraîche avec des vents du Sud-Ouest, rythme saison sèche et saison des pluies.
                </li>
                <li>Le territoire compte 600 000 hectares de forêts classées et 400 000 hectares de parcs nationaux. Les deux parcs les plus importants offrant le plus de variétés d’espèces sont le célèbre parc national de Zakouma dans le Salamat et celui de Manda dans la préfecture de Sarh.
                </li>
            </ul>
            </div>
            </div>
        </div>
    );
}
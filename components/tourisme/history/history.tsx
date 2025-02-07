import { Link } from "@nextui-org/react";

export default function History(){
    return(
        <div id="history" className="font-mulish m-8 pb-6">
            <div className="flex flex-col md:flex-row justify-center gap-2 py-4">
            <Link href="tchad-s"><div className="bg-gray-300 text-white px-2 md:px-40 py-1 rounded-full md:rounded-b-md hover:bg-gray-400 cursor-pointer text-center w-full md:w-auto">Chiffres clés</div></Link>
            <Link href="tchad-h"><div className="bg-primary text-white px-2 md:px-40 py-1 font-medium rounded-full md:rounded-b-md cursor-pointer text-center w-full md:w-auto">Histoire</div></Link>
            <Link href="tchad-g"><div className="bg-gray-300 text-white px-2 md:px-40 py-1 rounded-full md:rounded-b-md hover:bg-gray-400 cursor-pointer text-center w-full md:w-auto">Géographie</div></Link>
            </div>
            <div className="space-y-2 mx-10">
            <ul className="list-disc list-outside pl-5 space-y-2">
                <li>L’histoire du Tchad remonte au Xe siècle, lorsque les Sao s’établissent au sud du Lac Tchad. Ces Sao, aujourd’hui disparus, sont ls ancêtres de plusieurs populations de la région tchadienne parmi lesquelles les Kotokos, peuple important de chasseurs et de pêcheurs. De nombreuses pièces de terre cuite et de bronze fabriquées par les Sao et représentant des êtres humains et des animaux ont été retrouvées au sud du Lac Tchad.
                </li>
                <li>Dans la seconde moitié du XIXe siècle, l’Europe découvre l’existence du Tchad par les récits des voyageurs Cheik El Toussi, Barth (1857) et Nachtigal (1879).
                </li>
                <li>Plusieurs Etats puissants se constituèrent, s’affrontèrent, se dominèrent tout à tour ; le royaume du Kanem-Bornou, le sultanat de Barguirmi, le puissant empire Ouaddaï étendirent successivement leur domination sur la majeure partie actuelle du pays entre le Ixe et la fin du XVIIIe siècle.
                </li>
                <li>La fondation de N’djaména (ex Fort-Lamy), future capitale du Tchad, et le rétablissement de la paix dans le royaume de Baguirmi et dans le royaume voisin du Ouaddaï mirent un terme aux luttes. Il faut attendre 1913 pour que le Tchad soit entièrement constitué.
                </li>
                <li>En 1940, Félix Eboué, gouverneur du Tchad, décide le ralliement du pays à la France libre. C’est du Tchad que pourra partir le Général Leclerc, et les soldats tchadiens seront à Paris pour la Libération.
                </li>
                <li>Proclamé République le 28 novembre 1958, le Tchad accède à la souveraineté internationale le 11 août 1960. Depuis cette date, le pays connaît une évolution institutionnelle et politique.
                </li>
                <li>Des années de dictature et de parti unique ont empêché l’éclosion de toute culture démocratique et  de pluralisme politique.
                </li>
                <li>Les différents régimes qui se sont succédé ont créé et entretenu le régionalisme, le tribalisme, le népotisme, les inégalités sociales, les violations des droits de l’Homme et des libertés fondamentales individuelles et collectives dont les conséquences ont été la guerre, la violence politique, la haine, l’intolérance et la méfiance entre les différentes communautés qui composent la nation tchadienne. Cette crise institutionnelle et politique qui secoue le Tchad depuis plus de trois décennies n’a pas pour autant entamé la détermination du peuple tchadien à parvenir à l’édification d’une nation, à la dignité, à la liberté et à la prospérité.
                </li>
                <li>Le Tchad vit actuellement dans une démocratie pluraliste démocratie avec un président de la République et un parlement élus par le peuple.
                </li>
            </ul>
            </div>
        </div>
    );
}
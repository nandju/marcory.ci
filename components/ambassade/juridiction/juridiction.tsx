import Image from "next/image";

export default function Juridiction(){
    return(
        <div className="font-mulish py-16 px-8 mb-96">
            <div className="flex flex-col">
                <div className="ml-24" >
                La République du Tchad compte plusieurs représentations diplomatiques et Consulaires à l’étranger (Décret N°0089/PR/ <br /> MAEIACID/2020 du 19 février 2020).
                </div>
            <div className="flex flex-row justify-center gap-2 py-4">
                <div className="bg-primary text-white px-40 py-1 font-medium rounded-t-md cursor-pointer">Ambassades et représentations permanentes</div>
                <div className="bg-gray-300 text-white px-40 py-1 rounded-t-md hover:bg-gray-400 cursor-pointer">Postes consulaires</div>
            </div>
            <div className="relative flex items-center justify-between w-full h-[calc(100vh-90px)]">
                  <Image
                    className="absolute inset-0 w-full h-full object-cover shrink-0"
                    src="/assets/images/backgrounds/background.png"
                    alt="herosection"
                    fill
                  />
                  <div className="absolute w-full h-full bg-blue-800/50 px-4"></div>

            
                  <div className="absolute px-4 pt-4 inset-0 flex flex-col bottom-2 items-start justify-center text-left gap-20 lg:gap-32">
                    {/* Texte principal */}
                    <div className=" mx-auto relative py-8 px-24 top-60 flex bg-white flex-col gap-6">

                        <div className="flex flex-wrap justify-between px-6 gap-8">
                        {/* Première colonne */}
                        <div className="flex-1">
                            <ol className="space-y-2 list-none pl-5">
                            <li>1. Algérie</li>
                            <li>2. Afrique du Sud</li>
                            <li>3. Côte D’Ivoire</li>
                            <li>4. Arabie Saoudite</li>
                            <li>5. Belgique</li>
                            <li>6. Brésil</li>
                            <li>7. Burkina Faso</li>
                            <li>8. Cameroun</li>
                            <li>9. Canada</li>
                            <li>10. Suisse</li>
                            <li>11. Congo</li>
                            <li>12. Côte d’Ivoire</li>
                            <li>13. Égypte</li>
                            <li>14. Émirats Arabes Unis</li>
                            <li>15. États-Unis d’Amérique</li>
                            <li>16. Éthiopie</li>
                            <li>17. Fédération de Russie</li>
                            <li>18. France</li>
                            <li>19. Gabon</li>
                            </ol>
                        </div>

                        {/* Deuxième colonne */}
                        <div className="flex-1">
                            <ol className="space-y-2 list-none pl-5">
                            
                            <li>20. Guinée Équatoriale</li>
                            <li>21. Inde</li>
                            <li>22. Japon</li>
                            <li>23. Koweït</li>
                            <li>24. Libye</li>
                            <li>25. Mali</li>
                            <li>26. Niger</li>
                            <li>27. Nigeria</li>
                            <li>28. Qatar</li>
                            <li>29. New York (Représentation Permanente)</li>
                            <li>30. République Centrafricaine</li>
                            <li>31. République Démocratique du Congo</li>
                            <li>32. République Populaire de Chine</li>
                            <li>33. Royaume du Maroc</li>
                            <li>34. Norvège</li>
                            <li>35. Soudan</li>
                            <li>36. Turquie</li>
                            </ol>
                        </div>
                        </div>

                    
                    </div>
            
                    
                  </div>
            
                  
                </div>
            </div>
        </div>
    );
}
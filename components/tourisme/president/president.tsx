import Image from "next/image";

export default function President(){
    return(
        <div className="p-8 mb-10">
            <div className="flex flex-col justify-center gap-10">
                <div className="text-secondary ml-0 md:ml-4 text-3xl font-semibold text-center md:text-start">UN PAYS QUI EMERGE</div>
                <div className="overflow-hidden items-center flex justify-center relative">
                              <Image
                                  className="w-auto h-auto object-cover"
                                  src="/assets/images/illustrations/tourisme/president.png"
                                  alt="profil"
                                  width={300} 
                                  height={250} 
                                  objectFit="cover" 
                              />
                </div>
                <div className="flex justify-between md:justify-center gap-0 md:gap-6 items-center max-w-6xl mx-auto">
                <div className="overflow-hidden relative hidden md:block">
                              <Image
                                  className="w-auto h-auto object-cover"
                                  src="/assets/images/illustrations/tourisme/puce.png"
                                  alt="profil"
                                  width={350} 
                                  height={300} 
                                  objectFit="cover" 
                              />
                </div>
                    <div className="font-mulish flex flex-col gap-3">
                        <div className="italic">Partis d’un État ruiné, d’infrastructures délabrées, d’une population traumatisée, très peu de personnes <br /> nous accordaient la moindre chance de restaurer l’État, de recréer un environnement démocratique en <br /> restituant au peuple les libertés perdues et le droit à la parole. Ensemble nous avons réussi à conjurer <br /> les mauvais augures en dotant notre pays d’institutions nouvelles.</div>
                        <div className="font-semibold">Maréchal du Tchad IDRISS DEBY ITNO <br />
                        Président de la république</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
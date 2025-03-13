import Image from "next/image";

export default function Experience(){

    type agent = {
        name: string;
        picture: string;
        job: string;
    };

    const Agent : agent [] = [
        {
            name: "",
            picture: "/assets/images/illustrations/ambassade/team1.png",
            job:"Son Excellence M. SOUARIBA Gonfouli,\n Ambassadeur Extraordinaire et Plenipotentiaire de la république du Tchad en CI "
        },
        {
            name: "",
            picture: "/assets/images/illustrations/ambassade/team4.png",
            job:"M. ACHEIKH MAKAYE NIMIR,\n Premier Conseiller "
        },
        {
            name: "",
            picture: "/assets/images/illustrations/ambassade/team2.png",
            job:"Mme REMADJI Christelle,\n Conseillère Économique",
        },
        {
            name: "",
            picture: "/assets/images/illustrations/ambassade/team3.png",
            job:"Mr Nadjo KAINA,\n Attaché",
        }
    ]

    return(
        <div className="m-6">
            <div className="flex flex-col justify-center gap-6 py-4">
                <div className="flex font-mulish flex-col justify-center items-center gap-4">
                    <div className="text-secondary text-3xl md:text-5xl font-semibold">L'ÉQUIPE</div>
                    <div className="text-secondary text-xl">Découvrez les membres qui font vivre l'Ambassade</div>
                </div>
                <div className="flex flex-row flex-wrap justify-center gap-4">
                    {Agent.map((agent, index) => (
                        /* From Uiverse.io by Javierrocadev */
                        <div
                            key={index}
                            className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-zinc-800 text-gray-50 p-5"
                        >
                            <div className="relative w-full h-60">
                                <Image
                                    src={agent.picture}
                                    alt={agent.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="group-hover:scale-110 duration-500"
                                />
                            </div>
                            <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
                                <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-secondary"></div>
                                <span className="text-xl font-bold">{agent.name}</span>
                                <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">{agent.job}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
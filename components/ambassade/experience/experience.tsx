import React from "react";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Globe, Briefcase } from "lucide-react";

const TeamMember = () => {
  type Agent = {
    name: string;
    picture: string;
    job: string;
  };

  const agents: Agent[] = [
    {
      name: "M. SOUARIBA Gonfouli",
      picture: "/assets/images/illustrations/ambassade/team1.png",
      job: "Ambassadeur du Tchad en CI ",
    },
    {
      name: "M. ACHEIKH MAKAYE NIMIR",
      picture: "/assets/images/illustrations/ambassade/team4.png",
      job: "Premier Conseiller ",
    },
    {
      name: "Mme REMADJI Christelle",
      picture: "/assets/images/illustrations/ambassade/team2.png",
      job: "Conseillère Économique",
    },
    {
      name: "Mr Nadjo KAINA",
      picture: "/assets/images/illustrations/ambassade/team3.png",
      job: "Attaché",
    },
  ];

  const socialIcons = [
    { icon: <Facebook className="w-5 h-5" />, label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram" },
    { icon: <Globe className="w-5 h-5" />, label: "Website" },
  ];

  return (
    <div className=" py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center pb-10">
          <h2 className="text-secondary text-3xl md:text-5xl font-semibold">L&apos;ÉQUIPE</h2>
          <p className="text-secondary text-lg md:text-xl mt-2">Découvrez les membres qui font vivre l&apos;Ambassade</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {agents.map((agent, index) => (
            <div 
              key={index} 
              className="relative group w-72 h-96 bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-60">
                <Image
                  src={agent.picture}
                  alt={agent.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-300 group-hover:scale-105"
                />
              </div>

              {/* Infos */}
              <div className="p-5 text-center">
                <h3 className="text-gray-800 font-bold text-lg">{agent.name}</h3>
                <p className="text-gray-600 text-sm flex items-center justify-center gap-2 mt-1">
                  <Briefcase className="w-4 h-4 text-gray-500" /> {agent.job}
                </p>

                {/* Réseaux sociaux */}
                <div className="flex justify-center gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {socialIcons.slice(0, 3).map((social, idx) => (
                    <button
                      key={idx}
                      className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-all"
                      title={social.label}
                    >
                      {social.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;

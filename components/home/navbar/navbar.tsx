"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Search } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Head() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Accueil", link: "/" },
    { name: "L'Ambassade", link: "/ambassade" },
    { name: "Services consulaires", link: "/services" },
    { name: "Investir au Tchad", link: "/investir" },
    { name: "Tourisme", link: "/tourisme" },
    { name: "Menus", link: "/menus" },
  ];

  return (

    <div className="flex justify-center items-center w-full bg-primary gap-6 p-4">
      {/* Partie Gauche */}
      <Link href="/">
        <Image
          src="/assets/images/logo.png"
          alt="Embassy of Chad Logo"
          width={100}
          height={100}
          priority
          className="cursor-pointer"
        />
      </Link>

      {/* Partie Droite */}
      <div>
        {/* En haut */}
        <div className="flex justify-between">
          {/* Titre */}
          <div className="flex flex-col text-white">
            <span className="text-2xl font-bold">EMBASSADE DU TCHAD</span>
            <div className="flex flex-row items-center gap-2">
              <span className="text-orange-500 font-semibold">
                CÔTE D'IVOIRE
              </span>
              <Image
                src="/assets/images/logo_1.png"
                alt="Ivory Coast Flag"
                width={20}
                height={15}
                className="cursor-pointer"
              />
            </div>
          </div>

          {/* Langues + Recherche */}
          <div className="flex gap-4 items-center">
            <div className="flex gap-2">
              <Link
                href="/fr"
                className="text-sm text-red-500 hover:underline"
              >
                FR
              </Link>
              <span className="text-sm text-white">|</span>
              <Link
                href="/ar"
                className="text-sm text-white hover:underline"
              >
                AR
              </Link>
            </div>

            <div className="flex flex-row-reverse items-center bg-[#123682] rounded-full px-6 py-1 mr-4">
              <Search className="text-white" size={28} />
              <input
                type="text"
                placeholder="Rechercher..."
                className="bg-transparent text-white placeholder-white/70 focus:outline-none ml-2 w-52 text-sm"
              />
            </div>
          </div>
        </div>

        {/* En bas */}
        <div className="border-t border-white items-center flex gap-4 mt-4 pt-2">
          {/* Contacts */}
          <div className="flex flex-col text-white">
            <span className="flex items-center gap-2">
              <Phone size={16} />
              <span className="text-sm">Tel: +49 30 30 30 30 30</span>
            </span>
            <span className="flex items-center gap-2">
              <Mail size={16} />
              <span className="text-sm">Email: contact@ambassadetchad.com</span>
            </span>
          </div>

          {/* Menu */}
          <div className="flex gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className={`text-sm px-2 ${
                  pathname === item.link
                    ? "bg-white text-[#00205B] rounded-full"
                    : "text-white hover:bg-[#123682] rounded-full transition-colors"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

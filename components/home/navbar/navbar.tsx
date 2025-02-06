"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Search, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Head() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Accueil", link: "/" },
    { name: "L'Ambassade", link: "/ambassade" },
    { name: "Services consulaires", link: "/services" },
    { name: "Investir au Tchad", link: "/investir" },
    { name: "Tourisme", link: "/tourisme" },
    { name: "Menus", link: "/menus" },
  ];

  return (
    <div className="w-full bg-primary p-4">
      {/* Navbar container */}
      <div className="flex justify-between md:justify-center gap-0 md:gap-6 items-center max-w-6xl mx-auto">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt="Embassy of Chad Logo"
            width={80}
            height={80}
            priority
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-col text-white">
          {/* En-tête */}
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <span className="text-xl font-bold">AMBASSADE DU TCHAD</span>
              <div className="flex flex-row items-center gap-2">
                <span className="text-orange-500 font-semibold">
                  CÔTE D&apos;IVOIRE
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
                <Link href="/fr" className="text-sm text-red-500 hover:underline">
                  FR
                </Link>
                <span className="text-sm text-white">|</span>
                <Link href="/ar" className="text-sm text-white hover:underline">
                  AR
                </Link>
              </div>

              <div className="flex items-center bg-[#123682] rounded-full px-6 py-1">
                <Search className="text-white" size={24} />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="bg-transparent text-white placeholder-white/70 focus:outline-none ml-2 w-52 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Contacts + Menu */}
          <div className="border-t border-white flex justify-between items-center gap-4 mt-4 pt-2">
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

            {/* Menu Desktop */}
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

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center text-white mt-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="py-2 text-lg w-full text-center border-b border-white"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

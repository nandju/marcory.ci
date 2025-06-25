"use client"

import Image from "next/image"
import { Star, Building2, AlertTriangle, Facebook, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react"

export default function MayorMessage() {
  return (
    <section className="bg-white py-24 mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu de Gauche */}
          <div className="space-y-6 h-full flex flex-col justify-center">
            {/* En-tête de Bienvenue */}
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-[#F77F00] fill-current" />
              <span className="text-[#F77F00] font-semibold text-sm tracking-wide uppercase">BIENVENUE À MARCORY</span>
            </div>

            {/* Titre Principal */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Marcory est une Commune Urbaine
            </h2>

            {/* Séparateur */}
            <div className="w-12 h-1 bg-[#F77F00]"></div>

            {/* Message du Maire */}
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Notre commune s'engage avec détermination pour le bien-être de tous ses citoyens et le développement harmonieux de notre territoire.
              </p>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">Maire, "Aby Raoul"</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ensemble, nous construisons une ville moderne, inclusive et durable. Chaque projet que nous menons vise à améliorer la qualité de vie de nos concitoyens et à préserver notre patrimoine pour les générations futures.
                </p>
              </div>
            </div>

            {/* Signature */}
            <div className="pt-4">
              <Image
                src="/assets/images/illustrations/page-accueil/signature-removebg-preview.png"
                alt="Signature du Maire Jordan Cooper"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>

            {/* Icônes Réseaux Sociaux */}
            <div className="flex gap-3 pt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#009E60] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#F77F00] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#009E60] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#F77F00] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            {/* Informations de Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              {/* Bureau du Maire */}
              <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-[#009E60]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#009E60] bg-opacity-10 rounded-lg flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Bureau du Maire</h4>
                    <p className="text-gray-600 text-sm">+225-(0)1-23-45-67-89</p>
                  </div>
                </div>
              </div>

              {/* Services d'Urgence */}
              <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-[#F77F00]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F77F00] bg-opacity-10 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Services d'Urgence</h4>
                    <p className="text-gray-600 text-sm">15 (Police, Pompiers...)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Informations Supplémentaires */}
            <div className="grid grid-cols-1 gap-4">
              {/* Adresse de la Mairie */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#009E60] bg-opacity-10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Mairie de Marcory</h4>
                    <p className="text-gray-600 text-sm">Avenue Victor Biaka Boda, Quartier Résidentiel, Abidjan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu de Droite - Photo du Maire */}
          <div className="relative h-full flex items-center">
            <div className="relative overflow-hidden rounded-lg shadow-lg group w-full">
              {/* Photo du Maire avec Effet Hover */}
              <div className="relative overflow-hidden">
                <Image
                  src="/assets/images/illustrations/page-accueil/aby-raoul.png"
                  alt="Maire Jordan Cooper"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Superposition qui apparaît au survol */}
                <div className="absolute inset-0 bg-[#009E60]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Citation en Superposition */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <blockquote className="text-white">
                  <p className="text-lg font-medium leading-relaxed">
                    "On ne doit pas commettre les mêmes erreurs qu’hier"
                  </p>
                </blockquote>
              </div>

              {/* Ligne Décorative */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F77F00]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
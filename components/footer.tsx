"use client"

import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Send, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Contact Information Bar */}
      <div className="border-b border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Nous trouver */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#F77F00" }}
              >
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Nous trouver</h4>
                <p className="text-gray-400 text-sm">Rue du Chevaler de Clieu, Abidjan</p>
              </div>
            </div>

            {/* Nous appeler */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#F77F00" }}
              >
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Nous appeler</h4>
                <p className="text-gray-400 text-sm">01 23 45 67 89</p>
              </div>
            </div>

            {/* Nous écrire */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#F77F00" }}
              >
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Nous écrire</h4>
                <p className="text-gray-400 text-sm">contact@mairie.fr</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/assets/images/logo.png"
                alt="Logo Mairie"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Au service de nos concitoyens avec dévouement et transparence. Votre administration locale s'engage à
              améliorer la qualité de vie de tous les habitants à travers des services publics efficaces.
            </p>

            {/* Horaires d'ouverture */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Clock className="h-4 w-4" style={{ color: "#009E60" }} />
                Horaires d'ouverture
              </h4>
              <div className="text-gray-400 text-sm space-y-1">
                <p>Lun - Ven : 8h00 - 17h00</p>
                <p>Sam : 9h00 - 12h00</p>
                <p className="text-red-400">Dim : Fermé</p>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h4 className="font-semibold mb-4">Suivez-nous</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center hover:bg-blue-500 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: "#009E60" }}
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Liens utiles */}
          <div>
            <h4 className="font-semibold mb-6" style={{ color: "#F77F00" }}>Liens utiles</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Services municipaux
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Démarches en ligne
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Actualités
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Vie culturelle
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services rapides */}
          <div>
            <h4 className="font-semibold mb-6" style={{ color: "#F77F00" }}>Services rapides</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  État civil
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Urbanisme
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Carte d'identité
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Passeport
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Conseil municipal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Élections
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-6" style={{ color: "#F77F00" }}>Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Restez informé des actualités municipales, des événements et des annonces importantes. Abonnez-vous à
              notre lettre d'information.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Votre adresse email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#F77F00] focus:ring-[#F77F00]"
              />
              <Button 
                size="icon" 
                className="flex-shrink-0 hover:opacity-90 transition-opacity" 
                style={{ backgroundColor: "#009E60" }}
                aria-label="S'abonner"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              En vous abonnant, vous acceptez de recevoir nos communications.
            </p>
          </div>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="border-t border-gray-800 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <p className="text-gray-400 text-sm">
              © 2024 Mairie. Tous droits réservés. | Développé avec 
              <span className="mx-1" style={{ color: "#F77F00" }}>♥</span>
              pour nos citoyens
            </p>
            <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Accueil
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Accessibilité
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Plan du site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
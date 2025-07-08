"use client"

import Image from "next/image"
import Link from "next/link"
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
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#F77F00" }}>
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Nous trouver</h4>
                <p className="text-gray-400 text-sm">Rue du Chevalier de Clieu, Abidjan</p>
              </div>
            </div>

            {/* Nous appeler */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#F77F00" }}>
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Nous appeler</h4>
                <p className="text-gray-400 text-sm">01 23 45 67 89</p>
              </div>
            </div>

            {/* Nous écrire */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#F77F00" }}>
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
          <div>
            <div className="mb-4">
              <Image src="/assets/images/logo.png" alt="Logo Mairie" width={200} height={60} className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Au service de nos concitoyens avec dévouement et transparence. Votre administration locale s'engage à améliorer la qualité de vie de tous les habitants à travers des services publics efficaces.
            </p>

            {/* Horaires */}
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
                <a href="https://facebook.com" target="_blank" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://instagram.com" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity" style={{ backgroundColor: "#009E60" }}>
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Liens utiles */}
          <div>
            <h4 className="font-semibold mb-6" style={{ color: "#F77F00" }}>Liens utiles</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/conseil-municipal">Conseil municipal</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/actualites">Actualités</Link></li>
              <li><Link href="/cultures">Vie culturelle</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services rapides */}
          <div>
            <h4 className="font-semibold mb-6" style={{ color: "#F77F00" }}>Services rapides</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/etat-civil">État civil</Link></li>
              <li><Link href="/urbanisme">Urbanisme</Link></li>
              <li><Link href="/identite">Carte d'identité</Link></li>
              <li><Link href="/passeport">Passeport</Link></li>
              <li><Link href="/conseil-municipal">Conseil municipal</Link></li>
              <li><Link href="/elections">Élections</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-6" style={{ color: "#F77F00" }}>Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Restez informé des actualités municipales, des événements et des annonces importantes.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Votre adresse email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#F77F00] focus:ring-[#F77F00]"
              />
              <Button size="icon" className="flex-shrink-0 hover:opacity-90 transition-opacity" style={{ backgroundColor: "#009E60" }}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              En vous abonnant, vous acceptez de recevoir nos communications.
            </p>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-800 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <p className="text-gray-400 text-sm">
              © 2025 Mairie. Tous droits réservés. | Développé avec
              <span className="mx-1" style={{ color: "#F77F00" }}>♥</span>
              pour nos citoyens
            </p>
            {/* <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
              <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">Accueil</Link>
              <Link href="/mentions-legales" className="text-gray-400 hover:text-white text-sm transition-colors">Mentions légales</Link>
              <Link href="/confidentialite" className="text-gray-400 hover:text-white text-sm transition-colors">Confidentialité</Link>
              <Link href="/accessibilite" className="text-gray-400 hover:text-white text-sm transition-colors">Accessibilité</Link>
              <Link href="/plan-du-site" className="text-gray-400 hover:text-white text-sm transition-colors">Plan du site</Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

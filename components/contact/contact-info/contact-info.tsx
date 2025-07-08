"use client"

import Image from "next/image"
import { Mail, Phone, Clock, ExternalLink, Facebook, Twitter, Instagram } from "lucide-react"

export default function ContactInfo() {
  const handleGetDirections = () => {
    const address = "Boulevard Lagunaire, Cocody, Abidjan, Côte d'Ivoire"
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://maps.google.com/maps?q=${encodedAddress}`, "_blank")
  }

  const handleSocialClick = (platform: string) => {
    // Remplacer par les URLs réelles des réseaux sociaux
    const urls = {
      facebook: "https://facebook.com/mairieabidjan",
      twitter: "https://twitter.com/mairieabidjan",
      instagram: "https://instagram.com/mairieabidjan",
      google: "https://business.google.com/mairieabidjan",
    }
    window.open(urls[platform as keyof typeof urls], "_blank")
  }

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Section Gauche - Informations de Contact */}
          <div className="space-y-8">
            {/* En-tête */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-semibold tracking-wide uppercase" style={{ color: "#F77F00" }}>★ NOUS CONTACTER</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Trouvez Nos Informations de Contact
              </h2>
              <div className="w-16 h-1 mb-6" style={{ backgroundColor: "#F77F00" }}></div>
              <p className="text-gray-600 leading-relaxed">
                Nous comprenons qu'il est important pour vous d'accéder à nos services de manière rapide et efficace.
              </p>
            </div>

            {/* Adresse Postale */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#F77F00" }}
                >
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Adresse de la Mairie</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Boulevard Lagunaire, Cocody, Abidjan, Côte d'Ivoire
                  </p>
                </div>
              </div>

              <button
                onClick={handleGetDirections}
                className="flex items-center gap-2 text-gray-900 font-semibold transition-colors group"
                style={{ color: "#009E60" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#F77F00"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#009E60"}
              >
                OBTENIR L'ITINÉRAIRE
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Réseaux Sociaux */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Réseaux Sociaux</h3>
              <div className="flex gap-3">
                <button
                  onClick={() => handleSocialClick("facebook")}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-colors hover:opacity-80"
                  style={{ backgroundColor: "#009E60" }}
                >
                  <Facebook className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleSocialClick("twitter")}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-colors hover:opacity-80"
                  style={{ backgroundColor: "#F77F00" }}
                >
                  <Twitter className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleSocialClick("google")}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-colors hover:opacity-80"
                  style={{ backgroundColor: "#009E60" }}
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </button>
                <button
                  onClick={() => handleSocialClick("instagram")}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-colors hover:opacity-80"
                  style={{ backgroundColor: "#F77F00" }}
                >
                  <Instagram className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Section Centrale - Image du Bâtiment */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/assets/images/backgrounds/background1.png"
                alt="Hôtel de Ville - Mairie d'Abidjan"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Section Droite - Détails de Contact */}
          <div className="space-y-8">
            {/* Contacts Email */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#F77F00" }}
                >
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Services Administratifs</h3>
                    <a
                      href="mailto:administration@mairie-abidjan.ci"
                      className="text-gray-600 transition-colors"
                      style={{ color: "#009E60" }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "#F77F00"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "#009E60"}
                    >
                      administration@mairie-abidjan.ci
                    </a>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">État Civil</h3>
                    <a
                      href="mailto:etatcivil@mairie-abidjan.ci"
                      className="text-gray-600 transition-colors"
                      style={{ color: "#009E60" }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "#F77F00"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "#009E60"}
                    >
                      etatcivil@mairie-abidjan.ci
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Numéros de Téléphone */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#F77F00" }}
                >
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Téléphone</h3>
                    <a 
                      href="tel:+22527212345" 
                      className="text-gray-600 transition-colors"
                      style={{ color: "#009E60" }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "#F77F00"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "#009E60"}
                    >
                      +225 27 21 23 45
                    </a>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Fax</h3>
                    <a 
                      href="tel:+22527212346" 
                      className="text-gray-600 transition-colors"
                      style={{ color: "#009E60" }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "#F77F00"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "#009E60"}
                    >
                      +225 27 21 23 46
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Heures d'Ouverture */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#F77F00" }}
                >
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Lundi - Vendredi</h3>
                    <p className="text-gray-600">07h30 à 16h30</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Samedi</h3>
                    <p className="text-gray-600">08h00 à 12h00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact d'Urgence */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Services d'Urgence</h3>
              <p className="text-gray-600 text-sm mb-4">Pour les urgences municipales en dehors des heures d'ouverture :</p>
              <a
                href="tel:185"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: "#009E60" }}
              >
                <Phone className="h-4 w-4" />
                Appeler le 185
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
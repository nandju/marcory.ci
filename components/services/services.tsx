"use client"

import { useState } from "react"
import { FileText, Award as Certificate, Stamp, Building, Users, Monitor, MapPin, ExternalLink } from "lucide-react"
import Image from "next/image"

const services = [
  {
    id: 1,
    title: "Demande d'actes d'état civil",
    subtitle: "Actes de naissance, mariage et décès.",
    icon: FileText,
    image: "/assets/images/illustrations/page-accueil/items-1.png",
    description: "Documents officiels d'état civil délivrés avec validité juridique pour toutes procédures administratives.",
    demarcheInfo: {
      title: "Comment procéder pour les actes d'état civil",
      steps: [
        "Présentez-vous au bureau d'état civil avec une pièce d'identité",
        "Remplissez le formulaire de demande approprié",
        "Payez les frais de dossier (500 FCFA par acte)",
        "Récupérez votre acte sous 2-3 jours ouvrables"
      ],
      horaires: "Lundi à Vendredi : 8h00 - 17h00",
      contact: "Service État Civil - Rez-de-chaussée, Bureau 101"
    },
    pageLink: "/services/actes-etat-civil"
  },
  {
    id: 2,
    title: "Délivrance d'attestations",
    subtitle: "Attestations de résidence, célibat, vie, etc.",
    icon: Certificate,
    image: "/assets/images/illustrations/page-accueil/items-2.png",
    description: "Diverses attestations administratives requises pour les procédures légales et personnelles.",
    demarcheInfo: {
      title: "Comment obtenir vos attestations",
      steps: [
        "Apportez une pièce d'identité et un justificatif de domicile",
        "Précisez le type d'attestation souhaité",
        "Payez les frais (300 FCFA par attestation)",
        "Attestation disponible le même jour"
      ],
      horaires: "Lundi à Vendredi : 8h00 - 17h00",
      contact: "Service Attestations - 1er étage, Bureau 205"
    },
    pageLink: "/services/attestations"
  },
  {
    id: 3,
    title: "Légalisation de documents",
    subtitle: "Validation officielle de documents administratifs.",
    icon: Stamp,
    image: "/assets/images/illustrations/page-accueil/items-3.png",
    description: "Authentification et validation officielle de documents pour reconnaissance juridique.",
    demarcheInfo: {
      title: "Processus de légalisation",
      steps: [
        "Présentez les documents originaux à légaliser",
        "Vérifiez l'authenticité des signatures",
        "Payez les frais de légalisation (1000 FCFA par document)",
        "Récupérez vos documents légalisés sous 24h"
      ],
      horaires: "Lundi à Vendredi : 8h00 - 16h00",
      contact: "Service Légalisation - 1er étage, Bureau 210"
    },
    pageLink: "/services/legalisation"
  },
  {
    id: 4,
    title: "Déclarations et procédures foncières",
    subtitle: "Permis de construire, certificats de situation géographique, etc.",
    icon: Building,
    image: "/assets/images/illustrations/page-accueil/items-4.png",
    description: "Services fonciers complets incluant permis et certificats de localisation.",
    demarcheInfo: {
      title: "Démarches foncières",
      steps: [
        "Dépôt du dossier complet avec plans et documents",
        "Examen technique par nos services",
        "Validation par la commission d'urbanisme",
        "Délivrance du permis (délai: 4-6 semaines)"
      ],
      horaires: "Lundi à Vendredi : 8h00 - 16h00",
      contact: "Service Urbanisme - 2ème étage, Bureau 301"
    },
    pageLink: "/services/urbanisme-foncier"
  },
  {
    id: 5,
    title: "Recensement des citoyens",
    subtitle: "Inscription numérique des résidents de la commune.",
    icon: Users,
    image: "/assets/images/illustrations/page-accueil/items-5.png",
    description: "Système d'inscription numérique moderne pour une gestion efficace des données citoyennes.",
    demarcheInfo: {
      title: "Processus de recensement",
      steps: [
        "Munissez-vous d'une pièce d'identité et justificatif de domicile",
        "Remplissage du formulaire de recensement",
        "Prise de photo et enregistrement biométrique",
        "Remise du reçu de recensement"
      ],
      horaires: "Lundi à Vendredi : 8h00 - 17h00",
      contact: "Service Recensement - Rez-de-chaussée, Bureau 105"
    },
    pageLink: "/services/recensement"
  },
  {
    id: 6,
    title: "Suivi en ligne des dossiers",
    subtitle: "Vérification de l'avancement des demandes et prise de rendez-vous.",
    icon: Monitor,
    image: "/assets/images/illustrations/page-accueil/items-6.png",
    description: "Suivez vos demandes et prenez rendez-vous via notre plateforme numérique.",
    demarcheInfo: {
      title: "Utilisation du système de suivi",
      steps: [
        "Connectez-vous avec votre numéro de dossier",
        "Consultez l'état d'avancement en temps réel",
        "Recevez des notifications automatiques",
        "Prenez rendez-vous directement en ligne"
      ],
      horaires: "Service disponible 24h/24",
      contact: "Support technique - Bureau 302, ou +225 27 20 21 22 30"
    },
    pageLink: "/services/suivi-en-ligne"
  },
]

export default function Services() {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [showPopup, setShowPopup] = useState<boolean>(false)
  const [selectedService, setSelectedService] = useState<any>(null)

  const handleCardClick = (id: number) => {
    setActiveCard(activeCard === id ? null : id)
  }

  const handleDemarcheClick = (service: any) => {
    setSelectedService(service)
    setShowPopup(true)
  }

  const handlePageRedirect = (link: string) => {
    // Redirection réelle vers une nouvelle page
    window.location.href = link
  }

  const closePopup = () => {
    setShowPopup(false)
    setSelectedService(null)
  }

  return (
    <section id="services" className="py-12" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-sm font-semibold tracking-wide uppercase" style={{ color: "#F77F00" }}>
              ★ GOUVERNANCE & STRATÉGIE ★
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Découvrez les Services de la Mairie</h2>
          <div className="w-16 h-1 mx-auto" style={{ backgroundColor: "#F77F00" }}></div>
        </div>

        {/* Grille des Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            const isActive = activeCard === service.id

            return (
              <div
                key={service.id}
                className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  isActive ? "scale-105" : ""
                }`}
                onClick={() => handleCardClick(service.id)}
              >
                <div
                  className={`relative h-96 rounded-lg overflow-hidden shadow-lg transition-all duration-500 ${
                    isActive ? "shadow-2xl" : "shadow-md hover:shadow-xl"
                  }`}
                >
                  {/* Image de Fond */}
                  <div className="absolute inset-0">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 transition-all duration-500 ${
                        isActive 
                          ? "bg-gradient-to-br from-[#F77F00]/95 to-[#009E60]/95" 
                          : "bg-black/40 group-hover:bg-[#009E60]/60"
                      }`}
                    />
                  </div>

                  {/* Contenu */}
                  <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-6">
                    {!isActive ? (
                      /* État par Défaut */
                      <>
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-white/30">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 leading-tight">{service.title}</h3>
                        <div className="w-12 h-0.5 mb-4" style={{ backgroundColor: "#F77F00" }}></div>
                        <p className="text-white/90 text-sm leading-relaxed">{service.subtitle}</p>
                      </>
                    ) : (
                      /* État Activé/Étendu */
                      <>
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 border-2 border-white/30">
                          <IconComponent className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{service.title}</h3>
                        <div className="w-16 h-0.5 bg-white mb-4"></div>
                        <p className="text-white text-sm leading-relaxed mb-6 max-w-xs">{service.description}</p>

                        {/* Boutons d'Action */}
                        <div className="flex gap-4">
                          <button 
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleDemarcheClick(service)
                            }}
                          >
                            <MapPin className="h-5 w-5" style={{ color: "#009E60" }} />
                          </button>
                          <button 
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
                            onClick={(e) => {
                              e.stopPropagation()
                              handlePageRedirect(service.pageLink)
                            }}
                          >
                            <ExternalLink className="h-5 w-5" style={{ color: "#F77F00" }} />
                          </button>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Indicateur de Survol */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ 
                      background: `linear-gradient(to right, #F77F00, #009E60)` 
                    }}
                  ></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Appel à l'Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Besoin d'aide avec l'un de nos services ? Notre équipe dédiée est là pour vous accompagner dans toutes 
            vos démarches municipales de manière efficace.
          </p>
          <button
            className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 text-white"
            style={{ backgroundColor: "#009E60" }}
          >
            Contacter Notre Équipe Support
          </button>
        </div>
      </div>

      {/* Popup Modal pour les Démarches */}
      {showPopup && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-90vh overflow-y-auto">
            <div className="p-6">
              {/* En-tête du Popup */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-gray-900 pr-4">
                  {selectedService.demarcheInfo.title}
                </h3>
                <button
                  onClick={closePopup}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              {/* Contenu du Popup */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Étapes à suivre :</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                    {selectedService.demarcheInfo.steps.map((step: string, index: number) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Horaires :</h4>
                  <p className="text-sm text-gray-600">{selectedService.demarcheInfo.horaires}</p>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Localisation :</h4>
                  <p className="text-sm text-gray-600">{selectedService.demarcheInfo.contact}</p>
                </div>
              </div>

              {/* Boutons d'Action */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={closePopup}
                  className="flex-1 px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#009E60" }}
                >
                  Compris
                </button>
                <button
                  onClick={() => {
                    closePopup()
                    handlePageRedirect(selectedService.pageLink)
                  }}
                  className="flex-1 px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#F77F00" }}
                >
                  Plus d'Infos
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
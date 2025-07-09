"use client"

import { useState } from "react"
import { Plus, Minus, ArrowRight } from "lucide-react"

const faqData = [
  {
    id: 1,
    question: "Comment contacter le Maire ?",
    answer:
      "Vous pouvez contacter le Maire par plusieurs canaux : visitez la Mairie pendant les heures d'ouverture (Lun-Ven 8h00 - 17h00), appelez le bureau du Maire au +225 27 20 21 22 23, envoyez un email à maire@commune-abidjan.ci, ou prenez rendez-vous via notre système de réservation en ligne. Pour les urgences, contactez notre ligne principale.",
  },
  {
    id: 2,
    question: "Le Maire envoie-t-il des messages de félicitations ?",
    answer:
      "Oui, le Maire est heureux d'envoyer des messages de félicitations pour des étapes importantes telles que les anniversaires de mariage (50+ ans), les anniversaires de naissance (80+ ans), les anniversaires d'entreprise, les réalisations communautaires et les reconnaissances spéciales. Veuillez soumettre votre demande au moins 3 semaines à l'avance via notre formulaire en ligne.",
  },
  {
    id: 3,
    question: "La Mairie peut-elle fournir une lettre de soutien à mon organisation ?",
    answer:
      "La Mairie examine les demandes de lettres de soutien au cas par cas pour les organisations à but non lucratif, les événements communautaires et les initiatives qui profitent aux résidents de notre commune. Votre demande doit inclure les détails de votre organisation, l'objet de la lettre et comment votre initiative sert la communauté.",
  },
  {
    id: 4,
    question: "Plainte concernant le stationnement routier ?",
    answer:
      "Pour déposer une plainte de stationnement, vous pouvez : signaler en ligne via notre portail des services municipaux, appeler notre département des Travaux Publics au +225 27 20 21 22 24, envoyer un email à stationnement@commune-abidjan.ci, ou vous rendre en personne à la Mairie. Veuillez fournir le lieu, l'heure, la date et la nature de l'infraction.",
  },
  {
    id: 5,
    question: "Comment demander un permis de construire ?",
    answer:
      "Les permis de construire peuvent être demandés en ligne via notre plateforme de services numériques ou en personne au Département d'Urbanisme. Vous devrez soumettre les plans architecturaux, les levés topographiques et les formulaires de demande complétés. Le processus d'examen prend généralement 3-6 semaines selon la complexité du projet.",
  },
  {
    id: 6,
    question: "Quelles sont les exigences pour l'obtention d'une licence commerciale ?",
    answer:
      "Les licences commerciales nécessitent la completion de notre formulaire de demande, une preuve d'assurance, la vérification de conformité au zonage et les frais applicables. Certaines entreprises peuvent nécessiter des permis supplémentaires ou des approbations du ministère de la santé. Le processus prend généralement 2-3 semaines.",
  },
  {
    id: 7,
    question: "Comment puis-je demander des documents publics ?",
    answer:
      "Les demandes de documents publics peuvent être soumises en ligne, par email à archives@commune-abidjan.ci, ou en personne au bureau du Secrétaire Municipal. La plupart des documents sont disponibles sous 7-14 jours ouvrables. Certains documents peuvent nécessiter des frais de traitement pour la copie et les coûts administratifs.",
  },
  {
    id: 8,
    question: "Que faire en cas d'urgence d'eau ou d'égout ?",
    answer:
      "Pour les urgences d'eau ou d'égout, appelez immédiatement notre ligne d'urgence 24h/24 au +225 27 20 21 22 25. Pour les problèmes non urgents comme les questions de facturation ou les demandes de service, contactez notre Département des Services Publics pendant les heures d'ouverture ou soumettez une demande via notre portail en ligne.",
  },
]

export default function ServicesFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const handleViewAllFAQs = () => {
    // This would typically navigate to a dedicated FAQ page
    console.log("Navigate to full FAQ page")
  }

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section - Header */}
          <div className="lg:sticky lg:top-8">
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-semibold tracking-wide uppercase" style={{ color: "#F77F00" }}>★ FAQ</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Questions Fréquentes sur Nos Services
                </h2>
                <div className="w-16 h-1 mb-6" style={{ backgroundColor: "#F77F00" }}></div>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Trouvez rapidement les réponses à vos questions concernant les services municipaux de notre commune d'Abidjan.
                </p>
              </div>

              {/* View All FAQs Link */}
              <button
                onClick={handleViewAllFAQs}
                className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-gray-700 transition-colors group"
                style={{ color: "#F77F00" }}
              >
                VOIR TOUTES LES FAQ
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Contact Support */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Besoin d'Aide Supplémentaire ?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Vous ne trouvez pas la réponse que vous cherchez ? Notre équipe de support est là pour vous aider.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    className="px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg text-sm hover:opacity-90"
                    style={{ backgroundColor: "#F77F00" }}
                  >
                    Contacter le Support
                  </button>
                  <button
                    className="px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg text-sm hover:opacity-90"
                    style={{ backgroundColor: "#009E60" }}
                  >
                    Chat en Direct
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - FAQ Accordion */}
          <div className="space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openItems.includes(faq.id)

              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <span className="text-gray-400 font-semibold text-lg">
                          {String(index + 1).padStart(2, "0")}.
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    </div>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <Minus className="h-5 w-5 transition-colors duration-200" style={{ color: "#F77F00" }} />
                      ) : (
                        <Plus className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-200" />
                      )}
                    </div>
                  </button>

                  {/* Answer Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-5">
                      <div className="pl-12">
                        <div className="w-full h-px bg-gray-200 mb-4"></div>
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Besoin de Plus d'Informations ?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Notre guide complet des services contient des informations détaillées sur tous les services municipaux, procédures et exigences. Téléchargez-le pour une référence hors ligne ou parcourez notre base de données FAQ complète.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105 hover:opacity-90"
                style={{ backgroundColor: "#F77F00" }}
              >
                Télécharger le Guide
              </button>
              <button
                className="px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105 hover:opacity-90"
                style={{ backgroundColor: "#009E60" }}
              >
                Parcourir Toutes les FAQ
              </button>
              <button className="px-6 py-3 rounded-full font-semibold text-gray-700 border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 hover:bg-gray-50">
                Prendre Rendez-vous
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
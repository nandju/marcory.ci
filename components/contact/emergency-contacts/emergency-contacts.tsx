"use client"

import { useState, useEffect } from "react"
import { Phone, ChevronRight, Printer } from "lucide-react"

export default function EmergencyNumbers() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const emergencyServices = [
    // Slide 1
    [
      {
        title: "Service d'Incendie",
        phone: "+225 27 21 18 00",
        email: "incendie@pompiers-abidjan.ci",
        address: "Boulevard Lagunaire, Cocody, Abidjan, Côte d'Ivoire"
      },
      {
        title: "Police Municipale", 
        phone: "+225 27 21 17 00",
        email: "police@mairie-abidjan.ci",
        address: "Avenue Chardy, Plateau, Abidjan, Côte d'Ivoire"
      }
    ],
    // Slide 2
    [
      {
        title: "SAMU Urgences",
        phone: "+225 27 21 85 00", 
        email: "urgences@samu-abidjan.ci",
        address: "CHU de Cocody, Abidjan, Côte d'Ivoire"
      },
      {
        title: "Sécurité Civile",
        phone: "+225 27 21 77 00",
        email: "secours@securite-abidjan.ci", 
        address: "Rue des Jardins, Plateau, Abidjan, Côte d'Ivoire"
      }
    ],
    // Slide 3
    [
      {
        title: "Gendarmerie",
        phone: "+225 27 21 77 70",
        email: "contact@gendarmerie-abidjan.ci",
        address: "Boulevard de la République, Plateau, Abidjan, Côte d'Ivoire"
      },
      {
        title: "Centre Antipoison",
        phone: "+225 27 21 19 00",
        email: "antipoison@chu-abidjan.ci",
        address: "CHU de Treichville, Abidjan, Côte d'Ivoire"
      }
    ]
  ]

  const handlePrint = () => {
    window.print()
  }

  const handleGetDirections = (address: string) => {
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://maps.google.com/maps?q=${encodedAddress}`, "_blank")
  }

  // Carousel automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % emergencyServices.length)
    }, 5000) // Change toutes les 5 secondes

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-gray-100 py-8 lg:py-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 min-h-[300px] lg:min-h-[200px]">
          {/* Section Principale - Numéros d'Urgence (2/5 de la largeur) */}
          <div className="lg:col-span-2">
            <div 
              className="relative h-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: "#F77F00" }}
            >
              {/* Image de fond avec effet architectural */}
              <div className="absolute inset-0 opacity-15">
                <div className="absolute top-0 right-0 w-full h-full">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <path d="M40,160 L100,40 L160,160 Z" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.3"/>
                    <path d="M60,140 L140,140" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
                    <path d="M70,120 L130,120" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
                    <path d="M80,100 L120,100" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
                    <circle cx="100" cy="80" r="8" fill="currentColor" opacity="0.1"/>
                  </svg>
                </div>
              </div>
              
              <div className="relative z-10 p-6 lg:p-8 xl:p-10 h-full flex flex-col justify-center">
                {/* Badge d'en-tête */}
                <div className="flex items-center gap-3 mb-4 lg:mb-6">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 lg:h-6 lg:w-6" style={{ color: "#F77F00" }} />
                  </div>
                  <div className="text-white">
                    <span className="text-xs lg:text-sm font-semibold block">15 Numéros d'Urgence</span>
                    <span className="text-xs opacity-90">à Avoir Sous la Main</span>
                  </div>
                </div>

                {/* Titre principal */}
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-6 lg:mb-8 leading-tight">
                  Numéros d'Urgence
                  <br />
                  <span className="text-xl lg:text-2xl xl:text-3xl">
                    Que Vous Devriez Connaître
                  </span>
                </h2>

                {/* Bouton d'impression */}
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 bg-white rounded-full font-semibold text-sm lg:text-base transition-all duration-300 hover:shadow-lg hover:scale-105 self-start"
                  style={{ color: "#F77F00" }}
                >
                  <Printer className="h-4 w-4 lg:h-5 lg:w-5" />
                  IMPRIMER
                </button>
              </div>
            </div>
          </div>

          {/* Section Droite - Cartes des Services (3/5 de la largeur) */}
          <div className="lg:col-span-3">
            <div className="relative h-full">
              {/* Cartes en carousel */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 h-full">
                {emergencyServices[currentSlide].map((service, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">
                        {service.title}
                      </h3>
                      <div className="w-12 h-1 mb-4 lg:mb-6" style={{ backgroundColor: "#F77F00" }}></div>
                      
                      <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                        <div>
                          <p className="text-lg lg:text-xl font-semibold text-gray-900 mb-1">{service.phone}</p>
                          <a 
                            href={`mailto:${service.email}`}
                            className="text-sm lg:text-base transition-colors"
                            style={{ color: "#009E60" }}
                            onMouseEnter={(e) => e.currentTarget.style.color = "#F77F00"}
                            onMouseLeave={(e) => e.currentTarget.style.color = "#009E60"}
                          >
                            {service.email}
                          </a>
                        </div>
                        
                        <div className="text-gray-600 text-sm lg:text-base">
                          <p>{service.address}</p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleGetDirections(service.address)}
                      className="flex items-center gap-2 font-semibold text-sm lg:text-base transition-colors group self-start"
                      style={{ color: "#009E60" }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "#F77F00"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "#009E60"}
                    >
                      OBTENIR L'ITINÉRAIRE
                      <ChevronRight className="h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Indicateurs de pagination */}
              <div className="flex justify-center gap-2 mt-6 lg:mt-8">
                {emergencyServices.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-8 h-1 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-30'
                    }`}
                    style={{ 
                      backgroundColor: index === currentSlide ? "#F77F00" : "#9CA3AF" 
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
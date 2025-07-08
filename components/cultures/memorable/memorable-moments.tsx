"use client"

import { NumberTicker } from "@/components/magicui/number-ticker"
import { useState } from "react"

type MomentMemorable = {
  id: number
  year: string
  location: string
  title: string
  description: string
  image: string
  color: string
}

export const momentsMemorables: MomentMemorable[] = [
  {
    id: 1,
    year: "1950",
    location: "Marcory Ancien",
    title: "Émergence du village de Marcory",
    description:
      "Marcory, autrefois zone lagunaire habitée par les Ébrié, devient un quartier résidentiel important avec l’urbanisation d’Abidjan.",
    image: "/assets/images/illustrations/cultures/items-1.jpg",
    color: "#F77F00",
  },
  {
    id: 2,
    year: "1980",
    location: "Zone 4",
    title: "Développement commercial",
    description:
      "La zone 4 de Marcory devient un pôle d’activités économiques et commerciales, avec l’installation de nombreuses entreprises et commerces.",
    image: "/assets/images/illustrations/cultures/items-2.jpg",
    color: "#009E60",
  },
  {
    id: 3,
    year: "2001",
    location: "Marcory Résidentiel",
    title: "Création de la commune de Marcory",
    description:
      "Marcory est officiellement reconnue comme commune autonome avec sa propre mairie et administration locale.",
    image: "/assets/images/illustrations/cultures/items-3.jpg",
    color: "#F77F00",
  },
  {
    id: 4,
    year: "2023",
    location: "Mairie Digitale",
    title: "Transition vers le numérique",
    description:
      "Lancement du projet de mairie digitale avec des services administratifs accessibles en ligne pour les citoyens de Marcory.",
    image: "/assets/images/illustrations/cultures/items-4.jpg",
    color: "#009E60",
  },
]


export default function MemorableMoments() {
  const [hoveredMoment, setHoveredMoment] = useState<number | null>(null)

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section - Header */}
          <div className="lg:sticky lg:top-8">
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-semibold tracking-wide uppercase" style={{ color: "#F77F00" }}>
                    ★ HISTOIRE D'ABIDJAN
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Moments Mémorables
                </h2>
                <div className="w-16 h-1 mb-6" style={{ backgroundColor: "#F77F00" }}></div>
                <p className="text-gray-600 leading-relaxed">
                  Découvrez les événements marquants qui ont façonné l'histoire d'Abidjan, de ses origines à sa transformation en métropole moderne.
                </p>
              </div>

                {/* Timeline Stats */}
                <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center">
                    <NumberTicker
                    value={125}
                    className="text-3xl font-bold text-gray-900 mb-2"
                    />
                    <div className="text-gray-600 text-sm">Années d'Histoire</div>
                </div>
                <div className="text-center">
                    <NumberTicker
                    value={350000}
                    className="text-3xl font-bold text-gray-900 mb-2"
                    />
                    <div className="text-gray-600 text-sm">Habitants</div>
                </div>
                </div>


              {/* Additional Info */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Abidjan aujourd'hui</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Capitale économique de la Côte d'Ivoire, Abidjan est devenue une métropole dynamique, 
                  centre financier et culturel majeur de l'Afrique de l'Ouest.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {momentsMemorables.map((moment, index) => (
                <div key={moment.id} className="relative">
                  {/* Timeline Dot */}
                  <div
                    className="absolute left-6 top-8 w-4 h-4 rounded-full border-4 border-white shadow-lg hidden md:block z-10"
                    style={{ backgroundColor: moment.color }}
                  ></div>

                  {/* Content Card */}
                  <div className="md:ml-20">
                    <div 
                      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                      onMouseEnter={() => setHoveredMoment(moment.id)}
                      onMouseLeave={() => setHoveredMoment(null)}
                    >
                      {/* Image Section */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={moment.image}
                          alt={moment.title}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>

                        {/* Year Badge */}
                        <div className="absolute top-4 left-4">
                          <div
                            className="px-4 py-2 rounded-full text-white font-bold text-lg shadow-lg backdrop-blur-sm"
                            style={{ backgroundColor: moment.color }}
                          >
                            {moment.year}
                          </div>
                        </div>

                        {/* Location Badge */}
                        <div className="absolute bottom-4 left-4">
                          <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 font-medium text-sm shadow-lg">
                            {moment.location}
                          </div>
                        </div>

                        {/* Connecting Line (Mobile) */}
                        {index < momentsMemorables.length - 1 && (
                          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 md:hidden">
                            <div className="w-0.5 h-12 bg-gray-200"></div>
                            <div
                              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full"
                              style={{ backgroundColor: moment.color }}
                            ></div>
                          </div>
                        )}
                      </div>

                      {/* Content Section */}
                      <div className="p-6">
                        <div className="mb-4">
                          <div className="text-sm font-semibold mb-2" style={{ color: moment.color }}>
                            {moment.location}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                            {moment.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">{moment.description}</p>
                        </div>

                        {/* Read More Link */}
                        <button
                          className="inline-flex items-center gap-2 font-medium transition-all hover:gap-3 group/button"
                          style={{ color: moment.color }}
                        >
                          En savoir plus
                          <svg
                            className="w-4 h-4 transition-transform group-hover/button:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>

                      {/* Hover Effect Border */}
                      <div 
                        className="absolute inset-0 border-2 border-transparent group-hover:border-opacity-50 rounded-2xl transition-all duration-300 pointer-events-none"
                        style={{ 
                          borderColor: hoveredMoment === moment.id ? moment.color : 'transparent' 
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Connecting Dotted Line (Desktop) */}
                  {index < momentsMemorables.length - 1 && (
                    <div className="absolute left-16 -bottom-6 hidden md:block">
                      <svg width="100" height="24" viewBox="0 0 100 24" className="text-gray-300">
                        <path
                          d="M0 12 Q25 0 50 12 T100 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          fill="none"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Explorez Notre Riche Patrimoine</h3>
            <p className="text-gray-600 mb-6">
              Découvrez davantage sur l'histoire fascinante d'Abidjan et les événements marquants qui ont façonné 
              notre communauté pour en faire ce qu'elle est aujourd'hui.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                style={{ backgroundColor: "#F77F00" }}
              >
                Visiter le Centre du Patrimoine
              </button>
              <button
                className="px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                style={{ backgroundColor: "#009E60" }}
              >
                Télécharger le Guide Historique
              </button>
            </div>
          </div>
        </div>

        {/* Historical Facts */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-2xl font-bold mb-2" style={{ color: "#F77F00" }}>10</div>
            <div className="text-gray-600 text-sm">Communes</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-2xl font-bold mb-2" style={{ color: "#009E60" }}>1er</div>
            <div className="text-gray-600 text-sm">Port d'Afrique de l'Ouest</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-2xl font-bold mb-2" style={{ color: "#F77F00" }}>3</div>
            <div className="text-gray-600 text-sm">Ponts emblématiques</div>
          </div>
        </div>
      </div>
    </section>
  )
}
"use client"

import Image from "next/image"
import { User, MessageCircle } from "lucide-react"

const newsArticles = [ 
  {
    id: 3,
    title: "Faux agents municipaux interpellés à Marcory",
    image: "/assets/images/illustrations/page-accueil/news1.png", // image à remplacer
    date: {
      day: "11",
      month: "MAR'25",
    },
    category: "Sécurité",
    author: "admin",
    comments: 9,
    excerpt: "Trois individus se faisant passer pour des agents de la mairie ont été arrêtés grâce à une intervention rapide des forces de l’ordre.",
  },
  {
    id: 1,
    title: "Marcory certifiée ISO 9001 pour l’état civil",
    image: "/assets/images/illustrations/page-accueil/news2-2.png",
    date: {
      day: "19",
      month: "FEB'25",
    },
    category: "Gouvernance",
    author: "admin",
    comments: 6,
    excerpt: "La mairie de Marcory reçoit la certification ISO 9001 pour la qualité de son service d’état civil, une première dans la région.",
  },
  {
    id: 2,
    title: "Travaux d’assainissement liés au métro à Marcory",
    image: "/assets/images/illustrations/page-accueil/news3.png",
    date: {
      day: "31",
      month: "JAN'25",
    },
    category: "Transport",
    author: "admin",
    comments: 14,
    excerpt: "Des portions du boulevard sont temporairement fermées à Marcory pour faciliter les travaux du métro d’Abidjan, en cours jusqu’en septembre.",
  },
];



export default function News() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[#F77F00] text-sm font-semibold tracking-wide uppercase">★ ACTUALITÉS & COMMUNIQUÉS ★</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Les Dernières Nouvelles de Marcory</h2>
          <div className="w-16 h-1 bg-[#F77F00] mx-auto"></div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image Container with Hover Effects */}
              <div className="relative overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  {/* Color Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#009E60]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Date Badge */}
                <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-3 text-center min-w-[60px]">
                  <div className="text-2xl font-bold text-[#F77F00]">{article.date.day}</div>
                  <div className="text-xs font-semibold text-black uppercase">{article.date.month}</div>
                </div>

                {/* Category Tag */}
                <div className="absolute bottom-4 left-4">
                  <span
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: "#F77F00" }}
                  >
                    ★ {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-[#F77F00] transition-colors cursor-pointer">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{article.excerpt}</p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>
                      {article.comments} commentaire{article.comments !== 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center mt-12">
          <button
            className="px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            style={{ backgroundColor: "#F77F00" }}
          >
            Voir Toutes Les Actualités
          </button>
        </div>
      </div>
    </section>
  )
}

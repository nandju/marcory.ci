"use client"

import Image from "next/image"
import { User, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

import { newsArticles } from "./data"

export default function News() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const totalPages = Math.ceil(newsArticles.length / itemsPerPage)
  
  // Calculer les articles à afficher pour la page actuelle
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentArticles = newsArticles.slice(indexOfFirstItem, indexOfLastItem)
  
  // Fonctions de navigation
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }
  
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  
  const goToPage = (pageNumber:number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <section id="actualités" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {/* <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[#F77F00] text-sm font-semibold tracking-wide uppercase">★ ACTUALITÉS & COMMUNIQUÉS ★</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Les Dernières Nouvelles de Marcory</h2>
          <div className="w-16 h-1 bg-[#F77F00] mx-auto"></div>
        </div> */}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentArticles.map((article) => (
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

        {/* Pagination - S'affiche seulement si plus de 6 articles */}
        {newsArticles.length > itemsPerPage && (
          <div className="flex items-center justify-center mt-12 gap-2">
            {/* Bouton Précédent */}
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Précédent
            </button>

            {/* Numéros de pages */}
            <div className="flex items-center gap-1 mx-4">
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1
                return (
                  <button
                    key={pageNumber}
                    onClick={() => goToPage(pageNumber)}
                    className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                      currentPage === pageNumber
                        ? 'bg-[#009E60] text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {pageNumber}
                  </button>
                )
              })}
            </div>

            {/* Bouton Suivant */}
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Suivant
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Informations de pagination */}
        {newsArticles.length > itemsPerPage && (
          <div className="text-center mt-4 text-sm text-gray-600">
            Affichage de {indexOfFirstItem + 1} à {Math.min(indexOfLastItem, newsArticles.length)} sur {newsArticles.length} articles
          </div>
        )}

        {/* View All News Button */}
        <div className="text-center mt-12">
          <button
            className="px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            style={{ backgroundColor: "#009E60" }}
          >
            Voir Toutes Les Actualités
          </button>
        </div>
      </div>
    </section>
  )
}
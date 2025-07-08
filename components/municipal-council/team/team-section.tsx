"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Mail, Phone, Share2, Facebook, Linkedin, Twitter } from "lucide-react"

import { teamMembers } from "./data"

interface TooltipProps {
  content: string
  children: React.ReactNode
  position?: "top" | "bottom"
}

const Tooltip = ({ content, children, position = "top" }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={`absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg whitespace-nowrap transition-opacity duration-200 ${
            position === "top"
              ? "bottom-full left-1/2 transform -translate-x-1/2 mb-2"
              : "top-full left-1/2 transform -translate-x-1/2 mt-2"
          }`}
        >
          {content}
          <div
            className={`absolute w-2 h-2 bg-gray-900 transform rotate-45 ${
              position === "top"
                ? "top-full left-1/2 -translate-x-1/2 -mt-1"
                : "bottom-full left-1/2 -translate-x-1/2 -mb-1"
            }`}
          />
        </div>
      )}
    </div>
  )
}

export default function Team() {
  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`
  }

  const handlePhoneClick = (phone: string) => {
    window.location.href = `tel:${phone}`
  }

  const handleShareClick = (name: string) => {
    if (navigator.share) {
      navigator.share({
        title: `Contact ${name}`,
        text: `Contactez ${name} de l'équipe municipale de Marcory`,
        url: window.location.href,
      })
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert("Lien copié dans le presse-papiers!")
    }
  }

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[#F77F00] text-sm font-semibold tracking-wide uppercase">★ ÉQUIPE MUNICIPALE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rencontrez Nos Élus</h2>
          <div className="w-16 h-1 bg-[#F77F00] mx-auto"></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group border-t-4 border-[#009E60]"
            >
              {/* Member Photo */}
              <div className="relative overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={250}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#009E60]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Member Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#F77F00] font-medium mb-4">{member.position}</p>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4">
                  <Tooltip content={`Email: ${member.email}`}>
                    <button
                      onClick={() => handleEmailClick(member.email)}
                      className="w-10 h-10 rounded-full bg-[#009E60] hover:bg-[#007A4A] flex items-center justify-center transition-colors duration-200 group/btn"
                    >
                      <Mail className="h-4 w-4 text-white" />
                    </button>
                  </Tooltip>

                  <Tooltip content={`Appeler: ${member.phone}`}>
                    <button
                      onClick={() => handlePhoneClick(member.phone)}
                      className="w-10 h-10 rounded-full bg-[#F77F00] hover:bg-[#E06F00] flex items-center justify-center transition-colors duration-200 group/btn"
                    >
                      <Phone className="h-4 w-4 text-white" />
                    </button>
                  </Tooltip>

                  <Tooltip content="Partager le contact">
                    <button
                      onClick={() => handleShareClick(member.name)}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 group/btn"
                    >
                      <Share2 className="h-4 w-4 text-gray-600 group-hover/btn:text-gray-800" />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media Sidebar */}
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2">
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-[#F77F00] hover:bg-[#E06F00] flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-[#009E60] hover:bg-[#007A4A] flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <button
            onClick={() => handleShareClick("Équipe Municipale")}
            className="w-12 h-12 bg-gray-600 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
          >
            <Share2 className="h-5 w-5" />
          </button>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto border-l-4 border-[#009E60]">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Contactez Notre Équipe</h3>
            <p className="text-gray-600 mb-6">
              Nos élus et notre personnel dévoués sont là pour servir la communauté de Marcory. N'hésitez pas à 
              contacter n'importe quel membre de l'équipe pour obtenir de l'aide concernant les services municipaux 
              et vos demandes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-6 py-3 bg-[#F77F00] hover:bg-[#E06F00] rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg"
              >
                Planifier un Rendez-vous
              </button>
              <button
                className="px-6 py-3 bg-[#009E60] hover:bg-[#007A4A] rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg"
              >
                Contacter la Mairie
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
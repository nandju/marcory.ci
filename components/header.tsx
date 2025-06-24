"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Calendar, MapPin, Mountain, Menu, X, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample data for rotating hero content
const heroSlides = [
  {
    id: 1,
    title: "Une mairie, Une vision",
    subtitle: "Une architecture ouverte et moderne pour mieux accueillir les citoyens",
    image: "/assets/images/backgrounds/background1.png",
    alt: "façade-mairie",
  },
  {
    id: 2,
    title: "Marcory, Terre d’opportunités",
    subtitle: "L’Hôtel Azalaï incarne le dynamisme économique et l’attractivité de la commune",
    image: "/assets/images/backgrounds/background2.png",
    alt: "hotel-azalai",
  },
  {
    id: 3,
    title: "Des routes vers l’avenir",
    subtitle: "Des infrastructures solides pour une mobilité fluide et durable à Marcory",
    image: "/assets/images/backgrounds/background3.png",
    alt: "echangeur",
  },
]

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const currentHero = heroSlides[currentSlide]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/assets/images/logo.png"
                alt="Logo Mairie"
                width={150}
                height={40}
                className="h-8 w-auto"
              />
            </div>

            {/* Desktop Navigation Menu */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#"
                  className="text-white hover:text-[#F77F00] px-3 py-2 text-sm font-medium transition-colors"
                >
                  ACCUEIL
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#F77F00] px-3 py-2 text-sm font-medium transition-colors"
                >
                  SERVICES
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#F77F00] px-3 py-2 text-sm font-medium transition-colors"
                >
                  DÉMARCHES
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#F77F00] px-3 py-2 text-sm font-medium transition-colors"
                >
                  ACTUALITÉS
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#F77F00] px-3 py-2 text-sm font-medium transition-colors"
                >
                  CULTURE
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#F77F00] px-3 py-2 text-sm font-medium transition-colors"
                >
                  CONTACT
                </a>
              </div>
            </div>

            {/* Right side - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button className="bg-[#009E60] hover:bg-[#007A4A] text-white font-semibold px-6 py-2 rounded-full transition-colors flex items-center gap-2">
                <Bot className="h-4 w-4" />
                CONSULTER IA
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-4">
              <Button className="bg-[#009E60] hover:bg-[#007A4A] text-white font-semibold px-4 py-2 rounded-full transition-colors flex items-center gap-2 text-sm">
                <Bot className="h-4 w-4" />
                IA
              </Button>
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-[#F77F00] transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-md">
              <a
                href="#"
                className="text-white hover:text-[#F77F00] block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ACCUEIL
              </a>
              <a
                href="#"
                className="text-white hover:text-[#F77F00] block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                SERVICES
              </a>
              <a
                href="#"
                className="text-white hover:text-[#F77F00] block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                DÉMARCHES
              </a>
              <a
                href="#"
                className="text-white hover:text-[#F77F00] block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ACTUALITÉS
              </a>
              <a
                href="#"
                className="text-white hover:text-[#F77F00] block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CULTURE
              </a>
              <a
                href="#"
                className="text-white hover:text-[#F77F00] block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Auto-rotating Content */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Image with Transition */}
        <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
          <Image
            src={currentHero.image || "/placeholder.svg"}
            alt={currentHero.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            {/* Main Title with Animation */}
            <h1 key={currentHero.id} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              {currentHero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              {currentHero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                EN SAVOIR PLUS
              </Button>
              <Button className="bg-[#F77F00] hover:bg-[#E06F00] text-white px-8 py-3 rounded-full font-semibold transition-colors">
                NOS SERVICES
              </Button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-[#F77F00]" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
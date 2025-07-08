"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Sample data for rotating hero content
// Sample data for rotating hero content – Page Contact
const heroSlides = [
  {
    id: 3,
    title: "Faux agents municipaux interpellés à Marcory",
    subtitle: "Trois individus se faisant passer pour des agents de la mairie ont été arrêtés grâce à une intervention rapide des forces de l’ordre.",
    image: "/assets/images/illustrations/page-accueil/news1.png",
    alt: "faux-agents-mairie",
  },
  {
    id: 1,
    title: "Marcory certifiée ISO 9001 pour l’état civil",
    subtitle: "La mairie de Marcory reçoit la certification ISO 9001 pour la qualité de son service d’état civil, une première dans la région.",
    image: "/assets/images/illustrations/page-accueil/news2-2.png",
    alt: "certification-iso-9001",
  },
  {
    id: 2,
    title: "Travaux d’assainissement liés au métro à Marcory",
    subtitle: "Des portions du boulevard sont temporairement fermées à Marcory pour faciliter les travaux du métro d’Abidjan, en cours jusqu’en septembre.",
    image: "/assets/images/illustrations/page-accueil/news3.png",
    alt: "travaux-assainissement-metro",
  },
]





export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const currentHero = heroSlides[currentSlide]

  return (
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
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#" passHref>
            <Button
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              EN SAVOIR PLUS
            </Button>
            </Link>
            <Link href="#services" passHref>
            <Button className="bg-[#F77F00] hover:bg-[#E06F00] text-white px-8 py-3 rounded-full font-semibold transition-colors">
                NOS SERVICES
            </Button>
            </Link>
          </div> */}
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
  )
}
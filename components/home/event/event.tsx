import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Event() {
  const navigationCards = [
    {
      title: "L'Ambassade",
      image: "/assets/images/illustrations/page-accueil/card-1.png",
      link: "/ambassade",
      alt: "Façade de l'Ambassade du Tchad"
    },
    {
      title: "Services consulaire",
      image: "/assets/images/illustrations/page-accueil/card-2.png",
      link: "/services",
      alt: "Passeports sur une carte"
    },
    {
      title: "Le Tchad",
      image: "/assets/images/illustrations/page-accueil/card-3.png",
      link: "/tchad",
      alt: "Monument au Tchad"
    },
    {
      title: "Events",
      image: "/assets/images/illustrations/page-accueil/card-4.png",
      link: "/events",
      alt: "Événement diplomatique"
    }
  ];

  return (
    <div className="w-full relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px] flex items-center justify-center py-8 md:py-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/backgrounds/background_1.png"
          alt="Background"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#003d99]/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-stretch">
            {navigationCards.map((card) => (
              <Link 
                href={card.link} 
                key={card.title}
                className="block transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white flex flex-col">
                  {/* Image container with increased aspect ratio */}
                  <div className="relative w-full aspect-[2.5/3]">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      priority
                    />
                  </div>

                  {/* Title bar at bottom */}
                  <div className="mt-auto absolute bottom-0 left-0 right-0 bg-[#002B7F] text-white p-3 sm:p-4 text-center font-medium text-sm sm:text-base">
                    {card.title}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
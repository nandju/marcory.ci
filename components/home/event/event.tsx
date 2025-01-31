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
    <div className="w-full relative h-[400px]">
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
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 w-full h-full flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {navigationCards.map((card) => (
                <Link href={card.link} key={card.title}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                    {/* Image container with aspect ratio */}
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        priority
                      />
                    </div>

                    {/* Title bar at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 bg-[#002B7F] text-white p-4 text-center font-medium">
                      {card.title}
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
</div>

    </div>
  );
}
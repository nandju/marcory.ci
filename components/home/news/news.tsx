import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function News() {
    const newsItems = [
        {
            id: 1,
            date: "10 Oct",
            image: "/assets/images/illustrations/page-accueil/cards-1.png",
            title: "Participation de S.E. Mariam Ali Moussa, Ambassadeur et Représentante Permanente du Tchad auprès de la FAO à la 50ème édition du Comité de la Sécurité Alimentaire mondiale de la FAO à Rome du 10 au 14 octobre 2022",
            alt: "Monument tchadien"
        },
        {
            id: 2,
            date: "10 Oct",
            image: "/assets/images/illustrations/page-accueil/cards-2.png",
            title: "Participation de S.E. Mariam Ali Moussa, Ambassadeur et Représentante Permanente du Tchad auprès de la FAO à la 50ème édition du Comité de la Sécurité Alimentaire mondiale de la FAO à Rome du 10 au 14 octobre 2022",
            alt: "Conférence FAO"
        },
        {
            id: 3,
            date: "10 Oct",
            image: "/assets/images/illustrations/page-accueil/cards-3.png",
            title: "Participation de S.E. Mariam Ali Moussa, Ambassadeur et Représentante Permanente du Tchad auprès de la FAO à la 50ème édition du Comité de la Sécurité Alimentaire mondiale de la FAO à Rome du 10 au 14 octobre 2022",
            alt: "Événement diplomatique"
        },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12">
            {/* Titre et Navigation */}
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-secondary">ACTUALITÉS</h2>
                <div className="flex gap-2">
                    <button className="p-2  bg-gray-200 hover:bg-gray-300">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button className="p-2  bg-secondary hover:bg-red-600 text-white">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Grille d'actualités */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems.map((item) => (
                    <div key={item.id} className="flex flex-col">
                        {/* Container d'image avec date */}
                        <div className="relative h-64 mb-4">
                            <Image
                                src={item.image}
                                alt={item.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute bottom-0 left-0 bg-secondary text-white px-4 py-2">
                                {item.date}
                            </div>
                        </div>
                        
                        {/* Titre de l'actualité */}
                        <h3 className="text-lg font-medium leading-tight hover:text-secondary cursor-pointer transition-colors">
                            {item.title}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
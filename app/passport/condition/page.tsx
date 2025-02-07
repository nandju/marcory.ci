import React from 'react';
import Image from 'next/image';
import { Button, Link } from '@nextui-org/react';

export default function Condition() {
  return (
    <div className="relative flex items-center justify-center w-full p-10 min-h-[calc(100vh-70px)] font-mulish">
      {/* Image d'arrière-plan */}
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/images/backgrounds/background_2.png"
        alt="Background image"
        fill
      />
      <div className="absolute inset-0 bg-blue-800/50" /> {/* Superposition bleu semi-transparente */}

      {/* Formulaire */}
      <div className="relative w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 z-10">
        {/* Close button */}
        <Link href="/" className="absolute right-4 top-4">
        <button className=" text-gray-500 hover:text-gray-700">
          ✕
        </button>
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-gray-600 mb-4">Formulaire de demande de passeport</h1>
          <div className="flex items-center justify-center gap-4">
            <Image 
              src="/assets/images/illustrations/formulaire/logo.png"
              alt="Chad Embassy Logo" 
              width={300}
              height={150}
              className="mx-2"
            />
          </div>
        </div>

        {/* Photo upload area */}
        <div className=" mx-auto mb-8 text-primary font-semibold flex items-start justify-start relative">
          <div>
            Documents à fournir : 
          </div>
        </div>

        {/* Navigation items */}

        <div className="flex flex-col md:flex-row justify-center items-center text-center gap-2 py-4">
                <Link href="condition" className="w-full md:w-auto"><div className="bg-primary text-white px-2 md:px-20 py-1 rounded-full md:rounded-b-md cursor-pointer items-center text-center text-sm w-full md:w-auto">Passport Ordinaire</div></Link>
                <Link href="condition-2" className="w-full md:w-auto"><div className="bg-gray-300 text-white px-2 md:px-20 py-1 rounded-full md:rounded-b-md hover:bg-gray-400 cursor-pointer items-center text-center text-sm w-full md:w-auto">Passeport Diplomatique</div></Link>
        </div>

        {/* Form fields */}
        <div className="flex flex-row items-center justify-between px-10 py-6">
                {/* Liste numérotée à gauche */}
                <div className="w-auto md:w-1/2">
                    <ol className="list-decimal list-outside space-y-2 text-sm text-gray-700">
                    <li>Formulaire de demande de visa dûment rempli</li>
                    <li>Copie de passeport</li>
                    <li>Passeport en cours de validité (6 mois minimum)</li>
                    <li>Lettre d&apos;invitation ou certificat d&apos;hébergement ou réservation d&apos;hôtel</li>
                    <li>2 photos d&apos;identité</li>
                    </ol>
                </div>

                {/* Image réduite au centre à droite */}
                <div className="w-1/2 hidden md:flex justify-center">
                    <Image
                    src="/assets/images/illustrations/formulaire/visa.png" // Remplace par ton chemin d'image
                    alt="Visa"
                    width={100} // Ajuste la taille selon ton besoin
                    height={100}
                    className="object-contain"
                    />
                </div>
                </div>

        {/* Buttons */}
        <div className="flex justify-between">
            <Link href="/passport">
          <Button className="bg-transparent text-secondary border border-secondary">
            Voir le formulaire
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

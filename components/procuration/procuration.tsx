import React from 'react';
import Image from 'next/image';
import { Images } from 'lucide-react';
import { Button } from '@nextui-org/react';

export default function ProcurationForm() {
  return (
    <div className="relative flex items-center justify-center w-full p-10 min-h-[calc(100vh-70px)]">
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
        <button className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
          ✕
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-gray-600 mb-4">Formulaire de demande de procuration</h1>
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
        <div className="w-32 h-40 mx-auto mb-8 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-white bg-opacity-80 relative">
          <Images className="mx-auto mb-2 text-gray-400" size={24} />
          <input
            type="file"
            name="image"
            accept="image/*"
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>

        {/* Form fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <input
            type="text"
            placeholder="Nom"
            className="w-full px-4 py-2 border border-gray-300 rounded-full"
          />
          <input
            type="text"
            placeholder="Prénom"
            className="w-full px-4 py-2 border border-gray-300 rounded-full"
          />
          <input
            type="text"
            placeholder="Date de naissance"
            className="w-full px-4 py-2 border border-gray-300 rounded-full"
          />
          <input
            type="text"
            placeholder="Lieu de naissance"
            className="w-full px-4 py-2 border border-gray-300 rounded-full"
          />
          <input
            type="text"
            placeholder="Nationalité"
            className="w-full px-4 py-2 border border-gray-300 rounded-full"
          />
          <select className="w-full px-4 py-2 border border-gray-300 rounded-full">
            <option value="">Sexe</option>
            <option value="M">Masculin</option>
            <option value="F">Féminin</option>
          </select>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-full">
            <option value="">Situation familiale</option>
            <option value="single">Célibataire</option>
            <option value="married">Marié(e)</option>
            <option value="divorced">Divorcé(e)</option>
            <option value="widowed">Veuf/Veuve</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <Button className="bg-transparent text-secondary border border-secondary">
            Voir les conditions
          </Button>
          <Button color="secondary" className="text-white">
            Envoyer
          </Button>
        </div>
      </div>
    </div>
  );
};

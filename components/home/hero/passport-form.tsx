"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";

export default function PassportForm() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col gap-2">
      <Button color="secondary" className="text-white" onPress={onOpen}>
        Ouvrir maintenant
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        aria-labelledby="modal-title"
        aria-describedby="modal-content"
        className="overflow-y-auto"
        size="lg"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            Formulaire de demande de passeport
          </ModalHeader>
          <ModalBody className="max-h-[80vh] w-auto overflow-y-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-gray-600 mb-4">Formulaire de demande de passeport</h1>
              <div className="flex items-center justify-center gap-4">
                <div className="h-1 w-12 bg-blue-600" />
                <Image
                  src="/assets/images/illustrations/formulaire/logo.png"
                  alt="Chad Embassy Logo"
                  width={48}
                  height={48}
                  className="mx-2"
                />
                <div className="h-1 w-12 bg-red-600" />
              </div>
              <div className="text-blue-700 font-bold text-xl mt-2">EMBASSADE DU TCHAD</div>
            </div>

            {/* Photo upload area */}
            <div className="w-32 h-40 mx-auto mb-8 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
              <Image
                src="/assets/images/backgrounds/background_2.png"
                alt="Upload photo icon"
                width={24}
                height={24}
                className="opacity-50"
              />
            </div>

            {/* Form fields */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8">
              <div className="flex gap-2">
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  placeholder="Nom"
                  className="border border-gray-400 placeholder-gray-400 rounded-full px-3 py-2 focus:outline-none"
                />
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  placeholder="Prénom"
                  className="border border-gray-400 placeholder-gray-400 rounded-full px-3 py-2 focus:outline-none"
                />
              </div>

              <div className="flex gap-2">
                <input
                  type="date"
                  id="date-naissance"
                  name="date-naissance"
                  className="border border-gray-400 placeholder-gray-400 rounded-full px-3 py-2 focus:outline-none"
                />
                <input
                  type="text"
                  id="lieu-naissance"
                  name="lieu-naissance"
                  placeholder="Lieu de naissance"
                  className="border border-gray-400 placeholder-gray-400 rounded-full px-3 py-2 focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  id="nationalite"
                  name="nationalite"
                  placeholder="Nationalité"
                  className="border border-gray-400 placeholder-gray-400 rounded-full px-3 py-2 focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <select
                  id="sexe"
                  name="sexe"
                  className="border border-gray-400 placeholder-gray-400 rounded-full px-3 py-2 focus:outline-none"
                >
                  <option value="">Sexe</option>
                  <option value="M">Masculin</option>
                  <option value="F">Féminin</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <select
                  id="situation-familiale"
                  name="situation-familiale"
                  className="border border-gray-400 placeholder-gray-400 rounded-full px-3 py-2 focus:outline-none"
                >
                  <option value="">Situation familiale</option>
                  <option value="single">Célibataire</option>
                  <option value="married">Marié(e)</option>
                  <option value="divorced">Divorcé(e)</option>
                  <option value="widowed">Veuf/Veuve</option>
                </select>
              </div>

              {/* Add any other fields as necessary */}
            </div>
          </ModalBody>

          {/* Buttons */}
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onOpenChange}>
              Fermer
            </Button>
            <Button color="primary" onPress={onOpenChange}>
              Envoyer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

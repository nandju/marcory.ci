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

export default function PassportForm() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col gap-2">
      <Button color="secondary" className="text-white" onPress={onOpen}>Ouvrir maintenant</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        aria-labelledby="modal-title"
        aria-describedby="modal-content"
        className="overflow-y-auto"
        size="lg"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Formulaire de demande de passeport</ModalHeader>
          <ModalBody className="max-h-[80vh] w-auto overflow-y-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8">
              <div className="flex  gap-2">
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
                  placeholder="lieu de naissance"
                  className="border border-gray-400 placeholder-gray-400 rounded-full px-3 py-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">

                <input
                  type="text"
                  id="nationalite"
                  name="nationalite"
                  placeholder="Nationationalité"
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
                  <option value="celibataire">Homme</option>
                  <option value="marie">Femme</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                  <select
                  id="situation-familiale"
                  name="situation-familiale"
                  className="border border-gray-400 placeholder-gray-400 rounded-full px-3 py-2 focus:outline-none"
                >
                  <option value="">Sélectionnez votre situation familiale</option>
                  <option value="celibataire">Célibataire</option>
                  <option value="marie">Marié(e)</option>
                  <option value="veuf">Veuf(ve)</option>
                  <option value="divorce">Divorcé(e)</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  id="type-passeport"
                  name="type-passeport"
                  placeholder="Type de passeport"
                  className="border border-gray-400 placeholder-gray-400 rounded-full px-3 py-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  id="numero-passeport"
                  name="numero-passeport"
                  placeholder="Numéro du passeport"
                  className="border border-gray-400 placeholder-gray-400 rounded-full px-3 py-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="date"
                  id="date-delivrance"
                  name="Date de délivrance"
                  className="border border-gray-400 placeholder-gray-400 rounded-full px-3 py-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="date"
                  id="date-expiration"
                  name="Date d'expiration de la validité"
                  className="border border-gray-400 placeholder-gray-400 rounded-full px-3 py-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  id="destination-principale"
                  name="destination-principale"
                  placeholder="Destination principale"
                  className="border border-gray-400 placeholder-gray-400 rounded-full px-3 py-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  id="profession"
                  name="profession"
                  placeholder="Profession"
                  className="border border-gray-400 placeholder-gray-400 rounded-full px-3 py-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="tel"
                  id="employeur-telephone"
                  name="employeur-telephone"
                  placeholder="Adresse de l'employeur"
                  className="border border-gray-400 placeholder-gray-400 rounded-full px-3 py-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="tel"
                  id="employeur-telephone"
                  name="employeur-telephone"
                  placeholder="Numéro de téléphone de l'employeur"
                  className="border border-gray-400 placeholder-gray-400 rounded-full px-3 py-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  id="type-visa"
                  name="type-visa"
                  placeholder="Type de Visa"
                  className="border border-gray-400 placeholder-gray-400 rounded-full px-3 py-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="number"
                  id="duree"
                  name="duree"
                  placeholder="Durée (mois)"
                  className="border border-gray-400 placeholder-gray-400 rounded-full px-3 py-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  id="etat"
                  name="etat"
                  placeholder="État"
                  className="border border-gray-400 placeholder-gray-400 rounded-full px-3 py-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="number"
                  id="contact"
                  name="contact"
                  placeholder="Contact"
                  className="border border-gray-400 placeholder-gray-400 rounded-full px-3 py-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  id="observations"
                  name="observations"
                  placeholder="Observations"
                  className="border border-gray-400 placeholder-gray-400 rounded-full px-3 py-2 focus:outline-none"
                ></input>
              </div>
            </div>
          </ModalBody>
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
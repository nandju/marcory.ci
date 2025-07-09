"use client"

import React, { useState } from 'react';
import { CheckCircle, AlertCircle, User, FileText, Phone, Download, Shield } from 'lucide-react';

const AttestationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Étape 1: Type d'attestation
    attestationType: '',
    
    // Étape 2: Informations personnelles
    firstName: '',
    lastName: '',
    birthDate: '',
    birthPlace: '',
    
    // Étape 3: Justificatifs et déclaration
    idType: '',
    idNumber: '',
    addressProofType: '',
    addressProofNumber: '',
    honorDeclaration: false,
    
    // Étape 4: Coordonnées et motif
    phone: '',
    email: '',
    requestReason: '',
    withdrawalMode: ''
  });

  const [alerts, setAlerts] = useState({ type: '', message: '', show: false });

  const showAlert = (type:any, message:any) => {
    setAlerts({ type, message, show: true });
    setTimeout(() => setAlerts({ ...alerts, show: false }), 5000);
  };

  const handleInputChange = (field:any, value:any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const attestationTypes = [
    { value: 'residence', label: 'Attestation de résidence', description: 'Certifie votre domicile dans la commune' },
    { value: 'celibat', label: 'Attestation de célibat', description: 'Certifie votre situation de célibataire' },
    { value: 'vie', label: 'Attestation de vie', description: 'Certifie que vous êtes en vie' },
    { value: 'concubinage', label: 'Attestation de concubinage', description: 'Certifie votre situation de concubinage' },
    { value: 'bonne_vie', label: 'Attestation de bonne vie et mœurs', description: 'Certifie votre conduite exemplaire' },
    { value: 'nationalite', label: 'Attestation de nationalité', description: 'Certifie votre nationalité ivoirienne' }
  ];

  const validateStep = (step:any) => {
    switch (step) {
      case 1:
        if (!formData.attestationType) {
          showAlert('error', 'Veuillez sélectionner un type d\'attestation');
          return false;
        }
        break;
      case 2:
        if (!formData.firstName || !formData.lastName || !formData.birthDate || !formData.birthPlace) {
          showAlert('error', 'Veuillez remplir tous les champs obligatoires');
          return false;
        }
        break;
      case 3:
        if (!formData.idType || !formData.idNumber) {
          showAlert('error', 'Veuillez fournir vos informations d\'identité');
          return false;
        }
        if (!formData.addressProofType || !formData.addressProofNumber) {
          showAlert('error', 'Veuillez fournir un justificatif de domicile');
          return false;
        }
        if (['celibat', 'vie', 'concubinage'].includes(formData.attestationType) && !formData.honorDeclaration) {
          showAlert('error', 'Veuillez accepter la déclaration sur l\'honneur');
          return false;
        }
        break;
      case 4:
        if (!formData.phone || !formData.email || !formData.requestReason || !formData.withdrawalMode) {
          showAlert('error', 'Veuillez remplir tous les champs obligatoires');
          return false;
        }
        break;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
        showAlert('success', 'Étape validée avec succès');
      } else {
        // Soumission finale
        showAlert('success', 'Demande d\'attestation soumise avec succès ! Vous recevrez une confirmation par email.');
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const StepIndicator = () => (
    <div className="bg-gray-900 p-6 mb-8">
      <div className="flex items-center justify-center space-x-8">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
              step < currentStep 
                ? 'bg-green-600 border-green-600 text-white' 
                : step === currentStep 
                ? 'bg-orange-500 border-orange-500 text-white' 
                : 'border-gray-400 text-gray-400'
            }`}>
              {step < currentStep ? <CheckCircle size={20} /> : step}
            </div>
            {step < 4 && (
              <div className={`h-0.5 w-16 mx-4 ${
                step < currentStep ? 'bg-green-600' : 'bg-gray-400'
              }`} style={{ borderStyle: 'dotted' }} />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4 text-white text-sm">
        <span className={currentStep === 1 ? 'text-orange-500' : currentStep > 1 ? 'text-green-600' : ''}>
          Type d'attestation
        </span>
        <span className={currentStep === 2 ? 'text-orange-500' : currentStep > 2 ? 'text-green-600' : ''}>
          Informations personnelles
        </span>
        <span className={currentStep === 3 ? 'text-orange-500' : currentStep > 3 ? 'text-green-600' : ''}>
          Justificatifs
        </span>
        <span className={currentStep === 4 ? 'text-orange-500' : ''}>
          Coordonnées et motif
        </span>
      </div>
    </div>
  );

  const Alert = () => (
    alerts.show && (
      <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
        alerts.type === 'error' ? 'bg-red-500' : 'bg-green-600'
      } text-white flex items-center space-x-2`}>
        <AlertCircle size={20} />
        <span>{alerts.message}</span>
      </div>
    )
  );

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <FileText className="text-orange-500" size={32} />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Type d'attestation demandée</h2>
                <p className="text-gray-600">Sélectionnez le type d'attestation dont vous avez besoin</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {attestationTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => handleInputChange('attestationType', type.value)}
                  className={`p-6 rounded-lg border-2 transition-all text-left ${
                    formData.attestationType === type.value
                      ? 'border-orange-500 bg-orange-50 text-orange-500'
                      : 'border-gray-300 hover:border-orange-500 hover:bg-orange-50'
                  }`}
                >
                  <div className="text-lg font-semibold mb-2">{type.label}</div>
                  <div className="text-sm text-gray-600">{type.description}</div>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <User className="text-orange-500" size={32} />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Informations personnelles</h2>
                <p className="text-gray-600">Renseignez vos informations personnelles</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Votre nom de famille"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Prénoms *</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Vos prénoms"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date de naissance *</label>
                <input
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => handleInputChange('birthDate', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Lieu de naissance *</label>
                <input
                  type="text"
                  value={formData.birthPlace}
                  onChange={(e) => handleInputChange('birthPlace', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Lieu de naissance"
                />
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center space-x-2 mb-2">
                <FileText className="text-blue-600" size={20} />
                <span className="text-blue-800 font-medium">Type d'attestation sélectionnée</span>
              </div>
              <p className="text-blue-700">
                {attestationTypes.find(t => t.value === formData.attestationType)?.label}
              </p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <Shield className="text-orange-500" size={32} />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Justificatifs et déclaration</h2>
                <p className="text-gray-600">Fournissez vos justificatifs d'identité et de domicile</p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Justificatif d'identité */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Justificatif d'identité</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type de pièce d'identité *</label>
                    <select
                      value={formData.idType}
                      onChange={(e) => handleInputChange('idType', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="cni">Carte Nationale d'Identité</option>
                      <option value="passeport">Passeport</option>
                      <option value="permis">Permis de conduire</option>
                      <option value="carte_sejour">Carte de séjour</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Numéro de la pièce *</label>
                    <input
                      type="text"
                      value={formData.idNumber}
                      onChange={(e) => handleInputChange('idNumber', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Numéro de la pièce d'identité"
                    />
                  </div>
                </div>
              </div>

              {/* Justificatif de domicile */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Justificatif de domicile</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type de justificatif *</label>
                    <select
                      value={formData.addressProofType}
                      onChange={(e) => handleInputChange('addressProofType', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="facture_electricite">Facture d'électricité</option>
                      <option value="facture_eau">Facture d'eau</option>
                      <option value="bail">Contrat de bail</option>
                      <option value="quittance_loyer">Quittance de loyer</option>
                      <option value="attestation_hebergement">Attestation d'hébergement</option>
                      <option value="taxe_habitation">Taxe d'habitation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Numéro de référence *</label>
                    <input
                      type="text"
                      value={formData.addressProofNumber}
                      onChange={(e) => handleInputChange('addressProofNumber', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Numéro de référence du document"
                    />
                  </div>
                </div>
              </div>

              {/* Déclaration sur l'honneur */}
              {['celibat', 'vie', 'concubinage'].includes(formData.attestationType) && (
                <div className="border border-orange-200 rounded-lg p-6 bg-orange-50">
                  <h3 className="text-lg font-semibold text-orange-800 mb-4">Déclaration sur l'honneur</h3>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-700">
                      Cette attestation nécessite une déclaration sur l'honneur. En cochant cette case, vous déclarez sur l'honneur que les informations fournies sont exactes et que vous assumez la responsabilité de leur véracité.
                    </p>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={formData.honorDeclaration}
                        onChange={(e) => handleInputChange('honorDeclaration', e.target.checked)}
                        className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <span className="text-sm text-gray-700">
                        Je déclare sur l'honneur que les informations fournies sont exactes *
                      </span>
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <Phone className="text-orange-500" size={32} />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Coordonnées et motif</h2>
                <p className="text-gray-600">Finalisez votre demande avec vos coordonnées et le motif</p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Coordonnées */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Coordonnées</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="+225 XX XX XX XX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="votre.email@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Motif de la demande */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Motif de la demande</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Précisez le motif de votre demande *
                  </label>
                  <textarea
                    value={formData.requestReason}
                    onChange={(e) => handleInputChange('requestReason', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Ex: Démarches consulaires, dossier de mariage, demande de visa, etc."
                  />
                </div>
              </div>

              {/* Mode de retrait */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Mode de retrait</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={() => handleInputChange('withdrawalMode', 'mairie')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formData.withdrawalMode === 'mairie'
                        ? 'border-orange-500 bg-orange-50 text-orange-500'
                        : 'border-gray-300 hover:border-orange-500 hover:bg-orange-50'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-lg font-semibold">Retrait en mairie</div>
                      <div className="text-sm text-gray-600 mt-1">
                        Récupérez votre attestation directement à la mairie
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleInputChange('withdrawalMode', 'enligne')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formData.withdrawalMode === 'enligne'
                        ? 'border-orange-500 bg-orange-50 text-orange-500'
                        : 'border-gray-300 hover:border-orange-500 hover:bg-orange-50'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-lg font-semibold">Téléchargement en ligne</div>
                      <div className="text-sm text-gray-600 mt-1">
                        Recevez votre attestation par email
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Récapitulatif */}
              {formData.withdrawalMode && (
                <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold text-green-800 mb-4">Récapitulatif de votre demande</h3>
                  <div className="space-y-2 text-sm text-green-700">
                    <p><strong>Type d'attestation :</strong> {attestationTypes.find(t => t.value === formData.attestationType)?.label}</p>
                    <p><strong>Demandeur :</strong> {formData.firstName} {formData.lastName}</p>
                    <p><strong>Contact :</strong> {formData.email} - {formData.phone}</p>
                    <p><strong>Motif :</strong> {formData.requestReason}</p>
                    <p><strong>Mode de retrait :</strong> {formData.withdrawalMode === 'mairie' ? 'En mairie' : 'En ligne'}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Alert />
      
      <div className="max-w-6xl mx-auto">
        <StepIndicator />
        
        <div className="bg-white rounded-lg shadow-lg p-8 mx-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Demande d'attestation</h1>
              <p className="text-gray-600 mt-2">Mairie d'Abidjan - Service Attestations</p>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                <FileText size={48} className="text-gray-400" />
              </div>
            </div>
          </div>

          {renderStep()}

          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                currentStep === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              Précédent
            </button>

            <button
              onClick={handleNext}
              className="px-8 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              {currentStep === 4 ? 'Soumettre la demande' : 'Suivant'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttestationForm;
"use client"

import React, { useState } from 'react';
import { CheckCircle, AlertCircle, User, FileText, Phone, Download } from 'lucide-react';

const CivilRecordsForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Étape 1: Type d'acte
    actType: '',
    
    // Étape 2: Informations sur la personne
    firstName: '',
    lastName: '',
    birthDate: '',
    birthPlace: '',
    eventDate: '',
    eventPlace: '',
    fatherName: '',
    motherName: '',
    oldActNumber: '',
    
    // Étape 3: Informations du demandeur
    requesterRelation: '',
    requesterPhone: '',
    requesterEmail: '',
    idType: '',
    idNumber: '',
    
    // Étape 4: Mode de retrait
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

  const validateStep = (step:any) => {
    switch (step) {
      case 1:
        if (!formData.actType) {
          showAlert('error', 'Veuillez sélectionner un type d\'acte');
          return false;
        }
        break;
      case 2:
        if (!formData.firstName || !formData.lastName) {
          showAlert('error', 'Veuillez remplir le nom et prénoms');
          return false;
        }
        if (formData.actType === 'naissance' && (!formData.birthDate || !formData.birthPlace)) {
          showAlert('error', 'Veuillez remplir la date et lieu de naissance');
          return false;
        }
        break;
      case 3:
        if (!formData.requesterRelation || !formData.requesterPhone || !formData.requesterEmail) {
          showAlert('error', 'Veuillez remplir tous les champs obligatoires');
          return false;
        }
        if (!formData.idType || !formData.idNumber) {
          showAlert('error', 'Veuillez fournir vos informations d\'identité');
          return false;
        }
        break;
      case 4:
        if (!formData.withdrawalMode) {
          showAlert('error', 'Veuillez choisir un mode de retrait');
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
        showAlert('success', 'Demande soumise avec succès ! Vous recevrez une confirmation par email.');
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
          Type d'acte
        </span>
        <span className={currentStep === 2 ? 'text-orange-500' : currentStep > 2 ? 'text-green-600' : ''}>
          Informations personne
        </span>
        <span className={currentStep === 3 ? 'text-orange-500' : currentStep > 3 ? 'text-green-600' : ''}>
          Informations demandeur
        </span>
        <span className={currentStep === 4 ? 'text-orange-500' : ''}>
          Mode de retrait
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
                <h2 className="text-2xl font-bold text-gray-800">Type d'acte demandé</h2>
                <p className="text-gray-600">Sélectionnez le type d'acte d'état civil souhaité</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['naissance', 'mariage', 'décès'].map((type) => (
                <button
                  key={type}
                  onClick={() => handleInputChange('actType', type)}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    formData.actType === type
                      ? 'border-orange-500 bg-orange-50 text-orange-500'
                      : 'border-gray-300 hover:border-orange-500 hover:bg-orange-50'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-lg font-semibold capitalize">{type}</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Acte de {type}
                    </div>
                  </div>
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
                <h2 className="text-2xl font-bold text-gray-800">Informations sur la personne concernée</h2>
                <p className="text-gray-600">Renseignez les informations de la personne pour laquelle vous demandez l'acte</p>
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
                  placeholder="Nom de famille"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Prénoms *</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Prénoms"
                />
              </div>

              {formData.actType === 'naissance' && (
                <>
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

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom du père</label>
                    <input
                      type="text"
                      value={formData.fatherName}
                      onChange={(e) => handleInputChange('fatherName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Nom du père"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom de la mère</label>
                    <input
                      type="text"
                      value={formData.motherName}
                      onChange={(e) => handleInputChange('motherName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Nom de la mère"
                    />
                  </div>
                </>
              )}

              {(formData.actType === 'mariage' || formData.actType === 'décès') && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date de {formData.actType} *
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => handleInputChange('eventDate', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Lieu de {formData.actType} *
                    </label>
                    <input
                      type="text"
                      value={formData.eventPlace}
                      onChange={(e) => handleInputChange('eventPlace', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder={`Lieu de ${formData.actType}`}
                    />
                  </div>
                </>
              )}

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Numéro de l'ancien acte (si connu)</label>
                <input
                  type="text"
                  value={formData.oldActNumber}
                  onChange={(e) => handleInputChange('oldActNumber', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Numéro de l'ancien acte"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <Phone className="text-orange-500" size={32} />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Informations du demandeur</h2>
                <p className="text-gray-600">Vos coordonnées et justificatif d'identité</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Lien avec la personne concernée *</label>
                <select
                  value={formData.requesterRelation}
                  onChange={(e) => handleInputChange('requesterRelation', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="moi-même">Moi-même</option>
                  <option value="parent">Parent</option>
                  <option value="conjoint">Conjoint</option>
                  <option value="enfant">Enfant</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                <input
                  type="tel"
                  value={formData.requesterPhone}
                  onChange={(e) => handleInputChange('requesterPhone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="+225 XX XX XX XX"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  value={formData.requesterEmail}
                  onChange={(e) => handleInputChange('requesterEmail', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="votre.email@example.com"
                />
              </div>

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
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <Download className="text-orange-500" size={32} />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Mode de retrait</h2>
                <p className="text-gray-600">Choisissez comment vous souhaitez récupérer votre acte</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => handleInputChange('withdrawalMode', 'mairie')}
                className={`p-6 rounded-lg border-2 transition-all ${
                  formData.withdrawalMode === 'mairie'
                    ? 'border-orange-500 bg-orange-50 text-orange-500'
                    : 'border-gray-300 hover:border-orange-500 hover:bg-orange-50'
                }`}
              >
                <div className="text-center">
                  <div className="text-lg font-semibold">Retrait en mairie</div>
                  <div className="text-sm text-gray-600 mt-2">
                    Récupérez votre acte directement à la mairie
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleInputChange('withdrawalMode', 'enligne')}
                className={`p-6 rounded-lg border-2 transition-all ${
                  formData.withdrawalMode === 'enligne'
                    ? 'border-orange-500 bg-orange-50 text-orange-500'
                    : 'border-gray-300 hover:border-orange-500 hover:bg-orange-50'
                }`}
              >
                <div className="text-center">
                  <div className="text-lg font-semibold">Téléchargement en ligne</div>
                  <div className="text-sm text-gray-600 mt-2">
                    Recevez votre acte par email (version numérique)
                  </div>
                </div>
              </button>
            </div>

            {formData.withdrawalMode && (
              <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Récapitulatif de votre demande</h3>
                <div className="space-y-2 text-sm text-green-700">
                  <p><strong>Type d'acte :</strong> {formData.actType}</p>
                  <p><strong>Personne concernée :</strong> {formData.firstName} {formData.lastName}</p>
                  <p><strong>Contact :</strong> {formData.requesterEmail}</p>
                  <p><strong>Mode de retrait :</strong> {formData.withdrawalMode === 'mairie' ? 'En mairie' : 'En ligne'}</p>
                </div>
              </div>
            )}
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
              <h1 className="text-3xl font-bold text-gray-800">Demande d'acte d'état civil</h1>
              <p className="text-gray-600 mt-2">Mairie d'Abidjan - Service État Civil</p>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                <User size={48} className="text-gray-400" />
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

export default CivilRecordsForm;
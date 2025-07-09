"use client"

import React, { useState } from 'react';
import { CheckCircle, AlertCircle, User, FileText, Phone, Download, MapPin, Home } from 'lucide-react';

const LandProceduresForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Étape 1: Type de démarche
    procedureType: '',
    
    // Étape 2: Informations sur le propriétaire
    ownerFirstName: '',
    ownerLastName: '',
    ownerEmail: '',
    ownerPhone: '',
    
    // Étape 3: Informations sur le terrain
    propertyTitle: '',
    villageAttestation: '',
    landLocation: '',
    lot: '',
    block: '',
    district: '',
    landArea: '',
    
    // Étape 4: Documents et justificatifs
    idType: '',
    idNumber: '',
    paymentJustification: '',
    technicalDocuments: '',
    architectPlans: '',
    
    // Étape 5: Mode de retrait
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
        if (!formData.procedureType) {
          showAlert('error', 'Veuillez sélectionner un type de démarche');
          return false;
        }
        break;
      case 2:
        if (!formData.ownerFirstName || !formData.ownerLastName || !formData.ownerEmail || !formData.ownerPhone) {
          showAlert('error', 'Veuillez remplir tous les champs obligatoires du propriétaire');
          return false;
        }
        break;
      case 3:
        if (!formData.landLocation || !formData.district) {
          showAlert('error', 'Veuillez préciser la localisation du terrain');
          return false;
        }
        break;
      case 4:
        if (!formData.idType || !formData.idNumber) {
          showAlert('error', 'Veuillez fournir vos informations d\'identité');
          return false;
        }
        break;
      case 5:
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
      if (currentStep < 5) {
        setCurrentStep(currentStep + 1);
        showAlert('success', 'Étape validée avec succès');
      } else {
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
      <div className="flex items-center justify-center space-x-4">
        {[1, 2, 3, 4, 5].map((step) => (
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
            {step < 5 && (
              <div className={`h-0.5 w-12 mx-2 ${
                step < currentStep ? 'bg-green-600' : 'bg-gray-400'
              }`} style={{ borderStyle: 'dotted' }} />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4 text-white text-sm">
        <span className={currentStep === 1 ? 'text-orange-500' : currentStep > 1 ? 'text-green-600' : ''}>
          Type de démarche
        </span>
        <span className={currentStep === 2 ? 'text-orange-500' : currentStep > 2 ? 'text-green-600' : ''}>
          Propriétaire
        </span>
        <span className={currentStep === 3 ? 'text-orange-500' : currentStep > 3 ? 'text-green-600' : ''}>
          Terrain
        </span>
        <span className={currentStep === 4 ? 'text-orange-500' : currentStep > 4 ? 'text-green-600' : ''}>
          Documents
        </span>
        <span className={currentStep === 5 ? 'text-orange-500' : ''}>
          Retrait
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
              <Home className="text-orange-500" size={32} />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Type de démarche foncière</h2>
                <p className="text-gray-600">Sélectionnez le type de procédure que vous souhaitez effectuer</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { value: 'permis_construire', label: 'Permis de construire', desc: 'Autorisation de construction' },
                { value: 'certificat_situation', label: 'Certificat de situation géographique', desc: 'Situation du terrain' },
                { value: 'declaration_fonciere', label: 'Déclaration foncière', desc: 'Déclaration de propriété' },
                { value: 'attestation_propriete', label: 'Attestation de propriété', desc: 'Justificatif de propriété' },
                { value: 'morcellement', label: 'Demande de morcellement', desc: 'Division de terrain' },
                { value: 'lotissement', label: 'Demande de lotissement', desc: 'Aménagement de terrain' }
              ].map((type) => (
                <button
                  key={type.value}
                  onClick={() => handleInputChange('procedureType', type.value)}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    formData.procedureType === type.value
                      ? 'border-orange-500 bg-orange-50 text-orange-500'
                      : 'border-gray-300 hover:border-orange-500 hover:bg-orange-50'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-lg font-semibold">{type.label}</div>
                    <div className="text-sm text-gray-600 mt-1">{type.desc}</div>
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
                <h2 className="text-2xl font-bold text-gray-800">Informations du propriétaire</h2>
                <p className="text-gray-600">Renseignez les informations du propriétaire du terrain</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                <input
                  type="text"
                  value={formData.ownerLastName}
                  onChange={(e) => handleInputChange('ownerLastName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Nom de famille"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Prénoms *</label>
                <input
                  type="text"
                  value={formData.ownerFirstName}
                  onChange={(e) => handleInputChange('ownerFirstName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Prénoms"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  value={formData.ownerEmail}
                  onChange={(e) => handleInputChange('ownerEmail', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="votre.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                <input
                  type="tel"
                  value={formData.ownerPhone}
                  onChange={(e) => handleInputChange('ownerPhone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="+225 XX XX XX XX"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <MapPin className="text-orange-500" size={32} />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Informations sur le terrain</h2>
                <p className="text-gray-600">Localisation précise et détails du terrain</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Titre de propriété</label>
                <input
                  type="text"
                  value={formData.propertyTitle}
                  onChange={(e) => handleInputChange('propertyTitle', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Numéro du titre de propriété"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Attestation villageoise</label>
                <input
                  type="text"
                  value={formData.villageAttestation}
                  onChange={(e) => handleInputChange('villageAttestation', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Référence de l'attestation"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quartier *</label>
                <input
                  type="text"
                  value={formData.district}
                  onChange={(e) => handleInputChange('district', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Nom du quartier"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Localisation précise *</label>
                <input
                  type="text"
                  value={formData.landLocation}
                  onChange={(e) => handleInputChange('landLocation', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Adresse complète du terrain"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Lot</label>
                <input
                  type="text"
                  value={formData.lot}
                  onChange={(e) => handleInputChange('lot', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Numéro de lot"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Îlot</label>
                <input
                  type="text"
                  value={formData.block}
                  onChange={(e) => handleInputChange('block', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Numéro d'îlot"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Superficie du terrain</label>
                <input
                  type="text"
                  value={formData.landArea}
                  onChange={(e) => handleInputChange('landArea', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Superficie en m²"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <FileText className="text-orange-500" size={32} />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Documents et justificatifs</h2>
                <p className="text-gray-600">Pièces justificatives nécessaires à votre demande</p>
              </div>
            </div>

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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Justificatif de paiement</label>
                <select
                  value={formData.paymentJustification}
                  onChange={(e) => handleInputChange('paymentJustification', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="recu_banque">Reçu de banque</option>
                  <option value="recu_tresor">Reçu du Trésor public</option>
                  <option value="autre">Autre justificatif</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Plans d'architecte</label>
                <select
                  value={formData.architectPlans}
                  onChange={(e) => handleInputChange('architectPlans', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="plan_masse">Plan de masse</option>
                  <option value="croquis">Croquis</option>
                  <option value="plan_architecte">Plan d'architecte</option>
                  <option value="plan_geometre">Plan de géomètre</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Documents techniques</label>
                <textarea
                  value={formData.technicalDocuments}
                  onChange={(e) => handleInputChange('technicalDocuments', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                //   rows="3"
                  placeholder="Listez les documents techniques fournis (études de sol, relevés topographiques, etc.)"
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <Download className="text-orange-500" size={32} />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Mode de retrait</h2>
                <p className="text-gray-600">Choisissez comment vous souhaitez récupérer vos documents</p>
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
                    Récupérez vos documents directement à la mairie
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleInputChange('withdrawalMode', 'courrier')}
                className={`p-6 rounded-lg border-2 transition-all ${
                  formData.withdrawalMode === 'courrier'
                    ? 'border-orange-500 bg-orange-50 text-orange-500'
                    : 'border-gray-300 hover:border-orange-500 hover:bg-orange-50'
                }`}
              >
                <div className="text-center">
                  <div className="text-lg font-semibold">Envoi par courrier</div>
                  <div className="text-sm text-gray-600 mt-2">
                    Recevez vos documents par courrier recommandé
                  </div>
                </div>
              </button>
            </div>

            {formData.withdrawalMode && (
              <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Récapitulatif de votre demande</h3>
                <div className="space-y-2 text-sm text-green-700">
                  <p><strong>Type de démarche :</strong> {formData.procedureType}</p>
                  <p><strong>Propriétaire :</strong> {formData.ownerFirstName} {formData.ownerLastName}</p>
                  <p><strong>Localisation :</strong> {formData.landLocation}, {formData.district}</p>
                  <p><strong>Contact :</strong> {formData.ownerEmail}</p>
                  <p><strong>Mode de retrait :</strong> {formData.withdrawalMode === 'mairie' ? 'En mairie' : 'Par courrier'}</p>
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
              <h1 className="text-3xl font-bold text-gray-800">Déclarations et procédures foncières</h1>
              <p className="text-gray-600 mt-2">Mairie d'Abidjan - Service Foncier et Urbanisme</p>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                <Home size={48} className="text-gray-400" />
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
              {currentStep === 5 ? 'Soumettre la demande' : 'Suivant'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandProceduresForm;
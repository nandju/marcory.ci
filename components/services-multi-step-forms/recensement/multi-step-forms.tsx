

"use client"

import React, { useState } from 'react';
import { CheckCircle, AlertCircle, User, FileText, Phone, Camera, Home, Users } from 'lucide-react';

const CensusForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Étape 1: Informations personnelles
    firstName: '',
    lastName: '',
    sex: '',
    birthDate: '',
    birthPlace: '',
    maritalStatus: '',
    education: '',
    profession: '',
    
    // Étape 2: Adresse et localisation
    district: '',
    street: '',
    additionalAddress: '',
    
    // Étape 3: Pièce d'identité et contact
    idType: '',
    idNumber: '',
    phone: '',
    email: '',
    
    // Étape 4: Compléments (photo et famille)
    hasPhoto: false,
    familyMember: '',
    relationshipType: ''
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
        if (!formData.firstName || !formData.lastName || !formData.sex || !formData.birthDate || !formData.birthPlace) {
          showAlert('error', 'Veuillez remplir tous les champs obligatoires');
          return false;
        }
        break;
      case 2:
        if (!formData.district || !formData.street) {
          showAlert('error', 'Veuillez renseigner votre quartier et rue');
          return false;
        }
        break;
      case 3:
        if (!formData.idType || !formData.idNumber || !formData.phone) {
          showAlert('error', 'Veuillez renseigner votre pièce d\'identité et téléphone');
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
        showAlert('success', 'Enregistrement dans la base communale effectué avec succès !');
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const StepIndicator = () => (
    <div className="bg-gray-800 p-6 mb-8">
      <div className="flex items-center justify-center space-x-8">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 font-bold ${
              step < currentStep 
                ? 'bg-green-600 border-green-600 text-white' 
                : step === currentStep 
                ? 'border-orange-500 bg-orange-500 text-white' 
                : 'border-gray-400 text-gray-400'
            }`} style={{ backgroundColor: step < currentStep ? '#009E60' : step === currentStep ? '#F77F00' : undefined, borderColor: step < currentStep ? '#009E60' : step === currentStep ? '#F77F00' : undefined }}>
              {step < currentStep ? <CheckCircle size={20} /> : step}
            </div>
            {step < 4 && (
              <div className={`h-0.5 w-16 mx-4 ${
                step < currentStep ? 'bg-green-600' : 'bg-gray-400'
              }`} style={{ backgroundColor: step < currentStep ? '#009E5F' : undefined }} />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4 text-white text-sm">
        <span className={currentStep === 1 ? 'font-bold' : currentStep > 1 ? 'opacity-80' : 'opacity-50'} style={{ color: currentStep === 1 ? '#F77F00' : currentStep > 1 ? '#009E60' : undefined }}>
          Informations personnelles
        </span>
        <span className={currentStep === 2 ? 'font-bold' : currentStep > 2 ? 'opacity-80' : 'opacity-50'} style={{ color: currentStep === 2 ? '#F77F00' : currentStep > 2 ? '#009E60' : undefined }}>
          Adresse et localisation
        </span>
        <span className={currentStep === 3 ? 'font-bold' : currentStep > 3 ? 'opacity-80' : 'opacity-50'} style={{ color: currentStep === 3 ? '#F77F00' : currentStep > 3 ? '#009E60' : undefined }}>
          Identité et contact
        </span>
        <span className={currentStep === 4 ? 'font-bold' : 'opacity-50'} style={{ color: currentStep === 4 ? '#F77F00' : undefined }}>
          Compléments
        </span>
      </div>
    </div>
  );

  const Alert = () => (
    alerts.show && (
      <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 text-white flex items-center space-x-2`} style={{ backgroundColor: alerts.type === 'error' ? '#DC2626' : '#009E60' }}>
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
              <User className="text-orange-500" size={32} style={{ color: '#F77F00' }} />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Informations personnelles</h2>
                <p className="text-gray-600">Renseignez vos informations d'identité civile</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500"
                //   style={{ focusRingColor: '#F77F00', focusBorderColor: '#F77F00' }}
                  placeholder="Nom de famille"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Prénoms *</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500"
                  placeholder="Prénoms"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sexe *</label>
                <select
                  value={formData.sex}
                  onChange={(e) => handleInputChange('sex', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="masculin">Masculin</option>
                  <option value="féminin">Féminin</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-2-700 mb-2">Date de naissance *</label>
                <input
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => handleInputChange('birthDate', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Lieu de naissance *</label>
                <input
                  type="text"
                  value={formData.birthPlace}
                  onChange={(e) => handleInputChange('birthPlace', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500"
                  placeholder="Ville, commune, district"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Situation matrimoniale</label>
                <select
                  value={formData.maritalStatus}
                  onChange={(e) => handleInputChange('maritalStatus', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="célibataire">Célibataire</option>
                  <option value="marié(e)">Marié(e)</option>
                  <option value="divorcé(e)">Divorcé(e)</option>
                  <option value="veuf(ve)">Veuf(ve)</option>
                  <option value="union libre">Union libre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Niveau d'étude</label>
                <select
                  value={formData.education}
                  onChange={(e) => handleInputChange('education', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="sans instruction">Sans instruction</option>
                  <option value="primaire">Primaire</option>
                  <option value="secondaire">Secondaire</option>
                  <option value="supérieur">Supérieur</option>
                  <option value="professionnel">Formation professionnelle</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Activité professionnelle</label>
                <input
                  type="text"
                  value={formData.profession}
                  onChange={(e) => handleInputChange('profession', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500"
                  placeholder="Votre profession ou activité"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <Home className="text-orange-500" size={32} style={{ color: '#F77F00' }} />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Adresse et localisation</h2>
                <p className="text-gray-600">Renseignez votre adresse complète de résidence</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quartier *</label>
                <input
                  type="text"
                  value={formData.district}
                  onChange={(e) => handleInputChange('district', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500"
                  placeholder="Nom du quartier"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rue *</label>
                <input
                  type="text"
                  value={formData.street}
                  onChange={(e) => handleInputChange('street', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500"
                  placeholder="Nom de la rue"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Complément d'adresse</label>
                <input
                  type="text"
                  value={formData.additionalAddress}
                  onChange={(e) => handleInputChange('additionalAddress', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500"
                  placeholder="Numéro de maison, point de repère, etc."
                />
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-2">Information importante</h3>
              <p className="text-orange-700 text-sm">
                Assurez-vous que l'adresse fournie est votre lieu de résidence actuel. 
                Ces informations seront utilisées pour votre inscription dans la base communale.
              </p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <FileText className="text-orange-500" size={32} style={{ color: '#F77F00' }} />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Pièce d'identité et contact</h2>
                <p className="text-gray-600">Justificatif d'identité et coordonnées de contact</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type de pièce d'identité *</label>
                <select
                  value={formData.idType}
                  onChange={(e) => handleInputChange('idType', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="cni">Carte Nationale d'Identité</option>
                  <option value="passeport">Passeport</option>
                  <option value="permis">Permis de conduire</option>
                  <option value="autre">Autre document officiel</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Numéro de la pièce *</label>
                <input
                  type="text"
                  value={formData.idNumber}
                  onChange={(e) => handleInputChange('idNumber', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500"
                  placeholder="Numéro de la pièce d'identité"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500"
                  placeholder="+225 XX XX XX XX"
                />
              </div>

              <div>
                <label className="block text-sm font-2-2 text-gray-700 mb-2">Email (optionnel)</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500"
                  placeholder="votre.email@exemple.com"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <Camera className="text-orange-500" size={32} style={{ color: '#F77F00' }} />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Compléments</h2>
                <p className="text-gray-600">Photo d'identité et informations familiales (optionnel)</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">Photo d'identité</label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleInputChange('hasPhoto', true)}
                    className={`px-6 py-3 rounded-lg border-2 transition-all ${
                      formData.hasPhoto
                        ? 'border-orange-500 bg-orange-50 text-orange-600'
                        : 'border-gray-300 hover:border-orange-500'
                    }`}
                    style={{ borderColor: formData.hasPhoto ? '#F77F00' : undefined, backgroundColor: formData.hasPhoto ? '#FFF7ED' : undefined, color: formData.hasPhoto ? '#F77F00' : undefined }}
                  >
                    J'ai une photo
                  </button>
                  <button
                    onClick={() => handleInputChange('hasPhoto', false)}
                    className={`px-6 py-3 rounded-lg border-2 transition-all ${
                      !formData.hasPhoto
                        ? 'border-gray-500 bg-gray-50 text-gray-600'
                        : 'border-gray-300 hover:border-gray-500'
                    }`}
                  >
                    Pas de photo
                  </button>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Inscription familiale</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom du membre de famille à inscrire</label>
                    <input
                      type="text"
                      value={formData.familyMember}
                      onChange={(e) => handleInputChange('familyMember', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500"
                      placeholder="Nom et prénoms (optionnel)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Lien de parenté</label>
                    <select
                      value={formData.relationshipType}
                      onChange={(e) => handleInputChange('relationshipType', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="conjoint">Conjoint(e)</option>
                      <option value="enfant">Enfant</option>
                      <option value="parent">Parent</option>
                      <option value="frère/sœur">Frère/Sœur</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Récapitulatif du recensement</h3>
                <div className="space-y-2 text-sm text-green-700">
                  <p><strong>Citoyen :</strong> {formData.firstName} {formData.lastName}</p>
                  <p><strong>Adresse :</strong> {formData.district} - {formData.street}</p>
                  <p><strong>Contact :</strong> {formData.phone}</p>
                  <p><strong>Pièce d'identité :</strong> {formData.idType} - {formData.idNumber}</p>
                  {formData.familyMember && (
                    <p><strong>Famille :</strong> {formData.familyMember} ({formData.relationshipType})</p>
                  )}
                </div>
              </div>
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
              <h1 className="text-3xl font-bold text-gray-800">Recensement des citoyens</h1>
              <p className="text-gray-600 mt-2">Inscription numérique dans la base communale</p>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F7F7F7' }}>
                <Users size={48} style={{ color: '#F77F00' }} />
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
              className="px-8 py-3 text-white rounded-lg font-medium hover:opacity-90 transition-all"
              style={{ backgroundColor: '#F77F00' }}
            >
              {currentStep === 4 ? 'Enregistrer dans la base' : 'Suivant'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CensusForm;
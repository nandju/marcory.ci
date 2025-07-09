

"use client"

import React, { useState } from 'react';
import { CheckCircle, AlertCircle, User, FileText, Phone, Download, Shield, Stamp } from 'lucide-react';

const LegalizationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Étape 1: Type de légalisation
    legalizationType: '',
    documentType: '',
    copyCount: 1,
    
    // Étape 2: Informations personnelles
    firstName: '',
    lastName: '',
    birthDate: '',
    birthPlace: '',
    
    // Étape 3: Justificatifs et document
    idType: '',
    idNumber: '',
    originalDocument: '',
    signatureRequired: false,
    declarationText: '',
    
    // Étape 4: Coordonnées et finalisation
    phone: '',
    email: '',
    requestReason: '',
    withdrawalMode: '',
    urgentRequest: false
  });

  const [alerts, setAlerts] = useState({ type: '', message: '', show: false });

  const showAlert = (type:any, message:any) => {
    setAlerts({ type, message, show: true });
    setTimeout(() => setAlerts({ ...alerts, show: false }), 5000);
  };

  const handleInputChange = (field:any, value:any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const legalizationTypes = [
    { value: 'copy', label: 'Légalisation de copies', description: 'Authentification de copies de documents officiels' },
    { value: 'signature', label: 'Légalisation de signatures', description: 'Authentification de signatures sur documents' },
    { value: 'declaration', label: 'Légalisation de déclarations', description: 'Authentification de déclarations écrites' },
    { value: 'translation', label: 'Légalisation de traductions', description: 'Authentification de traductions officielles' }
  ];

  const documentTypes = [
    { value: 'diplome', label: 'Diplôme ou certificat' },
    { value: 'acte_naissance', label: 'Acte de naissance' },
    { value: 'acte_mariage', label: 'Acte de mariage' },
    { value: 'acte_deces', label: 'Acte de décès' },
    { value: 'bulletin_notes', label: 'Bulletin de notes' },
    { value: 'contrat', label: 'Contrat ou accord' },
    { value: 'procuration', label: 'Procuration' },
    { value: 'attestation_travail', label: 'Attestation de travail' },
    { value: 'autre', label: 'Autre document' }
  ];

  const validateStep = (step:any) => {
    switch (step) {
      case 1:
        if (!formData.legalizationType) {
          showAlert('error', 'Veuillez sélectionner un type de légalisation');
          return false;
        }
        if (!formData.documentType) {
          showAlert('error', 'Veuillez spécifier le type de document');
          return false;
        }
        if (formData.copyCount < 1) {
          showAlert('error', 'Le nombre de copies doit être d\'au moins 1');
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
        if (!formData.originalDocument) {
          showAlert('error', 'Veuillez spécifier le document original');
          return false;
        }
        if (formData.legalizationType === 'declaration' && !formData.declarationText) {
          showAlert('error', 'Veuillez saisir le texte de la déclaration');
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
        showAlert('success', 'Demande de légalisation soumise avec succès ! Vous recevrez une confirmation par email.');
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
                ? 'border-orange-500 text-white' 
                : 'border-gray-400 text-gray-400'
            }`} style={step === currentStep ? { backgroundColor: '#F77F00' } : {}}>
              {step < currentStep ? <CheckCircle size={20} /> : step}
            </div>
            {step < 4 && (
              <div className={`h-0.5 w-16 mx-4 ${
                step < currentStep ? 'bg-green-600' : 'bg-gray-400'
              }`} style={step < currentStep ? { backgroundColor: '#009E60' } : {}} />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4 text-white text-sm">
        <span className={currentStep === 1 ? 'text-orange-400' : currentStep > 1 ? 'text-green-400' : ''} style={currentStep === 1 ? { color: '#F77F00' } : currentStep > 1 ? { color: '#009E60' } : {}}>
          Type de légalisation
        </span>
        <span className={currentStep === 2 ? 'text-orange-400' : currentStep > 2 ? 'text-green-400' : ''} style={currentStep === 2 ? { color: '#F77F00' } : currentStep > 2 ? { color: '#009E60' } : {}}>
          Informations personnelles
        </span>
        <span className={currentStep === 3 ? 'text-orange-400' : currentStep > 3 ? 'text-green-400' : ''} style={currentStep === 3 ? { color: '#F77F00' } : currentStep > 3 ? { color: '#009E60' } : {}}>
          Documents et justificatifs
        </span>
        <span className={currentStep === 4 ? 'text-orange-400' : ''} style={currentStep === 4 ? { color: '#F77F00' } : {}}>
          Coordonnées et finalisation
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
              <Stamp style={{ color: '#F77F00' }} size={32} />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Type de légalisation</h2>
                <p className="text-gray-600">Sélectionnez le type de légalisation demandée</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {legalizationTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => handleInputChange('legalizationType', type.value)}
                  className={`p-6 rounded-lg border-2 transition-all text-left ${
                    formData.legalizationType === type.value
                      ? 'border-orange-600 bg-orange-50 text-orange-600'
                      : 'border-gray-300 hover:border-orange-600 hover:bg-orange-50'
                  }`}
                  style={formData.legalizationType === type.value ? { 
                    borderColor: '#F77F00', 
                    backgroundColor: '#FFF5E6', 
                    color: '#F77F00' 
                  } : {}}
                  onMouseEnter={(e) => {
                    if (formData.legalizationType !== type.value) {
                      e.currentTarget.style.borderColor = '#F77F00';
                      e.currentTarget.style.backgroundColor = '#FFF5E6';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (formData.legalizationType !== type.value) {
                      e.currentTarget.style.borderColor = '#D1D5DB';
                      e.currentTarget.style.backgroundColor = 'white';
                    }
                  }}
                >
                  <div className="text-lg font-semibold mb-2">{type.label}</div>
                  <div className="text-sm text-gray-600">{type.description}</div>
                </button>
              ))}
            </div>

            {formData.legalizationType && (
              <div className="mt-8 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type de document *</label>
                  <select
                    value={formData.documentType}
                    onChange={(e) => handleInputChange('documentType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500"
                    style={{ 
                    //   '--tw-ring-color': '#F77F00',
                    //   '--tw-border-opacity': '1'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#F77F00';
                      e.target.style.boxShadow = '0 0 0 2px rgba(247, 127, 0, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#D1D5DB';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">Sélectionnez le type de document</option>
                    {documentTypes.map((doc) => (
                      <option key={doc.value} value={doc.value}>{doc.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de copies *</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={formData.copyCount}
                    onChange={(e) => handleInputChange('copyCount', parseInt(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#F77F00';
                      e.target.style.boxShadow = '0 0 0 2px rgba(247, 127, 0, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#D1D5DB';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                  <p className="text-sm text-gray-500 mt-1">Maximum 10 copies par demande</p>
                </div>
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <User style={{ color: '#F77F00' }} size={32} />
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                  placeholder="Votre nom de famille"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Prénoms *</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                  placeholder="Vos prénoms"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date de naissance *</label>
                <input
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => handleInputChange('birthDate', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Lieu de naissance *</label>
                <input
                  type="text"
                  value={formData.birthPlace}
                  onChange={(e) => handleInputChange('birthPlace', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                  placeholder="Lieu de naissance"
                />
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center space-x-2 mb-2">
                <Stamp className="text-orange-600" size={20} />
                <span className="text-orange-800 font-medium">Demande en cours</span>
              </div>
              <p className="text-orange-700">
                {legalizationTypes.find(t => t.value === formData.legalizationType)?.label} - 
                {documentTypes.find(d => d.value === formData.documentType)?.label} 
                ({formData.copyCount} copie{formData.copyCount > 1 ? 's' : ''})
              </p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <Shield style={{ color: '#F77F00' }} size={32} />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Documents et justificatifs</h2>
                <p className="text-gray-600">Fournissez vos justificatifs et le document à légaliser</p>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                      placeholder="Numéro de la pièce d'identité"
                    />
                  </div>
                </div>
              </div>

              {/* Document original */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Document à légaliser</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description du document original *
                  </label>
                  <textarea
                    value={formData.originalDocument}
                    onChange={(e) => handleInputChange('originalDocument', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                    placeholder="Décrivez précisément le document original (titre, date, émetteur, etc.)"
                  />
                </div>
              </div>

              {/* Signature sur place */}
              {formData.legalizationType === 'signature' && (
                <div className="border border-orange-200 rounded-lg p-6 bg-orange-50" style={{ backgroundColor: '#FFF5E6', borderColor: '#F77F00' }}>
                  <h3 className="text-lg font-semibold text-orange-800 mb-4" style={{ color: '#F77F00' }}>Signature sur place</h3>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-700">
                      Pour la légalisation de signature, vous devrez signer le document en présence de l'agent municipal.
                    </p>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={formData.signatureRequired}
                        onChange={(e) => handleInputChange('signatureRequired', e.target.checked)}
                        className="w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-600"
                      />
                      <span className="text-sm text-gray-700">
                        Je confirme que je signerai le document en présence de l'agent municipal *
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Déclaration à légaliser */}
              {formData.legalizationType === 'declaration' && (
                <div className="border border-blue-200 rounded-lg p-6 bg-blue-50">
                  <h3 className="text-lg font-semibold text-orange-800 mb-4">Déclaration à légaliser</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Texte de la déclaration *
                    </label>
                    <textarea
                      value={formData.declarationText}
                      onChange={(e) => handleInputChange('declarationText', e.target.value)}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                      placeholder="Saisissez le texte complet de la déclaration à légaliser"
                    />
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
              <Phone className="text-orange-600" size={32} />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Coordonnées et finalisation</h2>
                <p className="text-gray-600">Finalisez votre demande de légalisation</p>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                      placeholder="+225 XX XX XX XX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
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
                    Précisez le motif de votre demande de légalisation *
                  </label>
                  <textarea
                    value={formData.requestReason}
                    onChange={(e) => handleInputChange('requestReason', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                    placeholder="Ex: Démarches consulaires, dossier d'immigration, procédure judiciaire, etc."
                  />
                </div>
              </div>

              {/* Options supplémentaires */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Options</h3>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.urgentRequest}
                    onChange={(e) => handleInputChange('urgentRequest', e.target.checked)}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                  />
                  <span className="text-sm text-gray-700">
                    Demande urgente (traitement prioritaire - frais supplémentaires)
                  </span>
                </label>
              </div>

              {/* Mode de retrait */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Mode de retrait</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={() => handleInputChange('withdrawalMode', 'mairie')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formData.withdrawalMode === 'mairie'
                        ? 'border-orange-600 bg-blue-50 text-orange-600'
                        : 'border-gray-300 hover:border-orange-600 hover:bg-orange-50'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-lg font-semibold">Retrait en mairie</div>
                      <div className="text-sm text-gray-600 mt-1">
                        Récupérez vos documents légalisés à la mairie
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleInputChange('withdrawalMode', 'courrier')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formData.withdrawalMode === 'courrier'
                        ? 'border-orange-600 bg-blue-50 text-orange-600'
                        : 'border-gray-300 hover:border-orange-600 hover:bg-orange-50'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-lg font-semibold">Envoi par courrier</div>
                      <div className="text-sm text-gray-600 mt-1">
                        Réception par courrier recommandé
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
                    <p><strong>Type de légalisation :</strong> {legalizationTypes.find(t => t.value === formData.legalizationType)?.label}</p>
                    <p><strong>Document :</strong> {documentTypes.find(d => d.value === formData.documentType)?.label}</p>
                    <p><strong>Nombre de copies :</strong> {formData.copyCount}</p>
                    <p><strong>Demandeur :</strong> {formData.firstName} {formData.lastName}</p>
                    <p><strong>Contact :</strong> {formData.email} - {formData.phone}</p>
                    <p><strong>Motif :</strong> {formData.requestReason}</p>
                    <p><strong>Mode de retrait :</strong> {formData.withdrawalMode === 'mairie' ? 'En mairie' : 'Par courrier'}</p>
                    {formData.urgentRequest && <p><strong>Demande urgente :</strong> Oui</p>}
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
              <h1 className="text-3xl font-bold text-gray-800">Légalisation de documents</h1>
              <p className="text-gray-600 mt-2">Mairie d'Abidjan - Service Légalisation</p>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                <Stamp size={48} className="text-blue-600" />
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
              className="px-8 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
            >
              {currentStep === 4 ? 'Soumettre la demande' : 'Suivant'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalizationForm;
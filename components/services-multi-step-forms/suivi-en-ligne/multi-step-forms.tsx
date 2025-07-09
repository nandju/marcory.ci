

"use client"

import React, { useState } from 'react';
import { Search, Calendar, Clock, CheckCircle, AlertCircle, FileText, Phone, Mail, MapPin, Eye, Download, User } from 'lucide-react';

const DossierTracking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [dossierFound, setDossierFound] = useState(false);
  const [formData, setFormData] = useState({
    // Étape 1: Recherche du dossier
    dossierNumber: '',
    email: '',
    phone: '',
    requestType: '',
    submitDate: '',
    
    // Étape 2: Prise de RDV
    appointmentDate: '',
    appointmentTime: '',
    appointmentReason: '',
    additionalNotes: ''
  });

  const [alerts, setAlerts] = useState({ type: '', message: '', show: false });
  const [dossierStatus, setDossierStatus] = useState('en_cours'); // 'en_cours', 'validé', 'prêt'

  // Simulation de données de dossier
  const mockDossier = {
    number: 'DOS-2024-001234',
    type: 'Demande d\'acte de naissance',
    status: 'validé',
    submitDate: '2024-01-15',
    expectedDate: '2024-02-15',
    lastUpdate: '2024-01-20',
    documents: [
      { name: 'Formulaire de demande', status: 'validé' },
      { name: 'Pièce d\'identité', status: 'validé' },
      { name: 'Justificatif de domicile', status: 'en_cours' }
    ]
  };

  const showAlert = (type:any, message:any) => {
    setAlerts({ type, message, show: true });
    setTimeout(() => setAlerts({ ...alerts, show: false }), 5000);
  };

  const handleInputChange = (field:any, value:any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    if (!formData.dossierNumber || (!formData.email && !formData.phone)) {
      showAlert('error', 'Veuillez renseigner le numéro de dossier et un moyen de contact');
      return;
    }
    
    // Simulation de recherche
    setDossierFound(true);
    setDossierStatus(mockDossier.status);
    showAlert('success', 'Dossier trouvé avec succès !');
    setCurrentStep(2);
  };

  const handleAppointment = () => {
    if (!formData.appointmentDate || !formData.appointmentTime || !formData.appointmentReason) {
      showAlert('error', 'Veuillez remplir tous les champs obligatoires pour le rendez-vous');
      return;
    }
    
    showAlert('success', 'Rendez-vous confirmé ! Vous recevrez une confirmation par email.');
  };

  const getStatusColor = (status:any) => {
    switch (status) {
      case 'en_cours':
        return '#F77F00';
      case 'validé':
        return '#1E40AF';
      case 'prêt':
        return '#009E60';
      default:
        return '#6B7280';
    }
  };

  const getStatusText = (status:any) => {
    switch (status) {
      case 'en_cours':
        return 'En cours de traitement';
      case 'validé':
        return 'Validé - En attente de finalisation';
      case 'prêt':
        return 'Prêt pour retrait';
      default:
        return 'Statut inconnu';
    }
  };

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
              <Search className="text-orange-500" size={32} style={{ color: '#F77F00' }} />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Recherche de dossier</h2>
                <p className="text-gray-600">Recherchez votre dossier avec le numéro de référence</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Numéro de dossier *</label>
                <input
                  type="text"
                  value={formData.dossierNumber}
                  onChange={(e) => handleInputChange('dossierNumber', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500"
                  placeholder="DOS-2024-XXXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email de contact *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone (alternatif)</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500"
                  placeholder="+225 XX XX XX XX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type de demande</label>
                <select
                  value={formData.requestType}
                  onChange={(e) => handleInputChange('requestType', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="acte_naissance">Acte de naissance</option>
                  <option value="acte_mariage">Acte de mariage</option>
                  <option value="acte_deces">Acte de décès</option>
                  <option value="permis_construire">Permis de construire</option>
                  <option value="legalisation">Légalisation de document</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date de dépôt (approximative)</label>
                <input
                  type="date"
                  value={formData.submitDate}
                  onChange={(e) => handleInputChange('submitDate', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleSearch}
                className="px-8 py-3 text-white rounded-lg font-medium hover:opacity-90 transition-all flex items-center space-x-2"
                style={{ backgroundColor: '#F77F00' }}
              >
                <Search size={20} />
                <span>Rechercher mon dossier</span>
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            {/* Statut du dossier */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Statut du dossier</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: getStatusColor(dossierStatus) }}></div>
                  <span className="font-medium" style={{ color: getStatusColor(dossierStatus) }}>
                    {getStatusText(dossierStatus)}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Numéro :</span> {mockDossier.number}
                </div>
                <div>
                  <span className="font-medium">Type :</span> {mockDossier.type}
                </div>
                <div>
                  <span className="font-medium">Date de dépôt :</span> {mockDossier.submitDate}
                </div>
                <div>
                  <span className="font-medium">Dernière mise à jour :</span> {mockDossier.lastUpdate}
                </div>
                <div>
                  <span className="font-medium">Date prévue :</span> {mockDossier.expectedDate}
                </div>
              </div>
            </div>

            {/* Suivi des documents */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Suivi des documents</h3>
              <div className="space-y-3">
                {mockDossier.documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center space-x-3">
                      <FileText size={16} className="text-gray-500" />
                      <span className="text-sm">{doc.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: getStatusColor(doc.status) }}></div>
                      <span className="text-sm font-medium" style={{ color: getStatusColor(doc.status) }}>
                        {getStatusText(doc.status)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prise de rendez-vous */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="text-orange-500" size={24} style={{ color: '#F77F00' }} />
                <h3 className="text-lg font-semibold text-gray-800">Prendre un rendez-vous</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date souhaitée *</label>
                  <input
                    type="date"
                    value={formData.appointmentDate}
                    onChange={(e) => handleInputChange('appointmentDate', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-2 rounded-lg focus:ring-2 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Créneau horaire *</label>
                  <select
                    value={formData.appointmentTime}
                    onChange={(e) => handleInputChange('appointmentTime', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500"
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="9h-10h">9h00 - 10h00</option>
                    <option value="10h-11h">10h00 - 11h00</option>
                    <option value="11h-12h">11h00 - 12h00</option>
                    <option value="14h-15h">14h00 - 15h00</option>
                    <option value="15h-16h">15h00 - 16h00</option>
                    <option value="16h-17h">16h00 - 17h00</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Motif du rendez-vous *</label>
                  <select
                    value={formData.appointmentReason}
                    onChange={(e) => handleInputChange('appointmentReason', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500"
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="retrait_document">Retrait de document</option>
                    <option value="complément_dossier">Complément de dossier</option>
                    <option value="renseignement">Demande de renseignement</option>
                    <option value="reclamation">Réclamation</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Notes supplémentaires</label>
                  <textarea
                    value={formData.additionalNotes}
                    onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-orange-500"
                    placeholder="Informations supplémentaires..."
                  />
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <button
                  onClick={handleAppointment}
                  className="px-6 py-3 text-white rounded-lg font-medium hover:opacity-90 transition-all flex items-center space-x-2"
                  style={{ backgroundColor: '#009E60' }}
                >
                  <Calendar size={20} />
                  <span>Confirmer le rendez-vous</span>
                </button>
              </div>
            </div>

            {/* Actions rapides */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Actions rapides</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="flex items-center space-x-2 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Download size={16} />
                  <span className="text-sm">Télécharger reçu</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Mail size={16} />
                  <span className="text-sm">Envoyer par email</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Phone size={16} />
                  <span className="text-sm">Contacter la mairie</span>
                </button>
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
      
      <div className="max-w-6xl mx-auto py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mx-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Suivi en ligne des dossiers</h1>
              <p className="text-gray-600 mt-2">Vérification de l'état d'avancement et prise de rendez-vous</p>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F7F7F7' }}>
                <FileText size={48} style={{ color: '#F77F00' }} />
              </div>
            </div>
          </div>

          {renderStep()}

          {currentStep === 2 && (
            <div className="flex justify-center mt-8 pt-6 border-t">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
              >
                Nouvelle recherche
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DossierTracking;
"use client"

import type React from "react"

import { useState } from "react"
import { Send, MapPin, ExternalLink, Phone, Mail } from "lucide-react"

export default function ContactFormMap() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  const handleGetDirections = () => {
    const address = "Boulevard Lagunaire, Plateau, Abidjan, Côte d'Ivoire"
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://maps.google.com/maps?q=${encodedAddress}`, "_blank")
  }

  const handleViewLargerMap = () => {
    const address = "Boulevard Lagunaire, Plateau, Abidjan, Côte d'Ivoire"
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://maps.google.com/maps?q=${encodedAddress}&z=15`, "_blank")
  }

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Form Section */}
        <div className="mb-16">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-orange-500 text-sm font-semibold tracking-wide uppercase" style={{ color: "#F77F00" }}>★ CONTACTEZ-NOUS ★</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nous sommes là pour vous servir</h2>
            <div className="w-16 h-1 mx-auto mb-6" style={{ backgroundColor: "#F77F00" }}></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Remplissez ce formulaire pour envoyer vos demandes, réclamations ou suggestions à la Mairie d'Abidjan.
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Votre nom complet"
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 placeholder-gray-500"
                    
                    onFocus={(e) => e.target.style.boxShadow = "0 0 0 2px #F77F00"}
                    onBlur={(e) => e.target.style.boxShadow = "none"}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Adresse email"
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 placeholder-gray-500"
                    onFocus={(e) => e.target.style.boxShadow = "0 0 0 2px #F77F00"}
                    onBlur={(e) => e.target.style.boxShadow = "none"}
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Objet de votre message"
                  required
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 placeholder-gray-500"
                  onFocus={(e) => e.target.style.boxShadow = "0 0 0 2px #F77F00"}
                  onBlur={(e) => e.target.style.boxShadow = "none"}
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Écrivez votre message ici..."
                  required
                  rows={6}
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 placeholder-gray-500 resize-vertical"
                  onFocus={(e) => e.target.style.boxShadow = "0 0 0 2px #F77F00"}
                  onBlur={(e) => e.target.style.boxShadow = "none"}
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:scale-100"
                  style={{ 
                    backgroundColor: "#F77F00",
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ENVOI EN COURS...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      ENVOYER LE MESSAGE
                    </>
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="text-center">
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium"
                    style={{ backgroundColor: "#009E60" }}
                  >
                    ✓ Message envoyé avec succès ! Nous vous répondrons bientôt.
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium" style={{ backgroundColor: "#D32F2F" }}>
                    ✗ Échec de l'envoi. Veuillez réessayer.
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
          <div className="relative h-96 md:h-[500px]">
            {/* Map Container */}
            <div className="absolute inset-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.0!2d-4.0228!3d5.3097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMTgnMzUuMCJOIDTCsDAyJzEwLjAiVw!5e0!3m2!1sfr!2sci!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation de la Mairie d'Abidjan"
              />
            </div>

            {/* Map Info Overlay */}
            <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#F77F00" }}
                >
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Mairie d'Abidjan</h3>
                  <p className="text-gray-600 text-xs mb-2">Plateau, Abidjan, Côte d'Ivoire</p>
                  <div className="flex gap-2">
                    <button
                      onClick={handleGetDirections}
                      className="text-blue-600 hover:text-blue-700 text-xs font-medium transition-colors"
                    >
                      Itinéraire
                    </button>
                    <span className="text-gray-400 text-xs">•</span>
                    <button
                      onClick={handleViewLargerMap}
                      className="text-blue-600 hover:text-blue-700 text-xs font-medium transition-colors"
                    >
                      Carte plus grande
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Map Controls */}
            <div className="absolute bottom-4 right-4 flex flex-col gap-2">
              <button
                onClick={handleGetDirections}
                className="flex items-center gap-2 px-4 py-2 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg"
                style={{ backgroundColor: "#009E60" }}
                
              >
                <ExternalLink className="h-4 w-4" />
                Itinéraire
              </button>
            </div>
          </div>
        </div>

        {/* Additional Contact Information */}
        <div className="mt-12 text-center">
          <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Besoin d'une assistance immédiate ?</h3>
            <p className="text-gray-600 mb-6">
              Pour les questions urgentes nécessitant une attention immédiate, n'hésitez pas à nous contacter directement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+22521234567"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: "#F77F00" }}
                
              >
                <Phone className="h-4 w-4" />
                Appeler: +225 21 23 45 67
              </a>
              <a
                href="mailto:contact@mairie-abidjan.ci"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: "#009E60" }}
                
              >
                <Mail className="h-4 w-4" />
                Email: contact@mairie-abidjan.ci
              </a>
            </div>
          </div>
        </div>

        {/* Office Hours Section */}
        <div className="mt-8 text-center">
          <div className="bg-white border-2 rounded-lg p-6 max-w-xl mx-auto" style={{ borderColor: "#F77F00" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Horaires d'ouverture</h3>
            <div className="space-y-2 text-gray-600">
              <div className="flex justify-between">
                <span>Lundi - Vendredi:</span>
                <span className="font-semibold">08h00 - 17h00</span>
              </div>
              <div className="flex justify-between">
                <span>Samedi:</span>
                <span className="font-semibold">08h00 - 12h00</span>
              </div>
              <div className="flex justify-between">
                <span>Dimanche:</span>
                <span className="font-semibold text-red-500">Fermé</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
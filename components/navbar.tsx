"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/assets/images/logo.png"
              alt="Logo Mairie"
              width={150}
              height={40}
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#"
                className="text-white hover:text-[#F77F00] px-3 py-2 text-sm font-medium transition-colors"
              >
                ACCUEIL
              </a>
              <a
                href="#"
                className="text-white hover:text-[#F77F00] px-3 py-2 text-sm font-medium transition-colors"
              >
                SERVICES
              </a>
              <a
                href="#"
                className="text-white hover:text-[#F77F00] px-3 py-2 text-sm font-medium transition-colors"
              >
                DÉMARCHES
              </a>
              <a
                href="#"
                className="text-white hover:text-[#F77F00] px-3 py-2 text-sm font-medium transition-colors"
              >
                ACTUALITÉS
              </a>
              <a
                href="#"
                className="text-white hover:text-[#F77F00] px-3 py-2 text-sm font-medium transition-colors"
              >
                CULTURE
              </a>
              <a
                href="#"
                className="text-white hover:text-[#F77F00] px-3 py-2 text-sm font-medium transition-colors"
              >
                CONTACT
              </a>
            </div>
          </div>

          {/* Right side - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
             className="bg-[#009E60] hover:bg-[#007A4A] text-white font-semibold px-6 py-2 rounded-full transition-colors flex items-center gap-2">
              <Bot className="h-4 w-4" />
              CONSULTER IA
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <Button className="bg-[#009E60] hover:bg-[#007A4A] text-white font-semibold px-4 py-2 rounded-full transition-colors flex items-center gap-2 text-sm">
              <Bot className="h-4 w-4" />
              IA
            </Button>
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-[#F77F00] transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/10 backdrop-blur-sm">
            <a
              href="#"
              className="text-white hover:text-[#F77F00] block px-3 py-2 text-base font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ACCUEIL
            </a>
            <a
              href="#"
              className="text-white hover:text-[#F77F00] block px-3 py-2 text-base font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SERVICES
            </a>
            <a
              href="#"
              className="text-white hover:text-[#F77F00] block px-3 py-2 text-base font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              DÉMARCHES
            </a>
            <a
              href="#"
              className="text-white hover:text-[#F77F00] block px-3 py-2 text-base font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ACTUALITÉS
            </a>
            <a
              href="#"
              className="text-white hover:text-[#F77F00] block px-3 py-2 text-base font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CULTURE
            </a>
            <a
              href="#"
              className="text-white hover:text-[#F77F00] block px-3 py-2 text-base font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
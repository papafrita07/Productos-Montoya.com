import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="https://customer-assets.emergentagent.com/job_montoya-colombiano/artifacts/ae4pt5cb_image-removebg-preview.png" 
              alt="Productos Montoya"
              className="h-24 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-colombian-red transition-colors duration-200 font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('productos')}
              className="text-gray-700 hover:text-colombian-red transition-colors duration-200 font-medium"
            >
              Productos
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="text-gray-700 hover:text-colombian-red transition-colors duration-200 font-medium"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-gray-700 hover:text-colombian-red transition-colors duration-200 font-medium"
            >
              Contacto
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => window.open(businessInfo.social.whatsapp, '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-colombian-red transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 bg-white/95 backdrop-blur-md rounded-b-lg shadow-lg">
            <nav className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-colombian-red transition-colors duration-200 font-medium text-left px-4"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('productos')}
                className="text-gray-700 hover:text-colombian-red transition-colors duration-200 font-medium text-left px-4"
              >
                Productos
              </button>
              <button
                onClick={() => scrollToSection('nosotros')}
                className="text-gray-700 hover:text-colombian-red transition-colors duration-200 font-medium text-left px-4"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-gray-700 hover:text-colombian-red transition-colors duration-200 font-medium text-left px-4"
              >
                Contacto
              </button>
              <div className="px-4 pt-2">
                <Button
                  onClick={() => window.open(businessInfo.social.whatsapp, '_blank')}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
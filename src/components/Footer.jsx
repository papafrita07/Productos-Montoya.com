import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { businessInfo } from '../mock';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src="https://customer-assets.emergentagent.com/job_montoya-colombiano/artifacts/ae4pt5cb_image-removebg-preview.png" 
              alt="Productos Montoya"
              className="h-32 w-auto"
            />
            <p className="text-gray-400 leading-relaxed">
              Alimentos colombianos artesanales. Sin gluten, sin lactosa.
            </p>
            <div className="flex space-x-4">
              <a
                href={businessInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={businessInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={businessInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white mb-4">Enlaces Rápidos</h4>
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-gray-400 hover:text-colombian-yellow transition-colors duration-200 text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('productos')}
                className="text-gray-400 hover:text-colombian-yellow transition-colors duration-200 text-left"
              >
                Productos
              </button>
              <button
                onClick={() => scrollToSection('nosotros')}
                className="text-gray-400 hover:text-colombian-yellow transition-colors duration-200 text-left"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-gray-400 hover:text-colombian-yellow transition-colors duration-200 text-left"
              >
                Contacto
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href={businessInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors duration-200 group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{businessInfo.phone}</span>
              </a>
              <a
                href={`mailto:${businessInfo.email}`}
                className="flex items-center space-x-3 text-gray-400 hover:text-colombian-red transition-colors duration-200 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{businessInfo.email}</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">{businessInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white mb-4">Horario</h4>
            <div className="space-y-3">
              {businessInfo.schedule.map((item, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-gray-400 font-medium">{item.day}</p>
                  <p className="text-colombian-yellow font-semibold">{item.hours}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Productos Montoya. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-sm">
              Hecho con ❤️ en Tarragona, España
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
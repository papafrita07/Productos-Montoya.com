import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { businessInfo } from '../mock';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('productos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Colombian colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-red-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-colombian-yellow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-colombian-red/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-colombian-blue/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="bg-colombian-yellow/20 text-colombian-red font-semibold px-4 py-2 rounded-full text-sm border border-colombian-yellow/30">
                ✨ Auténtica Comida Colombiana
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-colombian-yellow drop-shadow-lg">Sabor</span>
              <br />
              <span className="text-colombian-red drop-shadow-lg">Colombiano</span>
              <br />
              <span className="text-gray-800">Auténtico</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              {businessInfo.description}
            </p>

            {/* B2B Message */}
            <div className="bg-colombian-blue/10 border-2 border-colombian-blue/30 rounded-xl p-4">
              <p className="text-lg font-bold text-colombian-blue text-center">
                📦 {businessInfo.b2bMessage}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => window.open(businessInfo.social.whatsapp, '_blank')}
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp: {businessInfo.phone}
              </Button>
              <Button
                onClick={scrollToProducts}
                size="lg"
                variant="outline"
                className="border-2 border-colombian-blue text-colombian-blue hover:bg-colombian-blue hover:text-white font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105"
              >
                Ver Productos
              </Button>
            </div>

            {/* Quick Info */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-start space-x-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-sm">
                <MapPin className="w-5 h-5 text-colombian-red flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Ubicación</p>
                  <p className="text-sm text-gray-600">Tarragona, España</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-sm">
                <Clock className="w-5 h-5 text-colombian-blue flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Horario</p>
                  <p className="text-sm text-gray-600">Lun-Vie: 6:00-14:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 animate-float">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://customer-assets.emergentagent.com/job_montoya-colombiano/artifacts/3kltye91_image.png"
                    alt="Chorizo Santarrosano"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://customer-assets.emergentagent.com/job_montoya-colombiano/artifacts/l0h0r9jk_image.png"
                    alt="Arepas"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8 animate-float-delayed">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://customer-assets.emergentagent.com/job_montoya-colombiano/artifacts/2tzanefu_image.png"
                    alt="Empanadas de Carne"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://customer-assets.emergentagent.com/job_montoya-colombiano/artifacts/0093l66a_image.png"
                    alt="Empanadas de Pollo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
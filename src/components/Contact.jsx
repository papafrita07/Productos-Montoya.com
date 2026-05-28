import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Phone, MapPin, Clock, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { businessInfo } from '../mock';

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-red-50 via-yellow-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="bg-colombian-yellow/20 text-colombian-red font-semibold px-4 py-2 rounded-full text-sm border border-colombian-yellow/30 inline-block">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            ¿Listo para <span className="text-colombian-red">Hacer tu Pedido?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contáctanos por WhatsApp, redes sociales o visita nuestra ubicación
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Cards */}
          <Card className="bg-gradient-to-br from-green-50 to-white border-2 border-green-300 hover:border-green-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">WhatsApp</h3>
              <a
                href={businessInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors block"
              >
                {businessInfo.phone}
              </a>
              <p className="text-gray-600 text-sm">Escríbenos para hacer tu pedido</p>
              <Button
                onClick={() => window.open(businessInfo.social.whatsapp, '_blank')}
                className="bg-green-500 hover:bg-green-600 text-white transition-all duration-300"
              >
                Abrir WhatsApp
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-white border-2 border-colombian-blue/30 hover:border-colombian-blue transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-colombian-blue/10 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-colombian-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Ubicación</h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                {businessInfo.address}
              </p>
              <Button
                onClick={() => window.open('https://maps.google.com/?q=Pol.+Ind.+Francol%C3%AD+Parcela+17+nave+11+43006+Tarragona', '_blank')}
                variant="outline"
                className="border-colombian-blue text-colombian-blue hover:bg-colombian-blue hover:text-white transition-all duration-300"
              >
                Ver en Mapa
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-50 to-white border-2 border-colombian-yellow/30 hover:border-colombian-yellow transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-colombian-yellow/20 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-colombian-red" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Horario</h3>
              <div className="space-y-2">
                {businessInfo.schedule.map((item, index) => (
                  <div key={index} className="text-gray-700">
                    <p className="font-semibold">{item.day}</p>
                    <p className="text-colombian-red font-bold">{item.hours}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Email Card */}
        <div className="mb-12">
          <Card className="bg-gradient-to-br from-red-50 to-white border-2 border-colombian-red/30 hover:border-colombian-red transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-colombian-red/10 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8 text-colombian-red" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Correo Electrónico</h3>
              <a
                href={`mailto:${businessInfo.email}`}
                className="text-2xl font-bold text-colombian-red hover:text-red-700 transition-colors block"
              >
                {businessInfo.email}
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Social Media Section */}
        <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-green-50 rounded-2xl p-12 border-2 border-colombian-yellow/30 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Síguenos en Redes Sociales
            </h3>
            <p className="text-gray-600 text-lg">
              Mantente al día con nuestros productos y promociones
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Button
              onClick={() => window.open(businessInfo.social.instagram, '_blank')}
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Instagram className="w-6 h-6 mr-3" />
              Instagram
            </Button>

            <Button
              onClick={() => window.open(businessInfo.social.facebook, '_blank')}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Facebook className="w-6 h-6 mr-3" />
              Facebook
            </Button>

            <Button
              onClick={() => window.open(businessInfo.social.whatsapp, '_blank')}
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import { Card, CardContent } from './ui/card';
import { CheckCircle2, Award, Clock, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-colombian-red" />,
      title: 'Calidad Artesanal',
      description: 'Elaboración propia con recetas tradicionales colombianas',
      bgColor: 'from-red-50 to-white',
      borderColor: 'border-colombian-red/30'
    },
    {
      icon: <Heart className="w-8 h-8 text-colombian-yellow" />,
      title: 'Sin Gluten ni Lactosa',
      description: 'Productos aptos para todas las necesidades dietéticas',
      bgColor: 'from-yellow-50 to-white',
      borderColor: 'border-colombian-yellow/30'
    },
    {
      icon: <Clock className="w-8 h-8 text-colombian-blue" />,
      title: 'Servicio Rápido',
      description: 'Entrega puntual para tu negocio',
      bgColor: 'from-blue-50 to-white',
      borderColor: 'border-colombian-blue/30'
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-green-600" />,
      title: 'Sabor Auténtico',
      description: 'El verdadero sabor de Colombia en cada bocado',
      bgColor: 'from-green-50 to-white',
      borderColor: 'border-green-300'
    }
  ];

  return (
    <section id="nosotros" className="py-24 bg-gradient-to-b from-blue-50 via-white to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-colombian-yellow/20 text-colombian-red font-semibold px-4 py-2 rounded-full text-sm border border-colombian-yellow/30">
                Sobre Nosotros
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Tradición Colombiana en
              <span className="text-colombian-red"> Cada Producto</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              En <span className="font-semibold text-colombian-red">Productos Montoya</span>, somos una fábrica especializada en alimentos colombianos auténticos. Nuestra pasión es llevar el sabor de Colombia a tiendas y restaurantes de toda España.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Elaboramos de forma artesanal empanadas de ternera y pollo, pasteles de pollo, arepas y chorizos santarrosanos. Todos nuestros productos son sin gluten y sin lactosa, perfectos para cualquier necesidad dietética.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 p-4 bg-gradient-to-br ${feature.bgColor} rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 ${feature.borderColor}`}
                >
                  <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="overflow-hidden border-4 border-colombian-yellow/40 shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:border-colombian-yellow">
                  <img
                    src="https://customer-assets.emergentagent.com/job_montoya-colombiano/artifacts/3kltye91_image.png"
                    alt="Chorizo"
                    className="w-full h-48 object-cover"
                  />
                </Card>
                <Card className="overflow-hidden border-4 border-colombian-red/40 shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:border-colombian-red">
                  <img
                    src="https://customer-assets.emergentagent.com/job_montoya-colombiano/artifacts/2tzanefu_image.png"
                    alt="Empanadas de Carne"
                    className="w-full h-64 object-cover"
                  />
                </Card>
              </div>
              <div className="space-y-4 mt-8">
                <Card className="overflow-hidden border-4 border-colombian-blue/40 shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:border-colombian-blue">
                  <img
                    src="https://customer-assets.emergentagent.com/job_montoya-colombiano/artifacts/l0h0r9jk_image.png"
                    alt="Arepas"
                    className="w-full h-64 object-cover"
                  />
                </Card>
                <Card className="overflow-hidden border-4 border-green-400 shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:border-green-500">
                  <img
                    src="https://customer-assets.emergentagent.com/job_montoya-colombiano/artifacts/0093l66a_image.png"
                    alt="Empanadas de Pollo"
                    className="w-full h-48 object-cover"
                  />
                </Card>
              </div>
            </div>
            
            {/* Decorative Colombian flag colors */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-colombian-yellow rounded-full blur-2xl opacity-40 -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-colombian-red rounded-full blur-2xl opacity-40 -z-10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-colombian-blue rounded-full blur-3xl opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
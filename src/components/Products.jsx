import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Phone } from 'lucide-react';
import { products } from '../mock';

const Products = () => {
  return (
    <section id="productos" className="py-24 bg-gradient-to-b from-white via-yellow-50 to-red-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-colombian-yellow/20 text-colombian-red border-colombian-yellow/30 px-4 py-2 text-sm font-semibold">
            Nuestros Productos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Sabores <span className="text-colombian-red">Auténticos</span> de Colombia
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elaboración artesanal con ingredientes de calidad. Sin gluten, sin lactosa.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-colombian-yellow/50 bg-white"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Badge className="absolute top-4 right-4 bg-colombian-red text-white border-0">
                  {product.category}
                </Badge>
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-colombian-red transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
                <div className="bg-yellow-50 border border-colombian-yellow/30 rounded-lg p-3 mt-4">
                  <p className="text-sm font-semibold text-gray-800">
                    {product.details}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-colombian-yellow/20 via-colombian-blue/10 to-colombian-red/20 rounded-2xl p-12 border-2 border-colombian-yellow/30 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            ¿Listo para hacer tu pedido?
          </h3>
          <p className="text-lg text-gray-600 mb-3 max-w-2xl mx-auto">
            <span className="font-bold text-colombian-red">Servimos exclusivamente a tiendas y restaurantes</span> en toda la región.
          </p>
          <p className="text-md text-gray-600 mb-6 max-w-2xl mx-auto">
            Pedidos al por mayor disponibles. Contáctanos por WhatsApp.
          </p>
          <button
            onClick={() => window.open('https://wa.me/34678841584', '_blank')}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-10 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center"
          >
            <Phone className="w-5 h-5 mr-2" />
            WhatsApp: 678 84 15 84
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
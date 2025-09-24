import React from 'react';

const LogisticsSlide = () => {
  return (
    <div className="relative w-full h-full bg-white overflow-hidden">
      {/* Fondo con patrón geométrico sutil */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-ml-blue opacity-5 transform skew-x-12 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-3/4 bg-ml-yellow opacity-5 transform -skew-x-12 -translate-x-1/4"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center p-12 w-full h-full">
        <div className="w-full max-w-5xl">
          <h3 className="text-4xl md:text-5xl font-black text-ml-gray-800 mb-4 text-center">
            <span className="bg-gradient-to-r from-ml-blue to-ml-blue-dark bg-clip-text text-transparent">
              Inteligencia
            </span>
            <br />
            <span className="text-ml-gray-700">Logística</span>
          </h3>
          <div className="w-32 h-1 bg-gradient-to-r from-ml-blue to-ml-blue-dark mx-auto rounded-full mb-4"></div>
          <p className="text-center text-ml-blue text-xl font-semibold mb-12">
            Convertir la app en un centro de operaciones de despacho.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-ml-gray-200 p-8 rounded-ml-xl shadow-ml-medium hover:shadow-ml-strong transition-all duration-300">
              <div className="w-12 h-12 bg-ml-blue-light rounded-ml-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-ml-blue rounded-full"></div>
              </div>
              <h4 className="font-bold text-xl text-ml-gray-800 mb-4">Consulta de Envíos</h4>
              <p className="text-ml-gray-600">
                Permite responder al instante "¿Dónde está mi paquete?" mostrando el estado y tracking detallado del envío.
              </p>
            </div>
            
            <div className="bg-white border border-ml-gray-200 p-8 rounded-ml-xl shadow-ml-medium hover:shadow-ml-strong transition-all duration-300">
              <div className="w-12 h-12 bg-ml-yellow/20 rounded-ml-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-ml-yellow rounded-full"></div>
              </div>
              <h4 className="font-bold text-xl text-ml-gray-800 mb-4">Generación de Etiquetas</h4>
              <p className="text-ml-gray-600">
                Agiliza el despacho masivo permitiendo generar un único PDF con todas las etiquetas de envío pendientes.
              </p>
            </div>
            
            <div className="bg-white border border-ml-gray-200 p-8 rounded-ml-xl shadow-ml-medium hover:shadow-ml-strong transition-all duration-300">
              <div className="w-12 h-12 bg-ml-green-light rounded-ml-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-ml-green rounded-full"></div>
              </div>
              <h4 className="font-bold text-xl text-ml-gray-800 mb-4">Alertas de SLA</h4>
              <p className="text-ml-gray-600">
                Crea un dashboard de "órdenes urgentes" para despachar y protege la reputación del vendedor evitando demoras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsSlide;
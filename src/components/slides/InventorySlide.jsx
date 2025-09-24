import React from 'react';

const InventorySlide = () => {
  return (
    <div className="relative w-full h-full bg-white overflow-hidden">
      {/* Fondo con patrón geométrico sutil */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-ml-green opacity-5 transform skew-x-12 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-3/4 bg-ml-blue opacity-5 transform -skew-x-12 -translate-x-1/4"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center p-12 w-full h-full">
        <div className="w-full max-w-5xl">
          <h3 className="text-3xl md:text-4xl font-black text-ml-gray-800 mb-4 text-center">
            <span className="bg-gradient-to-r from-ml-green to-ml-blue bg-clip-text text-transparent">
              Gestión de Publicaciones
            </span>
            <br />
            <span className="text-ml-gray-700">e Inventario</span>
          </h3>
          <div className="w-32 h-1 bg-gradient-to-r from-ml-green to-ml-blue mx-auto rounded-full mb-4"></div>
          <p className="text-center text-ml-green text-xl font-semibold mb-12">
            Herramientas proactivas para un catálogo saludable y rentable.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border border-ml-gray-200 p-8 rounded-ml-xl shadow-ml-medium hover:shadow-ml-strong transition-all duration-300">
              <div className="w-12 h-12 bg-ml-green-light rounded-ml-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-ml-green rounded-full"></div>
              </div>
              <h4 className="font-bold text-xl text-ml-gray-800 mb-4">Salud de Publicaciones</h4>
              <p className="text-ml-gray-600">
                Notifica si un producto está perdiendo visibilidad por problemas de calidad, permitiendo acciones correctivas antes de que las ventas caigan.
              </p>
            </div>
            
            <div className="bg-white border border-ml-gray-200 p-8 rounded-ml-xl shadow-ml-medium hover:shadow-ml-strong transition-all duration-300">
              <div className="w-12 h-12 bg-ml-blue-light rounded-ml-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-ml-blue rounded-full"></div>
              </div>
              <h4 className="font-bold text-xl text-ml-gray-800 mb-4">Consulta de Stock y Precio</h4>
              <p className="text-ml-gray-600">
                Ofrece un dashboard de inventario para verificar rápidamente los niveles de stock y precios actuales, incluyendo todas las variaciones (talles, colores).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventorySlide;
import React from 'react';
import { FaStar, FaShieldAlt, FaPiggyBank, FaHeart } from 'react-icons/fa';

const StrategicImpactSlide = () => {
  return (
    <div className="relative w-full h-full bg-white overflow-hidden">
      {/* Fondo con patrón geométrico sutil */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-ml-blue opacity-5 transform skew-x-12 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-3/4 bg-ml-yellow opacity-5 transform -skew-x-12 -translate-x-1/4"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center p-12 w-full h-full">
        <div className="w-full max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-black text-ml-gray-800 mb-6">
            <span className="bg-gradient-to-r from-ml-blue to-ml-blue-dark bg-clip-text text-transparent">
              Impacto Estratégico
            </span>
            <br />
            <span className="text-ml-gray-700">y Propuesta de Valor</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-ml-blue to-ml-blue-dark mx-auto rounded-full mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-ml-gray-200 p-8 rounded-ml-xl shadow-ml-medium hover:shadow-ml-strong transition-all duration-300 flex items-center space-x-6">
              <div className="w-16 h-16 bg-ml-yellow/20 rounded-ml-lg flex items-center justify-center flex-shrink-0">
                <FaStar className="w-8 h-8 text-ml-yellow" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-ml-gray-800">Aumento del Valor Percibido</p>
                <p className="text-ml-gray-600 mt-2">Mayor satisfacción y fidelidad del cliente</p>
              </div>
            </div>
            
            <div className="bg-white border border-ml-gray-200 p-8 rounded-ml-xl shadow-ml-medium hover:shadow-ml-strong transition-all duration-300 flex items-center space-x-6">
              <div className="w-16 h-16 bg-ml-blue-light rounded-ml-lg flex items-center justify-center flex-shrink-0">
                <FaShieldAlt className="w-8 h-8 text-ml-blue" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-ml-gray-800">Mejora de la Eficiencia Operativa</p>
                <p className="text-ml-gray-600 mt-2">Automatización y optimización de procesos</p>
              </div>
            </div>
            
            <div className="bg-white border border-ml-gray-200 p-8 rounded-ml-xl shadow-ml-medium hover:shadow-ml-strong transition-all duration-300 flex items-center space-x-6">
              <div className="w-16 h-16 bg-ml-green-light rounded-ml-lg flex items-center justify-center flex-shrink-0">
                <FaPiggyBank className="w-8 h-8 text-ml-green" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-ml-gray-800">Reducción del Riesgo Financiero</p>
                <p className="text-ml-gray-600 mt-2">Mejor control y previsión de problemas</p>
              </div>
            </div>
            
            <div className="bg-white border border-ml-gray-200 p-8 rounded-ml-xl shadow-ml-medium hover:shadow-ml-strong transition-all duration-300 flex items-center space-x-6">
              <div className="w-16 h-16 bg-ml-red-light rounded-ml-lg flex items-center justify-center flex-shrink-0">
                <FaHeart className="w-8 h-8 text-ml-red" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-ml-gray-800">Incremento de la Retención</p>
                <p className="text-ml-gray-600 mt-2">Usuarios más comprometidos y leales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicImpactSlide;
import React from 'react';

const ExpandingHorizonsTitle = () => {
  return (
    <div className="relative w-full h-full bg-ml-green text-white overflow-hidden">
      {/* Patrón de fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full translate-y-40 -translate-x-40"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full p-12">
        <div className="w-full max-w-5xl">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full mb-8">
            <span className="text-ml-yellow font-bold text-lg mr-2">✨</span>
            <span className="text-white font-medium">Nueva Fase</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            <span className="text-ml-yellow">Ampliando el Horizonte</span>
            <br />
            <span className="text-white">de la Aplicación</span>
          </h2>
          
          <div className="w-32 h-1 bg-ml-yellow mx-auto rounded-full mb-8"></div>
          
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-green-100 leading-relaxed">
            Nuevas capacidades para transformar la app en un <strong className="text-white">asistente de negocio indispensable</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpandingHorizonsTitle;
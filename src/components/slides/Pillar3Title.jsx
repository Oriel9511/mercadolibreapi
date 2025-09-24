import React from 'react';

const Pillar3Title = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#3483FA',
      color: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Patrón de fondo decorativo */}
      <div style={{
        position: 'absolute',
        top: '-250px',
        right: '-250px',
        width: '500px',
        height: '500px',
        background: 'rgba(255, 255, 255,.1)',
        borderRadius: '50%'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-200px',
        left: '-200px',
        width: '400px',
        height: '400px',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '50%'
      }}></div>
      
      <div style={{ position: 'relative', zIndex: '10', maxWidth: '800px', padding: '40px' }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          background: 'rgba(255, 255, 255, 0.2)',
          padding: '10px 20px',
          borderRadius: '25px',
          marginBottom: '30px'
        }}>
          <span style={{
            color: '#FFF159',
            fontWeight: 'bold',
            fontSize: '18px',
            marginRight: '10px'
          }}>03</span>
          <span style={{ fontWeight: '500' }}>Pilar Estratégico</span>
        </div>
        
        {/* Título */}
        <h2 style={{
          fontSize: '56px',
          fontWeight: 'bold',
          marginBottom: '30px',
          lineHeight: '1.1'
        }}>
          <span style={{ color: '#FFF159', display: 'block' }}>Herramientas de Gestión</span>
          <span style={{ color: '#FFFFFF' }}>y Protección</span>
        </h2>
        
        {/* Línea decorativa */}
        <div style={{
          width: '120px',
          height: '4px',
          background: '#FFF159',
          borderRadius: '2px',
          margin: '0 auto 30px'
        }}></div>
        
        {/* Descripción */}
        <p style={{
          fontSize: '22px',
          lineHeight: '1.5',
          color: 'rgba(255, 255, 255, 0.9)',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          Agrupar funcionalidades que resuelven problemas operativos concretos y mejoran significativamente la <strong style={{ color: '#FFFFFF' }}>calidad de vida del vendedor</strong>.
        </p>
      </div>
    </div>
  );
};

export default Pillar3Title;
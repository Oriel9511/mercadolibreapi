import React from 'react';

const VisionSlide = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      textAlign: 'center'
    }}>
      {/* Título */}
      <h2 style={{
        fontSize: '48px',
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: '20px'
      }}>
        Visión y Objetivo General
      </h2>
      
      <div style={{
        width: '80px',
        height: '4px',
        background: '#3483FA',
        borderRadius: '2px',
        marginBottom: '40px'
      }}></div>
      
      {/* Descripción principal */}
      <div style={{
        background: '#FFFFFF',
        border: '2px solid #E6E6E6',
        borderRadius: '12px',
        padding: '30px',
        marginBottom: '50px',
        maxWidth: '900px'
      }}>
        <p style={{
          fontSize: '24px',
          color: '#333333',
          lineHeight: '1.6',
          margin: '0'
        }}>
          Evolucionar{' '}
          <span style={{
            background: '#E1F0FF',
            color: '#2968C8',
            padding: '5px 10px',
            borderRadius: '6px',
            fontWeight: 'bold'
          }}>
            api-channel-mercadolibre
          </span>
          {' '}de un canal{' '}
          <span style={{
            background: '#FFE9EB',
            color: '#F23D4F',
            padding: '5px 10px',
            borderRadius: '6px',
            fontWeight: 'bold'
          }}>
            reactivo
          </span>
          {' '}→ a un panel de control{' '}
          <span style={{
            background: '#E8F5E8',
            color: '#00A650',
            padding: '5px 10px',
            borderRadius: '6px',
            fontWeight: 'bold'
          }}>
            proactivo e integral
          </span>
          {' '}para vendedores.
        </p>
      </div>
      
      {/* Tarjetas de características */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '30px',
        maxWidth: '1000px',
        width: '100%'
      }}>
        <div style={{
          background: '#3483FA',
          color: '#FFFFFF',
          padding: '30px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px'
          }}>
            📊
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Centralizar</h3>
          <h4 style={{ fontSize: '20px', marginBottom: '15px', opacity: '0.9' }}>Información</h4>
          <p style={{ fontSize: '16px', opacity: '0.9', lineHeight: '1.4' }}>
            Un solo punto de acceso para todos los datos del vendedor
          </p>
        </div>
        
        <div style={{
          background: '#FFF159',
          color: '#333333',
          padding: '30px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            background: 'rgba(0, 0, 0, 0.1)',
            borderRadius: '50%',
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px'
          }}>
            ⚡
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Agilizar</h3>
          <h4 style={{ fontSize: '20px', marginBottom: '15px', opacity: '0.8' }}>Decisiones</h4>
          <p style={{ fontSize: '16px', opacity: '0.8', lineHeight: '1.4' }}>
            Insights en tiempo real para decisiones rápidas
          </p>
        </div>
        
        <div style={{
          background: '#00A650',
          color: '#FFFFFF',
          padding: '30px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px'
          }}>
            🎯
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Resolver</h3>
          <h4 style={{ fontSize: '20px', marginBottom: '15px', opacity: '0.9' }}>"Pain Points"</h4>
          <p style={{ fontSize: '16px', opacity: '0.9', lineHeight: '1.4' }}>
            Soluciones proactivas a problemas recurrentes
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionSlide;
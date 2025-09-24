import React from 'react';

const TitleSlide = () => {
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
      {/* Logo */}
      <div style={{ marginBottom: '40px' }}>
        <img
          src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.22/mercadolibre/logo__large_plus.png"
          alt="Logo Mercado Libre"
          style={{ height: '60px' }}
        />
      </div>
      
      {/* Título principal */}
      <h1 style={{
        fontSize: '48px',
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: '20px',
        lineHeight: '1.2'
      }}>
        Propuesta de Evolución Funcional
      </h1>
      
      {/* Subtítulo */}
      <div style={{
        background: '#E1F0FF',
        padding: '15px 30px',
        borderRadius: '10px',
        marginBottom: '30px',
        border: '1px solid #3483FA20'
      }}>
        <code style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#2968C8'
        }}>
          api-channel-mercadolibre
        </code>
      </div>
      
      {/* Descripción */}
      <p style={{
        fontSize: '20px',
        color: '#666666',
        maxWidth: '800px',
        lineHeight: '1.6',
        marginBottom: '40px'
      }}>
        Transformando nuestro canal de un enfoque <strong style={{ color: '#F23D4F' }}>reactivo</strong> hacia una solución <strong style={{ color: '#3483FA' }}>proactiva e integral</strong> para optimizar la experiencia del vendedor.
      </p>
      
      {/* Tarjetas simples */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '30px',
        maxWidth: '800px',
        width: '100%'
      }}>
        <div style={{
          background: '#FFFFFF',
          border: '2px solid #E6E6E6',
          borderRadius: '12px',
          padding: '20px',
          textAlign: 'center'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: '#3483FA',
            borderRadius: '50%',
            margin: '0 auto 15px'
          }}></div>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#333333', marginBottom: '10px' }}>Integración</h3>
          <p style={{ fontSize: '14px', color: '#666666' }}>Unificación de servicios</p>
        </div>
        
        <div style={{
          background: '#FFFFFF',
          border: '2px solid #E6E6E6',
          borderRadius: '12px',
          padding: '20px',
          textAlign: 'center'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: '#FFF159',
            borderRadius: '50%',
            margin: '0 auto 15px'
          }}></div>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#333333', marginBottom: '10px' }}>Eficiencia</h3>
          <p style={{ fontSize: '14px', color: '#666666' }}>Optimización de procesos</p>
        </div>
        
        <div style={{
          background: '#FFFFFF',
          border: '2px solid #E6E6E6',
          borderRadius: '12px',
          padding: '20px',
          textAlign: 'center'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: '#00A650',
            borderRadius: '50%',
            margin: '0 auto 15px'
          }}></div>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#333333', marginBottom: '10px' }}>Impacto</h3>
          <p style={{ fontSize: '14px', color: '#666666' }}>Mejora en experiencia</p>
        </div>
      </div>
    </div>
  );
};

export default TitleSlide;
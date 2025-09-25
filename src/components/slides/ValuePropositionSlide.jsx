import React from 'react';
import { FaStar } from 'react-icons/fa';

const ValuePropositionSlide = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#F5F5F5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '80px',
        alignItems: 'center',
        maxWidth: '1200px'
      }}>
        {/* Columna del Icono */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: '40px',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
        }}>
          <FaStar style={{
            width: '120px',
            height: '120px',
            margin: '0 auto',
            color: '#FFD700'
          }} />
        </div>
        
        {/* Columna de Contenido */}
        <div>
          <h3 style={{
            fontSize: '42px',
            fontWeight: 'bold',
            color: '#333333',
            marginBottom: '30px'
          }}>
            Impacto Final: Para Nuestros Clientes
          </h3>
          
          <ul style={{
            listStyleType: 'none',
            paddingLeft: 0,
            fontSize: '20px',
            color: '#555555',
            lineHeight: '1.8',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '24px', marginRight: '15px' }}>📈</span>
              <div><strong>Más Ventas:</strong> A través de respuestas más rápidas y efectivas en la preventa.</div>
            </li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '24px', marginRight: '15px' }}>🏆</span>
              <div><strong>Mejor Reputación:</strong> Impulsada por una comunicación postventa impecable y proactiva.</div>
            </li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '24px', marginRight: '15px' }}>⏳</span>
              <div><strong>Más Tiempo:</strong> Liberado gracias a la automatización de tareas repetitivas y operativas.</div>
            </li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '24px', marginRight: '15px' }}>🛡️</span>
              <div><strong>Menos Riesgo:</strong> Al gestionar reclamos de manera profesional y centralizada.</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ValuePropositionSlide;
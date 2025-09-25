import React from 'react';
import { FaHeart } from 'react-icons/fa';

const RetentionSlide = () => {
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
        gridTemplateColumns: '2fr 1fr',
        gap: '80px',
        alignItems: 'center',
        maxWidth: '1200px'
      }}>
        {/* Columna de Contenido */}
        <div>
          <h3 style={{
            fontSize: '42px',
            fontWeight: 'bold',
            color: '#333333',
            marginBottom: '30px'
          }}>
            Impacto Final: Para Chattigo
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
              <span style={{ fontSize: '24px', marginRight: '15px' }}>🔄</span>
              <div><strong>Mayor Retención de Clientes:</strong> Al volvernos indispensables en su flujo de trabajo diario.</div>
            </li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '24px', marginRight: '15px' }}>💰</span>
              <div><strong>Justificación para Precios Premium:</strong> Por el alto valor estratégico y operativo que ofrecemos.</div>
            </li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '24px', marginRight: '15px' }}>⭐</span>
              <div><strong>Ventaja Competitiva Única:</strong> Nos posicionamos por encima de herramientas generalistas y especializadas.</div>
            </li>
          </ul>
        </div>
        
        {/* Columna del Icono */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: '40px',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
        }}>
          <FaHeart style={{
            width: '120px',
            height: '120px',
            margin: '0 auto',
            color: '#E63946'
          }} />
        </div>
      </div>
    </div>
  );
};

export default RetentionSlide;
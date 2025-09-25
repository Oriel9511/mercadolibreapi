import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';

const ReputationShieldSlide = () => {
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
            D. El Escudo de Reputación
          </h3>
          
          <p style={{
            fontSize: '22px',
            color: '#555555',
            lineHeight: '1.6',
            marginBottom: '25px'
          }}>
            Una póliza de seguro contra la mayor amenaza para un vendedor, ofreciendo calma y control para gestionar las situaciones más críticas.
          </p>
          
          <div>
            <p style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#2A9D8F',
              marginBottom: '10px'
            }}>
              Funcionalidades Clave:
            </p>
            <ul style={{
              listStyleType: 'disc',
              paddingLeft: '25px',
              fontSize: '18px',
              color: '#555555',
              lineHeight: '1.8',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
              <li><strong>Notificaciones en Tiempo Real:</strong> Alertas instantáneas de reclamos y contracargos para dar tiempo máximo de defensa.</li>
              <li><strong>Panel de Gestión de Reclamos:</strong> Una interfaz dedicada para manejar disputas de alto riesgo de forma ordenada y eficiente.</li>
            </ul>
          </div>
        </div>
        
        {/* Columna del Icono */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: '40px',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
        }}>
          <FaShieldAlt style={{
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

export default ReputationShieldSlide;

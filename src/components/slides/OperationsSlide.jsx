import React from 'react';
import { FaCogs } from 'react-icons/fa';

const OperationsSlide = () => {
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
          <FaCogs style={{
            width: '120px',
            height: '120px',
            margin: '0 auto',
            color: '#3483FA'
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
            C. Centralizando Operaciones
          </h3>
          
          <p style={{
            fontSize: '22px',
            color: '#555555',
            lineHeight: '1.6',
            marginBottom: '25px'
          }}>
            Aumentamos la "adherencia" de la plataforma, volviéndonos fundamentales para el flujo de trabajo diario del vendedor.
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
              <li><strong>Impresión de Etiquetas de Envío:</strong> Directamente desde la conversación en Chattigo.</li>
              <li><strong>Gestión de Cancelaciones:</strong> Con un solo botón dentro de la plataforma, sin saltar entre pantallas.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationsSlide;

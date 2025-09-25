import React from 'react';
import { FaLightbulb } from 'react-icons/fa';

const PresaleAutomationSlide = () => {
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
          <FaLightbulb style={{
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
            A. Dominando la Preventa
          </h3>
          
          <p style={{
            fontSize: '22px',
            color: '#555555',
            lineHeight: '1.6',
            marginBottom: '25px'
          }}>
            Convertimos las preguntas en oportunidades de marketing para cerrar ventas, no solo para responder.
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
              <li><strong>Respuestas Automáticas Inteligentes:</strong> Para preguntas frecuentes como "¿hay stock?" o "¿hacen envíos?".</li>
              <li><strong>Biblioteca de Plantillas:</strong> Para responder preguntas complejas con un solo clic, asegurando consistencia y rapidez.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresaleAutomationSlide;

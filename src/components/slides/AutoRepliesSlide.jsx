import React from 'react';
import { FaRobot } from 'react-icons/fa';

const AutoRepliesSlide = () => {
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
          <FaRobot style={{
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
            Respuestas Automáticas Inteligentes
          </h3>
          
          <div style={{ marginBottom: '25px' }}>
            <p style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#E63946',
              marginBottom: '10px'
            }}>
              Problema:
            </p>
            <p style={{
              fontSize: '18px',
              color: '#555555',
              lineHeight: '1.6'
            }}>
              Se pierden ventas por demoras en responder preguntas frecuentes como "¿hay stock?". El comprador impaciente se va con la competencia.
            </p>
          </div>
          
          <div>
            <p style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#2A9D8F',
              marginBottom: '10px'
            }}>
              Solución:
            </p>
            <p style={{
              fontSize: '18px',
              color: '#555555',
              lineHeight: '1.6'
            }}>
              Un agente de ventas automatizado que trabaja 24/7, capturando el interés del comprador al instante.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoRepliesSlide;

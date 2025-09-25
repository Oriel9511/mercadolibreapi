import React from 'react';
import { FaClipboardList } from 'react-icons/fa';

const TemplatesSlide = () => {
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
            Biblioteca de Plantillas
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
              Responder preguntas complejas consume mucho tiempo y las respuestas pueden ser inconsistentes entre agentes, afectando la calidad.
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
              Permitir a los agentes responder preguntas elaboradas con un solo clic, asegurando consistencia, rapidez y profesionalismo.
            </p>
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
          <FaClipboardList style={{
            width: '120px',
            height: '120px',
            margin: '0 auto',
            color: '#3483FA'
          }} />
        </div>
      </div>
    </div>
  );
};

export default TemplatesSlide;

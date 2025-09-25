import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';

const ReviewRequestsSlide = () => {
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
            Solicitud de Reseña Automatizada
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
              Los compradores a menudo olvidan dejar una calificación, y solicitarla manualmente es una tarea tediosa que los vendedores no realizan consistentemente.
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
              Un mensaje programado días después de la entrega para invitar amablemente al cliente a dejar su calificación, creando la experiencia perfecta para generar sistemáticamente reseñas de 5 estrellas.
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
          <FaStarHalfAlt style={{
            width: '120px',
            height: '120px',
            margin: '0 auto',
            color: '#00A650'
          }} />
        </div>
      </div>
    </div>
  );
};

export default ReviewRequestsSlide;

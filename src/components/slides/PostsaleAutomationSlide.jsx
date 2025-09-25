import React from 'react';
import { FaStar } from 'react-icons/fa';

const PostsaleAutomationSlide = () => {
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
            B. Automatizando la Postventa
          </h3>
          
          <p style={{
            fontSize: '22px',
            color: '#555555',
            lineHeight: '1.6',
            marginBottom: '25px'
          }}>
            Un "Motor de Reputación" que automatiza la comunicación para generar sistemáticamente calificaciones de 5 estrellas.
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
              <li><strong>Secuencia de Notificaciones Proactivas:</strong> Mensajes automáticos para cada hito del envío.</li>
              <li><strong>Solicitud de Reseña Automatizada:</strong> Un mensaje programado post-entrega para invitar al cliente a dejar su calificación.</li>
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
          <FaStar style={{
            width: '120px',
            height: '120px',
            margin: '0 auto',
            color: '#FFD700'
          }} />
        </div>
      </div>
    </div>
  );
};

export default PostsaleAutomationSlide;

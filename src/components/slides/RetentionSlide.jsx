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
            Impacto: Incremento de la Retención
          </h3>
          
          <p style={{
            fontSize: '22px',
            color: '#3483FA',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>
            ¿Por qué un vendedor no querrá irse?
          </p>
          
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '25px',
            fontSize: '18px',
            color: '#555555',
            lineHeight: '1.8',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}>
            <li>
              <strong>Creación de Dependencia Positiva ("Stickiness"):</strong> La aplicación se integra en el flujo de trabajo diario. Volver a operar "manualmente" será un paso atrás.
            </li>
            <li>
              <strong>Propuesta de Valor Única:</strong> Ofrecemos una experiencia más consolidada y eficiente que usar el panel de Mercado Libre por sí solo.
            </li>
            <li>
              <strong>Lealtad a través de la Protección:</strong> Un vendedor que siente que protegemos activamente su negocio desarrollará una fuerte lealtad hacia nuestra plataforma.
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
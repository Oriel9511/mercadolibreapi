import React from 'react';
import { FaArchive } from 'react-icons/fa';

const Pillar1Func1 = () => {
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
          <FaArchive style={{
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
              Contexto del Vendedor
          </h3>

          <div style={{ marginBottom: '25px' }}>
            <p style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#E63946',
              marginBottom: '10px'
            }}>
              Problema Actual:
            </p>
            <p style={{
              fontSize: '18px',
              color: '#555555',
              lineHeight: '1.6'
            }}>
              La aplicación no conoce la identidad completa del usuario, impidiendo consultas proactivas.
            </p>
          </div>

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
              lineHeight: '1.8'
            }}>
              <li>Obtener y almacenar automáticamente el perfil del vendedor al autenticarse.</li>
              <li>Utilizar el ID del vendedor para todas las futuras llamadas a la API.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pillar1Func1;

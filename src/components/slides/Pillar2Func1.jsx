import React from 'react';
import { FaBell } from 'react-icons/fa';

const Pillar2Func1 = () => {
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
          <FaBell style={{
            width: '120px',
            height: '120px',
            margin: '0 auto',
            color: '#E63946'
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
            Notificaciones en Tiempo Real
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
              El vendedor tarda horas en descubrir <strong>Reclamos y Contracargos</strong>, perdiendo tiempo valioso para su defensa.
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
              <li>Recibir notificaciones de `claims` y `chargebacks`.</li>
              <li>Generar una <strong>alerta de alta prioridad</strong> en la UI.</li>
              <li>Mostrar detalles clave: ID de orden, motivo y monto.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pillar2Func1;

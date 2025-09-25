import React from 'react';
import { FaBoxOpen } from 'react-icons/fa';

const ShippingAndCancellationsSlide = () => {
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
          <FaBoxOpen style={{
            width: '120px',
            height: '120px',
            margin: '0 auto',
            color: '#333333'
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
            Gestión de Envíos y Cancelaciones
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
              Tareas operativas como imprimir etiquetas o gestionar cancelaciones obligan al vendedor a saltar constantemente entre Chattigo y el panel de Mercado Libre, perdiendo tiempo y foco.
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
              Integrar estas acciones directamente en la conversación. El vendedor ahorra clics y elimina la frustración, haciendo de Chattigo una herramienta fundamental para su día a día.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingAndCancellationsSlide;

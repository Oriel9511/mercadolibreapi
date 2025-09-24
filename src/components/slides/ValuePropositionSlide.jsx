import React from 'react';
import { FaStar } from 'react-icons/fa';

const ValuePropositionSlide = () => {
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
          <FaStar style={{
            width: '120px',
            height: '120px',
            margin: '0 auto',
            color: '#FFD700'
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
            Impacto: Aumento del Valor Percibido
          </h3>
          
          <p style={{
            fontSize: '22px',
            color: '#3483FA',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>
            ¿Por qué nuestra herramienta se volverá indispensable?
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
              <strong>De "Canal de Mensajes" a "Centro de Mando":</strong> El vendedor nos usará para buscar órdenes, entender su historial y protegerse de riesgos.
            </li>
            <li>
              <strong>Resolución de "Pain Points" Reales:</strong> El "Asistente de Lista Negra" demuestra que entendemos y resolvemos sus problemas diarios.
            </li>
            <li>
              <strong>Confianza y Profesionalismo:</strong> Una herramienta que alerta sobre reclamos y permite buscar órdenes antiguas proyecta una imagen de robustez y fiabilidad.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ValuePropositionSlide;
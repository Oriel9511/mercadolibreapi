import React from 'react';
import { FaClock } from 'react-icons/fa';

const EfficiencySlide = () => {
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
            Impacto: Mejora de la Eficiencia Operativa
          </h3>
          
          <p style={{
            fontSize: '22px',
            color: '#3483FA',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>
            Menos clics, menos tiempo, menos errores.
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
              <strong>Reducción del Cambio de Contexto:</strong> Eliminamos la necesidad de tener abierta la pestaña de Mercado Libre para tareas clave.
            </li>
            <li>
              <strong>Acceso Inmediato a la Información:</strong> ¿Buscar una orden de la semana pasada? Se hace en segundos desde nuestra plataforma, no en el complejo panel de ML.
            </li>
            <li>
              <strong>Flujos de Trabajo Simplificados:</strong> El "Asistente de Lista Negra" convierte un proceso de 5 pasos en un solo clic.
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
          <FaClock style={{
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

export default EfficiencySlide;
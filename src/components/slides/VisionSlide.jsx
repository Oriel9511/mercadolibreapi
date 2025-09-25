import React from 'react';

const VisionSlide = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px',
      textAlign: 'center'
    }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: '600',
        color: '#3483FA',
        marginBottom: '15px'
      }}>
        El Punto de Partida
      </h2>
      
      <h3 style={{
        fontSize: '48px',
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: '40px',
        maxWidth: '900px',
        lineHeight: '1.2'
      }}>
        De Herramienta Reactiva a <span style={{ color: '#00A650' }}>Socio Estratégico</span>
      </h3>
      
      <p style={{
        fontSize: '22px',
        color: '#555555',
        maxWidth: '800px',
        lineHeight: '1.6',
        marginBottom: '50px'
      }}>
        Nuestra visión es transformar a Chattigo en el <strong style={{ color: '#333' }}>centro de comando indispensable</strong> para cualquier vendedor, entendiendo que en Mercado Libre, la <strong style={{ color: '#333' }}>reputación lo es TODO</strong>.
      </p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        maxWidth: '1000px',
        width: '100%',
        background: '#F5F5F5',
        padding: '40px',
        borderRadius: '20px'
      }}>
        <div style={{ textAlign: 'left' }}>
          <h4 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#E63946',
            marginBottom: '15px'
          }}>
            Nuestra Situación Actual
          </h4>
          <p style={{ fontSize: '18px', color: '#555555', lineHeight: '1.6' }}>
            Hoy, Chattigo es un eficiente <strong style={{ color: '#333' }}>centralizador de mensajes</strong>. Es una herramienta reactiva que ayuda a responder a medida que llegan las consultas.
          </p>
        </div>
        
        <div style={{ textAlign: 'left' }}>
          <h4 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#2A9D8F',
            marginBottom: '15px'
          }}>
            La Visión Transformadora
          </h4>
          <p style={{ fontSize: '18px', color: '#555555', lineHeight: '1.6' }}>
            Evolucionar a una <strong style={{ color: '#333' }}>plataforma integral</strong> de crecimiento de ventas, gestión de reputación y mitigación de riesgos, influyendo proactivamente en el éxito del vendedor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionSlide;
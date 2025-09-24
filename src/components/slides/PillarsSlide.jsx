import React from 'react';

const PillarsSlide = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      textAlign: 'center'
    }}>
      {/* Título */}
      <h2 style={{
        fontSize: '48px',
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: '20px'
      }}>
        Pilares Estratégicos de la Evolución
      </h2>
      
      <div style={{
        width: '80px',
        height: '4px',
        background: '#3483FA',
        borderRadius: '2px',
        marginBottom: '50px'
      }}></div>
      
      {/* Pilares */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '30px',
        maxWidth: '1000px',
        width: '100%'
      }}>
        {/* Pilar 1 */}
        <div style={{
          background: '#FFFFFF',
          border: '2px solid #E6E6E6',
          borderRadius: '12px',
          padding: '30px',
          textAlign: 'center'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            background: '#3483FA',
            borderRadius: '50%',
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            fontSize: '20px',
            fontWeight: 'bold'
          }}>
            1
          </div>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#3483FA', marginBottom: '15px' }}>Pilar 1</h3>
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#333333', marginBottom: '15px' }}>
            Base de Datos Proactiva
          </p>
          <p style={{ fontSize: '16px', color: '#666666', lineHeight: '1.4' }}>
            Consultar datos activamente, no solo recibirlos.
          </p>
        </div>
        
        {/* Pilar 2 */}
        <div style={{
          background: '#FFFFFF',
          border: '2px solid #E6E6E6',
          borderRadius: '12px',
          padding: '30px',
          textAlign: 'center'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            background: '#F7931E',
            borderRadius: '50%',
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            fontSize: '20px',
            fontWeight: 'bold'
          }}>
            2
          </div>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#F7931E', marginBottom: '15px' }}>Pilar 2</h3>
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#333333', marginBottom: '15px' }}>
            Centro de Alertas y Disputas
          </p>
          <p style={{ fontSize: '16px', color: '#666666', lineHeight: '1.4' }}>
            Ser la primera línea de defensa del vendedor.
          </p>
        </div>
        
        {/* Pilar 3 */}
        <div style={{
          background: '#FFFFFF',
          border: '2px solid #E6E6E6',
          borderRadius: '12px',
          padding: '30px',
          textAlign: 'center'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            background: '#00A650',
            borderRadius: '50%',
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            fontSize: '20px',
            fontWeight: 'bold'
          }}>
            3
          </div>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#00A650', marginBottom: '15px' }}>Pilar 3</h3>
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#333333', marginBottom: '15px' }}>
            Herramientas de Gestión
          </p>
          <p style={{ fontSize: '16px', color: '#666666', lineHeight: '1.4' }}>
            Simplificar tareas manuales y repetitivas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PillarsSlide;
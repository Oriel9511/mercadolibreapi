import React from 'react';

const NextStepsSlide = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#F5F5F5',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1100px' }}>
        <h2 style={{
          fontSize: '52px',
          fontWeight: 'bold',
          color: '#333333',
          marginBottom: '60px'
        }}>
          La Hoja de Ruta Estratégica
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '40px',
          textAlign: 'left'
        }}>
          {/* Fase 1 */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '15px',
            padding: '30px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{
                background: '#FFF159',
                color: '#333333',
                fontWeight: 'bold',
                borderRadius: '10px',
                padding: '5px 15px',
                fontSize: '16px',
                marginRight: '15px'
              }}>
                FASE 1
              </span>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#333' }}>Valor Inmediato</h3>
            </div>
            <p style={{ fontSize: '18px', color: '#555555', lineHeight: '1.6', marginBottom: '15px' }}>
              Nos enfocamos en las "victorias rápidas" que resuelven los problemas más comunes.
            </p>
            <p style={{ fontSize: '18px', color: '#00A650', fontWeight: 'bold' }}>
              Objetivo: ROI inmediato en tiempo ahorrado.
            </p>
          </div>
          
          {/* Fase 2 */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '15px',
            padding: '30px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{
                background: '#E1F0FF',
                color: '#2968C8',
                fontWeight: 'bold',
                borderRadius: '10px',
                padding: '5px 15px',
                fontSize: '16px',
                marginRight: '15px'
              }}>
                FASE 2
              </span>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#333' }}>Diferenciación Clave</h3>
            </div>
            <p style={{ fontSize: '18px', color: '#555555', lineHeight: '1.6', marginBottom: '15px' }}>
              Integramos Chattigo en los flujos de trabajo críticos (etiquetas, reclamos).
            </p>
            <p style={{ fontSize: '18px', color: '#00A650', fontWeight: 'bold' }}>
              Objetivo: Convertirnos en una herramienta indispensable.
            </p>
          </div>
          
          {/* Fase 3 */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '15px',
            padding: '30px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{
                background: '#E8F5E8',
                color: '#00A650',
                fontWeight: 'bold',
                borderRadius: '10px',
                padding: '5px 15px',
                fontSize: '16px',
                marginRight: '15px'
              }}>
                FASE 3
              </span>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#333' }}>Liderazgo de Mercado</h3>
            </div>
            <p style={{ fontSize: '18px', color: '#555555', lineHeight: '1.6', marginBottom: '15px' }}>
              Introducimos análisis avanzados e IA para optimizar el negocio del vendedor.
            </p>
            <p style={{ fontSize: '18px', color: '#00A650', fontWeight: 'bold' }}>
              Objetivo: Ser un socio que ofrece inteligencia de negocio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextStepsSlide;
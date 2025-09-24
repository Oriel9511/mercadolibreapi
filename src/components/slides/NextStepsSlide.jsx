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
      <div style={{ maxWidth: '900px' }}>
        <h2 style={{
          fontSize: '52px',
          fontWeight: 'bold',
          color: '#333333',
          marginBottom: '60px'
        }}>
          Próximos Pasos
        </h2>
        
        <ol style={{
          listStyle: 'none',
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '30px'
        }}>
          <li style={{
            background: '#FFFFFF',
            borderRadius: '15px',
            padding: '30px',
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
            textAlign: 'left'
          }}>
            <span style={{
              background: '#FFF159',
              color: '#333333',
              fontWeight: 'bold',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '30px',
              fontSize: '24px',
              flexShrink: 0
            }}>
              1
            </span>
            <span style={{ fontSize: '22px', color: '#555555', lineHeight: '1.5' }}>
              Validar y priorizar las funcionalidades con el equipo de producto.
            </span>
          </li>
          
          <li style={{
            background: '#FFFFFF',
            borderRadius: '15px',
            padding: '30px',
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
            textAlign: 'left'
          }}>
            <span style={{
              background: '#FFF159',
              color: '#333333',
              fontWeight: 'bold',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '30px',
              fontSize: '24px',
              flexShrink: 0
            }}>
              2
            </span>
            <span style={{ fontSize: '22px', color: '#555555', lineHeight: '1.5' }}>
              Desglosar cada funcionalidad en Épicas y User Stories para el backlog.
            </span>
          </li>
          
          <li style={{
            background: '#FFFFFF',
            borderRadius: '15px',
            padding: '30px',
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
            textAlign: 'left'
          }}>
            <span style={{
              background: '#FFF159',
              color: '#333333',
              fontWeight: 'bold',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '30px',
              fontSize: '24px',
              flexShrink: 0
            }}>
              3
            </span>
            <span style={{ fontSize: '22px', color: '#555555', lineHeight: '1.5' }}>
              Iniciar el diseño de las interfaces de usuario (UX/UI) correspondientes.
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default NextStepsSlide;
import React from 'react';

const PillarB_PostsaleTitle = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#00A650',
      color: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '-250px',
        right: '-250px',
        width: '500px',
        height: '500px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-200px',
        left: '-200px',
        width: '400px',
        height: '400px',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '50%'
      }}></div>
      
      <div style={{ position: 'relative', zIndex: '10', maxWidth: '800px', padding: '40px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          background: 'rgba(255, 255, 255, 0.2)',
          padding: '10px 20px',
          borderRadius: '25px',
          marginBottom: '30px'
        }}>
          <span style={{
            color: '#FFF159',
            fontWeight: 'bold',
            fontSize: '18px',
            marginRight: '10px'
          }}>B</span>
          <span style={{ fontWeight: '500' }}>Solución Estratégica</span>
        </div>
        
        <h2 style={{
          fontSize: '56px',
          fontWeight: 'bold',
          marginBottom: '30px',
          lineHeight: '1.1'
        }}>
          <span style={{ color: '#FFF159', display: 'block' }}>Automatizando la Postventa:</span>
          <span style={{ color: '#FFFFFF' }}>El Motor de la Reputación</span>
        </h2>
      </div>
    </div>
  );
};

export default PillarB_PostsaleTitle;

import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';

const FinancialRiskSlide = () => {
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
          <FaShieldAlt style={{
            width: '120px',
            height: '120px',
            margin: '0 auto',
            color: '#2A9D8F'
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
            Impacto: Reducción del Riesgo Financiero
          </h3>
          
          <p style={{
            fontSize: '22px',
            color: '#3483FA',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>
            Protegiendo el activo más importante del vendedor.
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
              <strong>Primera Línea de Defensa:</strong> Notificaciones instantáneas de <strong>reclamos y contracargos</strong> dan tiempo máximo para preparar una defensa y evitar pérdidas.
            </li>
            <li>
              <strong>Prevención de Pérdidas:</strong> Nuestra herramienta actúa como un seguro, minimizando la posibilidad de que un evento crítico pase desapercibido.
            </li>
            <li>
              <strong>Visibilidad Financiera:</strong> Las notificaciones de reembolsos permiten una conciliación contable más rápida y precisa.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FinancialRiskSlide;
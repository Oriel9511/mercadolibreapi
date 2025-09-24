import React from 'react';

const Slide = ({ isActive, children }) => {
  if (!isActive) {
    return null;
  }

  return (
    <div style={{ width: '100%', height: '100%', display: 'block' }}>
      {children}
    </div>
  );
};

export default Slide;
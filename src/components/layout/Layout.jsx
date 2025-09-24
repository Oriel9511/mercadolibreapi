import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaExpand, FaCompress, FaPlay, FaPause } from 'react-icons/fa';

const Layout = ({ children, currentSlide, totalSlides, nextSlide, prevSlide }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    let interval;
    if (isAutoPlay && currentSlide < totalSlides - 1) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    } else if (isAutoPlay && currentSlide === totalSlides - 1) {
      setIsAutoPlay(false);
    }

    return () => clearInterval(interval);
  }, [isAutoPlay, currentSlide, totalSlides, nextSlide]);

  const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className={`presentation-container ${isFullscreen ? 'fullscreen' : ''}`}>
      {/* Main presentation container */}
      <div className="slide-main">
        
        {/* Slide content area */}
        <div className="slide-content" style={{ overflow: 'auto', position: 'relative' }}>
          {children}
          
          {/* Subtle fullscreen counter */}
          {isFullscreen && (
            <div style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              background: 'rgba(0, 0, 0, 0.4)',
              color: 'white',
              padding: '5px 15px',
              borderRadius: '15px',
              fontSize: '14px',
              fontFamily: 'sans-serif',
              zIndex: 1000,
              opacity: 0.8
            }}>
              {currentSlide + 1} / {totalSlides}
            </div>
          )}
        </div>
        
        {/* Progress bar */}
        {!isFullscreen && (
          <div className="progress-container">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progressPercentage}%` }}
              >
                </div>
            </div>
          </div>
        )}
        
        {/* Enhanced control panel */}
        {!isFullscreen && (
          <div className="control-panel">
            <div className="flex justify-between items-center">
              
              {/* Left controls */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="btn-primary group"
                >
                  <div className="relative flex items-center space-x-2">
                    <FaArrowLeft className="text-sm" />
                    <span className="hidden sm:inline">Anterior</span>
                  </div>
                </button>
                
                <button
                  onClick={toggleAutoPlay}
                  className="btn-accent group"
                  title={isAutoPlay ? "Pausar presentación" : "Reproducir presentación"}
                >
                  <div className="relative flex items-center">
                    {isAutoPlay ? <FaPause className="text-sm" /> : <FaPlay className="text-sm" />}
                    <span className="hidden md:inline ml-2">
                      {isAutoPlay ? 'Pausar' : 'Auto'}
                    </span>
                  </div>
                </button>
              </div>
              
              {/* Center slide counter */}
              <div className="flex flex-col items-center">
                <div className="text-lg font-bold text-ml-gray-800">
                  {currentSlide + 1} / {totalSlides}
                </div>
                <div className="text-xs text-ml-gray-500 font-medium">
                  Diapositiva
                </div>
              </div>
              
              {/* Right controls */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={toggleFullScreen}
                  className="btn-secondary group"
                  title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
                >
                  <div className="relative flex items-center">
                    {isFullscreen ? <FaCompress className="text-sm" /> : <FaExpand className="text-sm" />}
                    <span className="hidden md:inline ml-2">Pantalla</span>
                  </div>
                </button>
                
                <button
                  onClick={nextSlide}
                  disabled={currentSlide === totalSlides - 1}
                  className="btn-primary group"
                >
                  <div className="relative flex items-center space-x-2">
                    <span className="hidden sm:inline">Siguiente</span>
                    <FaArrowRight className="text-sm" />
                  </div>
                </button>
              </div>
              
            </div>
          </div>
        )}
      </div>
      
      {/* Slide dots indicator */}
      {!isFullscreen && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const diff = index - currentSlide;
                if (diff > 0) {
                  for (let i = 0; i < diff; i++) {
                    setTimeout(() => nextSlide(), i * 100);
                  }
                } else if (diff < 0) {
                  for (let i = 0; i < Math.abs(diff); i++) {
                    setTimeout(() => prevSlide(), i * 100);
                  }
                }
              }}
              className={`slide-indicator ${
                index === currentSlide
                  ? 'slide-indicator-active'
                  : 'slide-indicator-inactive'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Layout;
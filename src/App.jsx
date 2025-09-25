import React, { useState, useEffect } from 'react';
import './App.css';
import Slide from './components/Slide';
import Layout from './components/layout/Layout';

// Core Slides
import TitleSlide from './components/slides/TitleSlide';
import VisionSlide from './components/slides/VisionSlide';

// Section A: Presale
import PillarA_PresaleTitle from './components/slides/PillarA_PresaleTitle';
import AutoRepliesSlide from './components/slides/AutoRepliesSlide';
import TemplatesSlide from './components/slides/TemplatesSlide';

// Section B: Postsale
import PillarB_PostsaleTitle from './components/slides/PillarB_PostsaleTitle';
import ProactiveNotificationsSlide from './components/slides/ProactiveNotificationsSlide';
import ReviewRequestsSlide from './components/slides/ReviewRequestsSlide';

// Section C: Operations
import PillarC_OperationsTitle from './components/slides/PillarC_OperationsTitle';
import ShippingAndCancellationsSlide from './components/slides/ShippingAndCancellationsSlide';
import Pillar1Func2 from './components/slides/Pillar1Func2'; // Búsqueda Avanzada de Órdenes
import Pillar1Func1 from './components/slides/Pillar1Func1'; // Contexto del Vendedor

// Section D: Reputation Shield
import PillarD_ReputationShieldTitle from './components/slides/PillarD_ReputationShieldTitle';
import Pillar2Func1 from './components/slides/Pillar2Func1'; // Notificaciones en Tiempo Real
import Pillar3Func1 from './components/slides/Pillar3Func1'; // Asistente para Lista Negra
import Pillar2Func2 from './components/slides/Pillar2Func2'; // Notificaciones de Reembolsos

// Impact and Roadmap Slides
import ValuePropositionSlide from './components/slides/ValuePropositionSlide';
import RetentionSlide from './components/slides/RetentionSlide';
import NextStepsSlide from './components/slides/NextStepsSlide';
import QASlide from './components/slides/QASlide';

const slides = [
  // 1. Introduction
  <TitleSlide />,
  <VisionSlide />,

  // 2. Section A: Presale
  <PillarA_PresaleTitle />,
  <AutoRepliesSlide />,
  <TemplatesSlide />,

  // 3. Section B: Postsale
  <PillarB_PostsaleTitle />,
  <ProactiveNotificationsSlide />,
  <ReviewRequestsSlide />,

  // 4. Section C: Operations
  <PillarC_OperationsTitle />,
  <ShippingAndCancellationsSlide />,
  <Pillar1Func2 />, // Búsqueda Avanzada de Órdenes
  <Pillar1Func1 />, // Contexto del Vendedor

  // 5. Section D: Reputation Shield
  <PillarD_ReputationShieldTitle />,
  <Pillar2Func1 />, // Notificaciones en Tiempo Real
  <Pillar3Func1 />, // Asistente para Lista Negra
  <Pillar2Func2 />, // Notificaciones de Reembolsos

  // 6. The Impact
  <ValuePropositionSlide />,
  <RetentionSlide />,

  // 7. The Roadmap
  <NextStepsSlide />,

  // 8. Conclusion
  <QASlide />
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Layout
      currentSlide={currentSlide}
      totalSlides={totalSlides}
      nextSlide={nextSlide}
      prevSlide={prevSlide}
    >
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        {slides.map((slide, index) => (
          <Slide key={index} isActive={index === currentSlide}>
            {slide}
          </Slide>
        ))}
      </div>
    </Layout>
  );
}

export default App;
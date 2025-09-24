import React, { useState, useEffect } from 'react';
import './App.css';
import Slide from './components/Slide';
import TitleSlide from './components/slides/TitleSlide';
import VisionSlide from './components/slides/VisionSlide';
import PillarsSlide from './components/slides/PillarsSlide';
import Pillar1Title from './components/slides/Pillar1Title';
import Pillar1Func1 from './components/slides/Pillar1Func1';
import Pillar1Func2 from './components/slides/Pillar1Func2';
import Pillar2Title from './components/slides/Pillar2Title';
import Pillar2Func1 from './components/slides/Pillar2Func1';
import Pillar2Func2 from './components/slides/Pillar2Func2';
import Pillar3Title from './components/slides/Pillar3Title';
import Pillar3Func1 from './components/slides/Pillar3Func1';
import ExpandingHorizonsTitle from './components/slides/ExpandingHorizonsTitle';
import LogisticsSlide from './components/slides/LogisticsSlide';
import InventorySlide from './components/slides/InventorySlide';
import FinanceSlide from './components/slides/FinanceSlide';
import StrategicImpactSlide from './components/slides/StrategicImpactSlide';
import ValuePropositionSlide from './components/slides/ValuePropositionSlide';
import EfficiencySlide from './components/slides/EfficiencySlide';
import FinancialRiskSlide from './components/slides/FinancialRiskSlide';
import RetentionSlide from './components/slides/RetentionSlide';
import NextStepsSlide from './components/slides/NextStepsSlide';
import QASlide from './components/slides/QASlide';
import Layout from './components/layout/Layout';

const slides = [
  <TitleSlide />,
  <VisionSlide />,
  <PillarsSlide />,
  <Pillar1Title />,
  <Pillar1Func1 />,
  <Pillar1Func2 />,
  <Pillar2Title />,
  <Pillar2Func1 />,
  <Pillar2Func2 />,
  <Pillar3Title />,
  <Pillar3Func1 />,
  <ExpandingHorizonsTitle />,
  <LogisticsSlide />,
  <InventorySlide />,
  <FinanceSlide />,
  <StrategicImpactSlide />,
  <ValuePropositionSlide />,
  <EfficiencySlide />,
  <FinancialRiskSlide />,
  <RetentionSlide />,
  <NextStepsSlide />,
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
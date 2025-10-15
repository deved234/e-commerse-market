import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import { getImagePath } from '../utils/imagePath';
import './SaintGeorgeHero.css';

const SaintGeorgeHero = () => {
  const { language } = useLanguage();
  return (
    <div className="saint-george-hero">
      <div className="hero-background">
        <img
          src={getImagePath("/rectangle555329-w7np.svg")}
          alt="Background decoration"
          className="hero-bg-rectangle-1"
        />
        <img
          src={getImagePath("/rectangle555329-rnef.svg")}
          alt="Background decoration"
          className="hero-bg-rectangle-2"
        />
      </div>

      <div className="hero-content">
        <div className="hero-images">
          <div className="hero-image-group">
            <img
              src={getImagePath("/line235329-9ebc.svg")}
              alt="Decorative line"
              className="hero-line-1"
            />
            <img
              src={getImagePath("/line245329-otqu.svg")}
              alt="Decorative line"
              className="hero-line-2"
            />
            <img
              src={getImagePath("/image2c8609f34c314552a62e2672ae05c61cremovebgprevi5329-w8vj-700h.png")}
              alt="Main hero image"
              className="hero-main-image"
            />
            <img
              src={getImagePath("/e1930ec6555e442f8646b2636ee70c22removebgpreview25329-x4p-500h.png")}
              alt="Secondary hero image"
              className="hero-secondary-image"
            />
          </div>
        </div>

        <div className="hero-text-section">
          <div className="hero-text-content">
            <h1 className="hero-title">
              {t('heroTitle', language)}
            </h1>
            <h2 className="hero-subtitle">
              {t('heroSubtitle', language)}
            </h2>
          </div>
          <img
            src={getImagePath("/line225329-3bbs.svg")}
            alt="Decorative line"
            className="hero-line-3"
          />
        </div>
      </div>
    </div>
  );
};

export default SaintGeorgeHero;
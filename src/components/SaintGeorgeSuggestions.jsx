import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import { getImagePath } from '../utils/imagePath';
import './SaintGeorgeSuggestions.css';

const SaintGeorgeSuggestions = () => {
  const { language } = useLanguage();
  const suggestions = [
    {
      id: 1,
      name: "الخيار الفارسي",
      category: "منتجات طازجة",
      image: "/unsplashqvkaqtnj4zki518-br8h-300w.png"
    },
    {
      id: 2,
      name: "دجاج طازج كامل",
      category: "اللحوم والدواجن",
      image: "/unsplashxgffjkspknki518-pzl-300w.png"
    },
    {
      id: 3,
      name: "سمك مكريل مجمد",
      category: "مأكولات بحرية",
      image: "/unsplashkraq7kfg7i8i518-ggk8-300w.png"
    }
  ];

  return (
    <section id="suggestions" className="saint-george-suggestions">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('suggestions', language)}</h2>
          <Link to="/suggestions" className="see-all-link">{t('viewAll', language)}</Link>
        </div>
        
        <div className="suggestions-grid">
          {suggestions.map((suggestion) => (
            <div key={suggestion.id} className="suggestion-card">
              <div className="suggestion-image">
                <img src={getImagePath(suggestion.image)} alt={suggestion.name} />
              </div>
              <div className="suggestion-content">
                <h3 className="suggestion-name">{suggestion.name}</h3>
                <p className="suggestion-category">{suggestion.category}</p>
                <button className="details-btn">{t('details', language)}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaintGeorgeSuggestions;
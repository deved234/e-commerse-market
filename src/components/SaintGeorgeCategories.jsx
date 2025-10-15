import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/sampleData';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import './SaintGeorgeCategories.css';

const SaintGeorgeCategories = () => {
  const { language } = useLanguage();
  // Map category slugs to their corresponding images
  const categoryImages = {
    'fresh-produce': '/unsplashqvkaqtnj4zki518-br8h-300w.png',
    'meat-poultry': '/unsplashxgffjkspknki518-pzl-300w.png',
    'seafood': '/unsplashkraq7kfg7i8i518-ggk8-300w.png',
    'dairy-cheese': '/unsplashx4zrlinfdqgi518-gny-300w.png',
    'bakery-sweets': '/unsplashltcybocukgci518-wnjq-300w.png',
    'spices-seasonings': '/unsplashqvkaqtnj4zki518-br8h-300w.png',
    'canned-foods': '/unsplashjxz2ggdbefwi518-wly6-300w.png',
    'frozen-foods': '/unsplashl8pjwy8n2jai518-iwnn-300h.png',
    'beverages': '/unsplashlwicl8bu4ei518-ur9p-300h.png',
    'nuts-seeds': '/unsplashltcybocukgci518-wnjq-300w.png',
    'vegetables': '/unsplashqvkaqtnj4zki518-br8h-300w.png'
  };

  // Map category slugs to their corresponding icon images
  const categoryIcons = {
    'fresh-produce': '/ellipse14i518-3ai-300h.png',
    'meat-poultry': '/ellipse14i518-achh-300h.png',
    'seafood': '/ellipse14i518-klg-300h.png',
    'dairy-cheese': '/ellipse14i518-y5av-300h.png',
    'bakery-sweets': '/ellipse14i518-vhu-300h.png',
    'spices-seasonings': '/ellipse14i518-3ai-300h.png',
    'canned-foods': '/ellipse14i518-2f3l-300h.png',
    'frozen-foods': '/ellipse14i518-4i9-300h.png',
    'beverages': '/ellipse14i518-tw8t-300h.png',
    'nuts-seeds': '/ellipse14i518-vhu-300h.png',
    'vegetables': '/ellipse14i518-3ai-300h.png'
  };

  return (
    <div className="saint-george-categories">
      <div className="container">
        <div className="categories-header">
          <h2 className="categories-title">{t('allCategories', language)}</h2>
        </div>
        
        <div className="categories-grid">
          {categories.map((category) => (
            <Link key={category.id} to={`/category/${category.slug}`} className="category-card">
              <div className="category-icon">
                <img
                  src={categoryIcons[category.slug] || '/ellipse14i518-3ai-300h.png'}
                  alt={category.name[language]}
                  className="category-icon-image"
                />
              </div>
              
              <div className="category-content">
                <h3 className="category-name">{category.name[language]}</h3>
                <div className="category-image-container">
                  <div className={`category-image ${category.slug}`}>
                    <img
                      src={categoryImages[category.slug] || '/unsplashqvkaqtnj4zki518-br8h-300w.png'}
                      alt={category.name[language]}
                      className="category-image-img"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaintGeorgeCategories;
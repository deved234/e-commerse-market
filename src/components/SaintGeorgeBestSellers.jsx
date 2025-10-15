import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import { getImagePath } from '../utils/imagePath';
import './SaintGeorgeBestSellers.css';

const SaintGeorgeBestSellers = () => {
  const { language } = useLanguage();
  const bestSellers = [
    {
      id: 1,
      name: "الجبن النابلسي",
      category: "الألبان والمشروبات",
      price: "7.49 دولار",
      image: "/unsplashx4zrlinfdqgi518-gny-300w.png"
    },
    {
      id: 2,
      name: "زيادي طازج",
      category: "الألبان والمشروبات",
      price: "3.49 دولار",
      image: "/unsplash2girclpjkii539-gv87-300h.png"
    },
    {
      id: 3,
      name: "خبر صاح",
      category: "مخبز ومخزن",
      price: "3.99 دولار",
      image: "/unsplashltcybocukgci518-wnjq-300w.png"
    },
    {
      id: 4,
      name: "دجاج طازج كامل",
      category: "اللحوم والدواجن",
      price: "12.99 دولارا",
      image: "/unsplashxgffjkspknki518-pzl-300w.png"
    },
    {
      id: 5,
      name: "سمك مكريل مجمد",
      category: "مأكولات بحرية",
      price: "8.99 دولار / حزمة",
      image: "/unsplashkraq7kfg7i8i518-ggk8-300w.png"
    },
    {
      id: 6,
      name: "خيار الفارسي",
      category: "الفواكه والخضروات",
      price: "2.49 دولار / رطل",
      image: "/unsplashqvkaqtnj4zki518-br8h-300w.png"
    }
  ];

  return (
    <section id="best-sellers" className="saint-george-bestsellers">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('bestSellersThisWeek', language)}</h2>
          <Link to="/bestsellers" className="see-all-link">{t('viewAll', language)}</Link>
        </div>
        
        <div className="bestsellers-grid">
          {bestSellers.map((product) => (
            <div key={product.id} className="bestseller-card">
              <div className="bestseller-image">
                <img src={getImagePath(product.image)} alt={product.name} />
              </div>
              <div className="bestseller-content">
                <h3 className="bestseller-name">{product.name}</h3>
                <p className="bestseller-category">{product.category}</p>
                <p className="bestseller-price">{product.price}</p>
                <button className="details-btn">{t('details', language)}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaintGeorgeBestSellers;
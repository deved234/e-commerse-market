import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import { getImagePath } from '../utils/imagePath';
import './SaintGeorgeOffers.css';

const SaintGeorgeOffers = () => {
  const { language } = useLanguage();
  const offers = [
    {
      id: 1,
      name: "الجبن النابلسي",
      description: "الطعم الأصيل النكهة الأصلية",
      price: "4.99 دولار/الحزمة",
      image: "/unsplashx4zrlinfdqgi518-gny-300w.png"
    },
    {
      id: 2,
      name: "الخيار الفارسي",
      description: "طازجة من المزرعة مباشرة إلى طاولتك",
      price: "2.49 دولار/الرطل",
      image: "/unsplashqvkaqtnj4zki518-br8h-300w.png"
    },
    {
      id: 3,
      name: "الطماطم الناضجة",
      description: "طازجة من المزرعة مباشرة إلى طاولتك",
      price: "1.49 دولار/الرطل",
      image: "/unsplash9yf1thysehwi518-xidf-300h.png"
    }
  ];

  return (
    <section id="offers" className="saint-george-offers">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('offers', language)}</h2>
          <Link to="/offers" className="see-all-link">{t('viewAll', language)}</Link>
        </div>
        
        <div className="offers-grid">
          {offers.map((offer) => (
            <div key={offer.id} className="offer-card">
              <div className="offer-image">
                <img src={getImagePath(offer.image)} alt={offer.name} />
                <div className="offer-tag">
                  <img src={getImagePath("/iconamoonarrowup2light5391-pygq.svg")} alt="tag" />
                </div>
              </div>
              <div className="offer-content">
                <h3 className="offer-name">{offer.name}</h3>
                <p className="offer-description">{offer.description}</p>
                <p className="offer-price">{offer.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaintGeorgeOffers;
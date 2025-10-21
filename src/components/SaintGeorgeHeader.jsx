import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useToast } from '../contexts/ToastContext';
import { t } from '../data/translations';
import { getImagePath } from '../utils/imagePath';
import './SaintGeorgeHeader.css';

const SaintGeorgeHeader = React.memo(() => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isOthersOpen, setIsOthersOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, isRTL } = useLanguage();
  const { showSuccess, showError } = useToast();


  const toggleCategories = useCallback(() => {
    setIsCategoriesOpen(prev => !prev);
  }, []);

  const closeCategories = useCallback(() => {
    setIsCategoriesOpen(false);
  }, []);

  const toggleOthers = useCallback(() => {
    setIsOthersOpen(prev => !prev);
  }, []);

  const closeOthers = useCallback(() => {
    setIsOthersOpen(false);
  }, []);

  const toggleLanguageDropdown = useCallback(() => {
    setIsLanguageOpen(prev => !prev);
  }, []);

  const selectLanguage = useCallback((lang) => {
    setLanguage(lang);
    setIsLanguageOpen(false);
  }, [setLanguage]);

  // Close all dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close language dropdown if clicking outside language selector and dropdown
      if (isLanguageOpen && !event.target.closest('.language-selector-container')) {
        setIsLanguageOpen(false);
      }
      
      // Close categories dropdown if clicking outside categories nav item and dropdown
      if (isCategoriesOpen && !event.target.closest('.categories-nav-item') && !event.target.closest('.categories-dropdown')) {
        setIsCategoriesOpen(false);
      }
      
      // Close others dropdown if clicking outside others nav item and dropdown
      if (isOthersOpen && !event.target.closest('.others-nav-item') && !event.target.closest('.others-dropdown')) {
        setIsOthersOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageOpen, isCategoriesOpen, isOthersOpen]);

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      showSuccess(language === 'ar' ? 'تم البحث بنجاح!' : 'Search completed successfully!');
      setSearchQuery('');
    } else {
      showError(language === 'ar' ? 'يرجى إدخال كلمة البحث' : 'Please enter a search term');
    }
  }, [searchQuery, navigate, showSuccess, showError, language]);

  const handleSearchInputChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  // Memoize categories dropdown to prevent unnecessary re-renders
  const categoriesDropdown = useMemo(() => (
    <div className="categories-dropdown">
      <div className="categories-dropdown-content">
        <Link to="/category/fresh-produce" className="category-dropdown-link" onClick={closeCategories}>
          <span className="category-icon">🥬</span>
          {t('freshProduce', language)}
        </Link>
        <Link to="/category/meat-poultry" className="category-dropdown-link" onClick={closeCategories}>
          <span className="category-icon">🥩</span>
          {t('meatPoultry', language)}
        </Link>
        <Link to="/category/seafood" className="category-dropdown-link" onClick={closeCategories}>
          <span className="category-icon">🐟</span>
          {t('seafood', language)}
        </Link>
        <Link to="/category/dairy-cheese" className="category-dropdown-link" onClick={closeCategories}>
          <span className="category-icon">🥛</span>
          {t('dairyCheese', language)}
        </Link>
        <Link to="/category/bakery-sweets" className="category-dropdown-link" onClick={closeCategories}>
          <span className="category-icon">🍰</span>
          {t('bakerySweets', language)}
        </Link>
        <Link to="/category/spices-seasonings" className="category-dropdown-link" onClick={closeCategories}>
          <span className="category-icon">🌶️</span>
          {t('spicesSeasonings', language)}
        </Link>
        <Link to="/category/canned-foods" className="category-dropdown-link" onClick={closeCategories}>
          <span className="category-icon">🥫</span>
          {t('cannedFoods', language)}
        </Link>
        <Link to="/category/frozen-foods" className="category-dropdown-link" onClick={closeCategories}>
          <span className="category-icon">🧊</span>
          {t('frozenFoods', language)}
        </Link>
        <Link to="/category/beverages" className="category-dropdown-link" onClick={closeCategories}>
          <span className="category-icon">🥤</span>
          {t('beverages', language)}
        </Link>
        <Link to="/category/nuts-seeds" className="category-dropdown-link" onClick={closeCategories}>
          <span className="category-icon">🥜</span>
          {t('nutsSeeds', language)}
        </Link>
        <Link to="/category/vegetables" className="category-dropdown-link" onClick={closeCategories}>
          <span className="category-icon">🥕</span>
          {t('vegetables', language)}
        </Link>
      </div>
    </div>
  ), [language, closeCategories]);

  // Memoize others dropdown to prevent unnecessary re-renders
  const othersDropdown = useMemo(() => (
    <div className="others-dropdown">
      <div className="others-dropdown-content">
        <Link to="/bestsellers" className="others-dropdown-link" onClick={closeOthers}>
          <span className="others-icon">🏆</span>
          {t('bestSellers', language)}
        </Link>
        <Link to="/offers" className="others-dropdown-link" onClick={closeOthers}>
          <span className="others-icon">🎯</span>
          {t('offers', language)}
        </Link>
        <Link to="/suggestions" className="others-dropdown-link" onClick={closeOthers}>
          <span className="others-icon">💡</span>
          {t('suggestions', language)}
        </Link>
      </div>
    </div>
  ), [language, closeOthers]);

  // Memoize language dropdown to prevent unnecessary re-renders
  const languageDropdown = useMemo(() => (
    <div className="language-dropdown">
      <div className="language-dropdown-content">
        <button 
          className={`language-option ${language === 'ar' ? 'active' : ''}`} 
          onClick={() => selectLanguage('ar')}
        >
          <span className="language-flag">🇸🇦</span>
          العربية
        </button>
        <button 
          className={`language-option ${language === 'en' ? 'active' : ''}`} 
          onClick={() => selectLanguage('en')}
        >
          <span className="language-flag">🇺🇸</span>
          English
        </button>
      </div>
    </div>
  ), [language, selectLanguage]);

  return (
    <div className="saint-george-header">
      {/* Top Bar */}
      <div className="header-top">
        <div className="container">
          <div className="top-content">
            <div className="language-selector-container">
              <div className="language-selector" onClick={toggleLanguageDropdown}>
                <span className="language-text">{language === 'ar' ? 'العربية' : 'English'}</span>
                <img
                  src={getImagePath("/iconamoonarrowup2light5391-pygq.svg")}
                  alt="language"
                  className="language-arrow"
                />
              </div>
              {isLanguageOpen && languageDropdown}
            </div>
            <div className="logo-section">
              <Link to="/" className="logo-link">
                <div className="logo-container">
                  <img src={getImagePath("/photos/logo.PNG")} alt="Saint George Market Logo" className="header-logo-image" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="container">
          <div className="main-content">
            {/* Search Section */}
            <div className="search-section">
              <form className="search-form" onSubmit={handleSearch}>
                <div className="search-box">
                  <img
                    src={getImagePath("/materialsymbolslightsearch5329-9t2h.svg")}
                    alt="search"
                    className="search-icon"
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    placeholder={t('searchPlaceholder', language)}
                    className="search-input"
                  />
                </div>
              </form>
            </div>
            
            {/* Navigation */}
            <div className="main-nav">
              <Link to="/contact" className="nav-text">{t('contact', language)}</Link>
              <div className="nav-item others-nav-item" onClick={toggleOthers}>
                <span className="nav-text">{t('others', language)}</span>
                <img
                  src={getImagePath("/fluentiosarrow24filled5329-qbri.svg")}
                  alt="arrow"
                  className="nav-arrow"
                />
              </div>
              <div className="nav-item categories-nav-item" onClick={toggleCategories}>
                <span className="nav-text">{t('categories', language)}</span>
                <img
                  src={getImagePath("/fluentiosarrow24filled5329-qbri.svg")}
                  alt="arrow"
                  className="nav-arrow"
                />
              </div>
              <Link 
                to="/" 
                className={`nav-text ${location.pathname === '/' ? 'active' : ''}`}
              >
                {t('homepage', language)}
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/* Categories Dropdown */}
      {isCategoriesOpen && categoriesDropdown}

      {/* Others Dropdown */}
      {isOthersOpen && othersDropdown}


    </div>
  );
});

SaintGeorgeHeader.displayName = 'SaintGeorgeHeader';

export default SaintGeorgeHeader;
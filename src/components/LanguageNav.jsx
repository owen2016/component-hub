import React, { useState } from 'react';

const LanguageNav = () => {
  const [activeLanguage, setActiveLanguage] = useState('Maven');
  
  const languages = [
    'Maven', 'Python', 'NPM', 'Go', 'Ruby', 'DotNet', '更多'
  ];
  
  return (
    <div className="language-nav">
      <div className="category-title">按语言筛选</div>
      <div className="category-tags">
        {languages.map((lang) => (
          <div 
            key={lang}
            className={`tag ${lang === activeLanguage ? 'active' : ''}`}
            onClick={() => setActiveLanguage(lang)}
          >
            {lang}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageNav;
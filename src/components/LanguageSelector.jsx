// src/components/LanguageSelector.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="relative">
      <select
        onChange={handleLanguageChange}
        value={i18n.language}
        className="bg-blue-800 text-white py-2 px-4 rounded-md"
      >
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
        <option value="bn">বাংলা</option> {/* Add Bengali option */}
      </select>
    </div>
  );
};

export default LanguageSelector;

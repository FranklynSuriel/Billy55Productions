import React, { createContext, useContext, useState } from 'react';

// Import your localization JSON files (en.json and es.json) here.
import en from '../localization/en.json';
import es from '../localization/es.json';

const LocalizationContext = createContext();

export function useLocalization() {
  return useContext(LocalizationContext);
}

export function LocalizationProvider({ children }) {
  const [language, setLanguage] = useState('es'); // Default to Spanish

  const translations = {
    en,
    es,
    // Add more languages here if needed
  };

  const translate = (key) => translations[language][key] || key;

  return (
    <LocalizationContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LocalizationContext.Provider>
  );
}

// Imports React, createContext, useContext, useState
import React, { createContext, useContext, useState } from 'react';

// Import localization JSON files (en.json and es.json)
import en from '../localization/en.json';
import es from '../localization/es.json';

// Create a new context for localization data
const LocalizationContext = createContext();

// Custom hook for accessing localization context
export function useLocalization() {
  return useContext(LocalizationContext);
}

// Localization provider component that manages language and translations
export function LocalizationProvider({ children }) {
  const [language, setLanguage] = useState('es'); // Default to Spanish

  // Define translations for different languages
  const translations = {
    en, // English translations
    es, // Spanish translations
    // future version. Add more languages
  };

  // Function to translate a given key into the selected language
  const translate = (key) => translations[language][key] || key;

  return (
    // Provide the language, setLanguage, and translate function through context
    <LocalizationContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LocalizationContext.Provider>
  );
}

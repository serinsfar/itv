import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import deJSON from './DE.json'
import enJSON from './EN.json'

const resources = {

  EN: {translation: enJSON},
  DE: {translation: deJSON}
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // Not needed for React as it escapes by default
  },
  });

  export default i18n;
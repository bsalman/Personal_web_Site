import i18n, { t } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // Detects the user's language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    debug: true, // Enable debug mode for development
    resources: {
      en: {
        translation: require("./locales/en/translation.json")
      },
      de: {
        translation: require("./locales/de/translation.json")
      }
    },
    fallbackLng: "en", // Default language
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });
//to do : get the languages from  backend
export default i18n;

import i18n from "i18next";

import { initReactI18next } from "react-i18next";
import trJSON from "./translations/tr";
import enJSON from "./translations/en";

const resources = {
  tr: { translation: trJSON },
  en: { translation: enJSON },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  react: {
    useSuspense: true,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

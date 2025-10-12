import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en.js';
import ar from './ar.js';

export const Language = {
    EN: 'en',
    AR: 'ar',
};

export const initI18n = async (defaultLanguage) => {
    await i18n
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            fallbackLng: Language.EN,
            lng: defaultLanguage,
            defaultNS: 'common',
            debug: process.env.NODE_ENV === 'development',
            interpolation: {
                escapeValue: false,
            },
            resources: {
                en: {
                    common: en,
                },
                ar: {
                    common: ar,
                },
            },
        });

    return i18n;
};

export default i18n;
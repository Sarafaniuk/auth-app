import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'

import translationRS from '../locales/russian.json'
import translationEN from '../locales/english.json'
import translationUA from '../locales/ukrainian.json'


const resources = {
    ru: {
        translation: translationRS,
    },
    en: {
        translation: translationEN,
    },
    ua: {
        translation: translationUA,
    },
}

const language = localStorage.getItem("i18n")

if (!language) {
    localStorage.setItem("i18n", "ru")
}

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init( {
        resources,
        lng: localStorage.getItem("i18n") || "ru",
        fallbackLng: 'ru',
        returnEmptyString: false,
        debug: false, //console log in application
        detection: {
            order: ['querystring', 'cookie'],
            caches: ['cookie'],
        },
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
    });

export default i18n;


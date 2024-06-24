import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import COMMON_EN from 'src/locales/en/common.json'
import COMMON_VI from 'src/locales/vi/common.json'

export const resources = {
  en: {
    common: COMMON_EN
  },
  vi: {
    common: COMMON_VI
  }
}

const defaultNS = 'common'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    ns: ['common'],
    defaultNS,
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false
    }
  })

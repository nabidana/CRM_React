import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import kolan from './ko/ko.json';
import enlan from './en/en.json';

i18next
    .use(initReactI18next)
    .init({
        resources : {
            en : { translation : enlan},
            ko : { translation : kolan},
        },
        lng : 'ko', // Default 언어
        fallbackLng : 'en', // 번역이 없을 경우 사용할 언어
        interpolation : {
            escapeValue : false, // React 에서는 이미 XSS 방지하므로, false 설정함
        },
    });

export default i18next;
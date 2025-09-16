import { roboto, iransans } from '@/app/fonts';

const getFontByLocale = (locale) => {
  const langs = [
    { lang: 'en', fontFamily: roboto?.variable },
    { lang: 'fa', fontFamily: iransans?.variable },
  ];
  return langs.find((l) => l.lang === locale)?.fontFamily || 'defaultFont';
};
export default getFontByLocale;

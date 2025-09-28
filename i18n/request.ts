// import { getRequestConfig } from 'next-intl/server';
// import { hasLocale } from 'next-intl';
// import { routing } from './routing';
// import { loadI18nTranslations } from '@/i18n/loader';

// export default getRequestConfig(async ({ requestLocale }) => {
//   const requested = await requestLocale;
//   const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

//   const messages = loadI18nTranslations('/messages/', locale);
//   return {
//     locale,
//     messages: messages,
//     // messages: (await import(`../messages/${locale}/common.json`)).default,
//   };
// });

// ===================

// app/i18n/requests.ts
import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  let messages;
  try {
    messages = (await import(`../messages/${locale}/common.json`)).default;
  } catch (error) {
    console.error(`Failed to load translations for locale "${locale}":`, error);
    // Fallback to default locale (e.g., 'en')
    messages = (await import(`../messages/en/common.json`)).default;
  }

  return {
    locale,
    messages,
  };
});

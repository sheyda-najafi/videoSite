// import config from '@/api/global';
// import { defineRouting } from 'next-intl/routing';

// export const routing = defineRouting({
//   locales: config.routingLangs,
//   defaultLocale: config.defaultLocale,
//   localePrefix: 'as-needed', // important: do not add prefix for default locale
// });

// ================

// i18n/routing.ts
import config from '@/api/global';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: config.routingLangs, // e.g., ['en', 'fa']
  defaultLocale: config.defaultLocale, // e.g., 'en'
  localePrefix: 'as-needed',
  // timeZone: 'Asia/Tehran', // Set for Iran, or use 'UTC' for consistency
});

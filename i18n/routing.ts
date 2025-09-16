

import config from '@/api/global';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // locales: config?.langs?.map(l => l.lang), // ['en', 'fa', 'fr']
    locales: config.routingLangs,
    defaultLocale: config.defaultLocale,
    localePrefix: 'as-needed' // important: do not add prefix for default locale
});

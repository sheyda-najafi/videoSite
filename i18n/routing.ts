import config from '@/api/global';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // A list of all locales that are supported
    // locales: ['en', 'fa'],
    locales: config?.langs?.map(l => l.lang),

    // Used when no locale matches
    defaultLocale: 'en'
});
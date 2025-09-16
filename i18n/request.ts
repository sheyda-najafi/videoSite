import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';
import { loadI18nTranslations } from '@/i18n/loader';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  const messages = loadI18nTranslations('/messages/', locale);
  return {
    locale,
    // messages: messages
    messages: (await import(`../messages/${locale}/common.json`)).default,
  };
});

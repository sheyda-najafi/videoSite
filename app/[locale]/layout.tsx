import './globals.css';
// import './theme.scss';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { LayoutProvider } from '@/context/LayoutContext';
import UiLayout from './ui-layout';
import config from '@/api/global';
import GeneralContent from '@/components/structure/GeneralContent';
import getFontByLocale from '@/functions/getFontByLocale';
import { loadI18nTranslations } from '@/i18n/loader';

export const metadata: Metadata = {
  title: 'didarin',
  description: 'didarin',
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await loadI18nTranslations('/messages/', locale, ['common', 'general']);

  const fontClass = getFontByLocale(locale);
  return (
    <html lang={locale} dir={config.isRTL(locale) ? 'rtl' : 'ltr'} className={fontClass}>
      <body>
        <GeneralContent locale={locale} messages={messages} page={false}>
          <LayoutProvider>
            <UiLayout>{children}</UiLayout>
          </LayoutProvider>
        </GeneralContent>
      </body>
    </html>
  );
}


import './globals.css';
import './theme.scss';
import { roboto, iransans } from "./fonts";
import type { Metadata } from "next";
import { setRequestLocale } from 'next-intl/server';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { LayoutProvider } from "@/context/LayoutContext"
import UiLayout from "./ui-layout"
import config from '@/api/global';

export const metadata: Metadata = {
    title: "didarin",
    description: "didarin",
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
    const getFontByLocale = (locale: string) => {
        return config.langs.find(l => l.lang === locale)?.fontFamily || 'defaultFont';
    };
    setRequestLocale(locale);
    const messages = await import(`@/messages/${locale}.json`).then((mod) => mod.default);
    const fontClass = getFontByLocale(locale)
    return (
        <html lang={locale} dir={config.isRTL(locale) ? 'rtl' : 'ltr'} className={fontClass}>
            <body>
                <NextIntlClientProvider messages={messages} locale={locale} >
                    <LayoutProvider>
                        <UiLayout>
                            {children}
                        </UiLayout>
                    </LayoutProvider>
                </NextIntlClientProvider>

            </body>
        </html >
    );
}
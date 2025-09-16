// import { useTranslations } from 'next-intl';

// export default function NotFoundPage() {
//     const t = useTranslations('NotFoundPage');
//     return <h1>{t('title')}</h1>;
// }
// ===============
// "use client"
// // app/[locale]/not-found.tsx
// import { useTranslations } from 'next-intl';
// import { useParams } from 'next/navigation';

// export default function LocaleNotFound() {
//     const { locale } = useParams();
//     const t = useTranslations('NotFoundPage');

//     return <h1>{t('title')} (Locale: {locale})</h1>;
// }

// ===========

// 'use client';
// import { use } from 'react';
// import { NextIntlClientProvider } from 'next-intl';
// import { usePathname } from 'next/navigation';

// export default function RootNotFound() {
//     const pathname = usePathname();

//     // Detect locale from path (default to 'en')
//     const segments = pathname.split('/').filter(Boolean);
//     const locale = segments[0] && ['fa', 'fr'].includes(segments[0]) ? segments[0] : 'en';

//     const messages = use(
//         import(`@/messages/${locale}.json`).then((mod) => mod.default)
//     );

//     return (
//         <NextIntlClientProvider locale={locale} messages={messages}>
//             <h1>{messages?.NotFoundPage?.title || 'Page not found'}</h1>
//         </NextIntlClientProvider>
//     );
// }


// ===========
// "use client"
// // app/not-found.tsx
// import { routing } from '@/i18n/routing';
// import { NextIntlClientProvider } from 'next-intl';

// export default async function RootNotFound({ params }: { params?: { locale?: string } }) {
//     let locale = params?.locale;

//     if (!locale) {
//         // crude detection from URL
//         const segments = typeof window !== 'undefined' ? window.location.pathname.split('/').filter(Boolean) : [];
//         locale = segments[0] && routing?.locales?.includes(segments[0]) ? segments[0] : 'en';
//     }

//     const messages = (await import(`@/messages/${locale}.json`)).default;

//     return (
//         <NextIntlClientProvider locale={locale} messages={messages}>
//             <h1>{messages?.NotFoundPage?.title || 'Page not found'}</h1>
//         </NextIntlClientProvider>
//     );
// }
// ============
// export default async function RootNotFound() {
//     const messages = (await import(`@/messages/en.json`)).default;
//     return <h1>{messages.NotFoundPage?.title || 'Page not found'}</h1>;
// }
// ===============

'use client';

import { routing } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RootNotFoundClient() {
    const pathname = usePathname();
    const [messages, setMessages] = useState<{ NotFoundPage?: { title: string } }>({});

    useEffect(() => {
        const segments = pathname.split('/').filter(Boolean);
        const supportedLocales = routing?.locales;
        const locale = segments[0] && supportedLocales.includes(segments[0]) ? segments[0] : 'en';

        import(`@/messages/${locale}/common.json`).then((mod) => setMessages(mod.default));
    }, [pathname]);

    return <h1>{messages.NotFoundPage?.title}</h1>;
}

'use client';
import { useState, useEffect, ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';

type GeneralContentProps = {
    locale: string;
    messagesPath: string; // e.g., 'about', 'contact'
    children: ReactNode;
};

export default function GeneralContent({ locale, messagesPath, children }: GeneralContentProps) {
    const [messages, setMessages] = useState<any>(null);

    useEffect(() => {
        (async () => {
            try {
                const mod = await import(`@/messages/${locale}/${messagesPath}.json`);
                setMessages(mod.default);
            } catch {
                const mod = await import(`@/messages/en/${messagesPath}.json`);
                setMessages(mod.default);
            }
        })();
    }, [locale, messagesPath]);

    if (!messages) return <div>Loading translations...</div>;
    console.log("messages==", messages)

    return (
        <NextIntlClientProvider messages={messages} locale={locale}>
            {children}
        </NextIntlClientProvider>
    );
}

// 'use client';
// import { useState, useEffect, ReactNode } from 'react';
// import { NextIntlClientProvider } from 'next-intl';

// type GeneralContentProps = {
//   locale: string;
//   messagesPath: string;
//   children: ReactNode;
// };

// export default function GeneralContent({ locale, messagesPath, children }: GeneralContentProps) {
//   const [messages, setMessages] = useState<any>(null);

//   useEffect(() => {
//     (async () => {
//       try {
//         const mod = await import(`@/messages/${locale}/${messagesPath}.json`);
//         setMessages(mod.default);
//       } catch {
//         const mod = await import(`@/messages/en/${messagesPath}.json`);
//         setMessages(mod.default);
//       }
//     })();
//   }, [locale, messagesPath]);

//   // if (!messages) return <div>Loading translations...</div>;
//   console.log('messages==', messages);

//   return (
//     <NextIntlClientProvider messages={messages} locale={locale}>
//       {children}
//     </NextIntlClientProvider>
//   );
// }

// ==========

// 'use client';
// import { NextIntlClientProvider } from 'next-intl';
// import { ReactNode } from 'react';

// type GeneralContentProps = {
//   locale: string;
//   messages: any;
//   children: ReactNode;
// };

// export default function GeneralContent({ locale, messages, children }: GeneralContentProps) {
//   return (
//     <NextIntlClientProvider messages={messages} locale={locale}>
//       {children}
//     </NextIntlClientProvider>
//   );
// }

// components/structure/GeneralContent.tsx
'use client';
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';

type GeneralContentProps = {
  locale: string;
  messages: any;
  children: ReactNode;
  page?: boolean;
};

export default function GeneralContent({
  locale,
  messages = null,
  children,
  page = true,
}: GeneralContentProps) {
  // console.log('GeneralContent messages:', JSON.stringify(messages, null, 2)); // Debug
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <div className={`wrapperStyle ${page ? `pageStyle` : ''}`}>{children}</div>
    </NextIntlClientProvider>
  );
}

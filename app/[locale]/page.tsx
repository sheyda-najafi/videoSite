// import GeneralContent from '@/components/structure/GeneralContent';
// import Home from '@/components/page/Home';

// export default function HomePage({ params }: { params: { locale: string } }) {
//   const locale = params?.locale;
//   return (
//     <GeneralContent locale={locale} messagesPath="common">
//       <Home />
//     </GeneralContent>
//   );
// }

// ==========

import GeneralContent from '@/components/structure/GeneralContent';
import Home from '@/components/page/Home';
import { loadI18nTranslations } from '@/i18n/loader';

export default async function HomePage({ params }: { params: { locale: string } }) {
  const locale = params?.locale;
  // const messages = await loadI18nTranslations('/messages/', locale);
  const messages = await loadI18nTranslations('/messages/', locale, ['home', 'general']);

  return (
    <GeneralContent locale={locale} messages={messages}>
      <Home />
    </GeneralContent>
  );
}

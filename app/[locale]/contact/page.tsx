import Contact from '@/components/page/Contact';
import GeneralContent from '@/components/structure/GeneralContent';
import { loadI18nTranslations } from '@/i18n/loader';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await loadI18nTranslations('/messages/', locale, ['contact']);
  return (
    <GeneralContent locale={locale} messages={messages}>
      <Contact />
    </GeneralContent>
  );
}

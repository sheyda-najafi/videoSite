import Channels from '@/components/page/Channels';
import GeneralContent from '@/components/structure/GeneralContent';
import { loadI18nTranslations } from '@/i18n/loader';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await loadI18nTranslations('/messages/', locale, ['channels', 'general']);
  return (
    <GeneralContent locale={locale} messages={messages}>
      <Channels />
    </GeneralContent>
  );
}

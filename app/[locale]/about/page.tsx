import About from '@/components/page/About';
import GeneralContent from '@/components/structure/GeneralContent';
import { loadI18nTranslations } from '@/i18n/loader';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  let aboutData = {};
  // try {
  //   const res = await fetch(`https://api.hyggelanguage.ir/api/v0/blog/list?start=10&limit=10`, {
  //     next: { revalidate: 60 },
  //   });
  //   if (res.ok) aboutData = await res.json();
  // } catch (err) {
  //   console.warn('Failed to fetch about data:', err);
  // }

  // Load only about.json for the About page
  const messages = await loadI18nTranslations('/messages/', locale, ['about']);

  return (
    <GeneralContent locale={locale} messages={messages}>
      <About data={aboutData} />
    </GeneralContent>
  );
}

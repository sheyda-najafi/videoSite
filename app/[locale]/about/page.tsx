import About from '@/components/page/About';
import GeneralContent from '@/components/structure/GeneralContent';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; // ✅ await params

  // Server-side API fetch
  let aboutData = {};
  try {
    const res = await fetch(`https://api.hyggelanguage.ir/api/v0/blog/list?start=10&limit=10`, {
      next: { revalidate: 60 },
    });
    if (res.ok) aboutData = await res.json();
  } catch (err) {
    console.warn('Failed to fetch about data:', err);
  }

  return (
    <GeneralContent locale={locale} messagesPath="about">
      <About data={aboutData} />
    </GeneralContent>
  );
}

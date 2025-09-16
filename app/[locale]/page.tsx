import GeneralContent from '@/components/structure/GeneralContent';
import Home from '@/components/page/Home';

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = params?.locale;
  return (
    <GeneralContent locale={locale} messagesPath="common">
      <Home />
    </GeneralContent>
  );
}

// app/[locale]/category/[slug]/page.tsx
import GeneralContent from '@/components/structure/GeneralContent';
import Category from '@/components/page/Category'; // ✅ you’ll need this component
import { loadI18nTranslations } from '@/i18n/loader';
import { CategoryItem } from '@/commonTypes';

interface CategoryApiResponse {
  response: {
    data: CategoryItem[];
  };
  status?: string;
  message?: string;
}
interface CategoryPageProps {
  params: { locale: string; slug: string };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale, slug } = params;

  let categoryData: CategoryApiResponse = { response: { data: [] } };
  try {
    const res = await fetch(
      `https://api.hyggelanguage.ir/api/v0//category/${slug}?start=0&limit=10`,
      { next: { revalidate: 60 } },
    );
    if (res.ok) categoryData = await res.json();
  } catch (err) {
    console.warn(`Failed to fetch category data for ${slug}:`, err);
  }

  // Load messages for category page
  const messages = await loadI18nTranslations('/messages/', locale, ['category', 'general']);

  return (
    <GeneralContent locale={locale} messages={messages}>
      <Category
        slug={slug}
        categoryInfo={categoryData?.response?.data ? categoryData?.response?.data?.[0] : {}}
      />
    </GeneralContent>
  );
}

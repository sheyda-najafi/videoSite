// app/[locale]/Profile/[slug]/page.tsx
import GeneralContent from '@/components/structure/GeneralContent';
import Profile from '@/components/page/Profile'; // ✅ you’ll need this component
import { loadI18nTranslations } from '@/i18n/loader';
import { ProfileInfo } from '@/commonTypes';

interface ProfileApiResponse {
  response: {
    data?: ProfileInfo | {};
  };
  status?: string;
  message?: string;
}
interface ProfilePageProps {
  params: { locale: string; slug: string };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { locale, slug } = params;

  let ProfileData: ProfileApiResponse = { response: { data: {} } };
  try {
    const res = await fetch(`https://api.hyggelanguage.ir/api/v0/show-profile`, {
      next: { revalidate: 60 },
    });
    if (res.ok) ProfileData = await res.json();
  } catch (err) {
    console.warn(`Failed to fetch Profile data for ${slug}:`, err);
  }

  // Load messages for Profile page
  const messages = await loadI18nTranslations('/messages/', locale, ['profile', 'general']);

  return (
    <GeneralContent locale={locale} messages={messages}>
      <Profile
        slug={slug}
        profileInfo={ProfileData?.response?.data ? ProfileData?.response?.data : {}}
      />
    </GeneralContent>
  );
}

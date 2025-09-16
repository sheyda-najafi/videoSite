'use client';
import LanguageSwitcher from '@/components/general/LanguageSwitcher';
import ModeSwitcher from '@/components/general/ModeSwitcher';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function Home() {
// { data }: { data: any }
  const t = useTranslations('HomePage');
  // console.log("data==", data)
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <LanguageSwitcher />
      <ModeSwitcher />
      <div>
        <Link href="/about">About Us</Link> <Link href="/contact">Contact Us</Link>
      </div>
    </div>
  );
}

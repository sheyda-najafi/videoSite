'use client';
import LanguageSwitcher from '@/components/general/LanguageSwitcher';
import ModeSwitcher from '@/components/general/ModeSwitcher';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('Page');

  return (
    <div>
      <h1>{t('title')}</h1>
      <LanguageSwitcher />
      <ModeSwitcher />
      <div>
        <Link href="/about">About Us</Link> <Link href="/contact">Contact Us</Link>
      </div>
    </div>
  );
}

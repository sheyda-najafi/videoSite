'use client';
import AppLink from '@/components/common/AppLink';
import LanguageSwitcher from '@/components/general/LanguageSwitcher';
import ModeThemeSwitcher from '@/components/general/ModeThemeSwitcher';
import { useTranslations } from 'next-intl';

export default function About({ data }: { data: any }) {
  const t = useTranslations('Page');

  return (
    <div>
      <h1>{t('title')}</h1>
      <LanguageSwitcher />
      <ModeThemeSwitcher />
      <div>
        <AppLink href="/about">About Us</AppLink> <AppLink href="/contact">Contact Us</AppLink>
      </div>
    </div>
  );
}

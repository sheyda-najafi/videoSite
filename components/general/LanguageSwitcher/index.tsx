'use client';
import { usePathname, useRouter } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    const segments = pathname.split('/').filter(Boolean);

    if (routing.locales.includes(segments[0])) {
      segments.shift();
    }

    if (newLocale !== routing.defaultLocale) {
      segments.unshift(newLocale);
    }

    const newPath = '/' + segments.join('/');
    router.push(newPath);
  };

  return (
    <div>
      {routing.locales.map((loc) => (
        <button key={loc} onClick={() => switchLanguage(loc)}>
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

// 'use client';
// import { useRouter, usePathname } from 'next/navigation';

// export default function LanguageSwitcher() {
//   const router = useRouter();
//   const pathname = usePathname();

//   const changeLanguage = (locale) => {
//     const segments = pathname.split('/');
//     segments[1] = locale; // replace the [locale] segment
//     router.push(segments.join('/'));
//   };

//   return (
//     <div>
//       <button onClick={() => changeLanguage('en')}>EN</button>
//       <button onClick={() => changeLanguage('fa')}>Fa</button>
//     </div>
//   );
// }


// ============

// 'use client';
// import { usePathname, useRouter } from 'next/navigation';

// export default function LanguageSwitcher() {
//   const router = useRouter();
//   const pathname = usePathname();

//   const switchLanguage = (locale: string) => {
//     const segments = pathname.split('/');
//     segments[1] = locale; // replace the locale part
//     router.push(segments.join('/'));
//   };

//   return (
//     <div>
//       <button onClick={() => switchLanguage('en')}>EN</button>
//       <button onClick={() => switchLanguage('fa')}>FA</button>
//     </div>
//   );
// }


// ===========
// 'use client';
// import { usePathname, useRouter } from 'next/navigation';

// export default function LanguageSwitcher() {
//   const router = useRouter();
//   const pathname = usePathname();

//   const switchLanguage = (locale: string) => {
//     const segments = pathname.split('/');
//     segments[1] = locale;
//     router.push(segments.join('/'));
//   };

//   return (
//     <div>
//       <button onClick={() => switchLanguage('en')}>EN</button>
//       <button onClick={() => switchLanguage('fa')}>FA</button>
//     </div>
//   );
// }

// // ==========

// 'use client';
// import { usePathname, useRouter } from 'next/navigation';

// export default function LanguageSwitcher() {
//   const router = useRouter();
//   const pathname = usePathname();

//   const switchLanguage = (locale: string) => {
//     const segments = pathname.split('/');
//     segments[1] = locale;
//     router.push(segments.join('/')); // reloads page on server
//   };

//   return (
//     <div>
//       <button onClick={() => switchLanguage('en')}>EN</button>
//       <button onClick={() => switchLanguage('fa')}>FA</button>
//     </div>
//   );
// }


// ============

// 'use client';
// import { usePathname, useRouter } from 'next/navigation';
// import { routing } from '@/i18n/routing'; // your routing config

// export default function LanguageSwitcher() {
//   const router = useRouter();
//   const pathname = usePathname();

//   const switchLanguage = (newLocale: string) => {
//     const segments = pathname.split('/').filter(Boolean); // ["about", ...] or ["fr","about"]

//     // If first segment is a locale
//     if (routing.locales.includes(segments[0])) {
//       segments[0] = newLocale; // replace locale
//     } else if (newLocale !== routing.defaultLocale) {
//       // Add new locale prefix for non-default locale
//       segments.unshift(newLocale);
//     }
//     // else default locale: leave segments as-is (prefixless)

//     const newPath = '/' + segments.join('/');
//     router.push(newPath);
//   };

//   return (
//     <div>
//       <button onClick={() => switchLanguage('en')}>EN</button>
//       <button onClick={() => switchLanguage('fa')}>FA</button>
//       <button onClick={() => switchLanguage('fr')}>FR</button>
//     </div>
//   );
// }

// =============

// 'use client';
// import { usePathname, useRouter } from 'next/navigation';
// import { routing } from '@/i18n/routing'; // your routing config

// export default function LanguageSwitcher() {
//   const router = useRouter();
//   const pathname = usePathname();

//   const switchLanguage = (newLocale: string) => {
//     const segments = pathname.split('/').filter(Boolean); // ["about"] or ["fr","about"]

//     // Check if first segment is a locale
//     if (routing.locales.includes(segments[0])) {
//       segments.shift(); // remove the current locale prefix
//     }

//     // Add new locale prefix only if it's NOT the default locale
//     if (newLocale !== routing.defaultLocale) {
//       segments.unshift(newLocale);
//     }

//     const newPath = '/' + segments.join('/');
//     router.push(newPath);
//   };

//   return (
//     <div>
//       <button onClick={() => switchLanguage('en')}>EN</button>
//       <button onClick={() => switchLanguage('fa')}>FA</button>
//       <button onClick={() => switchLanguage('fr')}>FR</button>
//     </div>
//   );
// }


// ========

'use client';
import { usePathname, useRouter } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    const segments = pathname.split('/').filter(Boolean);

    // Remove current locale prefix if exists
    if (routing.locales.includes(segments[0])) {
      segments.shift();
    }

    // Add new locale prefix if it's NOT default
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

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

// ==========

'use client';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale;
    router.push(segments.join('/')); // reloads page on server
  };

  return (
    <div>
      <button onClick={() => switchLanguage('en')}>EN</button>
      <button onClick={() => switchLanguage('fa')}>FA</button>
    </div>
  );
}

import { NextResponse } from 'next/server';
import { routing } from './i18n/routing';

export function middleware(request: Request) {
  const url = new URL(request.url);
  const { pathname } = url;

  // Skip internals & static files
  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.match(/\.(.*)$/))
    return;

  // Already has a valid non-default locale → do nothing
  if (
    routing.locales.some((loc) => loc !== routing.defaultLocale && pathname.startsWith(`/${loc}`))
  ) {
    return;
  }

  // Only rewrite prefixless paths to default locale internally
  if (!pathname.startsWith(`/${routing.defaultLocale}`)) {
    url.pathname = `/${routing.defaultLocale}${pathname}`;
    return NextResponse.rewrite(url);
  }

  // Prevent loop: do nothing if path already starts with /en
}

// // middleware.ts
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { match } from '@formatjs/intl-localematcher';
// import { routing } from './i18n/routing';

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;
//   const pathLocale = pathname.split('/')[1] || ''; // Extract locale (e.g., 'fa') or empty string
//   const locale = match([pathLocale], routing.locales, routing.defaultLocale); // Pass as array
//   if (!routing.locales.includes(pathLocale)) {
//     return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
//   }
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/((?!_next|api|static).*)'],
// };

// =========

// // middleware.ts
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { match } from '@formatjs/intl-localematcher';
// import { routing } from './i18n/routing';

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;
//   const pathLocale = pathname.split('/')[1] || routing.defaultLocale;
//   const locale = match([pathLocale], routing.locales, routing.defaultLocale);

//   if (!routing.locales.includes(pathLocale)) {
//     const newPath = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;
//     return NextResponse.redirect(new URL(newPath, request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/((?!_next|api|static).*)'],
// };
// ==========
// // middleware.ts
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { match } from '@formatjs/intl-localematcher';
// import { routing } from './i18n/routing';

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;
//   const pathLocale = pathname.split('/')[1] || routing.defaultLocale;
//   const locale = match([pathLocale], routing.locales, routing.defaultLocale);

//   if (!routing.locales.includes(pathLocale)) {
//     const newPath = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;
//     return NextResponse.redirect(new URL(newPath, request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/((?!_next|api|static).*)'],
// };

// =============

// // middleware.ts
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { match } from '@formatjs/intl-localematcher';
// import { routing } from './i18n/routing';

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;
//   const pathLocale = pathname.split('/')[1] || routing.defaultLocale;
//   const locale = match([pathLocale], routing.locales, routing.defaultLocale);

//   if (!routing.locales.includes(pathLocale)) {
//     const newPath = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;
//     return NextResponse.redirect(new URL(newPath, request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/((?!_next|api|static).*)'],
// };
// // ==========
// // middleware.ts
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { match } from '@formatjs/intl-localematcher';
// import { routing } from './i18n/routing';

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;
//   const pathLocale = pathname.split('/')[1] || routing.defaultLocale;
//   const locale = match([pathLocale], routing.locales, routing.defaultLocale);

//   if (!routing.locales.includes(pathLocale)) {
//     const newPath = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;
//     return NextResponse.redirect(new URL(newPath, request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/((?!_next|api|static).*)'],
// };
// =============
// // middleware.ts
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { match } from '@formatjs/intl-localematcher';
// import { routing } from './i18n/routing';

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // Skip middleware for static assets
//   if (
//     pathname.startsWith('/_next/') ||
//     pathname.startsWith('/api/') ||
//     pathname.startsWith('/static/') ||
//     pathname.startsWith('/.well-known/') || // 👈 add this
//     pathname.startsWith('/imgs/') ||
//     pathname === '/favicon.ico'
//   ) {
//     return NextResponse.next();
//   }

//   const pathLocale = pathname.split('/')[1] || routing.defaultLocale;
//   console.log('pathname:', pathname, 'pathLocale:', pathLocale, 'locales:', routing.locales);

//   // Validate pathLocale
//   if (!pathLocale || !/^[a-zA-Z]{2}(-[a-zA-Z]{2})?$/.test(pathLocale)) {
//     console.warn(`Invalid locale in path: ${pathLocale}, redirecting to ${routing.defaultLocale}`);
//     const newPath =
//       pathname === '/' ? `/${routing.defaultLocale}` : `/${routing.defaultLocale}${pathname}`;
//     return NextResponse.redirect(new URL(newPath, request.url));
//   }

//   try {
//     const locale = match([pathLocale], routing.locales, routing.defaultLocale);
//     if (!routing.locales.includes(pathLocale)) {
//       console.log(`Redirecting from ${pathname} to /${locale}${pathname === '/' ? '' : pathname}`);
//       const newPath = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;
//       return NextResponse.redirect(new URL(newPath, request.url));
//     }
//     return NextResponse.next();
//   } catch (error: any) {
//     console.error(`Error in locale matching: ${error?.message}, path: ${pathname}`);
//     const newPath =
//       pathname === '/' ? `/${routing.defaultLocale}` : `/${routing.defaultLocale}${pathname}`;
//     return NextResponse.redirect(new URL(newPath, request.url));
//   }
// }

// export const config = {
//   matcher: ['/((?!_next|api|static|imgs|favicon.ico).*)'],
// };

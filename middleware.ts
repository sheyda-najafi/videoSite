// import createMiddleware from 'next-intl/middleware';
// import { routing } from './i18n/routing';

// export default createMiddleware(routing);

// export const config = {
//     matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
// };


// ==========

// import createMiddleware from 'next-intl/middleware';

// export default createMiddleware({
//     // Supported locales
//     locales: ['en', 'fa'],
//     // Default locale
//     defaultLocale: 'en',
//     redirectOnRoot: false // add this
// });

// export const config = {
//     matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
// };


// ========
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    // Match all pathnames except for
    // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
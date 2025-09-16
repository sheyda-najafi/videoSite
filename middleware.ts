
import { NextResponse } from 'next/server';
import { routing } from './i18n/routing';

export function middleware(request: Request) {
    const url = new URL(request.url);
    const { pathname } = url;

    // Skip internals & static files
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.match(/\.(.*)$/)
    ) return;

    // Already has a valid non-default locale → do nothing
    if (routing.locales.some((loc) => loc !== routing.defaultLocale && pathname.startsWith(`/${loc}`))) {
        return;
    }

    // Only rewrite prefixless paths to default locale internally
    if (!pathname.startsWith(`/${routing.defaultLocale}`)) {
        url.pathname = `/${routing.defaultLocale}${pathname}`;
        return NextResponse.rewrite(url);
    }


    // Prevent loop: do nothing if path already starts with /en
}

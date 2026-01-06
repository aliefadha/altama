import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
  localeDetection: true,
});

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const url = request.nextUrl.clone();

  if (pathname.startsWith('/new2025')) {
    const pathWithoutPrefix = pathname.replace('/new2025', '') || '/';

    const urlWithoutPrefix = request.nextUrl.clone();
    urlWithoutPrefix.pathname = pathWithoutPrefix;

    const modifiedRequest = new Request(urlWithoutPrefix, request);

    const response = intlMiddleware(modifiedRequest);

    if (response.headers.get('location')) {
      const location = response.headers.get('location')!;
      url.pathname = '/new2025' + location;
      return NextResponse.redirect(url);
    }

    return response;
  }

  url.pathname = `/new2025/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ],
};

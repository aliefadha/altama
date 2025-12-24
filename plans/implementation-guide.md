# Implementation Guide for Next.js Internationalization

## Step-by-Step Implementation

### 1. Install Dependencies

```bash
npm install next-intl
```

### 2. Create i18n Configuration

**File: i18n.ts**

```typescript
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["en", "id"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./locales/${locale}/common.json`)).default,
  };
});
```

### 3. Update Next.js Configuration

**File: next.config.ts**

```typescript
import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  output: "standalone",
};

export default withNextIntl(nextConfig);
```

### 4. Create Middleware for Locale Detection

**File: middleware.ts**

```typescript
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "id"],

  // Used when no locale matches
  defaultLocale: "en",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(id|en)/:path*"],
};
```

### 5. Update App Structure

**New Structure:**

```
app/
├── [locale]/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── profile/
│   ├── career/
│   ├── contact-us/
│   └── media-center/
└── globals.css
```

**File: app/[locale]/layout.tsx**

```typescript
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AlvaChat from "@/components/Alvachat";
import { inter } from "../font";
import "../globals.css";

const locales = ["en", "id"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div className="w-full h-full">{children}</div>
          <AlvaChat />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

### 6. Create Translation Files

**File: locales/en/common.json**

```json
{
  "navigation": {
    "profile": "Profile",
    "brand": "Brand",
    "mediaCenter": "Media Center",
    "career": "Career",
    "contactUs": "Contact Us",
    "companyOverview": "Company Overview",
    "awardsCertification": "Awards and Certification",
    "boardOfDirectors": "Board of Directors",
    "gallery": "Gallery",
    "applyJobs": "Apply Jobs",
    "lifeAtAltama": "Life at Altama"
  },
  "common": {
    "back": "Back",
    "next": "Next",
    "loading": "Loading...",
    "error": "Error",
    "submit": "Submit",
    "cancel": "Cancel"
  },
  "hero": {
    "hashtag": "#AltamaGueBanget",
    "title": "THE POWER OF",
    "innovation": "INNOVATION",
    "forStrongerNation": "FOR A STRONGER NATION.",
    "subtitle": "Your partner in progress, empowering every step toward Indonesia's success."
  },
  "languageSelector": {
    "english": "English",
    "indonesian": "Indonesian"
  }
}
```

**File: locales/id/common.json**

```json
{
  "navigation": {
    "profile": "Profil",
    "brand": "Merek",
    "mediaCenter": "Pusat Media",
    "career": "Karir",
    "contactUs": "Hubungi Kami",
    "companyOverview": "Profil Perusahaan",
    "awardsCertification": "Penghargaan dan Sertifikasi",
    "boardOfDirectors": "Dewan Direksi",
    "gallery": "Galeri",
    "applyJobs": "Lamar Pekerjaan",
    "lifeAtAltama": "Kehidupan di Altama"
  },
  "common": {
    "back": "Kembali",
    "next": "Selanjutnya",
    "loading": "Memuat...",
    "error": "Kesalahan",
    "submit": "Kirim",
    "cancel": "Batal"
  },
  "hero": {
    "hashtag": "#AltamaGueBanget",
    "title": "KEKUATAN",
    "innovation": "INOVASI",
    "forStrongerNation": "UNTUK BANGSA YANG LEBIH KUAT.",
    "subtitle": "Mitra kemajuan Anda, memberdayakan setiap langkah menuju kesuksesan Indonesia."
  },
  "languageSelector": {
    "english": "English",
    "indonesian": "Bahasa Indonesia"
  }
}
```

### 7. Create Language Selector Component

**File: components/LanguageSelector.tsx**

```typescript
"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useState, useEffect, useRef } from "react";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "id", name: "Indonesian", flag: "🇮🇩" },
];

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((lang) => lang.code === locale);

  const handleLanguageChange = (newLocale: string) => {
    // Remove the current locale from pathname
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, "") || "/";

    // Add the new locale to pathname
    const newPathname = `/${newLocale}${pathnameWithoutLocale}`;

    // Set cookie for language preference
    document.cookie = `NEXT_LOCALE=${newLocale}; max-age=31536000; path=/`;

    // Navigate to the new locale
    router.push(newPathname);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Select language"
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="text-sm font-medium text-gray-700 hidden sm:block">
          {currentLanguage?.name}
        </span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 9l-7 7-7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                locale === language.code
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700"
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="text-sm font-medium">{language.name}</span>
              {locale === language.code && (
                <svg
                  className="w-4 h-4 ml-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
```

### 8. Update Header Component

**File: components/Header.tsx (Updated sections)**

```typescript
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { helvetica } from "@/app/font";
import { useTranslations } from "next-intl";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  const t = useTranslations("navigation");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  // ... other state variables

  return (
    <>
      {/* Desktop Header */}
      <div
        className={`${helvetica.variable} hidden lg:block fixed top-0 left-0 right-0 z-50 h-[55px] pointer-events-none`}
      >
        <div className="relative h-full">
          {/* Navigation Background & Menu */}
          <div className="absolute left-[130px] top-0 h-[55px] w-[920px] pointer-events-auto z-0">
            {/* Background */}
            <div className="absolute inset-0">
              <Image
                alt=""
                fill
                className="object-cover drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                src="/images/51ec67f38194adafbc5f7e34488fce14dd2fa9d6.webp"
              />
            </div>

            {/* Menu Items */}
            <div className="relative h-full flex items-center justify-start gap-12 pl-[115px]">
              {/* Language Selector */}
              <div className="mr-4">
                <LanguageSelector />
              </div>

              {/* Profile with dropdown */}
              <div className="relative group">
                <div className="relative flex items-center gap-2">
                  <h1 className="font-helvetica text-[#353183] text-[20px] font-extrabold">
                    {t("profile")}
                  </h1>
                  <div className="">
                    <Image
                      alt=""
                      width={10}
                      height={14}
                      className="object-contain"
                      src="/images/fb81f43cff3df970de258b28cf282e68648f0d44.webp"
                    />
                  </div>
                </div>

                {/* Dropdown Menu */}
                <div className="absolute top-[35px] left-0 w-[240px] bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link
                    href="/profile/company-overview"
                    className="block w-full text-left px-4 py-2.5 hover:bg-[#353185] hover:text-white transition-colors duration-200 font-inter text-[14px]"
                  >
                    {t("companyOverview")}
                  </Link>
                  <Link
                    href="/profile/awards-certification"
                    className="block w-full text-left px-4 py-2.5 hover:bg-[#353185] hover:text-white transition-colors duration-200 font-inter text-[14px]"
                  >
                    {t("awardsCertification")}
                  </Link>
                  <Link
                    href="/profile/board-of-directors"
                    className="block w-full text-left px-4 py-2.5 hover:bg-[#353185] hover:text-white transition-colors duration-200 font-inter text-[14px]"
                  >
                    {t("boardOfDirectors")}
                  </Link>
                  <Link
                    href="/profile/gallery"
                    className="block w-full text-left px-4 py-2.5 hover:bg-[#353185] hover:text-white transition-colors duration-200 font-inter text-[14px]"
                  >
                    {t("gallery")}
                  </Link>
                </div>
              </div>

              {/* Brand with dropdown */}
              <div className="relative group">
                <div className="relative flex items-center gap-2">
                  <h1 className="font-helvetica text-[#353183] text-[20px] font-extrabold">
                    {t("brand")}
                  </h1>
                  {/* ... rest of brand dropdown */}
                </div>
              </div>

              {/* Media Center */}
              <Link href="/media-center" className="relative flex">
                <h1 className="font-helvetica text-[#353183] text-[20px] font-extrabold">
                  {t("mediaCenter")}
                </h1>
              </Link>

              {/* Career with dropdown */}
              <div className="relative group">
                <div className="relative flex items-center gap-2">
                  <h1 className="font-helvetica text-[#353183] text-[20px] font-extrabold">
                    {t("career")}
                  </h1>
                  {/* ... rest of career dropdown */}
                </div>
              </div>

              {/* Contact Us */}
              <Link href="/contact-us" className="relative inline-block">
                <h1 className="font-helvetica text-[#353183] text-[20px] font-extrabold">
                  {t("contactUs")}
                </h1>
              </Link>
            </div>
          </div>

          {/* Logo Altama */}
          <Link
            href="/"
            className="absolute left-0 top-0 h-[60px] w-[210px] pointer-events-auto z-10 cursor-pointer inline-block"
          >
            <Image
              alt="PT Altama Surya Anugerah"
              fill
              className="object-cover drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
              src="/images/df98c0733f131bef24430fb6d83a6343d0a7a9d6.webp"
            />
          </Link>
        </div>
      </div>

      {/* Mobile Header - Update mobile menu items similarly */}
      {/* ... */}
    </>
  );
}
```

### 9. Update Hero Section Component

**File: components/section/HeroSection.tsx (Updated sections)**

```typescript
"use client";

import { League_Spartan } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

const leagueSpartan = League_Spartan({
  variable: "--font-league_spartan",
  subsets: ["latin"],
});

const backgroundImages = [
  "/images/0c1d2a3b7eb424e2f5d2bfe8c72d39db643b8338.webp",
  "/images/home2.webp",
  "/images/carousel-3.webp",
];

export default function HeroSection() {
  const t = useTranslations("hero");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[800px] bg-[#353185] overflow-hidden">
      {/* Background Images Slider */}
      <div className="absolute inset-0">
        {backgroundImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              alt={`hero-bg-${index}`}
              fill
              className="w-full h-full object-cover"
              src={src}
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-linear-to-b from-[rgba(53,49,133,0.92)] via-[rgba(53,49,133,0.88)] to-[rgba(53,49,133,0.85)] lg:bg-linear-to-r lg:from-[rgba(53,49,133,0.85)] lg:via-[rgba(53,49,133,0.5)] lg:via-35% lg:to-transparent lg:to-60%" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-360 mx-auto px-5 lg:px-[80px] h-full flex flex-col gap-10 justify-center">
        {/* Badge with purple background */}
        <div>
          <div className="inline-flex mb-5 lg:mb-[35px] px-4 lg:px-4 py-2 lg:py-2 rounded-full lg:rounded-[26px] bg-[#353185] border border-[#403BA0] w-fit">
            <p
              className={`${leagueSpartan.className} text-white font-league-spartan text-[13px] lg:text-[18px] tracking-tight lg:tracking-[-0.56px]`}
            >
              {t("hashtag")}
            </p>
          </div>
          {/* Brand Logos - aligned with content */}
          <div className="relative flex flex-wrap items-center justify-start gap-1 sm:gap-2">
            {/* Tekiro */}
            <a
              href="https://tekiro.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[70px] sm:max-w-[100px] h-[40px] sm:h-[50px] bg-gradient-to-b from-[#9795BD] to-[#5E5AA8] rounded-md flex items-center justify-center px-2 py-2 hover:shadow-lg transition-shadow relative z-10"
            >
              <Image
                width={150}
                height={40}
                alt="Tekiro"
                className="max-w-full max-h-full object-cover"
                src="/images/tekiroo.webp"
              />
            </a>
            {/* Rexco */}
            <a
              href="https://rexco-solution.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[70px] sm:max-w-[100px] h-[40px] sm:h-[50px] bg-gradient-to-b from-[#9795BD] to-[#5E5AA8] rounded-md flex items-center justify-center px-2 py-2 hover:shadow-lg transition-shadow relative z-10"
            >
              <Image
                width={150}
                height={40}
                alt="Rexco"
                className="max-w-full max-h-full object-cover"
                src="/images/rexco-white.webp"
              />
            </a>

            {/* RYU */}
            <a
              href="https://ryupowertools.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[70px] sm:max-w-[100px] h-[40px] sm:h-[50px] bg-gradient-to-b from-[#9795BD] to-[#5E5AA8] rounded-md flex items-center justify-center px-2 py-2 hover:shadow-lg transition-shadow relative z-10"
            >
              <Image
                width={150}
                height={40}
                alt="RYU"
                className="max-w-full max-h-full object-cover"
                src="/images/ryu.webp"
              />
            </a>
          </div>
        </div>

        <div>
          {/* Main Heading with yellow background on INNOVATION */}
          <h1
            className={`${leagueSpartan.className} text-white font-league-spartan font-bold text-[34px] lg:text-[54px] leading-[1.15] lg:leading-[1.2] tracking-tight lg:tracking-[-1.68px] max-w-full lg:max-w-[580px] mb-4 lg:mb-4`}
          >
            {t("title")}
            <br />
            <span className="relative inline-block my-1 lg:my-0.5">
              <span className="absolute inset-0 bg-[#f4c41c] rounded-lg lg:rounded-[8px] border-[2px] lg:border-[3px] border-[#f4c41c] -left-[4px] -right-[4px] -top-[2px] lg:-top-[4px] bottom-[4px] lg:bottom-[5px]"></span>
              <span className="relative z-10 text-white px-1 lg:px-[4px]">
                {t("innovation")}
              </span>
            </span>{" "}
            {t("forStrongerNation")}
          </h1>

          {/* Subtitle */}
          <p className="text-[#e4e4e4] text-[15px] lg:text-[18px] font-['Inter'] leading-relaxed lg:leading-[1.4] tracking-tight lg:tracking-[-0.64px] max-w-full lg:max-w-[520px]">
            {t("subtitle")}
          </p>
        </div>
      </div>
    </div>
  );
}
```

### 10. Update Page Components

**File: app/[locale]/page.tsx**

```typescript
import HeroSection from "@/components/section/HeroSection";
import CompanySection from "@/components/section/CompanySection";
import BrandSection from "@/components/section/BrandSection";
import CareerSection from "@/components/section/CareerSection";
import IntegrationSection from "@/components/section/IntegrationSection";
import LocationSection from "@/components/section/LocationSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CompanySection />
      <BrandSection />
      <CareerSection />
      <IntegrationSection />
      <LocationSection />
    </main>
  );
}
```

### 11. Update Navigation Buttons

**Example for navigation buttons in pages:**

```typescript
import { useTranslations } from 'next-intl';
import Link from 'next/link';

// In your component
const t = useTranslations('common');

// Back Button
<button className="flex gap-2 items-center justify-center px-5 lg:px-6 py-2.5 lg:py-3 rounded-full border-2 border-[#d3d3d3] cursor-not-allowed">
  <div className="size-4 lg:size-5 flex items-center justify-center rotate-[90deg] scale-y-[-100%]">
    <svg className="block size-full" fill="none" viewBox="0 0 24 24">
      <path d="M17 14L12 9L7 14" stroke="#808080" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  </div>
  <p className="font-inter font-semibold text-[14px] lg:text-[16px] text-[#808080] tracking-tight">
    {t('back')}
  </p>
</button>

// Next Button
<Link href="/profile/awards-certification" className="bg-[#353185] flex gap-2 items-center justify-center px-5 lg:px-6 py-2.5 lg:py-3 rounded-full hover:bg-[#605bc3] transition-colors">
  <p className="font-inter font-semibold text-[14px] lg:text-[16px] text-white tracking-tight">
    {t('next')}
  </p>
  <div className="size-4 lg:size-5 flex items-center justify-center rotate-[90deg]">
    <svg className="block size-full" fill="none" viewBox="0 0 24 24">
      <path d="M17 14L12 9L7 14" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  </div>
</Link>
```

## Testing Checklist

### 1. Functionality Tests

- [ ] Language switching works correctly
- [ ] Cookie persistence works
- [ ] URL routing with locales works
- [ ] Default locale fallback works
- [ ] Mobile language selector works

### 2. Content Tests

- [ ] All text is translated
- [ ] No hardcoded strings remain
- [ ] Translation keys are correctly referenced
- [ ] Text fits in allocated space

### 3. SEO Tests

- [ ] lang attribute is set correctly
- [ ] hreflang tags are generated
- [ ] Meta descriptions are localized
- [ ] URLs are properly structured

### 4. Performance Tests

- [ ] Page load times are acceptable
- [ ] Translation files are loaded efficiently
- [ ] No unnecessary re-renders

## Common Issues and Solutions

### 1. Translation Keys Not Found

**Issue**: Translation keys return the key name instead of translated text.
**Solution**: Check that the key exists in the translation file and the file is properly imported.

### 2. Language Not Switching

**Issue**: Language selector doesn't change the language.
**Solution**: Ensure the middleware is properly configured and the cookie is being set.

### 3. Mobile Menu Issues

**Issue**: Language selector doesn't work in mobile menu.
**Solution**: Check z-index and positioning in mobile view.

### 4. Performance Issues

**Issue**: Slow page loads after adding internationalization.
**Solution**: Optimize translation file sizes and implement code splitting.

## Next Steps

1. Complete the translation files for all content
2. Update remaining components to use translations
3. Implement SEO optimization
4. Add comprehensive testing
5. Deploy and monitor performance

This implementation provides a solid foundation for internationalization that can be extended as needed.

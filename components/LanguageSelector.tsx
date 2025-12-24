"use client";

import { usePathname, useRouter } from 'next/navigation';
import { useState, useTransition, useMemo, useEffect, useRef } from 'react';
import { Globe, Check } from 'lucide-react';
import { helvetica } from "@/app/font";

type Locale = 'en' | 'id';

const locales = [
  { code: 'en' as Locale, name: 'English', flag: '🇺🇸' },
  { code: 'id' as Locale, name: 'Indonesia', flag: '🇮🇩' },
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const locale = useMemo(() => {
    const segments = pathname.split('/');
    const localeCode = segments[1] as Locale;
    return (localeCode === 'en' || localeCode === 'id') ? localeCode : 'en';
  }, [pathname]);

  const currentLocale = locales.find((l) => l.code === locale) || locales[0];

  const switchLocale = (newLocale: Locale) => {
    startTransition(() => {
      const segments = pathname.split('/');
      segments[1] = newLocale;
      const newPathname = segments.join('/');
      router.push(newPathname);
    });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <div className="hidden lg:block relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <h1 className="font-helvetica text-[#353183] text-[20px] font-extrabold">
            {currentLocale.flag} {currentLocale.code.toUpperCase()}
          </h1>
        </button>

        {isOpen && (
          <div className="absolute top-[35px] left-0 w-[240px] bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
            {locales.map((loc) => (
              <button
                key={loc.code}
                onClick={() => switchLocale(loc.code)}
                className="block w-full text-left px-4 py-2.5 hover:bg-[#353185] hover:text-white transition-colors duration-200 font-inter text-[14px] text-[#121212]"
              >
                <span className="flex items-center justify-between gap-3">
                  <span>{loc.flag} {loc.name}</span>
                  {loc.code === locale && (
                    <Check className="w-4 h-4" />
                  )}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-100 transition-colors"
        >
          <span className="font-['Inter'] text-[16px] text-[#353185]">
            {currentLocale.flag} {currentLocale.name}
          </span>
          <Globe className="w-4 h-4 text-[#353185] transition-transform" />
        </button>

        {isOpen && (
          <div className="bg-gray-50">
            {locales.map((loc) => (
              <button
                key={loc.code}
                onClick={() => switchLocale(loc.code)}
                className="w-full flex items-center justify-between px-8 py-2.5 hover:bg-gray-200 transition-colors font-['Inter'] text-[14px] text-gray-700"
              >
                <span className="flex items-center gap-2">
                  <span>{loc.flag}</span>
                  <span>{loc.name}</span>
                </span>
                {loc.code === locale && (
                  <Check className="w-4 h-4 text-[#353185]" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { helvetica } from "@/app/font";
import { usePathname } from "next/navigation";
import { useTranslations } from 'next-intl';
import LanguageSelector from "./LanguageSelector";

type Locale = 'en' | 'id';

export default function Header() {
    const pathname = usePathname();
    const t = useTranslations('navigation');

    // Extract locale from URL - works with client-side navigation
    const locale = useMemo(() => {
        const segments = pathname.split('/');
        const localeCode = segments[1] as Locale;
        return (localeCode === 'en' || localeCode === 'id') ? localeCode : 'en';
    }, [pathname]);

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showMobileProfileSubmenu, setShowMobileProfileSubmenu] = useState(false);
    const [showMobileBrandSubmenu, setShowMobileBrandSubmenu] = useState(false);
    const [showMobileCareerSubmenu, setShowMobileCareerSubmenu] = useState(false);

    return (
        <>
            {/* Desktop Header */}
            <div className={`${helvetica.variable} hidden lg:block fixed top-0 left-0 right-0 z-50 h-[55px] pointer-events-none`}>
                <div className="relative h-full">
                    {/* Navigation Background & Menu - DI BELAKANG LOGO */}
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
                            {/* Profile with dropdown */}
                            <div className="relative group">
                                <div
                                    className="relative  flex items-center gap-2"
                                >
                                    <h1 className="font-helvetica text-[#353183] text-[20px] font-extrabold">
                                        {t('profile')}
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
                                        href={`/${locale}/profile/company-overview`}
                                        className="block w-full text-left px-4 py-2.5 hover:bg-[#353185] hover:text-white transition-colors duration-200 font-inter text-[14px]"
                                    >
                                        {t('companyOverview')}
                                    </Link>
                                    <Link
                                        href={`/${locale}/profile/awards-certification`}
                                        className="block w-full text-left px-4 py-2.5 hover:bg-[#353185] hover:text-white transition-colors duration-200 font-inter text-[14px]"
                                    >
                                        {t('awardsAndCertification')}
                                    </Link>
                                    <Link
                                        href={`/${locale}/profile/board-of-directors`}
                                        className="block w-full text-left px-4 py-2.5 hover:bg-[#353185] hover:text-white transition-colors duration-200 font-inter text-[14px]"
                                    >
                                        {t('boardOfDirectors')}
                                    </Link>
                                    <Link
                                        href={`/${locale}/profile/gallery`}
                                        className="block w-full text-left px-4 py-2.5 hover:bg-[#353185] hover:text-white transition-colors duration-200 font-inter text-[14px]"
                                    >
                                        {t('gallery')}
                                    </Link>
                                </div>
                            </div>

                            {/* Brand with dropdown */}
                            <div className="relative group">
                                <div
                                    className="relative  flex items-center gap-2"
                                >
                                    <h1 className="font-helvetica text-[#353183] text-[20px] font-extrabold">
                                        {t('brand')}
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
                                    <a
                                        href="https://tekiro.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full text-left px-4 py-2.5 hover:bg-[#353185] hover:text-white transition-colors duration-200 font-inter text-[14px]"
                                    >
                                        {t('tekiro')}
                                    </a>
                                    <a
                                        href="https://rexco-solution.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full text-left px-4 py-2.5 hover:bg-[#353185] hover:text-white transition-colors duration-200 font-inter text-[14px]"
                                    >
                                        {t('rexco')}
                                    </a>
                                    <a
                                        href="https://ryupowertools.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full text-left px-4 py-2.5 hover:bg-[#353185] hover:text-white transition-colors duration-200 font-inter text-[14px]"
                                    >
                                        {t('ryu')}
                                    </a>
                                </div>
                            </div>

                            {/* Media Center */}
                            <Link
                                href={`/${locale}/media-center`}
                                className="relative  flex"
                            >
                                <h1 className="font-helvetica text-[#353183] text-[20px] font-extrabold">
                                    {t('mediaCenter')}
                                </h1>
                            </Link>

                            {/* Career with dropdown */}
                            <div className="relative group">
                                <div
                                    className="relative  flex items-center gap-2"
                                >
                                    <h1 className="font-helvetica text-[#353183] text-[20px] font-extrabold">
                                        {t('career')}
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
                                        href={`/${locale}/career/life-at-altama`}
                                        className="block w-full text-left px-4 py-2.5 hover:bg-[#353185] hover:text-white transition-colors duration-200 font-inter text-[14px]"
                                    >
                                        {t('lifeAtAltama')}
                                    </Link>
                                    <Link
                                        href={`/${locale}/career/apply-jobs`}
                                        className="block w-full text-left px-4 py-2.5 hover:bg-[#353185] hover:text-white transition-colors duration-200 font-inter text-[14px]"
                                    >
                                        {t('applyJobs')}
                                    </Link>
                                </div>
                            </div>

                            {/* Contact Us */}
                            <Link
                                href={`/${locale}/contact-us`}
                                className="relative  inline-block"
                            >
                                <h1 className="font-helvetica text-[#353183] text-[20px] font-extrabold">
                                    {t('contactUs')}
                                </h1>
                            </Link>

                            {/* Language Selector */}
                            <div className="relative flex">
                                <LanguageSelector />
                            </div>
                        </div>
                    </div>

                    {/* Logo Altama - DI DEPAN SHAPE */}
                    <Link
                        href={`/${locale}`}
                        className="absolute left-0 top-0 h-[60px] w-[225px] pointer-events-auto z-10 cursor-pointer inline-block"
                    >
                        <Image
                            alt="PT Altama Surya Anugerah"
                            fill
                            className="object-cover drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                            src="/images/navbar_bg.webp"
                        />
                    </Link>
                </div>
            </div>

            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
                <div className="flex items-center justify-between px-4 h-[60px]">
                    {/* Logo */}
                    <Link
                        href={`/${locale}`}
                        onClick={() => setShowMobileMenu(false)}
                        className="h-[45px] w-1/3  inline-block relative"
                    >
                        <Image
                            alt="PT Altama Surya Anugerah"
                            fill
                            className="object-cover"
                            src="/images/df98c0733f131bef24430fb6d83a6343d0a7a9d6.webp"
                        />
                    </Link>

                    {/* Hamburger Button */}
                    <button
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        {showMobileMenu ? (
                            <X className="w-6 h-6 text-[#353185]" />
                        ) : (
                            <Menu className="w-6 h-6 text-[#353185]" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {showMobileMenu && (
                    <div className="absolute top-[60px] left-0 right-0 bg-white shadow-lg border-t border-gray-200 max-h-[calc(100vh-60px)] overflow-y-auto">
                        <div className="py-2">
                            {/* Profile with submenu */}
                            <div>
                                <button
                                    onClick={() => setShowMobileProfileSubmenu(!showMobileProfileSubmenu)}
                                    className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-100 transition-colors"
                                >
                                    <span className="font-['Inter'] text-[16px] text-[#353185]">{t('profile')}</span>
                                    <ChevronDown className={`w-4 h-4 text-[#353185] transition-transform ${showMobileProfileSubmenu ? 'rotate-180' : ''}`} />
                                </button>
                                {showMobileProfileSubmenu && (
                                    <div className="bg-gray-50">
                                        <Link
                                            href={`/${locale}/profile/company-overview`}
                                            onClick={() => setShowMobileMenu(false)}
                                            className="block w-full text-left px-8 py-2.5 hover:bg-gray-200 transition-colors font-['Inter'] text-[14px] text-gray-700"
                                        >
                                            {t('companyOverview')}
                                        </Link>
                                        <Link
                                            href={`/${locale}/profile/awards-certification`}
                                            onClick={() => setShowMobileMenu(false)}
                                            className="block w-full text-left px-8 py-2.5 hover:bg-gray-200 transition-colors font-['Inter'] text-[14px] text-gray-700"
                                        >
                                            {t('awardsAndCertification')}
                                        </Link>
                                        <Link
                                            href={`/${locale}/profile/board-of-directors`}
                                            onClick={() => setShowMobileMenu(false)}
                                            className="block w-full text-left px-8 py-2.5 hover:bg-gray-200 transition-colors font-['Inter'] text-[14px] text-gray-700"
                                        >
                                            {t('boardOfDirectors')}
                                        </Link>
                                        <Link
                                            href={`/${locale}/profile/gallery`}
                                            onClick={() => setShowMobileMenu(false)}
                                            className="block w-full text-left px-8 py-2.5 hover:bg-gray-200 transition-colors font-['Inter'] text-[14px] text-gray-700"
                                        >
                                            {t('gallery')}
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Brand with submenu */}
                            <div>
                                <button
                                    onClick={() => setShowMobileBrandSubmenu(!showMobileBrandSubmenu)}
                                    className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-100 transition-colors"
                                >
                                    <span className="font-['Inter'] text-[16px] text-[#353185]">{t('brand')}</span>
                                    <ChevronDown className={`w-4 h-4 text-[#353185] transition-transform ${showMobileBrandSubmenu ? 'rotate-180' : ''}`} />
                                </button>
                                {showMobileBrandSubmenu && (
                                    <div className="bg-gray-50">
                                        <a
                                            href="https://tekiro.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => setShowMobileMenu(false)}
                                            className="block w-full text-left px-8 py-2.5 hover:bg-gray-200 transition-colors font-['Inter'] text-[14px] text-gray-700"
                                        >
                                            {t('tekiro')}
                                        </a>
                                        <a
                                            href="https://rexco-solution.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => setShowMobileMenu(false)}
                                            className="block w-full text-left px-8 py-2.5 hover:bg-gray-200 transition-colors font-['Inter'] text-[14px] text-gray-700"
                                        >
                                            {t('rexco')}
                                        </a>
                                        <a
                                            href="https://ryupowertools.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => setShowMobileMenu(false)}
                                            className="block w-full text-left px-8 py-2.5 hover:bg-gray-200 transition-colors font-['Inter'] text-[14px] text-gray-700"
                                        >
                                            {t('ryu')}
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* Media Center */}
                            <Link
                                href={`/${locale}/media-center`}
                                onClick={() => setShowMobileMenu(false)}
                                className="block w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors font-['Inter'] text-[16px] text-[#353185]"
                            >
                                {t('mediaCenter')}
                            </Link>

                            {/* Career with submenu */}
                            <div>
                                <button
                                    onClick={() => setShowMobileCareerSubmenu(!showMobileCareerSubmenu)}
                                    className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-100 transition-colors"
                                >
                                    <span className="font-['Inter'] text-[16px] text-[#353185]">{t('career')}</span>
                                    <ChevronDown className={`w-4 h-4 text-[#353185] transition-transform ${showMobileCareerSubmenu ? 'rotate-180' : ''}`} />
                                </button>
                                {showMobileCareerSubmenu && (
                                    <div className="bg-gray-50">
                                        <Link
                                            href={`/${locale}/career/apply-jobs`}
                                            onClick={() => setShowMobileMenu(false)}
                                            className="block w-full text-left px-8 py-2.5 hover:bg-gray-200 transition-colors font-['Inter'] text-[14px] text-gray-700"
                                        >
                                            {t('applyJobs')}
                                        </Link>
                                        <Link
                                            href={`/${locale}/career/life-at-altama`}
                                            onClick={() => setShowMobileMenu(false)}
                                            className="block w-full text-left px-8 py-2.5 hover:bg-gray-200 transition-colors font-['Inter'] text-[14px] text-gray-700"
                                        >
                                            {t('lifeAtAltama')}
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Contact Us */}
                            <Link
                                href={`/${locale}/contact-us`}
                                onClick={() => setShowMobileMenu(false)}
                                className="block w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors font-['Inter'] text-[16px] text-[#353185]"
                            >
                                {t('contactUs')}
                            </Link>

                            {/* Language Selector - Mobile */}
                            <div className="border-t border-gray-200">
                                <LanguageSelector />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

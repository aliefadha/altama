"use client";

import { TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslations } from 'next-intl';
import { useMemo } from "react";
import { usePathname } from "next/navigation";

type Locale = 'en' | 'id';

const backgroundImages = [
    "/images/overview1.webp",
    "/images/overview2.webp",
    "/images/overview3.webp",
    "/images/overview4.webp",
]

export default function CompanyOverviewPage() {
    const pathname = usePathname();
    const t = useTranslations('companyOverview');

    const locale = useMemo(() => {
        const segments = pathname.split('/');
        const localeCode = segments[1] as Locale;
        return (localeCode === 'en' || localeCode === 'id') ? localeCode : 'en';
    }, [pathname]);

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full h-screen overflow-hidden">
                {/* Background Images Slider */}
                <div className="absolute inset-0 bg-[#353185]">
                    {backgroundImages.map((src, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
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
                    {/* Gradient overlay - darker on mobile for better text readability */}
                    <div className="absolute inset-0 w-full bg-gradient-to-r from-[#353185] to-[#353185]/20" />
                </div>

                {/* Hero Content - absolutely positioned */}
                <div className="absolute inset-0 max-w-360 mx-auto px-5 lg:px-[80px] h-full flex flex-col gap-10 justify-center">
                    <div>

                        {/* Brand Logos - aligned with content */}
                        <div className="relative flex flex-wrap items-center justify-start gap-1 sm:gap-2">
                            {/* Tekiro */}
                            <div
                                className="w-full max-w-[70px] sm:max-w-[100px] h-[40px] sm:h-[50px] bg-gradient-to-b from-[#9795BD] to-[#5E5AA8] rounded-md flex items-center justify-center px-2 py-2 hover:shadow-lg transition-shadow relative z-10"
                            >
                                <Image width={150} height={40} alt="Tekiro" className="max-w-full max-h-full object-cover" src="/images/tekiroo.webp" />
                            </div>
                            {/* Rexco */}
                            <div
                                className="w-full max-w-[70px] sm:max-w-[100px] h-[40px] sm:h-[50px] bg-gradient-to-b from-[#9795BD] to-[#5E5AA8] rounded-md flex items-center justify-center px-2 py-2 hover:shadow-lg transition-shadow relative z-10"
                            >
                                <Image width={150} height={40} alt="Rexco" className="max-w-full max-h-full object-cover" src="/images/rexco-white.webp" />
                            </div>

                            {/* RYU */}
                            <div
                                className="w-full max-w-[70px] sm:max-w-[100px] h-[40px] sm:h-[50px] bg-gradient-to-b from-[#9795BD] to-[#5E5AA8] rounded-md flex items-center justify-center px-2 py-2 hover:shadow-lg transition-shadow relative z-10"
                            >
                                <Image width={150} height={40} alt="RYU" className="max-w-full max-h-full object-cover" src="/images/ryu.webp" />
                            </div>
                        </div>
                    </div>

                    <div>
                        {/* Main Heading with yellow background on INNOVATION */}
                        <h1 className={`text-white font-league-spartan font-bold text-[34px] lg:text-[54px] leading-[1.15] lg:leading-[1.2] tracking-tight lg:tracking-[-1.68px] max-w-full lg:max-w-[580px] mb-4 lg:mb-4`}>
                            {t('hero.title')}
                            <br />
                            <span className="relative inline-block my-1 lg:my-0.5">
                                <span className="absolute inset-0 bg-[#f4c41c] rounded-lg lg:rounded-[8px] border-[2px] lg:border-[3px] border-[#f4c41c] -left-[4px] -right-[4px] -top-[2px] lg:-top-[4px] bottom-[4px] lg:bottom-[5px]"></span>
                                <span className="relative z-10 text-white px-1 lg:px-[4px]">{t('hero.highlight')}</span>
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-[#e4e4e4] text-[15px] lg:text-[18px] font-['Inter'] leading-relaxed lg:leading-[1.4] tracking-tight lg:tracking-[-0.64px] max-w-full lg:max-w-[520px]">
                            {t('hero.subtitle')}
                        </p>
                    </div>
                    <div className="inline-flex mb-5 lg:mb-[35px] px-4 lg:px-4 py-2 lg:py-2 rounded-full lg:rounded-[26px] bg-[#353185] border border-[#403BA0] w-fit">
                        <p className={`font-league-spartan text-white text-[13px] lg:text-[18px] tracking-tight lg:tracking-[-0.56px]`}>
                            #AltamaGueBanget
                        </p>
                    </div>
                </div>
            </div>


            <div className="py-10 lg:py-24 space-y-20 lg:space-y-40">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-0 px-10">
                    <div className="flex gap-2 items-center justify-center">
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7056 1.15612C9.81604 -0.38462 7.59217 -0.38462 6.70262 1.15612L0.313278 12.2228C-0.576267 13.7635 0.535666 15.6895 2.31476 15.6895H15.0934C16.8725 15.6895 17.9845 13.7635 17.0949 12.2228L10.7056 1.15612Z" fill="#353185" />
                        </svg>

                        <h1 className={`font-league-spartan text-[#121212] text-[32px] font-semibold tracking-[-4%] leading-[93%] uppercase`}>{t('vision.label')}</h1>
                    </div>
                    <div>
                        <p className={`font-inter text-[24px] font-medium text-[#353185] max-w-[720px] text-center lg:text-start`} dangerouslySetInnerHTML={{ __html: t.raw('vision.description') }}>
                        </p>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-20 lg:gap-0 px-10">
                    <div className="flex gap-2 items-center justify-center">
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7056 1.15612C9.81604 -0.38462 7.59217 -0.38462 6.70262 1.15612L0.313278 12.2228C-0.576267 13.7635 0.535666 15.6895 2.31476 15.6895H15.0934C16.8725 15.6895 17.9845 13.7635 17.0949 12.2228L10.7056 1.15612Z" fill="#353185" />
                        </svg>

                        <h1 className={`font-league-spartan text-[#121212] text-[32px] font-semibold tracking-[-4%] leading-[93%] uppercase`}>{t('mission.label')}</h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[720px] px-4 lg:px-0">
                        <div className="flex gap-6">
                            <div className="">
                                <TrendingUp color="white" size={32} className="bg-[#353185] p-1 rounded-md" />
                            </div>
                            <p className={`font-inter text-[#353185] text-[20px] leading-[125%] tracking-[-4%]`} dangerouslySetInnerHTML={{ __html: t.raw('mission.items.0') }}></p>
                        </div>
                        <div className="flex gap-6">
                            <div className="">
                                <TrendingUp color="white" size={32} className="bg-[#353185] p-1 rounded-md" />
                            </div>
                            <p className={`font-inter text-[#353185] text-[20px] leading-[125%] tracking-[-4%]`} dangerouslySetInnerHTML={{ __html: t.raw('mission.items.1') }}></p>
                        </div>
                        <div className="flex gap-6">
                            <div className="">
                                <TrendingUp color="white" size={32} className="bg-[#353185] p-1 rounded-md" />
                            </div>
                            <p className={`font-inter text-[#353185] text-[20px] leading-[125%] tracking-[-4%]`} dangerouslySetInnerHTML={{ __html: t.raw('mission.items.2') }}></p>
                        </div>
                        <div className="flex gap-6">
                            <div className="">
                                <TrendingUp color="white" size={32} className="bg-[#353185] p-1 rounded-md" />
                            </div>
                            <p className={`font-inter text-[#353185] text-[20px] leading-[125%] tracking-[-4%]`} dangerouslySetInnerHTML={{ __html: t.raw('mission.items.3') }}></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-10 lg:py-24 w-full">
                <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-10">
                    <div>
                        <h1 className={`font-league-spartan text-[#121212] text-[50px] font-bold`}>{t('coreValues.core')} <span className="text-[#353185]">{t('coreValues.values')}</span></h1>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-[24px] px-2">
                        {/* Integrity Card */}
                        <div className=" flex-1 bg-white rounded-[12px] border border-[rgba(96,91,195,0.24)] px-4 py-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-gradient-to-b hover:from-[#353185] hover:to-[#605BC3] hover:border-transparent group">
                            <h3 className={`font-inter font-semibold text-[30px] leading-[1.251] tracking-[-1.28px] text-[#353185] mb-[16px] group-hover:text-white transition-colors duration-300`}>
                                {t('coreValues.integrity.title')}
                            </h3>
                            <p className={`font-inter font-normal text-[20px] leading-[103.33%] tracking-[-0.96px] text-[#414141] group-hover:text-white/70 transition-colors duration-300`}>
                                {t('coreValues.integrity.description')}
                            </p>
                        </div>
                        <div className=" flex-1 bg-white rounded-[12px] border border-[rgba(96,91,195,0.24)] px-4 py-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-gradient-to-b hover:from-[#353185] hover:to-[#605BC3] hover:border-transparent group">
                            <h3 className={`font-inter font-semibold text-[30px] leading-[1.251] tracking-[-1.28px] text-[#353185] mb-[16px] group-hover:text-white transition-colors duration-300`}>
                                {t('coreValues.innovation.title')}
                            </h3>
                            <p className={`font-inter font-normal text-[20px] leading-[103.33%] tracking-[-0.96px] text-[#414141] group-hover:text-white/70 transition-colors duration-300`}>
                                {t('coreValues.innovation.description')}
                            </p>
                        </div>
                        <div className=" flex-1 bg-white rounded-[12px] border border-[rgba(96,91,195,0.24)] px-4 py-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-gradient-to-b hover:from-[#353185] hover:to-[#605BC3] hover:border-transparent group">
                            <h3 className={`font-inter font-semibold text-[30px] leading-[1.251] tracking-[-1.28px] text-[#353185] mb-[16px] group-hover:text-white transition-colors duration-300`}>
                                {t('coreValues.collaboration.title')}
                            </h3>
                            <p className={`font-inter font-normal text-[20px] leading-[103.33%] tracking-[-0.96px] text-[#414141] group-hover:text-white/70 transition-colors duration-300`}>
                                {t('coreValues.collaboration.description')}
                            </p>
                        </div>
                        <div className=" flex-1 bg-white rounded-[12px] border border-[rgba(96,91,195,0.24)] px-4 py-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-gradient-to-b hover:from-[#353185] hover:to-[#605BC3] hover:border-transparent group">
                            <h3 className={`font-inter font-semibold text-[30px] leading-[1.251] tracking-[-1.28px] text-[#353185] mb-[16px] group-hover:text-white transition-colors duration-300`}>
                                {t('coreValues.customerFocus.title')}
                            </h3>
                            <p className={`font-inter font-normal text-[20px] leading-[103.33%] tracking-[-0.96px] text-[#414141] group-hover:text-white/70 transition-colors duration-300`}>
                                {t('coreValues.customerFocus.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex items-center justify-center min-h-screen p-6">
                    <div className="relative w-full max-w-5xl bg-[url('/images/bg-milestone.webp')] bg-cover bg-top rounded-[40px] p-12 text-white overflow-hidden">

                        <h2 className="text-4xl font-bold text-center mb-16 tracking-widest uppercase">{t('milestone.title')}</h2>

                        <div className="relative">
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/20"></div>

                            <div className="space-y-12">

                                <div className="flex items-center justify-center w-full group">
                                    <div className="w-1/2"></div>
                                    <div className="relative flex items-center justify-center w-10">
                                        <div className="w-4 h-4 bg-white/50 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.6)] z-10"></div>
                                    </div>
                                    <div className="w-1/2 pl-8">
                                        <h3 className="text-2xl font-bold">{t('milestone.2011.title')}</h3>
                                        <p className="text-white/80 text-lg leading-relaxed max-w-xs" dangerouslySetInnerHTML={{ __html: t('milestone.2011.description') }}>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center w-full">
                                    <div className="w-1/2 pr-8 text-right">
                                        <h3 className="text-2xl font-bold">{t('milestone.2015.title')}</h3>
                                        <p className="text-white/80 text-lg leading-relaxed ml-auto max-w-xs" dangerouslySetInnerHTML={{ __html: t('milestone.2015.description') }}>
                                        </p>
                                    </div>
                                    <div className="relative flex items-center justify-center w-10">
                                        <div className="w-4 h-4 bg-white/50 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.6)] z-10"></div>
                                    </div>
                                    <div className="w-1/2"></div>
                                </div>

                                <div className="flex items-center justify-center w-full">
                                    <div className="w-1/2"></div>
                                    <div className="relative flex items-center justify-center w-10">
                                        <div className="w-4 h-4 bg-white/50 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.6)] z-10"></div>
                                    </div>
                                    <div className="w-1/2 pl-8">
                                        <h3 className="text-2xl font-bold">{t('milestone.2018.title')}</h3>
                                        <p className="text-white/80 text-lg leading-relaxed max-w-xs" dangerouslySetInnerHTML={{ __html: t.raw('milestone.2018.description') }}>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center w-full">
                                    <div className="w-1/2 pr-8 text-right">
                                        <h3 className="text-2xl font-bold">{t('milestone.2020.title')}</h3>
                                        <p className="text-white/80 text-lg leading-relaxed ml-auto max-w-xs" dangerouslySetInnerHTML={{ __html: t('milestone.2020.description') }}>
                                        </p>
                                    </div>
                                    <div className="relative flex items-center justify-center w-10">
                                        <div className="w-4 h-4 bg-white/50 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.6)] z-10"></div>
                                    </div>
                                    <div className="w-1/2"></div>
                                </div>

                                <div className="flex items-center justify-center w-full">
                                    <div className="w-1/2"></div>
                                    <div className="relative flex items-center justify-center w-10">
                                        <div className="w-4 h-4 bg-white/50 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)] z-10"></div>
                                    </div>
                                    <div className="w-1/2 pl-8">
                                        <h3 className="text-2xl font-bold">{t('milestone.2023.title')}</h3>
                                        <p className="text-white/80 text-lg leading-relaxed max-w-xs" dangerouslySetInnerHTML={{ __html: t('milestone.2023.description') }}>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="relative max-w-[1440px] mx-auto px-5 lg:px-[80px] py-12 lg:py-[80px]">
                <div className="flex gap-3 lg:gap-6 items-center justify-center">
                    {/* Back Button (Disabled) */}
                    <button className="flex gap-2 items-center justify-center px-5 lg:px-6 py-2.5 lg:py-3 rounded-full border-2 border-[#d3d3d3] cursor-not-allowed">
                        <div className="size-4 lg:size-5 flex items-center justify-center rotate-[90deg] scale-y-[-100%]">
                            <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                                <path d="M17 14L12 9L7 14" stroke="#808080" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                        </div>
                        <p className="font-inter font-semibold text-[14px] lg:text-[16px] text-[#808080] tracking-tight">
                            {t('navigation.back')}
                        </p>
                    </button>

                    {/* Next Button */}
                    <Link href={`/${locale}/profile/awards-certification`} className="bg-[#353185] flex gap-2 items-center justify-center px-5 lg:px-6 py-2.5 lg:py-3 rounded-full hover:bg-[#605bc3] transition-colors">
                        <p className="font-inter font-semibold text-[14px] lg:text-[16px] text-white tracking-tight">
                            {t('navigation.next')}
                        </p>
                        <div className="size-4 lg:size-5 flex items-center justify-center rotate-[90deg]">
                            <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                                <path d="M17 14L12 9L7 14" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}
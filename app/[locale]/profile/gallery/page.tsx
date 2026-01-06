"use client"
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

interface GalleryItemProps {
    image: string;
    views: string;
    instagramUrl?: string;
}

 function GalleryItem({ image, views, instagramUrl }: GalleryItemProps) {
    const t = useTranslations('gallery');
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="h-[400px] lg:h-[480px] overflow-clip relative rounded-2xl lg:rounded-[20px] w-full lg:w-[405px] group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="absolute inset-0 pointer-events-none rounded-2xl lg:rounded-[24px]">
                <Image
                    alt=""
                    className="absolute inset-0 max-w-none object-center object-cover rounded-2xl lg:rounded-[24px] size-full"
                    src={image}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Overlay on hover */}
            <div
                className={`absolute inset-0 bg-[rgba(0,0,0,0.5)] rounded-2xl lg:rounded-[24px] transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Views counter */}
            <div className="absolute left-3 lg:left-4 bottom-3 lg:bottom-4 flex items-center gap-2 bg-[rgba(0,0,0,0.6)] px-3 py-2 rounded-lg">
                <svg className="size-4" fill="none" viewBox="0 0 24 24">
                    <path d="M12 5C7 5 2.73 8.11 1 12.5C2.73 16.89 7 20 12 20C17 20 21.27 16.89 23 12.5C21.27 8.11 17 5 12 5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12.5" r="3" stroke="white" strokeWidth="2" />
                </svg>
                <p className="font-inter font-medium text-[13px] lg:text-[14px] text-white tracking-tight">
                    {views}
                </p>
            </div>

            {/* View on Instagram button */}
            {instagramUrl && (
                <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`absolute bg-[#353185] flex items-center justify-center left-1/2 px-6 lg:px-8 py-3 lg:py-4 rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 hover:bg-[#605bc3] ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                >
                     <p className="font-inter font-semibold text-[15px] lg:text-[24px] text-white tracking-tight whitespace-nowrap">
                        {t('viewOnInstagram')}
                    </p>
                </a>
            )}
        </div>
    );
}

 export default function GalleryPage() {
    const t = useTranslations('gallery');
    const [activeTab, setActiveTab] = useState<'instagram' | 'web'>('instagram');

    const instagramGallery = [
        { image: "/images/3f76243abe526789e5bc20e5113def78fa0d26b4.webp", views: "1,823", url: "https://www.instagram.com/reel/DPAvSiTkZlf/?utm_source=ig_web_copy_link&igsh=MWM5MTEyZzhyczU2aw==" },
        { image: "/images/2388801d1841a440bf65de26b23dcd8ffe22b812.webp", views: "2,466" },
        { image: "/images/a42ef99178c92db522dcdab7c98f9df5a1ebbd56.webp", views: "1,968" },
        { image: "/images/42bdd93d62c5b90aac00c2358684c6d9f2878199.webp", views: "3,513" },
        { image: "/images/fece693464ef38427c1867fa6b9df0752da5b7fb.webp", views: "6,701" },
        { image: "/images/7ab2e56ec31f6da6910f2b7c623dfb4619dfccad.webp", views: "4,149" },
        { image: "/images/5115a86ebe6388387fb90ed4930fef502e41787e.webp", views: "3,555" },
        { image: "/images/8452929d276d22e4dab77796e4dadbba452b1808.webp", views: "3,948" },
    ];

    const webGallery = [
        { image: "/images/65a062ebe15f383953d6a1988ebb49073df36349.webp", views: "1,823" },
        { image: "/images/94a009c09e270d7d43fb3e9b2c6ea1aa987d4e10.webp", views: "2,466" },
        { image: "/images/e6b84089f4659d29f9675a409f4a5919036e8302.webp", views: "1,968" },
        { image: "/images/3e9c0fef1e157f8c900f300072f9d1943a8e961a.webp", views: "3,513" },
        { image: "/images/67f685a092694af1ddb70325aa3cc379bdb9bb44.webp", views: "6,701" },
        { image: "/images/73b180003e471b7f4c8abd4b76a65cf667a9561d.webp", views: "4,149" },
        { image: "/images/3c3b89b541c0dd2889c24768bc108157ddc3b3cb.webp", views: "3,555" },
    ];

    return (
        <>
            <div className="pt-[55px] bg-[#353185] min-h-screen">
                {/* Hero Section */}
                <div className="flex flex-col gap-[8px] sm:gap-[6px] items-center text-center pt-[80px] sm:pt-[60px] pb-[48px] sm:pb-[32px] px-[24px]">
                    <h1 className="font-league-spartan font-bold md:text-[56px] text-[32px] leading-[1.292] text-white tracking-[-2.24px] sm:tracking-[-1.28px]">
                        <span>{t('hero.title')} </span>
                        <span className="text-[#f4c41c]">{t('hero.titleHighlight')}</span>
                    </h1>
                    <p className="font-inter md:text-[24px] text-[16px] text-[#e4e4e4] tracking-[-0.96px] sm:tracking-[-0.64px]">
                        {t('hero.subtitle')}
                    </p>
                </div>

                {/* Tab Buttons */}
                <div className="flex items-center justify-center pb-[72px] sm:pb-[48px] px-[16px] sm:px-[24px]">
                    <div className="bg-[#eee] flex md:flex-row flex-col gap-[16px] sm:gap-[12px] justify-center items-center px-[12px] w-full md:w-fit py-[8px] rounded-[24px]">
                        <button
                            onClick={() => setActiveTab('instagram')}
                            className={`flex items-center justify-center px-[20px] sm:px-[16px] md:px-[24px] py-[10px] sm:py-[8px] md:py-[12px] rounded-[72px] sm:rounded-[16px] transition-all duration-300 w-full md:w-auto min-w-0 sm:min-w-[140px] ${activeTab === 'instagram' ? 'bg-[#353185] shadow-md' : 'bg-[#d4d4d4] hover:bg-[#c9c9c9]'
                                }`}
                        >
                             <p className={`font-inter font-semibold text-[14px] md:text-[18px] tracking-[-0.64px] sm:tracking-[-0.56px] md:tracking-[-0.72px] whitespace-nowrap ${activeTab === 'instagram' ? 'text-white' : 'text-[#414141]'
                                }`}>
                                {t('tabs.instagram')}
                            </p>
                        </button>
                        <button
                            onClick={() => setActiveTab('web')}
                            className={`flex items-center justify-center px-[20px] sm:px-[16px] md:px-[24px] py-[10px] sm:py-[8px] md:py-[12px] rounded-[72px] sm:rounded-[16px] transition-all duration-300 w-full md:w-auto min-w-0 sm:min-w-[140px] ${activeTab === 'web' ? 'bg-[#353185] shadow-md' : 'bg-[#d4d4d4] hover:bg-[#c9c9c9]'
                                }`}
                        >
                             <p className={`font-inter font-semibold text-[14px] md:text-[18px] tracking-[-0.64px] sm:tracking-[-0.56px] md:tracking-[-0.72px] whitespace-nowrap ${activeTab === 'web' ? 'text-white' : 'text-[#414141]'
                                }`}>
                                {t('tabs.web')}
                            </p>
                        </button>
                    </div>
                </div>

                {/* Gallery Grid */}
                {activeTab === 'instagram' && (
                    <>
                        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[40px]">
                            {/* First Row */}
                            <div className="flex lg:flex-row flex-col gap-[24px] sm:gap-[16px] items-start mb-[48px] sm:mb-[24px]">
                                {instagramGallery.slice(0, 4).map((item, index) => (
                                    <GalleryItem
                                        key={index}
                                        image={item.image}
                                        views={item.views}
                                        instagramUrl={item.url}
                                    />
                                ))}
                            </div>

                            {/* Second Row */}
                            <div className="flex lg:flex-row flex-col gap-[24px] sm:gap-[16px] items-start">
                                {instagramGallery.slice(4, 8).map((item, index) => (
                                    <GalleryItem
                                        key={index + 4}
                                        image={item.image}
                                        views={item.views}
                                        instagramUrl={item.url}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* See Our Instagram Button */}
                        <div className="flex items-center justify-center pt-[92px] sm:pt-[60px] pb-[120px] sm:pb-[80px] px-[24px]">
                            <a
                                href="https://www.instagram.com/pt.altama?utm_source=ig_web_button_share_sheet&igsh=cHRnNWNmNmFueG1k"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative bg-white flex gap-[8px] items-center justify-center px-[32px] sm:px-[24px] py-[16px] sm:py-[12px] rounded-[72px] hover:bg-[#f4c41c] transition-all duration-300 group"
                            >
                                <div aria-hidden="true" className="absolute border-4 border-[#9795bd] inset-[-4px] pointer-events-none rounded-[76px] group-hover:border-[#353185] transition-colors duration-300" />
                                 <p className="font-inter font-semibold text-[16px] text-[#29266e] tracking-[-0.96px] sm:tracking-[-0.64px] whitespace-nowrap">
                                    {t('seeOurInstagram')}
                                </p>
                                <div className="size-[24px] sm:size-[20px] rotate-90">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                        <path d="M17 14L12 9L7 14" stroke="#353185" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </>
                )}

                {activeTab === 'web' && (
                    <div className="max-w-[1440px] mx-auto px-[24px] md:px-[40px] pb-[120px] sm:pb-[80px]">
                        {/* Clean Grid Layout - 3 Columns for desktop, 1 for mobile */}
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-[24px] sm:gap-[16px] lg:auto-rows-[280px] auto-rows-[240px]">
                            {/* Left Column - Tall Portrait */}
                            <div className="lg:row-span-2 overflow-hidden rounded-[24px] relative">
                                <Image
                                    alt="Press Conference"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    src="/images/65a062ebe15f383953d6a1988ebb49073df36349.webp"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            {/* Middle Top - Wide Banner */}
                            <div className="lg:col-span-2 overflow-hidden rounded-[24px] relative">
                                <Image
                                    alt="Challenge Your Skills"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    src="/images/3c3b89b541c0dd2889c24768bc108157ddc3b3cb.webp"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 66vw"
                                />
                            </div>

                            {/* Middle Left - Square */}
                            <div className="overflow-hidden rounded-[24px] relative">
                                <Image
                                    alt="Lean Office Gathering"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    src="/images/73b180003e471b7f4c8abd4b76a65cf667a9561d.webp"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                                />
                            </div>

                            {/* Middle Right - Square */}
                            <div className="overflow-hidden rounded-[24px] relative">
                                <Image
                                    alt="Team Gathering"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    src="/images/67f685a092694af1ddb70325aa3cc379bdb9bb44.webp"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                                />
                            </div>

                            {/* Bottom Left - Square */}
                            <div className="overflow-hidden rounded-[24px] relative">
                                <Image
                                    alt="Factory Scene"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    src="/images/3e9c0fef1e157f8c900f300072f9d1943a8e961a.webp"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                                />
                            </div>

                            {/* Bottom Center - Tall Portrait */}
                            <div className="lg:row-span-2 overflow-hidden rounded-[24px] relative">
                                <Image
                                    alt="Meeting Presentation"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    src="/images/94a009c09e270d7d43fb3e9b2c6ea1aa987d4e10.webp"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            {/* Bottom Right - Extra Tall Portrait */}
                            <div className="lg:row-span-2 overflow-hidden rounded-[24px] relative">
                                <Image
                                    alt="Presentation"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    src="/images/e6b84089f4659d29f9675a409f4a5919036e8302.webp"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            {/* Bottom Most Left - Square (New) */}
                            <div className="overflow-hidden rounded-[24px] lg:block hidden relative">
                                <Image
                                    alt="Team Collaboration"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    src="https://images.unsplash.com/photo-1633457897190-8c8c23a12c4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWFtd29yayUyMG1lZXRpbmd8ZW58MXx8fHwxNzY2MDI5NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                    fill
                                    sizes="(max-width: 1200px) 0vw, 33vw"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Insights, Innovation, and Progress Section */}
            <div className="relative w-full bg-white py-16 sm:py-12">
                <div className="max-w-[1440px] mx-auto px-[24px] relative">
                    {/* Left Top Decorative SVG - Hidden on mobile */}
                    <div className="hidden lg:block absolute h-[358px] left-[80px] top-[-21px] w-[600px]">
                        <div className="h-[358px] relative w-[600px] scale-y-[-100%]">
                            <div className="absolute inset-[-0.14%_-0.08%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 601 359">
                                    <path d='M0.5 358.5V24.5C0.5 11.2452 11.2452 0.5 24.5 0.5H600.5' stroke="url(#paint0_linear_left)" strokeLinecap="round" />
                                    <defs>
                                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_left" x1="0.5" x2="104.718" y1="0.5" y2="217.556">
                                            <stop stopColor="#605BC3" />
                                            <stop offset="1" stopColor="#605BC3" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Left Bottom Decorative SVG - Hidden on mobile */}
                    <div className="hidden lg:block absolute h-[358px] left-[120px] top-[136px] w-[208px]">
                        <div className="absolute inset-[-0.14%_-0.24%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 209 359">
                                <path d='M0.5 358.5V24.5C0.5 11.2452 11.2452 0.5 24.5 0.5H208.5' stroke="url(#paint0_linear_left_bottom)" strokeLinecap="round" />
                                <defs>
                                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_left_bottom" x1="0.5" x2="152.196" y1="0.5" y2="135.286">
                                        <stop stopColor="#605BC3" />
                                        <stop offset="1" stopColor="#605BC3" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    {/* Right Top Decorative SVG - Hidden on mobile */}
                    <div className="hidden lg:block absolute h-[358px] right-[80px] top-[-21px] w-[600px]">
                        <div className="h-[358px] relative w-[600px] rotate-[180deg]">
                            <div className="absolute inset-[-0.14%_-0.08%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 601 359">
                                    <path d='M0.5 358.5V24.5C0.5 11.2452 11.2452 0.5 24.5 0.5H600.5' stroke="url(#paint0_linear_right)" strokeLinecap="round" />
                                    <defs>
                                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_right" x1="0.5" x2="83.0258" y1="0.5" y2="208.445">
                                            <stop stopColor="#605BC3" />
                                            <stop offset="1" stopColor="#605BC3" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Right Bottom Decorative SVG - Hidden on mobile */}
                    <div className="hidden lg:block absolute h-[358px] right-[120px] top-[136px] w-[208px]">
                        <div className="h-[358px] relative w-[208px] rotate-[180deg] scale-y-[-100%]">
                            <div className="absolute inset-[-0.14%_-0.24%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 209 359">
                                    <path d='M0.5 358.5V24.5C0.5 11.2452 11.2452 0.5 24.5 0.5H208.5' stroke="url(#paint0_linear_right_bottom)" strokeLinecap="round" />
                                    <defs>
                                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_right_bottom" x1="0.5" x2="152.196" y1="0.5" y2="135.286">
                                            <stop stopColor="#605BC3" />
                                            <stop offset="1" stopColor="#605BC3" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="relative max-w-[721px] sm:max-w-full mx-auto flex flex-col gap-[32px] items-center">
                        <div className="flex flex-col gap-[16px] sm:gap-[12px] items-center text-center w-full">
                             <h2 className="text-[#353185] text-[28px] lg:text-[40px] font-league-spartan font-medium leading-[1.292] tracking-[-2.24px] sm:tracking-[-1.12px]">
                                {t('insights.title')}
                            </h2>
                            <p className="text-[#414141] text-[18px] sm:text-[14px] font-inter font-medium leading-[1.292] sm:leading-[1.4] tracking-[-0.96px] sm:tracking-[-0.48px] md:w-[487px] w-full">
                                {t('insights.subtitle')}
                            </p>
                        </div>

                        <div className="relative">
                             <button className="bg-[#353185] text-white rounded-[72px] px-[24px] py-[12px] text-[16px] md:text-[18px] font-inter font-semibold tracking-[-0.96px] sm:tracking-[-0.64px] hover:bg-[#605bc3] transition-colors duration-300">
                                {t('exploreNews')}
                            </button>
                            <div className="absolute border-4 border-[rgba(53,49,133,0.24)] border-solid inset-[-4px] pointer-events-none rounded-[76px]" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
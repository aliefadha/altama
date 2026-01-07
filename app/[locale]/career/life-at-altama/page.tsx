"use client"
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const imgEllipse10 = "/images/06310d6ac34bfdf5c99689acd61ade1908915105.webp";
const imgEllipse11 = "/images/2303138e4da6b79f3eca4b9933422fef6df4f944.webp";
const imgVideoTestimoni = "/images/7b9b36ec87a12134b5a4c54ecdb3838bbb6d5193.webp";
const imgEllipse12 = "/images/541419ea83f81e18686ce66b82646ed7ff8c9485.webp";
const imgEllipse13 = "/images/4103347516e3518c93c2934d46b12629077931f3.webp";
const imgEllipse14 = "/images/c06eab4feb5829d0e82ca41b027a2bc9f629f3f9.webp";

const backgroundImages = [
    "/images/life-altama-3.webp",
    "/images/life-altama-2.webp",
    "/images/life-altama-1.webp",
]

export default function LifeAtAltamaPage() {
    const t = useTranslations('lifeAtAltama');
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const startX = useRef<number>(0);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            scrollToIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < 7) {
            setCurrentIndex(currentIndex + 1);
            scrollToIndex(currentIndex + 1);
        }
    };

    const scrollToIndex = (index: number) => {
        if (scrollContainerRef.current) {
            const containerWidth = scrollContainerRef.current.offsetWidth;
            const cardWidth = containerWidth < 768 ? containerWidth - 40 : containerWidth < 1024 ? 460 : 560;
            const gap = containerWidth < 768 ? 16 : 40;
            scrollContainerRef.current.scrollTo({
                left: index * (cardWidth + gap),
                behavior: "smooth",
            });
        }
    };

    const handleScroll = () => {
        if (!scrollContainerRef.current) return;

        const containerWidth = scrollContainerRef.current.offsetWidth;
        const cardWidth = containerWidth < 768 ? containerWidth - 40 : containerWidth < 1024 ? 460 : 560;
        const gap = containerWidth < 768 ? 16 : 40;
        const scrollLeft = scrollContainerRef.current.scrollLeft;

        const newIndex = Math.round(scrollLeft / (cardWidth + gap));
        if (newIndex !== currentIndex) {
            setCurrentIndex(newIndex);
        }
    };

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
                {/* Background Image */}
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
                                className="w-full max-w-[70px] sm:max-w-[100px] h-[40px] sm:h-[50px] bg-gradient-to-b from-[#9795BD] to-[#5E5AA8] rounded-md flex items-center justify-center px-2 py-1 hover:shadow-lg transition-shadow relative z-10"
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
                        {/* Main Heading with yellow background */}
                        <h1 className={`text-white font-league-spartan font-bold text-[34px] lg:text-[54px] leading-[1.15] lg:leading-[1.2] tracking-tight lg:tracking-[-1.68px] max-w-full lg:max-w-[580px] mb-4 lg:mb-4`}>
                            <span className="relative inline-block my-1 lg:my-0.5">
                                <span className="absolute inset-0 bg-[#f4c41c] rounded-lg lg:rounded-[8px] border-[2px] lg:border-[3px] border-[#f4c41c] -left-[4px] -right-[4px] -top-[2px] lg:-top-[4px] bottom-[4px] lg:bottom-[5px]"></span>
                                <span className="relative z-10 text-white px-1 lg:px-[4px]">{t('hero.joinBadge')}</span>
                            </span>
                            <br />
                            {t('hero.title')}
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

                    {/* CTA Button */}
                    <div className="relative bg-white flex gap-[8px] items-center justify-center px-[24px] py-[12px] rounded-[72px] w-fit cursor-pointer hover:bg-gray-100 transition-colors">
                        <div className="absolute border-4 border-[rgba(151,149,189,0.4)] inset-[-4px] pointer-events-none rounded-[76px]" />
                        <p className="font-inter font-semibold text-[18px] text-[#353185] tracking-[-0.72px]">
                            {t('hero.cta')}
                        </p>
                        <div className="flex items-center justify-center size-[20px] rotate-90">
                            <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                                <path d="M17 14L12 9L7 14" stroke="#353185" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonials Section */}
            < div className="relative bg-white py-[80px] overflow-hidden" >
                <div className="max-w-[1440px] mx-auto px-[20px] lg:px-[80px]">
                    {/* Header */}
                    <div className="flex flex-col gap-[20px] md:flex-row md:items-end md:justify-between mb-[40px] md:mb-[60px]">
                        <div className="flex flex-col gap-[16px] md:gap-[20px]">
                            <p className="font-inter text-[18px] md:text-[20px] text-[#353185] tracking-[-0.8px]">{t('testimonials.title')}</p>
                            <h2 className="font-league-spartan font-semibold text-[32px] md:text-[48px] leading-[1.1] text-[#121212] tracking-[-1.92px] max-w-[600px]">
                                {t('testimonials.subtitle')}
                            </h2>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex gap-[12px] md:gap-[16px] items-center self-start md:self-auto">
                            <button className="border-2 border-[#353185] flex items-center justify-center p-[8px] rounded-[72px] hover:bg-[#f8f7f7] transition-colors" onClick={handlePrev} aria-label="Previous testimonial">
                                <div className="flex items-center justify-center size-[24px] md:size-[28px] rotate-[-90deg]">
                                    <svg className="block size-full" fill="none" viewBox="0 0 44 44">
                                        <path d='M31.1673 25.6667L22.0007 16.5L12.834 25.6667' stroke="#353185" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                                    </svg>
                                </div>
                            </button>
                            <button className="bg-[#353185] flex items-center justify-center p-[8px] rounded-[72px] hover:bg-[#4a46a0] transition-colors" onClick={handleNext} aria-label="Next testimonial">
                                <div className="flex items-center justify-center size-[24px] md:size-[28px] rotate-[90deg]">
                                    <svg className="block size-full" fill="none" viewBox="0 0 44 44">
                                        <path d='M31.1673 25.6667L22.0007 16.5L12.834 25.6667' stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Testimonials Carousel */}
                    <div className="flex gap-[16px] md:gap-[20px] lg:gap-[40px] overflow-x-auto pb-[20px] snap-x snap-mandatory" style={{ scrollbarWidth: 'none', WebkitScrollbar: 'none' } as React.CSSProperties} ref={scrollContainerRef}>
                        {/* Testimonial 1 - Card */}
                        <div className="bg-[#f8f7f7] flex flex-col gap-[20px] md:gap-[24px] px-[20px] md:px-[24px] py-[20px] md:py-[24px] rounded-[20px] min-w-[calc(100vw-32px)] md:min-w-[500px] h-[280px] md:h-[320px] snap-start">
                            <div className="flex flex-col gap-[16px]">
                                {/* Stars */}
                                <div className="flex gap-[6px] items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="size-[16px]">
                                            <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                                                <path d='M14.0249 3.47062L15.7101 6.70312C15.8355 6.94108 16.0154 7.14595 16.2352 7.30095C16.455 7.45595 16.7084 7.59487L20.5341 8.08237C22.4376 8.34487 23.1756 10.6916 21.7679 11.9966L19.3304 14.2459C19.1229 14.437 18.9671 14.6775 18.8776 14.945C18.788 15.2125 18.7675 15.4983 18.8181 15.7759L19.4129 19.0744C19.7436 20.9119 17.8319 22.3444 16.1541 21.5044L12.7521 19.8169C12.518 19.7022 12.2606 19.6425 11.9999 19.6425C11.7391 19.6425 11.4818 19.7022 11.2476 19.8169L7.84563 21.5044C6.16713 22.3369 4.25613 20.9119 4.58688 19.0744L5.18163 15.7751C5.28663 15.2126 5.09163 14.6351 4.67013 14.2451L2.23188 11.9966C0.82413 10.6991 1.56213 8.34412 3.46563 8.08162L7.02513 7.59412C7.29214 7.55831 7.54654 7.45853 7.7667 7.30327C7.98686 7.14801 8.16626 6.94187 8.28963 6.70237L9.97563 3.47062C10.8336 1.84313 13.1736 1.84313 14.0241 3.47062' fill="#FCD53F" />
                                            </svg>
                                        </div>
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="font-inter text-[16px] leading-[1.4] text-[#414141] tracking-[-0.64px]">
                                    {t('testimonials.items.1.quote')}
                                </p>

                                {/* Divider */}
                                <div className="h-[1px] bg-[#CCCCCC]" />

                                {/* Author */}
                                <div className="flex gap-[12px] items-center">
                                    <Image alt={`Photo of ${t('testimonials.items.1.name')}, ${t('testimonials.items.1.position')}`} className="rounded-full size-[44px]" src={imgEllipse10} width={44} height={44} />
                                    <div className="flex flex-col gap-[2px]">
                                        <p className="font-inter text-[18px] text-[#121212] tracking-[-0.72px]">{t('testimonials.items.1.name')}</p>
                                        <p className="font-inter text-[13px] text-[#353185] tracking-[-0.52px]">{t('testimonials.items.1.position')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 - Video */}
                        <div className="relative h-[280px] md:h-[320px] overflow-hidden rounded-[20px] min-w-[calc(100vw-32px)] md:min-w-[400px] lg:min-w-[560px] snap-start">
                            {imgVideoTestimoni && (
                                <Image alt={`Video testimonial from ${t('testimonials.items.2.name')}`} className="absolute inset-0 w-full h-full object-cover" src={imgVideoTestimoni} fill />
                            )}
                            <div className="absolute bg-gradient-to-t from-[#121212] to-transparent bottom-0 left-0 right-0 h-[180px]" />

                            {/* Play Button */}
                            <div className="absolute left-1/2 size-[40px] top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform">
                                <svg className="block size-full" fill="none" viewBox="0 0 40 40">
                                    <rect fill="white" fillOpacity="0.24" height="40" rx="20" width="40" />
                                    <path d='M27.2664 21.5159C27.4979 21.3367 27.6853 21.1069 27.8142 20.8442C27.9431 20.5814 28.0101 20.2926 28.0101 19.9999C28.0101 19.7072 27.9431 19.4183 27.8142 19.1556C27.6853 18.8928 27.4979 18.663 27.2664 18.4839C24.2686 16.165 20.9216 14.3369 17.3504 13.0679L16.6974 12.8359C15.4494 12.3929 14.1304 13.2369 13.9614 14.5259C13.4894 18.1599 13.4894 21.8398 13.9614 25.4739C14.1314 26.7629 15.4494 27.6069 16.6974 27.1639L17.3504 26.9319C20.9216 25.6628 24.2686 23.8347 27.2664 21.5159Z' fill="white" />
                                </svg>
                            </div>

                            {/* Author Overlay */}
                            <div className="absolute bottom-[28px] left-[32px] flex gap-[16px] items-center">
                                <Image alt={`Photo of ${t('testimonials.items.2.name')}, ${t('testimonials.items.2.position')}`} className="rounded-full size-[52px]" src={imgEllipse11} width={52} height={52} />
                                <div className="flex flex-col gap-[4px]">
                                    <p className="font-inter text-[20px] text-white tracking-[-0.8px]">{t('testimonials.items.2.name')}</p>
                                    <p className="font-inter text-[14px] text-white opacity-60 tracking-[-0.56px]">{t('testimonials.items.2.position')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 - Card */}
                        <div className="bg-[#f8f7f7] flex flex-col gap-[20px] md:gap-[24px] px-[20px] md:px-[24px] py-[20px] md:py-[24px] rounded-[20px] min-w-[calc(100vw-32px)] md:min-w-[300px] lg:min-w-[460px] h-[280px] md:h-[320px] snap-start">
                            <div className="flex flex-col gap-[16px]">
                                {/* Stars */}
                                <div className="flex gap-[6px] items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="size-[16px]">
                                            <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                                                <path d='M14.0249 3.47062L15.7101 6.70312C15.8355 6.94108 16.0154 7.14595 16.2352 7.30095C16.455 7.45595 16.7084 7.59487L20.5341 8.08237C22.4376 8.34487 23.1756 10.6916 21.7679 11.9966L19.3304 14.2459C19.1229 14.437 18.9671 14.6775 18.8776 14.945C18.788 15.2125 18.7675 15.4983 18.8181 15.7759L19.4129 19.0744C19.7436 20.9119 17.8319 22.3444 16.1541 21.5044L12.7521 19.8169C12.518 19.7022 12.2606 19.6425 11.9999 19.6425C11.7391 19.6425 11.4818 19.7022 11.2476 19.8169L7.84563 21.5044C6.16713 22.3369 4.25613 20.9119 4.58688 19.0744L5.18163 15.7751C5.28663 15.2126 5.09163 14.6351 4.67013 14.2451L2.23188 11.9966C0.82413 10.6991 1.56213 8.34412 3.46563 8.08162L7.02513 7.59412C7.29214 7.55831 7.54654 7.45853 7.7667 7.30327C7.98686 7.14801 8.16626 6.94187 8.28963 6.70237L9.97563 3.47062C10.8336 1.84313 13.1736 1.84313 14.0241 3.47062' fill="#FCD53F" />
                                            </svg>
                                        </div>
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="font-inter text-[16px] leading-[1.4] text-[#414141] tracking-[-0.64px]">
                                    {t('testimonials.items.3.quote')}
                                </p>

                                {/* Divider */}
                                <div className="h-[1px] bg-[#CCCCCC]" />

                                {/* Author */}
                                <div className="flex gap-[12px] items-center">
                                    <Image alt={`Photo of ${t('testimonials.items.3.name')}, ${t('testimonials.items.3.position')}`} className="rounded-full size-[44px]" src={imgEllipse11} width={44} height={44} />
                                    <div className="flex flex-col gap-[2px]">
                                        <p className="font-inter text-[18px] text-[#121212] tracking-[-0.72px]">{t('testimonials.items.3.name')}</p>
                                        <p className="font-inter text-[13px] text-[#353185] tracking-[-0.52px]">{t('testimonials.items.3.position')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 4 - Card */}
                        <div className="bg-[#f8f7f7] flex flex-col gap-[20px] md:gap-[24px] px-[20px] md:px-[24px] py-[20px] md:py-[24px] rounded-[20px] min-w-[calc(100vw-32px)] md:min-w-[300px] lg:min-w-[460px] h-[280px] md:h-[320px] snap-start">
                            <div className="flex flex-col gap-[16px]">
                                {/* Stars */}
                                <div className="flex gap-[6px] items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="size-[16px]">
                                            <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                                                <path d='M14.0249 3.47062L15.7101 6.70312C15.8355 6.94108 16.0154 7.14595 16.2352 7.30095C16.455 7.45595 16.7084 7.59487L20.5341 8.08237C22.4376 8.34487 23.1756 10.6916 21.7679 11.9966L19.3304 14.2459C19.1229 14.437 18.9671 14.6775 18.8776 14.945C18.788 15.2125 18.7675 15.4983 18.8181 15.7759L19.4129 19.0744C19.7436 20.9119 17.8319 22.3444 16.1541 21.5044L12.7521 19.8169C12.518 19.7022 12.2606 19.6425 11.9999 19.6425C11.7391 19.6425 11.4818 19.7022 11.2476 19.8169L7.84563 21.5044C6.16713 22.3369 4.25613 20.9119 4.58688 19.0744L5.18163 15.7751C5.28663 15.2126 5.09163 14.6351 4.67013 14.2451L2.23188 11.9966C0.82413 10.6991 1.56213 8.34412 3.46563 8.08162L7.02513 7.59412C7.29214 7.55831 7.54654 7.45853 7.7667 7.30327C7.98686 7.14801 8.16626 6.94187 8.28963 6.70237L9.97563 3.47062C10.8336 1.84313 13.1736 1.84313 14.0241 3.47062' fill="#FCD53F" />
                                            </svg>
                                        </div>
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="font-inter text-[16px] leading-[1.4] text-[#414141] tracking-[-0.64px]">
                                    {t('testimonials.items.4.quote')}
                                </p>

                                {/* Divider */}
                                <div className="h-[1px] bg-[#CCCCCC]" />

                                {/* Author */}
                                <div className="flex gap-[12px] items-center">
                                    <Image alt={`Photo of ${t('testimonials.items.4.name')}, ${t('testimonials.items.4.position')}`} className="rounded-full size-[44px]" src={imgEllipse12} width={44} height={44} />
                                    <div className="flex flex-col gap-[2px]">
                                        <p className="font-inter text-[18px] text-[#121212] tracking-[-0.72px]">{t('testimonials.items.4.name')}</p>
                                        <p className="font-inter text-[13px] text-[#353185] tracking-[-0.52px]">{t('testimonials.items.4.position')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

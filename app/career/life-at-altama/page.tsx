'use client'
import { useState, useRef } from "react";
import Image from "next/image";
const imgFoto61 = "/images/3eb02941f1230bfd31b9afd1bd7a1d713d85c2df.webp";
const imgAsa35161 = "/images/30bfbd6b040edf9d92ae59b3472e07444f3834c4.webp";
const imgLogoBrandLp = "/images/34e1fe96d8c7e1d3577612a571dde700a4b70c55.webp";
const imgEllipse10 = "/images/06310d6ac34bfdf5c99689acd61ade1908915105.webp";
const imgEllipse11 = "/images/2303138e4da6b79f3eca4b9933422fef6df4f944.webp";
const imgVideoTestimoni = "/images/7b9b36ec87a12134b5a4c54ecdb3838bbb6d5193.webp";
const imgEllipse12 = "/images/541419ea83f81e18686ce66b82646ed7ff8c9485.webp";
const imgEllipse13 = "/images/4103347516e3518c93c2934d46b12629077931f3.webp";
const imgEllipse14 = "/images/c06eab4feb5829d0e82ca41b027a2bc9f629f3f9.webp";

// Testimonial Data
const testimonialData = [
    {
        id: 1,
        type: "card",
        rating: 5,
        quote: "Altama selalu konsisten menyediakan produk berkualitas dengan distribusi yang tepat waktu. Timnya profesional dan mudah diajak bekerja sama.",
        name: "Andi Pratama",
        position: "Procurement Manager – Retail Partner",
        image: imgEllipse10,
    },
    {
        id: 2,
        type: "video",
        videoImage: imgVideoTestimoni,
        name: "Marvin McKinney",
        position: "Louis Vuitton",
        image: imgEllipse11,
    },
    {
        id: 3,
        type: "card",
        rating: 5,
        quote: "Produk Tekiro dan RYU dari Altama sangat membantu operasional kami. Kualitas terjamin dan layanan purna jualnya responsif.",
        name: "Siti Nurhaliza",
        position: "Operations Director – Manufacturing",
        image: imgEllipse11,
    },
    {
        id: 4,
        type: "card",
        rating: 5,
        quote: "Altama menjadi mitra terpercaya dalam penyediaan peralatan industri dengan standar mutu yang konsisten.",
        name: "Dianne Russell",
        position: "Supply Chain Manager – MasterCard",
        image: imgEllipse12,
    },
    {
        id: 5,
        type: "card",
        rating: 5,
        quote: "Kerja sama dengan Altama sangat transparan dan terstruktur. Dukungan tim distribusi sangat membantu di lapangan.",
        name: "Devon Lane",
        position: "Purchasing Head – General Electric",
        image: imgEllipse13,
    },
    {
        id: 6,
        type: "card",
        rating: 5,
        quote: "Kualitas produk Altama tidak perlu diragukan lagi. Pelayanan after-sales mereka juga sangat memuaskan dan cepat tanggap.",
        name: "Ronald Richards",
        position: "Procurement Specialist – Nintendo",
        image: imgEllipse14,
    },
    {
        id: 7,
        type: "card",
        rating: 5,
        quote: "Partnership dengan Altama memberikan value yang signifikan untuk operasional bisnis kami. Highly recommended!",
        name: "Budi Santoso",
        position: "General Manager – Industrial Solutions",
        image: imgEllipse10,
    },
    {
        id: 8,
        type: "card",
        rating: 5,
        quote: "Tim Altama selalu siap membantu kebutuhan kami dengan solusi yang tepat dan harga yang kompetitif.",
        name: "Jenny Wilson",
        position: "Head of Operations – Tech Corp",
        image: imgEllipse12,
    },
];

export default function LifeAtAltamaPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            scrollToIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < testimonialData.length - 1) {
            setCurrentIndex(currentIndex + 1);
            scrollToIndex(currentIndex + 1);
        }
    };

    const scrollToIndex = (index: number) => {
        if (scrollContainerRef.current) {
            const cardWidth = 540; // width of card + gap
            scrollContainerRef.current.scrollTo({
                left: index * cardWidth,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <div className="pt-[55px]">
                {/* Hero Section */}
                <div className="relative bg-gradient-to-b from-[#353185] via-[#605bc3] to-[#353185] pt-[80px] pb-[100px] overflow-hidden">
                    {/* Content Container */}
                    <div className="relative max-w-[1440px] mx-auto px-5 lg:px-[80px]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[60px] items-center">
                            {/* Left Content */}
                            <div className="flex flex-col gap-[32px]">
                                {/* Badge */}
                                <div className="bg-[rgba(53,49,133,0.6)] border border-[rgba(255,255,255,0.2)] flex items-center justify-center px-[20px] py-[8px] rounded-[65px] w-fit">
                                    <p className="font-['Inter'] text-[16px] text-white tracking-[-0.64px]">
                                        #AltamaGueBanget
                                    </p>
                                </div>

                                {/* Title */}
                                <div className="flex flex-col gap-[8px]">
                                    <div className="inline-block w-fit">
                                        <div className="bg-[#f4c41c] px-[16px] py-[8px] rounded-[8px] inline-block">
                                            <h1 className="font-['League_Spartan'] font-bold text-[48px] leading-[1.1] text-white tracking-[-1.92px]">
                                                JOIN US HERE!
                                            </h1>
                                        </div>
                                    </div>
                                    <h2 className="font-['League_Spartan'] font-bold text-[48px] leading-[1.1] text-white tracking-[-1.92px]">
                                        GROW TOGETHER
                                    </h2>
                                </div>

                                {/* Subtitle */}
                                <p className="font-['Inter'] text-[18px] text-[#e4e4e4] tracking-[-0.72px] max-w-[480px]">
                                    Your partner in progress, empowering every step toward Indonesia&apos;s success.
                                </p>

                                {/* Brand Logos */}
                                <div className="flex gap-[12px] items-center">
                                    {/* Tekiro */}
                                    <div className="relative">
                                        <div className="backdrop-blur-[2px] bg-gradient-to-b border border-[#403c90] from-[rgba(151,149,189,0.38)] to-[rgba(94,90,168,0.38)] h-[56px] rounded-[8px] w-[120px]" />
                                        <div className="absolute left-[10px] top-[16px] h-[18px] w-[95px] overflow-hidden">
                                            <Image alt="Tekiro" className="absolute h-[150.12%] left-0 max-w-none top-[-0.06%] w-[302.36%]" src={imgLogoBrandLp} width={95} height={18} />
                                        </div>
                                    </div>

                                    {/* Rexco */}
                                    <div className="relative">
                                        <div className="backdrop-blur-[2px] bg-gradient-to-b border border-[#403c90] from-[rgba(151,149,189,0.38)] to-[rgba(94,90,168,0.38)] h-[56px] rounded-[8px] w-[120px]" />
                                        <div className="absolute left-[21px] top-[14px] h-[28px] w-[78px] overflow-hidden">
                                            <Image alt="Rexco" className="absolute h-[100.08%] left-[-150%] max-w-none top-[-0.04%] w-[384%]" src={imgLogoBrandLp} width={78} height={28} />
                                        </div>
                                    </div>

                                    {/* Ryu */}
                                    <div className="relative">
                                        <div className="backdrop-blur-[2px] bg-gradient-to-b border border-[#403c90] from-[rgba(151,149,189,0.38)] to-[rgba(94,90,168,0.38)] h-[56px] rounded-[8px] w-[120px]" />
                                        <div className="absolute left-[15px] top-[16px] h-[22px] w-[90px] overflow-hidden">
                                            <Image alt="Ryu" className="absolute h-[128.68%] left-[-226.27%] max-w-none top-[-0.05%] w-[325.42%]" src={imgLogoBrandLp} width={90} height={22} />
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <div className="relative bg-white flex gap-[8px] items-center justify-center px-[24px] py-[12px] rounded-[72px] w-fit">
                                    <div className="absolute border-4 border-[rgba(151,149,189,0.4)] inset-[-4px] pointer-events-none rounded-[76px]" />
                                    <p className="font-['Inter'] font-semibold text-[18px] text-[#353185] tracking-[-0.72px]">
                                        Cari karir impian mu sekarang!
                                    </p>
                                    <div className="flex items-center justify-center size-[20px] rotate-90">
                                        <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                                            <path d="M17 14L12 9L7 14" stroke="#353185" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Right Image Container */}
                            <div className="relative h-[500px] overflow-hidden rounded-[32px]">
                                <div className="absolute inset-0 bg-[#d9d9d9]" />
                                <div className="absolute inset-0">
                                    <Image alt="Team collaboration at Altama office" className="absolute inset-0 w-full h-full object-cover object-center" src={imgFoto61} fill />
                                </div>
                                <div className="absolute inset-0">
                                    <Image alt="Altama employees working together" className="absolute inset-0 w-full h-full object-cover object-center" src={imgAsa35161} fill />
                                </div>

                                {/* Info Card Overlay */}
                                <div className="absolute bg-white flex flex-col gap-[12px] right-[20px] px-[12px] py-[16px] rounded-[16px] top-[20px] w-[200px]">
                                    {/* Icon */}
                                    <div className="overflow-clip rounded-full size-[28px]">
                                        <div className="bg-[#414141] rounded-full size-[28px] flex items-center justify-center">
                                            <svg className="size-[18px]" fill="none" viewBox="0 0 23 23">
                                                <path d='M11.3327 13.6702L13.1507 14.7563C13.3239 14.8665 13.4933 14.8627 13.6588 14.745C13.8244 14.6272 13.8833 14.4657 13.8355 14.2605L13.3632 12.2063L14.9688 10.8132C15.1262 10.6716 15.1734 10.5025 15.1105 10.3061C15.0475 10.1096 14.9058 10.0032 14.6855 9.98685L12.5841 9.82157L11.7577 7.86185C11.679 7.67296 11.5373 7.57852 11.3327 7.57852C11.1281 7.57852 10.9864 7.67296 10.9077 7.86185L10.0813 9.82157L7.9799 9.98685C7.75953 10.0026 7.61787 10.109 7.5549 10.3061C7.49194 10.5031 7.53916 10.6722 7.69657 10.8132L9.30213 12.2063L8.82991 14.2605C8.78268 14.4651 8.84187 14.6266 9.00746 14.745C9.17305 14.8633 9.34211 14.8671 9.51463 14.7563L11.3327 13.6702ZM8.16879 18.8882H5.66602C5.14657 18.8882 4.70205 18.7034 4.33246 18.3338C3.96287 17.9643 3.77776 17.5194 3.77713 16.9993V14.4966L1.95907 12.6549C1.78592 12.466 1.65213 12.2576 1.55768 12.0297C1.46324 11.8018 1.41602 11.5694 1.41602 11.3327C1.41602 11.0959 1.46324 10.8639 1.55768 10.6366C1.65213 10.4093 1.78592 10.2006 1.95907 10.0105L3.77713 8.16879V5.66602C3.77713 5.14657 3.96224 4.70205 4.33246 4.33246C4.70268 3.96287 5.1472 3.77776 5.66602 3.77713H8.16879L10.0105 1.95907C10.1993 1.78592 10.4081 1.65213 10.6366 1.55768C10.8652 1.46324 11.0972 1.41602 11.3327 1.41602C11.5682 1.41602 11.8005 1.46324 12.0297 1.55768C12.2589 1.65213 12.4673 1.78592 12.6549 1.95907L14.4966 3.77713H16.9993C17.5188 3.77713 17.9636 3.96224 18.3338 4.33246C18.7041 4.70268 18.8889 5.1472 18.8882 5.66602V8.16879L20.7063 10.0105C20.8794 10.1993 21.0132 10.4081 21.1077 10.6366C21.2021 10.8652 21.2493 11.0972 21.2493 11.3327C21.2493 11.5682 21.2021 11.8005 21.1077 12.0297C21.0132 12.2589 20.8794 12.4673 20.7063 12.6549L18.8882 14.4966V16.9993C18.8882 17.5188 18.7034 17.9636 18.3338 18.3338C17.9643 18.7041 17.5194 18.8889 16.9993 18.8882H14.4966L12.6549 20.7063C12.466 20.8794 12.2576 21.0132 12.0297 21.1077C11.8018 21.2021 11.5694 21.2493 11.3327 21.2493C11.0959 21.2493 10.8639 21.2021 10.6366 21.1077C10.4093 21.0132 10.2006 20.8794 10.0105 20.7063L8.16879 18.8882Z' fill="white" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <p className="font-['League_Spartan'] text-[16px] leading-[1.2] text-[#191844] tracking-[-0.64px]">
                                        <span className="font-medium">Where people grow,</span>{" "}
                                        <span className="text-[rgba(25,24,68,0.72)]">collaborate, and make an impact.</span>
                                    </p>
                                </div>

                                {/* Job Pills */}
                                <div className="absolute flex flex-col gap-[12px] left-[20px] bottom-[20px] w-[240px]">
                                    {/* Mechanic Staff */}
                                    <div className="bg-white flex gap-[8px] items-center px-[10px] py-[10px] rounded-[95px]">
                                        <div className="overflow-clip rounded-full shrink-0 size-[28px]">
                                            <div className="bg-[#353185] rounded-full size-[28px] flex items-center justify-center">
                                                <svg className="size-[18px]" fill="none" viewBox="0 0 23 23">
                                                    <path d='M11.3327 13.6702L13.1507 14.7563C13.3239 14.8665 13.4933 14.8627 13.6588 14.745C13.8244 14.6272 13.8833 14.4657 13.8355 14.2605L13.3632 12.2063L14.9688 10.8132C15.1262 10.6716 15.1734 10.5025 15.1105 10.3061C15.0475 10.1096 14.9058 10.0032 14.6855 9.98685L12.5841 9.82157L11.7577 7.86185C11.679 7.67296 11.5373 7.57852 11.3327 7.57852C11.1281 7.57852 10.9864 7.67296 10.9077 7.86185L10.0813 9.82157L7.9799 9.98685C7.75953 10.0026 7.61787 10.109 7.5549 10.3061C7.49194 10.5031 7.53916 10.6722 7.69657 10.8132L9.30213 12.2063L8.82991 14.2605C8.78268 14.4651 8.84187 14.6266 9.00746 14.745C9.17305 14.8633 9.34211 14.8671 9.51463 14.7563L11.3327 13.6702ZM8.16879 18.8882H5.66602C5.14657 18.8882 4.70205 18.7034 4.33246 18.3338C3.96287 17.9643 3.77776 17.5194 3.77713 16.9993V14.4966L1.95907 12.6549C1.78592 12.466 1.65213 12.2576 1.55768 12.0297C1.46324 11.8018 1.41602 11.5694 1.41602 11.3327C1.41602 11.0959 1.46324 10.8639 1.55768 10.6366C1.65213 10.4093 1.78592 10.2006 1.95907 10.0105L3.77713 8.16879V5.66602C3.77713 5.14657 3.96224 4.70205 4.33246 4.33246C4.70268 3.96287 5.1472 3.77776 5.66602 3.77713H8.16879L10.0105 1.95907C10.1993 1.78592 10.4081 1.65213 10.6366 1.55768C10.8652 1.46324 11.0972 1.41602 11.3327 1.41602C11.5682 1.41602 11.8005 1.46324 12.0297 1.55768C12.2589 1.65213 12.4673 1.78592 12.6549 1.95907L14.4966 3.77713H16.9993C17.5188 3.77713 17.9636 3.96224 18.3338 4.33246C18.7041 4.70268 18.8889 5.1472 18.8882 5.66602V8.16879L20.7063 10.0105C20.8794 10.1993 21.0132 10.4081 21.1077 10.6366C21.2021 10.8652 21.2493 11.0972 21.2493 11.3327C21.2493 11.5682 21.2021 11.8005 21.1077 12.0297C21.0132 12.2589 20.8794 12.4673 20.7063 12.6549L18.8882 14.4966V16.9993C18.8882 17.5188 18.7034 17.9636 18.3338 18.3338C17.9643 18.7041 17.5194 18.8889 16.9993 18.8882H14.4966L12.6549 20.7063C12.466 20.8794 12.2576 21.0132 12.0297 21.1077C11.8018 21.2021 11.5694 21.2493 11.3327 21.2493C11.0959 21.2493 10.8639 21.2021 10.6366 21.1077C10.4093 21.0132 10.2006 20.8794 10.0105 20.7063L8.16879 18.8882Z' fill="white" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="font-['League_Spartan'] font-medium text-[16px] leading-[1.2] text-[#191844] tracking-[-0.64px]">
                                            Mechanic Staff
                                        </p>
                                    </div>

                                    {/* Coordinator Staff */}
                                    <div className="bg-white flex gap-[8px] items-center px-[10px] py-[10px] rounded-[95px]">
                                        <div className="overflow-clip rounded-full shrink-0 size-[28px]">
                                            <div className="bg-[#414141] rounded-full size-[28px] flex items-center justify-center">
                                                <svg className="size-[18px]" fill="none" viewBox="0 0 23 23">
                                                    <path d='M11.3327 13.6702L13.1507 14.7563C13.3239 14.8665 13.4933 14.8627 13.6588 14.745C13.8244 14.6272 13.8833 14.4657 13.8355 14.2605L13.3632 12.2063L14.9688 10.8132C15.1262 10.6716 15.1734 10.5025 15.1105 10.3061C15.0475 10.1096 14.9058 10.0032 14.6855 9.98685L12.5841 9.82157L11.7577 7.86185C11.679 7.67296 11.5373 7.57852 11.3327 7.57852C11.1281 7.57852 10.9864 7.67296 10.9077 7.86185L10.0813 9.82157L7.9799 9.98685C7.75953 10.0026 7.61787 10.109 7.5549 10.3061C7.49194 10.5031 7.53916 10.6722 7.69657 10.8132L9.30213 12.2063L8.82991 14.2605C8.78268 14.4651 8.84187 14.6266 9.00746 14.745C9.17305 14.8633 9.34211 14.8671 9.51463 14.7563L11.3327 13.6702ZM8.16879 18.8882H5.66602C5.14657 18.8882 4.70205 18.7034 4.33246 18.3338C3.96287 17.9643 3.77776 17.5194 3.77713 16.9993V14.4966L1.95907 12.6549C1.78592 12.466 1.65213 12.2576 1.55768 12.0297C1.46324 11.8018 1.41602 11.5694 1.41602 11.3327C1.41602 11.0959 1.46324 10.8639 1.55768 10.6366C1.65213 10.4093 1.78592 10.2006 1.95907 10.0105L3.77713 8.16879V5.66602C3.77713 5.14657 3.96224 4.70205 4.33246 4.33246C4.70268 3.96287 5.1472 3.77776 5.66602 3.77713H8.16879L10.0105 1.95907C10.1993 1.78592 10.4081 1.65213 10.6366 1.55768C10.8652 1.46324 11.0972 1.41602 11.3327 1.41602C11.5682 1.41602 11.8005 1.46324 12.0297 1.55768C12.2589 1.65213 12.4673 1.78592 12.6549 1.95907L14.4966 3.77713H16.9993C17.5188 3.77713 17.9636 3.96224 18.3338 4.33246C18.7041 4.70268 18.8889 5.1472 18.8882 5.66602V8.16879L20.7063 10.0105C20.8794 10.1993 21.0132 10.4081 21.1077 10.6366C21.2021 10.8652 21.2493 11.0972 21.2493 11.3327C21.2493 11.5682 21.2021 11.8005 21.1077 12.0297C21.0132 12.2589 20.8794 12.4673 20.7063 12.6549L18.8882 14.4966V16.9993C18.8882 17.5188 18.7034 17.9636 18.3338 18.3338C17.9643 18.7041 17.5194 18.8889 16.9993 18.8882H14.4966L12.6549 20.7063C12.466 20.8794 12.2576 21.0132 12.0297 21.1077C11.8018 21.2021 11.5694 21.2493 11.3327 21.2493C11.0959 21.2493 10.8639 21.2021 10.6366 21.1077C10.4093 21.0132 10.2006 20.8794 10.0105 20.7063L8.16879 18.8882Z' fill="white" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="font-['League_Spartan'] font-medium text-[16px] leading-[1.2] text-[#191844] tracking-[-0.64px]">
                                            Coordinator Staff
                                        </p>
                                    </div>

                                    {/* Distribution Supervisor */}
                                    <div className="bg-white flex gap-[8px] items-center px-[10px] py-[10px] rounded-[95px]">
                                        <div className="overflow-clip rounded-full shrink-0 size-[28px]">
                                            <div className="bg-[#e7e1e1] rounded-full size-[28px] flex items-center justify-center">
                                                <svg className="size-[18px]" fill="none" viewBox="0 0 23 23">
                                                    <path d='M11.3327 13.6702L13.1507 14.7563C13.3239 14.8665 13.4933 14.8627 13.6588 14.745C13.8244 14.6272 13.8833 14.4657 13.8355 14.2605L13.3632 12.2063L14.9688 10.8132C15.1262 10.6716 15.1734 10.5025 15.1105 10.3061C15.0475 10.1096 14.9058 10.0032 14.6855 9.98685L12.5841 9.82157L11.7577 7.86185C11.679 7.67296 11.5373 7.57852 11.3327 7.57852C11.1281 7.57852 10.9864 7.67296 10.9077 7.86185L10.0813 9.82157L7.9799 9.98685C7.75953 10.0026 7.61787 10.109 7.5549 10.3061C7.49194 10.5031 7.53916 10.6722 7.69657 10.8132L9.30213 12.2063L8.82991 14.2605C8.78268 14.4651 8.84187 14.6266 9.00746 14.745C9.17305 14.8633 9.34211 14.8671 9.51463 14.7563L11.3327 13.6702ZM8.16879 18.8882H5.66602C5.14657 18.8882 4.70205 18.7034 4.33246 18.3338C3.96287 17.9643 3.77776 17.5194 3.77713 16.9993V14.4966L1.95907 12.6549C1.78592 12.466 1.65213 12.2576 1.55768 12.0297C1.46324 11.8018 1.41602 11.5694 1.41602 11.3327C1.41602 11.0959 1.46324 10.8639 1.55768 10.6366C1.65213 10.4093 1.78592 10.2006 1.95907 10.0105L3.77713 8.16879V5.66602C3.77713 5.14657 3.96224 4.70205 4.33246 4.33246C4.70268 3.96287 5.1472 3.77776 5.66602 3.77713H8.16879L10.0105 1.95907C10.1993 1.78592 10.4081 1.65213 10.6366 1.55768C10.8652 1.46324 11.0972 1.41602 11.3327 1.41602C11.5682 1.41602 11.8005 1.46324 12.0297 1.55768C12.2589 1.65213 12.4673 1.78592 12.6549 1.95907L14.4966 3.77713H16.9993C17.5188 3.77713 17.9636 3.96224 18.3338 4.33246C18.7041 4.70268 18.8889 5.1472 18.8882 5.66602V8.16879L20.7063 10.0105C20.8794 10.1993 21.0132 10.4081 21.1077 10.6366C21.2021 10.8652 21.2493 11.0972 21.2493 11.3327C21.2493 11.5682 21.2021 11.8005 21.1077 12.0297C21.0132 12.2589 20.8794 12.4673 20.7063 12.6549L18.8882 14.4966V16.9993C18.8882 17.5188 18.7034 17.9636 18.3338 18.3338C17.9643 18.7041 17.5194 18.8889 16.9993 18.8882H14.4966L12.6549 20.7063C12.466 20.8794 12.2576 21.0132 12.0297 21.1077C11.8018 21.2021 11.5694 21.2493 11.3327 21.2493C11.0959 21.2493 10.8639 21.2021 10.6366 21.1077C10.4093 21.0132 10.2006 20.8794 10.0105 20.7063L8.16879 18.8882Z' fill="#353185" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="font-['League_Spartan'] font-medium text-[16px] leading-[1.2] text-[#191844] tracking-[-0.64px]">
                                            Distribution Supervisor
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="relative bg-white py-[80px] overflow-hidden">
                    <div className="max-w-[1440px] mx-auto px-[80px]">
                        {/* Header */}
                        <div className="flex items-end justify-between mb-[60px]">
                            <div className="flex flex-col gap-[20px]">
                                <p className="font-['Inter'] text-[20px] text-[#353185] tracking-[-0.8px]">Testimonials</p>
                                <h2 className="font-['League_Spartan'] font-semibold text-[48px] leading-[1.1] text-[#121212] tracking-[-1.92px] max-w-[600px]">
                                    What our partners say about Altama
                                </h2>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex gap-[16px] items-center">
                                <button className="border-2 border-[#353185] flex items-center justify-center p-[8px] rounded-[72px] hover:bg-[#f8f7f7] transition-colors" onClick={handlePrev}>
                                    <div className="flex items-center justify-center size-[28px] rotate-[-90deg]">
                                        <svg className="block size-full" fill="none" viewBox="0 0 44 44">
                                            <path d='M31.1673 25.6667L22.0007 16.5L12.834 25.6667' stroke="#353185" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                                        </svg>
                                    </div>
                                </button>
                                <button className="bg-[#353185] flex items-center justify-center p-[8px] rounded-[72px] hover:bg-[#4a46a0] transition-colors" onClick={handleNext}>
                                    <div className="flex items-center justify-center size-[28px] rotate-[90deg]">
                                        <svg className="block size-full" fill="none" viewBox="0 0 44 44">
                                            <path d='M31.1673 25.6667L22.0007 16.5L12.834 25.6667' stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Testimonials Carousel */}
                        <div className="flex gap-[40px] overflow-x-auto pb-[20px]" style={{ scrollbarWidth: 'none' }} ref={scrollContainerRef}>
                            {testimonialData.map((testimonial) => (
                                testimonial.type === "video" ? (
                                    // Video Testimonial
                                    <div key={testimonial.id} className="relative h-[320px] overflow-hidden rounded-[20px] min-w-[560px]">
                                        {testimonial.videoImage && (
                                            <Image alt={`Video testimonial from ${testimonial.name}`} className="absolute inset-0 w-full h-full object-cover" src={testimonial.videoImage} fill />
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
                                            <Image alt={`Photo of ${testimonial.name}, ${testimonial.position}`} className="rounded-full size-[52px]" src={testimonial.image} width={52} height={52} />
                                            <div className="flex flex-col gap-[4px]">
                                                <p className="font-['Inter'] text-[20px] text-white tracking-[-0.8px]">{testimonial.name}</p>
                                                <p className="font-['Inter'] text-[14px] text-white opacity-60 tracking-[-0.56px]">{testimonial.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    // Card Testimonial
                                    <div key={testimonial.id} className="bg-[#f8f7f7] flex flex-col gap-[24px] px-[24px] py-[24px] rounded-[20px] min-w-[460px]">
                                        <div className="flex flex-col gap-[16px]">
                                            {/* Stars */}
                                            <div className="flex gap-[6px] items-center">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <div key={i} className="size-[16px]">
                                                        <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                                                            <path d='M14.0249 3.47062L15.7101 6.70312C15.8355 6.94108 16.0154 7.14595 16.2352 7.30095C16.455 7.45595 16.7084 7.55668 16.9746 7.59487L20.5341 8.08237C22.4376 8.34487 23.1756 10.6916 21.7679 11.9966L19.3304 14.2459C19.1229 14.437 18.9671 14.6775 18.8776 14.945C18.788 15.2125 18.7675 15.4983 18.8181 15.7759L19.4129 19.0744C19.7436 20.9119 17.8319 22.3444 16.1541 21.5044L12.7521 19.8169C12.518 19.7022 12.2606 19.6425 11.9999 19.6425C11.7391 19.6425 11.4818 19.7022 11.2476 19.8169L7.84563 21.5044C6.16713 22.3369 4.25613 20.9119 4.58688 19.0744L5.18163 15.7751C5.28663 15.2126 5.09163 14.6351 4.67013 14.2451L2.23188 11.9966C0.82413 10.6991 1.56213 8.34412 3.46563 8.08162L7.02513 7.59412C7.29214 7.55831 7.54654 7.45853 7.7667 7.30327C7.98686 7.14801 8.16626 6.94187 8.28963 6.70237L9.97563 3.47062C10.8336 1.84313 13.1736 1.84313 14.0241 3.47062' fill="#FCD53F" />
                                                        </svg>
                                                    </div>
                                                ))}
                                            </div>
                                            {/* Quote */}
                                            <p className="font-['Inter'] text-[18px] leading-[1.4] text-[#414141] tracking-[-0.72px]">
                                                {testimonial.quote}
                                            </p>
                                        </div>

                                        {/* Divider */}
                                        <div className="h-[1px] bg-[#CCCCCC]" />

                                        {/* Author */}
                                        <div className="flex gap-[12px] items-center">
                                            <Image alt={`Photo of ${testimonial.name}, ${testimonial.position}`} className="rounded-full size-[44px]" src={testimonial.image} width={44} height={44} />
                                            <div className="flex flex-col gap-[2px]">
                                                <p className="font-['Inter'] text-[18px] text-[#121212] tracking-[-0.72px]">{testimonial.name}</p>
                                                <p className="font-['Inter'] text-[13px] text-[#353185] tracking-[-0.52px]">{testimonial.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
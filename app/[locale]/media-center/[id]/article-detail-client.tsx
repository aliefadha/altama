"use client";

import { ImageWithFallback } from "@/components/ImageWithFallback";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface Article {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    tags: string[];
    image: string;
    author: string;
}

interface ArticleDetailClientProps {
    article: Article | null;
    relatedArticles: Article[];
}

export default function ArticleDetailClient({
    article,
    relatedArticles,
}: ArticleDetailClientProps) {
    const router = useRouter();

    if (!article) {
        return (
            <div className="bg-white min-h-screen pt-[80px] flex items-center justify-center">
                <div className="text-center">
                    <p className="font-inter text-[#898989] text-[24px]">Artikel tidak ditemukan</p>
                    <button
                        onClick={() => router.push('/media-center')}
                        className="mt-[24px] px-[28px] py-[14px] rounded-[64px] bg-[#353185] text-white font-inter font-semibold text-[18px] hover:bg-[#605bc3] transition-colors"
                    >
                        Kembali ke Media Center
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="bg-white min-h-screen pt-[55px]">
                <div className="max-w-[1440px] mx-auto px-10 lg:px-[112px] py-10 lg:py-[86px]">
                    {/* Featured Image */}
                    <div className="w-full h-[150px] md:h-[450px] rounded-[32px] overflow-hidden bg-[#cacaca] mb-[48px]">
                        <ImageWithFallback
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Main Content Grid: 2 columns */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-[80px]">
                        {/* Left Column - Article Content */}
                        <div className="flex flex-col gap-6 lg:gap-[40px] col-span-3">
                            {/* Title Section */}
                            <div className="flex flex-col gap-[16px]">
                                <h1 className="font-league-spartan font-semibold text-[#121212] text-[28px] lg:text-[40px] leading-[1.1] tracking-[-1.6px]">
                                    {article.title}
                                </h1>
                                <p className="font-inter text-[#414141] text-[14px] lg:text-[18px] leading-[1.5] tracking-[-0.72px] opacity-[0.72]">
                                    {article.excerpt}
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex gap-[16px] items-center flex-wrap">
                                <div className="bg-[rgba(53,49,133,0.08)] px-[12px] py-[6px] rounded-[8px]">
                                    <p className="font-inter text-[#29266e] text-[14px] lg:text-[16px] leading-[1.3] tracking-[-0.64px]">
                                        {article.date}
                                    </p>
                                </div>
                                <div className="bg-[rgba(53,49,133,0.08)] px-[12px] py-[6px] rounded-[8px]">
                                    <p className="font-inter text-[#29266e] text-[14px] lg:text-[16px] leading-[1.3] tracking-[-0.64px]">
                                        {article.category}
                                    </p>
                                </div>
                                {article.tags && article.tags.length > 0 && (
                                    <div className="bg-[rgba(53,49,133,0.08)] px-[12px] py-[6px] rounded-[8px]">
                                        <p className="font-inter text-[#29266e] text-[14px] lg:text-[16px] leading-[1.3] tracking-[-0.64px]">
                                            {article.tags.join(", ")}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Content Sections */}
                            <div className="flex flex-col gap-[32px]">
                                {/* Section 1 */}
                                <div className="flex flex-col gap-[12px]">
                                    <h2 className="font-league-spartan font-semibold text-[#353185] text-[24px] leading-[1.2] tracking-[-0.96px]">
                                        {article.title}
                                    </h2>
                                    <p className="font-inter text-[#121212] text-justify text-[14px] lg:text-[18px] leading-[1.6] tracking-[-0.72px]">
                                        PT Altama Surya Anugerah terus berkomitmen dalam menghadirkan inovasi dan kualitas terbaik untuk industri Indonesia. Dengan pengalaman lebih dari 40 tahun, Altama kini menjadi pilihan utama dalam menyediakan tools berkualitas tinggi yang memenuhi standar internasional.
                                    </p>
                                </div>

                                {/* Section 2 */}
                                <div className="flex flex-col gap-[12px]">
                                    <h2 className="font-league-spartan font-semibold text-[#353185] text-[24px] leading-[1.2] tracking-[-0.96px]">
                                        Pengakuan atas Kualitas dan Kepercayaan
                                    </h2>
                                    <p className="font-inter text-[#121212] text-justify text-[14px] lg:text-[18px] leading-[1.6] tracking-[-0.72px]">
                                        Penghargaan yang diterima merupakan bentuk apresiasi terhadap kekuatan brand yang dimiliki Altama di pasar nasional. Produk-produk Altama dinilai memiliki kualitas yang terjaga serta relevan dengan kebutuhan profesional maupun pengguna rumahan.
                                    </p>
                                </div>

                                {/* Section 3 */}
                                <div className="flex flex-col gap-[12px]">
                                    <h2 className="font-league-spartan font-semibold text-[#353185] text-[24px] leading-[1.2] tracking-[-0.96px]">
                                        Komitmen Altama ke Depan
                                    </h2>
                                    <div className="flex flex-col gap-[12px]">
                                        <p className="font-inter text-[#121212] text-justify text-[14px] lg:text-[18px] leading-[1.6] tracking-[-0.72px]">
                                            Altama Surya Anugerah terus berkomitmen menghadirkan produk berkualitas tinggi serta memperluas jaringan distribusi di Indonesia. Penghargaan ini menjadi motivasi untuk terus berinovasi dan memberikan layanan terbaik bagi pelanggan.
                                        </p>
                                        <p className="font-inter text-[#121212] text-justify text-[14px] lg:text-[18px] leading-[1.6] tracking-[-0.72px]">
                                            Dengan berbagai pencapaian yang telah diraih, Altama optimis dapat terus berkontribusi dalam memajukan industri perkakas Indonesia dan meningkatkan daya saing produk lokal di pasar global. Kepercayaan konsumen adalah aset terbesar yang akan terus dijaga dan ditingkatkan.
                                        </p>
                                    </div>
                                </div>

                                {/* Section 4 */}
                                <div className="flex flex-col gap-[12px]">
                                    <h2 className="font-league-spartan font-semibold text-[#353185] text-[24px] leading-[1.2] tracking-[-0.96px]">
                                        Inovasi Berkelanjutan
                                    </h2>
                                    <p className="font-inter text-[#121212] text-justify text-[14px] lg:text-[18px] leading-[1.6] tracking-[-0.72px]">
                                        PT Altama Surya Anugerah tidak hanya fokus pada kualitas produk, tetapi juga pada inovasi berkelanjutan. Tim Research & Development Altama terus melakukan riset untuk menghadirkan produk-produk yang sesuai dengan kebutuhan pasar dan perkembangan teknologi terkini.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Latest News Sidebar */}
                        <div className="flex flex-col gap-[24px] col-span-3 lg:col-span-2">
                            <h2 className="font-league-spartan font-medium text-[#121212] text-[28px] leading-[1.2] tracking-[-1.12px]">
                                Latest News
                            </h2>

                            {/* Latest News Cards */}
                            <div className="flex flex-col md:flex-row lg:flex-col gap-[24px]">
                                {relatedArticles.map((relatedArticle) => (
                                    <div
                                        key={relatedArticle.id}
                                        onClick={() => {
                                            router.push(`/media-center/${relatedArticle.id}`);
                                            window.scrollTo(0, 0);
                                        }}
                                        className="bg-white rounded-[16px] shadow-[0px_4px_20px_0px_rgba(163,163,163,0.15)] cursor-pointer group"
                                    >
                                        <div className="p-[12px] flex flex-col gap-[16px]">
                                            {/* Image */}
                                            <div className="w-full h-[220px] rounded-[12px] overflow-hidden bg-[#cacaca]">
                                                <ImageWithFallback
                                                    src={relatedArticle.image}
                                                    alt={relatedArticle.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="flex flex-col gap-[8px]">
                                                <h3 className="font-league-spartan font-semibold text-[#353185] text-[20px] leading-[1.2] tracking-[-0.8px] group-hover:text-[#605bc3] transition-colors line-clamp-2">
                                                    {relatedArticle.title}
                                                </h3>
                                                <p className="font-inter text-[#414141] text-[14px] leading-[1.4] tracking-[-0.56px] line-clamp-2">
                                                    {relatedArticle.excerpt}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

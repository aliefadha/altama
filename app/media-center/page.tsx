"use client"
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Mock data for articles
const allArticles = [
    {
        id: 1,
        title: "Inovasi Teknologi Terbaru dari Altama dalam Industri Tools",
        excerpt: "Altama terus berinovasi dengan menghadirkan teknologi terbaru dalam produksi tools berkualitas tinggi untuk mendukung industri Indonesia.",
        category: "Innovation",
        date: "15 Des 2024",
        image: "https://images.unsplash.com/photo-1609619385076-36a873425636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjYwMzI0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        author: "Tim Redaksi Altama"
    },
    {
        id: 2,
        title: "Altama Raih Penghargaan Best Manufacturing Company 2024",
        excerpt: "Pencapaian gemilang Altama dalam meraih penghargaan sebagai perusahaan manufaktur terbaik tahun 2024 dari Indonesia Manufacturing Awards.",
        category: "Awards",
        date: "10 Des 2024",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudHxlbnwxfHx8fDE3NjYwMDAwMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        author: "Corporate Communications"
    },
    {
        id: 3,
        title: "Ekspansi Pasar: Produk Tekiro Merambah Asia Tenggara",
        excerpt: "Brand Tekiro dari Altama kini hadir di berbagai negara Asia Tenggara, memperluas jangkauan pasar dan meningkatkan kepercayaan konsumen.",
        category: "Business",
        date: "5 Des 2024",
        image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ld3N8ZW58MXx8fHwxNzY2MDM4NzUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        author: "Marketing Team"
    },
    {
        id: 4,
        title: "Komitmen Altama terhadap Sustainability dan Green Manufacturing",
        excerpt: "Altama menerapkan praktik green manufacturing dalam proses produksi untuk menjaga kelestarian lingkungan dan sustainability jangka panjang.",
        category: "Sustainability",
        date: "28 Nov 2024",
        image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwaW5kdXN0cnl8ZW58MXx8fHwxNzY1OTc1OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        author: "Sustainability Team"
    },
    {
        id: 5,
        title: "Workshop Series: Meningkatkan Skill Karyawan Altama",
        excerpt: "Program pelatihan berkala yang diselenggarakan Altama untuk meningkatkan kompetensi dan profesionalisme tim di berbagai departemen.",
        category: "Company Culture",
        date: "20 Nov 2024",
        image: "https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjU5OTYyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        author: "HR Department"
    },
    {
        id: 6,
        title: "Peluncuran Produk Baru: Rexco Professional Series 2025",
        excerpt: "Altama memperkenalkan seri terbaru dari brand Rexco dengan fitur profesional yang dirancang khusus untuk industri berat dan konstruksi.",
        category: "Product Launch",
        date: "12 Nov 2024",
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3JrcGxhY2V8ZW58MXx8fHwxNzY2MDI3NzMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        author: "Product Development"
    }
];

const categories = ["All", "Innovation", "Awards", "Business", "Sustainability", "Company Culture", "Product Launch"];

export default function MediaCenterPage() {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    // Filter articles based on category and search
    const filteredArticles = allArticles.filter(article => {
        const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-white min-h-screen">
            {/* Header Section with Purple Gradient Background */}
            <div className="relative w-full bg-gradient-to-b from-[#353185] via-[#605bc3] via-[52.404%] to-[#353185] pt-[120px] sm:pt-[80px] pb-[80px] sm:pb-[60px]">
                <div className="max-w-[1440px] mx-auto px-[160px] sm:px-[24px]">
                    <div className="flex flex-col gap-[32px] sm:gap-[24px] items-center text-center">
                        <div className="flex flex-col gap-[16px] sm:gap-[12px] items-center">
                            <h1 className="font-['League_Spartan'] font-bold text-white text-[48px] sm:text-[32px] leading-[1.292] tracking-[-1.92px] sm:tracking-[-1.28px]">
                                MEDIA CENTER
                            </h1>
                            <p className="font-['Inter'] text-white text-[20px] sm:text-[16px] leading-[1.5] sm:leading-[1.6] tracking-[-0.8px] sm:tracking-[-0.64px] max-w-[800px] sm:max-w-full opacity-90">
                                Berita terkini, press release, dan update dari PT Altama Surya Anugerah
                            </p>
                        </div>

                        {/* Search Bar */}
                        <div className="relative w-full max-w-[600px]">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-[24px] sm:px-[20px] py-[16px] sm:py-[12px] rounded-[72px] bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white placeholder:text-white/70 text-[16px] sm:text-[14px] focus:outline-none focus:bg-white/30 transition-all"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Filter */}
            <div className="w-full bg-[#f8f8f8] py-[32px] sm:py-[24px] sticky top-[55px] z-40">
                <div className="max-w-[1440px] mx-auto px-[160px] sm:px-[24px]">
                    <div className="flex lg:flex-row flex-col gap-[16px] sm:gap-[12px] items-center lg:justify-center overflow-x-auto">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-[24px] sm:px-[20px] py-[12px] sm:py-[10px] rounded-[72px] sm:rounded-[48px] font-['Inter'] font-semibold text-[16px] sm:text-[14px] tracking-[-0.64px] sm:tracking-[-0.48px] transition-all whitespace-nowrap ${selectedCategory === category
                                    ? 'bg-[#353185] text-white'
                                    : 'bg-white text-[#353185] hover:bg-[#f0f0ff]'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Articles Grid */}
            <div className="max-w-[1440px] mx-auto px-[160px] sm:px-[24px] py-[80px] sm:py-[60px]">
                {filteredArticles.length > 0 ? (
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[32px] sm:gap-[24px]">
                        {filteredArticles.map(article => (
                            <div
                                key={article.id}
                                onClick={() => router.push(`/media-center/${article.id}`)}
                                className="flex flex-col gap-[20px] cursor-pointer group"
                            >
                                {/* Article Image */}
                                <div className="relative w-full h-[240px] rounded-[16px] overflow-hidden bg-gray-200">
                                    <ImageWithFallback
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Category Badge */}
                                    <div className="absolute top-[16px] left-[16px] px-[16px] py-[6px] rounded-[64px] bg-[#353185] bg-opacity-90">
                                        <p className="font-['Inter'] font-medium text-white text-[14px] tracking-[-0.56px]">
                                            {article.category}
                                        </p>
                                    </div>
                                </div>

                                {/* Article Content */}
                                <div className="flex flex-col gap-[12px]">
                                    {/* Date and Author */}
                                    <div className="flex gap-[12px] items-center">
                                        <p className="font-['Inter'] text-[#898989] text-[14px] tracking-[-0.56px]">
                                            {article.date}
                                        </p>
                                        <div className="size-[4px] rounded-full bg-[#898989]" />
                                        <p className="font-['Inter'] text-[#898989] text-[14px] tracking-[-0.56px]">
                                            {article.author}
                                        </p>
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-['Inter'] font-semibold text-[#121212] text-[20px] leading-[1.3] tracking-[-0.8px] group-hover:text-[#353185] transition-colors">
                                        {article.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="font-['Inter'] text-[#414141] text-[16px] leading-[1.5] tracking-[-0.64px] line-clamp-3">
                                        {article.excerpt}
                                    </p>

                                    {/* Read More Link */}
                                    <div className="flex items-center gap-[8px] mt-[8px]">
                                        <p className="font-['Inter'] font-semibold text-[#353185] text-[16px] tracking-[-0.64px]">
                                            Baca Selengkapnya
                                        </p>
                                        <div className="size-[16px] rotate-[90deg] group-hover:translate-x-1 transition-transform">
                                            <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                                                <path d="M17 14L12 9L7 14" stroke="#353185" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-[100px] gap-[16px]">
                        <div className="size-[64px] opacity-30">
                            <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                                <circle cx="11" cy="11" r="7" stroke="#898989" strokeWidth="2" />
                                <path d="M20 20L16 16" stroke="#898989" strokeLinecap="round" strokeWidth="2" />
                            </svg>
                        </div>
                        <p className="font-['Inter'] text-[#898989] text-[20px] tracking-[-0.8px]">
                            Tidak ada artikel yang ditemukan
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
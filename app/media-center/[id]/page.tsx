"use client"
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

// Mock data for articles (same as MediaCenterPage)
const allArticles = [
    {
        id: 1,
        title: "Inovasi Teknologi Terbaru dari Altama dalam Industri Tools",
        excerpt: "Altama terus berinovasi dengan menghadirkan teknologi terbaru dalam produksi tools berkualitas tinggi untuk mendukung industri Indonesia.",
        category: "Innovation",
        date: "15 Des 2024",
        tags: ["Innovation", "Technology", "Industry 4.0"],
        image: "https://images.unsplash.com/photo-1609619385076-36a873425636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjYwMzI0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        author: "Tim Redaksi Altama"
    },
    {
        id: 2,
        title: "Altama Raih Penghargaan Best Manufacturing Company 2024",
        excerpt: "Pencapaian gemilang Altama dalam meraih penghargaan sebagai perusahaan manufaktur terbaik tahun 2024 dari Indonesia Manufacturing Awards.",
        category: "Awards",
        date: "10 Des 2024",
        tags: ["Award", "Achievement", "Manufacturing Excellence"],
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudHxlbnwxfHx8fDE3NjYwMDAwMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        author: "Corporate Communications"
    },
    {
        id: 3,
        title: "Ekspansi Pasar: Produk Tekiro Merambah Asia Tenggara",
        excerpt: "Brand Tekiro dari Altama kini hadir di berbagai negara Asia Tenggara, memperluas jangkauan pasar dan meningkatkan kepercayaan konsumen.",
        category: "Business",
        date: "5 Des 2024",
        tags: ["Business", "Tekiro", "Market Expansion"],
        image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ld3N8ZW58MXx8fHwxNzY2MDM4NzUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        author: "Marketing Team"
    },
    {
        id: 4,
        title: "Komitmen Altama terhadap Sustainability dan Green Manufacturing",
        excerpt: "Altama menerapkan praktik green manufacturing dalam proses produksi untuk menjaga kelestarian lingkungan dan sustainability jangka panjang.",
        category: "Sustainability",
        date: "28 Nov 2024",
        tags: ["Sustainability", "Green Manufacturing", "Environment"],
        image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwaW5kdXN0cnl8ZW58MXx8fHwxNzY1OTc1OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        author: "Sustainability Team"
    },
    {
        id: 5,
        title: "Workshop Series: Meningkatkan Skill Karyawan Altama",
        excerpt: "Program pelatihan berkala yang diselenggarakan Altama untuk meningkatkan kompetensi dan profesionalisme tim di berbagai departemen.",
        category: "Company Culture",
        date: "20 Nov 2024",
        tags: ["Company Culture", "Training", "Employee Development"],
        image: "https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjU5OTYyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        author: "HR Department"
    },
    {
        id: 6,
        title: "Peluncuran Produk Baru: Rexco Professional Series 2025",
        excerpt: "Altama memperkenalkan seri terbaru dari brand Rexco dengan fitur profesional yang dirancang khusus untuk industri berat dan konstruksi.",
        category: "Product Launch",
        date: "12 Nov 2024",
        tags: ["Product Launch", "Rexco", "Professional Tools"],
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3JrcGxhY2V8ZW58MXx8fHwxNzY2MDI3NzMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        author: "Product Development"
    }
];

export default function ArticleDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    const [article, setArticle] = useState<typeof allArticles[0] | null>(null);
    const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);

    useEffect(() => {
        const resolveParams = async () => {
            const resolved = await params;
            setResolvedParams(resolved);
            const foundArticle = allArticles.find(a => a.id === parseInt(resolved.id || "0"));
            setArticle(foundArticle || null);
        };

        resolveParams();
    }, [params]);

    if (!article || !resolvedParams) {
        return (
            <div className="bg-white min-h-screen pt-[80px] flex items-center justify-center">
                <div className="text-center">
                    <p className="font-['Inter'] text-[#898989] text-[24px]">Artikel tidak ditemukan</p>
                    <button
                        onClick={() => router.push('/media-center')}
                        className="mt-[24px] px-[28px] py-[14px] rounded-[64px] bg-[#353185] text-white font-['Inter'] font-semibold text-[18px] hover:bg-[#605bc3] transition-colors"
                    >
                        Kembali ke Media Center
                    </button>
                </div>
            </div>
        );
    }

    // Get related articles (different articles, max 2)
    const relatedArticles = allArticles
        .filter(a => a.id !== article.id)
        .slice(0, 2);

    return (
        <>
            <div className="bg-white min-h-screen pt-[55px]">
                <div className="max-w-[1440px] mx-auto px-[112px] py-[86px]">
                    {/* Featured Image */}
                    <div className="w-full h-[450px] rounded-[32px] overflow-hidden bg-[#cacaca] mb-[48px]">
                        <ImageWithFallback
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Main Content Grid: 2 columns */}
                    <div className="grid grid-cols-[minmax(0,887px)_minmax(0,400px)] gap-[60px]">
                        {/* Left Column - Article Content */}
                        <div className="flex flex-col gap-[40px]">
                            {/* Title Section */}
                            <div className="flex flex-col gap-[16px]">
                                <h1 className="font-['League_Spartan'] font-semibold text-[#121212] text-[40px] leading-[1.1] tracking-[-1.6px]">
                                    {article.title}
                                </h1>
                                <p className="font-['Inter'] text-[#414141] text-[18px] leading-[1.5] tracking-[-0.72px] opacity-[0.72]">
                                    {article.excerpt}
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex gap-[16px] items-center flex-wrap">
                                <div className="bg-[rgba(53,49,133,0.08)] px-[12px] py-[6px] rounded-[8px]">
                                    <p className="font-['Inter'] text-[#29266e] text-[16px] leading-[1.3] tracking-[-0.64px]">
                                        {article.date}
                                    </p>
                                </div>
                                <div className="bg-[rgba(53,49,133,0.08)] px-[12px] py-[6px] rounded-[8px]">
                                    <p className="font-['Inter'] text-[#29266e] text-[16px] leading-[1.3] tracking-[-0.64px]">
                                        {article.category}
                                    </p>
                                </div>
                                {article.tags && article.tags.length > 0 && (
                                    <div className="bg-[rgba(53,49,133,0.08)] px-[12px] py-[6px] rounded-[8px]">
                                        <p className="font-['Inter'] text-[#29266e] text-[16px] leading-[1.3] tracking-[-0.64px]">
                                            {article.tags.join(", ")}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Content Sections */}
                            <div className="flex flex-col gap-[32px]">
                                {/* Section 1 */}
                                <div className="flex flex-col gap-[12px]">
                                    <h2 className="font-['League_Spartan'] font-semibold text-[#353185] text-[24px] leading-[1.2] tracking-[-0.96px]">
                                        {article.title}
                                    </h2>
                                    <p className="font-['Inter'] text-[#121212] text-[18px] leading-[1.6] tracking-[-0.72px]">
                                        PT Altama Surya Anugerah terus berkomitmen dalam menghadirkan inovasi dan kualitas terbaik untuk industri Indonesia. Dengan pengalaman lebih dari 40 tahun, Altama kini menjadi pilihan utama dalam menyediakan tools berkualitas tinggi yang memenuhi standar internasional.
                                    </p>
                                </div>

                                {/* Section 2 */}
                                <div className="flex flex-col gap-[12px]">
                                    <h2 className="font-['League_Spartan'] font-semibold text-[#353185] text-[24px] leading-[1.2] tracking-[-0.96px]">
                                        Pengakuan atas Kualitas dan Kepercayaan
                                    </h2>
                                    <p className="font-['Inter'] text-[#121212] text-[18px] leading-[1.6] tracking-[-0.72px]">
                                        Penghargaan yang diterima merupakan bentuk apresiasi terhadap kekuatan brand yang dimiliki Altama di pasar nasional. Produk-produk Altama dinilai memiliki kualitas yang terjaga serta relevan dengan kebutuhan profesional maupun pengguna rumahan.
                                    </p>
                                </div>

                                {/* Section 3 */}
                                <div className="flex flex-col gap-[12px]">
                                    <h2 className="font-['League_Spartan'] font-semibold text-[#353185] text-[24px] leading-[1.2] tracking-[-0.96px]">
                                        Komitmen Altama ke Depan
                                    </h2>
                                    <div className="flex flex-col gap-[12px]">
                                        <p className="font-['Inter'] text-[#121212] text-[18px] leading-[1.6] tracking-[-0.72px]">
                                            Altama Surya Anugerah terus berkomitmen menghadirkan produk berkualitas tinggi serta memperluas jaringan distribusi di Indonesia. Penghargaan ini menjadi motivasi untuk terus berinovasi dan memberikan layanan terbaik bagi pelanggan.
                                        </p>
                                        <p className="font-['Inter'] text-[#121212] text-[18px] leading-[1.6] tracking-[-0.72px]">
                                            Dengan berbagai pencapaian yang telah diraih, Altama optimis dapat terus berkontribusi dalam memajukan industri perkakas Indonesia dan meningkatkan daya saing produk lokal di pasar global. Kepercayaan konsumen adalah aset terbesar yang akan terus dijaga dan ditingkatkan.
                                        </p>
                                    </div>
                                </div>

                                {/* Section 4 */}
                                <div className="flex flex-col gap-[12px]">
                                    <h2 className="font-['League_Spartan'] font-semibold text-[#353185] text-[24px] leading-[1.2] tracking-[-0.96px]">
                                        Inovasi Berkelanjutan
                                    </h2>
                                    <p className="font-['Inter'] text-[#121212] text-[18px] leading-[1.6] tracking-[-0.72px]">
                                        PT Altama Surya Anugerah tidak hanya fokus pada kualitas produk, tetapi juga pada inovasi berkelanjutan. Tim Research & Development Altama terus melakukan riset untuk menghadirkan produk-produk yang sesuai dengan kebutuhan pasar dan perkembangan teknologi terkini.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Latest News Sidebar */}
                        <div className="flex flex-col gap-[24px]">
                            <h2 className="font-['League_Spartan'] font-medium text-[#121212] text-[28px] leading-[1.2] tracking-[-1.12px]">
                                Latest News
                            </h2>

                            {/* Latest News Cards */}
                            <div className="flex flex-col gap-[24px]">
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
                                                <h3 className="font-['League_Spartan'] font-semibold text-[#353185] text-[20px] leading-[1.2] tracking-[-0.8px] group-hover:text-[#605bc3] transition-colors line-clamp-2">
                                                    {relatedArticle.title}
                                                </h3>
                                                <p className="font-['Inter'] text-[#414141] text-[14px] leading-[1.4] tracking-[-0.56px] line-clamp-2">
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
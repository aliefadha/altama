import { Metadata } from "next";
import ArticleDetailClient from "./article-detail-client";

// Mock data for articles
const allArticles = [
    {
        id: 1,
        title: "Inovasi Teknologi Terbaru dari Altama dalam Industri Tools",
        excerpt: "Altama terus berinovasi dengan menghadirkan teknologi terbaru dalam produksi tools berkualitas tinggi untuk mendukung industri Indonesia.",
        category: "Innovation",
        date: "15 Des 2024",
        tags: ["Innovation", "Technology", "Industry 4.0"],
        image: "https://images.unsplash.com/photo-1609619385076-36a873425636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9vdmF0aW9uc2xlbnwxfHx8fDE3NjYwMzI0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
        image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhtYW51ZmFjdHVyaW5nJTIwaW5kdXN0cnl8ZW58MXx8fHwxNzY1OTc1OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHdvZmZpY2UlMjB3b3JrcGxhY2V8ZW58MXx8fHwxNzY2MDI3NzMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        author: "Product Development"
    }
];

// Replace with actual API call
async function getArticle(id: string) {
    // const res = await fetch(`https://api.example.com/articles/${id}`);
    // if (!res.ok) return null;
    // return res.json();
    
    return allArticles.find(a => a.id === parseInt(id)) || null;
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const article = await getArticle(id);

    if (!article) {
        return {
            title: "Article Not Found | Altama Surya Anugerah",
        };
    }

    return {
        title: `${article.title} | Altama Surya Anugerah`,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            images: [{ url: article.image }],
            type: "article",
            authors: [article.author],
        },
        twitter: {
            card: "summary_large_image",
            title: article.title,
            description: article.excerpt,
            images: [article.image],
        },
    };
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const article = await getArticle(id);
    const relatedArticles = allArticles.filter(a => a.id !== parseInt(id)).slice(0, 2);

    return <ArticleDetailClient article={article} relatedArticles={relatedArticles} />;
}

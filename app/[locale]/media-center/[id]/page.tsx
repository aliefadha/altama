import { Metadata } from "next";
import ArticleDetailClient from "./article-detail-client";
import { fetchArticleBySlug, fetchArticles, ArticleItem } from "@/lib/media-center";
import { getImageUrl } from "@/lib/utils";

// Interface for client component (mapped from API response)
interface ArticleForClient {
  id: string;
  title: string;
  excerpt: string;
  contentHtml: string;
  category: string;
  date: string;
  tags: string[];
  image: string | null;
  author: string;
}

// Map API response to client component format
function mapArticleToClient(article: ArticleItem): ArticleForClient {
  return {
    id: article.id,
    title: article.title,
    excerpt: article.excerpt,
    contentHtml: article.contentHtml,
    category: "Article",
    date: article.publishedAt,
    tags: article.metaTags?.keywords ? article.metaTags.keywords.split(",").map(t => t.trim()) : [],
    image: getImageUrl(article.primaryImage || ""),
    author: article.author,
  };
}

// Fetch article by slug
async function getArticle(slug: string): Promise<ArticleForClient | null> {
  try {
    const article = await fetchArticleBySlug(slug);
    return mapArticleToClient(article);
  } catch {
    return null;
  }
}

// Fetch related articles
async function getRelatedArticles(currentSlug: string): Promise<ArticleForClient[]> {
  try {
    const articles = await fetchArticles();
    return articles
      .filter(a => a.slug !== currentSlug)
      .slice(0, 2)
      .map(mapArticleToClient);
  } catch {
    return [];
  }
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
      images: article.image ? [{ url: getImageUrl(article.image) }] : [],
      type: "article",
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: article.image ? [getImageUrl(article.image)] : [],
    },
  };
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = await getArticle(id);
  const relatedArticles = await getRelatedArticles(id);

  return <ArticleDetailClient article={article} relatedArticles={relatedArticles} />;
}

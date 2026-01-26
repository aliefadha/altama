import { queryClient } from "@/lib/query-client";
import { apiClient } from "@/lib/api-client";

export interface CategoryArticleItem {
  id: string;
  name: string;
}

export interface CategoryArticleResponse {
  success: boolean;
  message: string;
  data: CategoryArticleItem[];
}

export async function fetchCategoryArticles(): Promise<CategoryArticleItem[]> {
  const response = await apiClient.get<CategoryArticleItem[]>("/category-article");
  return response.data;
}

export interface ArticleMetaTags {
  title: string | null;
  keywords: string | null;
  description: string | null;
}

export interface CategoryItem {
  id: string;
  name: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  category: CategoryItem;
  slug: string;
  excerpt: string;
  contentHtml: string;
  primaryImage: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
  seoKeywords: string | null;
  metaTags: ArticleMetaTags | null;
  author: string | null;
  publishedAt: string;
}

export interface ArticleResponse {
  success: boolean;
  message: string;
  data: ArticleItem;
}

export interface ArticlesListResponse {
  success: boolean;
  message: string;
  data: ArticleItem[];
}

export async function fetchArticles(params?: {
  categoryId?: string;
  search?: string;
}): Promise<ArticleItem[]> {
  const searchParams = new URLSearchParams();
  
  if (params?.categoryId && params.categoryId !== "All") {
    searchParams.set("categoryId", params.categoryId);
  }
  if (params?.search) {
    searchParams.set("search", params.search);
  }
  
  const queryString = searchParams.toString();
  const endpoint = queryString ? `/article?${queryString}` : "/article";
  
  const response = await apiClient.get<ArticleItem[]>(endpoint);
  return response.data;
}

export async function fetchArticleById(id: string): Promise<ArticleItem> {
  const response = await apiClient.get<ArticleItem>(`/article/${id}`);
  return response.data;
}

export async function fetchArticleBySlug(slug: string): Promise<ArticleItem> {
  const response = await apiClient.get<ArticleItem>(`/article/slug/${slug}`);
  return response.data;
}

export async function fetchArticlesSearch(query: string): Promise<ArticleItem[]> {
  const response = await apiClient.get<ArticleItem[]>(`/article/search/${encodeURIComponent(query)}`);
  return response.data;
}

export async function prefetchArticles() {
  await queryClient.prefetchQuery({
    queryKey: ['articles'],
    queryFn: () => fetchArticles(),
    staleTime: 5 * 60 * 1000,
  });
}

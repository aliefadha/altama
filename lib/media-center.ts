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
  title: string;
  keywords: string;
  description: string;
}

export interface ArticleItem {
  id: string;
  categoryId: string;
  title: string;
  slug: string;
  excerpt: string;
  contentHtml: string;
  primaryImage: string | null;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  metaTags: ArticleMetaTags;
  author: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
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

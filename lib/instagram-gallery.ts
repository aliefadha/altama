import { apiClient } from "@/lib/api-client";
import { getImageUrl } from "@/lib/utils";

export interface InstagramGalleryItem {
  id: string;
  title: string;
  link: string;
  image: string;
}

export interface InstagramGalleryResponse {
  success: boolean;
  message: string;
  data: InstagramGalleryItem[];
}

export async function fetchInstagramGallery(): Promise<InstagramGalleryItem[]> {
  const response = await apiClient.get<InstagramGalleryItem[]>("/instagram");
  return response.data;
}

export interface WebGalleryItem {
  id: string;
  title: string;
  image: string;
}

export async function fetchWebGallery(): Promise<WebGalleryItem[]> {
  const response = await apiClient.get<WebGalleryItem[]>("/gallery");
  return response.data;
}

export { getImageUrl };

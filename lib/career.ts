import { apiClient } from "@/lib/api-client";

export interface JobItem {
  id: string;
  title: string;
  overview: string;
  link: string;
}

export async function fetchJobs(): Promise<JobItem[]> {
  const response = await apiClient.get<JobItem[]>("/career");
  return response.data;
}

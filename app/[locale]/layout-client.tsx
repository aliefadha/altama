"use client";

import { usePathname } from 'next/navigation';
import { QueryClientProvider } from '@tanstack/react-query';
import AlvaChat from "@/components/Alvachat";
import { queryClient } from "@/lib/query-client";

export default function LocaleLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isContactUs = pathname?.includes('/contact-us');

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {!isContactUs && <AlvaChat />}
    </QueryClientProvider>
  );
}

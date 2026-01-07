"use client";

import { usePathname } from 'next/navigation';
import AlvaChat from "@/components/Alvachat";

export default function LocaleLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isContactUs = pathname?.includes('/contact-us');

  return (
    <>
      {children}
      {!isContactUs && <AlvaChat />}
    </>
  );
}
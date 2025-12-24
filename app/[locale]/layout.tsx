import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AlvaChat from "@/components/Alvachat";
import { inter } from "../font";

export const metadata: Metadata = {
  title: "Altama",
  description: "Altama - Engineering a Better World with Better Tools",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className={`${inter.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div className="w-full h-full">
            {children}
          </div>
          <AlvaChat />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

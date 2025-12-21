import type { Metadata } from "next";
import "./globals.css";
import { Inter, League_Spartan } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AlvaChat from "@/components/Alvachat";
import localFont from 'next/font/local'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
})

const helvetica = localFont({
  src: '../public/fonts/Helvetica.ttf',
  variable: '--font-helvetica',
})

export const metadata: Metadata = {
  title: "Altama",
  description: "Altama - Engineering a Better World with Better Tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${leagueSpartan.variable} ${helvetica.variable} antialiased`}
      >
        <Header />
        <div className="w-full h-full">
          {children}
        </div>
        <AlvaChat />
        <Footer />
      </body>
    </html>
  );
}

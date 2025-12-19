import type { Metadata } from "next";
import "./globals.css";
import { Inter, League_Spartan } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AlvaChat from "@/components/Alvachat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Altama Surya Anugerah",
  description: "Altama Surya Anugerah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${leagueSpartan.variable} antialiased`}
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

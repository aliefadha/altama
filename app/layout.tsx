import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AlvaChat from "@/components/Alvachat";
import { inter } from "./font";



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
        className={`${inter.variable} antialiased`}
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

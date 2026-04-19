import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kakas Global Limited — Premium Agricultural Exports from Nigeria",
  description: "Leading Nigerian exporter of premium agricultural raw materials including cashew nuts, sesame seeds, shea butter, hibiscus, ginger, and moringa. Serving international buyers in 50+ countries.",
  keywords: "Nigeria agricultural exports, cashew nuts, sesame seeds, shea butter, hibiscus flower, ginger export, moringa, agricultural raw materials, B2B export, Nigeria exporter",
  authors: [{ name: "Kakas Global Limited" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kakasglobal.com",
    title: "Kakas Global Limited — Premium Agricultural Exports from Nigeria",
    description: "Trusted Nigerian exporter of premium agricultural raw materials to buyers in 50+ countries.",
    siteName: "Kakas Global Limited",
    images: [{ url: "https://kakasglobal.com/og-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}

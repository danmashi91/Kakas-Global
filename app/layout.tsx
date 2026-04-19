import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KAKAS GLOBAL LIMITED - Premium Agricultural Exports from Nigeria",
  description: "Leading Nigerian exporter of premium agricultural raw materials including cashew nuts, cocoa beans, sesame seeds, shea butter, and more. Serving international buyers worldwide.",
  keywords: "Nigeria agricultural exports, cashew nuts, cocoa beans, sesame seeds, shea butter, hibiscus, ginger, moringa, agricultural raw materials, B2B export",
  authors: [{ name: "KAKAS GLOBAL LIMITED" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kakasglobal.com",
    title: "KAKAS GLOBAL LIMITED - Premium Agricultural Exports from Nigeria",
    description: "Leading Nigerian exporter of premium agricultural raw materials",
    siteName: "KAKAS GLOBAL LIMITED",
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

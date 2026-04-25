import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kakasglobal.com"),
  title: "KAKAS GLOBAL LIMITED — Premium Agricultural Exports from Nigeria",
  description: "KAKAS GLOBAL LIMITED exports premium agricultural raw materials from Nigeria to international markets. Cashew nuts, sesame seeds, shea butter, hibiscus, ginger, charcoal, and more.",
  keywords: "Nigeria agricultural exports, cashew nuts, sesame seeds, shea butter, hibiscus flower, ginger export, moringa, agricultural raw materials, B2B export, Nigeria exporter",
  authors: [{ name: "KAKAS GLOBAL LIMITED" }],
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "KAKAS GLOBAL LIMITED — Premium Agricultural Exports from Nigeria",
    description: "Your trusted partner for premium Nigerian agricultural raw materials. Cashew nuts, sesame seeds, shea butter, hibiscus flower, ginger, charcoal, and more.",
    url: "https://kakasglobal.com",
    siteName: "KAKAS GLOBAL LIMITED",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KAKAS GLOBAL LIMITED — Agricultural Exports from Nigeria",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KAKAS GLOBAL LIMITED — Premium Agricultural Exports from Nigeria",
    description: "Your trusted partner for premium Nigerian agricultural raw materials.",
    images: ["/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://media.globy.com" />
        <link rel="preconnect" href="https://files.selar.co" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}

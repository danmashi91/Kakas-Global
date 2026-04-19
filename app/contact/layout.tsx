import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Kakas Global Limited",
  description: "Reach our export specialists for product inquiries, pricing, and partnership opportunities. Available via email, phone, and WhatsApp. We respond within 24 hours.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

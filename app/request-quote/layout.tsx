import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote | Kakas Global Limited",
  description: "Get competitive pricing for Nigerian agricultural exports. Our multi-step quote form lets you specify product, quantity, Incoterms, and destination for an accurate, customised quotation.",
};

export default function RequestQuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

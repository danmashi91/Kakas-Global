import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agricultural Products | Kakas Global Limited",
  description: "Browse premium Nigerian agricultural exports: cashew nuts, sesame seeds, shea butter, hibiscus flower, ginger, moringa, charcoal, palm kernel shell, and soybeans. Request a quote today.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

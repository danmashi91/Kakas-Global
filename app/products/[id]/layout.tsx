import type { Metadata } from "next";
import { getProductById } from "@/data/products";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(parseInt(id));

  if (!product) {
    return {
      title: "Product Not Found | Kakas Global Limited",
    };
  }

  return {
    title: `${product.name} Export | Kakas Global Limited`,
    description: `${product.description} Available in multiple forms and packaging. MOQ: ${product.moq}. Request a quote from Kakas Global Limited.`,
  };
}

export default function ProductDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

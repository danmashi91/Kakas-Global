export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  forms: string[];
  packaging: string[];
  moq: string;
  season: string;
  certifications: string[];
  specifications?: {
    moistureContent?: string;
    purity?: string;
    size?: string;
    color?: string;
    shelfLife?: string;
    gingerolContent?: string;
    calorificValue?: string;
    ashContent?: string;
    proteinContent?: string;
    ffaContent?: string;
  };
  images?: string[];
  priceRange?: string;
  leadTime?: string;
  origin?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Cashew Nuts",
    category: "nuts",
    description: "Premium quality raw and processed cashew nuts from Nigeria's finest farms.",
    forms: ["Raw", "Processed", "Roasted", "Salted"],
    packaging: ["25kg bags", "50kg bags", "Custom packaging"],
    moq: "5 MT",
    season: "Year-round",
    certifications: ["NAFDAC", "SON", "EU Compliant", "FDA"],
    specifications: {
      moistureContent: "≤ 8%",
      purity: "≥ 99%",
      size: "W180-W240",
      color: "Creamy white to light ivory",
      shelfLife: "12 months"
    },
    priceRange: "$1,200 - $1,800/MT",
    leadTime: "2-4 weeks",
    origin: "Kano, Kaduna, Ogun States",
    images: [
      "https://media.globy.com/public/market/680b19d776146e0057abcd44/photos/680b19d776146e0057abcd54/680b19d776146e0057abcd54_md.webp",
      "https://media.globy.com/public/market/680b19d776146e0057abcd44/photos/680b19d776146e0057abcd5a/680b19d776146e0057abcd5a_md.webp",
      "https://media.globy.com/public/market/6984e9a6a6c2ce665bb5d773/photos/6984e9a7a6c2ce665bb5d7f4/6984e9a7a6c2ce665bb5d7f4_md.webp"
    ]
  },
  {
    id: 2,
    name: "Sesame Seeds",
    category: "seeds",
    description: "High-oil content sesame seeds, hulled and natural, perfect for oil extraction and food processing.",
    forms: ["Natural", "Hulled", "Toasted", "Black Sesame"],
    packaging: ["25kg PP bags", "50kg bags", "Bulk containers"],
    moq: "10 MT",
    season: "Nov-Feb",
    certifications: ["NAFDAC", "SON", "HACCP", "ISO 22000"],
    specifications: {
      moistureContent: "≤ 6%",
      purity: "≥ 99.8%",
      size: "Medium size",
      color: "White/Cream or Black",
      shelfLife: "18 months"
    },
    priceRange: "$1,500 - $2,200/MT",
    leadTime: "2-4 weeks",
    origin: "Nasarawa, Benue, Jigawa States",
    images: [
      "https://media.globy.com/public/market/68e4fd9c76a9730026281b82/photos/68e4fd9c76a9730026281ba9/68e4fd9c76a9730026281ba9_md.webp",
      "https://media.globy.com/public/market/695cd116270e10bb422d89f0/photos/695f615aba7ab4dda806e0db/695f615aba7ab4dda806e0db_md.webp",
      "https://media.globy.com/public/market/685da1c25d69290026de5a72/photos/685da1c25d69290026de5a7f/685da1c25d69290026de5a7f_md.webp"
    ]
  },
  {
    id: 3,
    name: "Shea Butter",
    category: "oils",
    description: "Unrefined shea butter with high vitamin content, ideal for cosmetics and food industries.",
    forms: ["Raw", "Refined", "Organic", "Fractionated"],
    packaging: ["25kg drums", "180kg drums", "Custom packaging"],
    moq: "2 MT",
    season: "Jun-Sep",
    certifications: ["USDA Organic", "Fair Trade", "GMP", "ISO 22716"],
    specifications: {
      moistureContent: "≤ 0.5%",
      purity: "100% pure",
      color: "Ivory to yellow",
      shelfLife: "24 months"
    },
    priceRange: "$3,000 - $5,000/MT",
    leadTime: "3-6 weeks",
    origin: "Kwara, Niger, Kebbi States",
    images: [
      "https://media.globy.com/public/market/68c417e5c8e97900262b7dc9/photos/68c417e6c8e97900262b7e2a/68c417e6c8e97900262b7e2a_md.webp",
      "https://media.globy.com/public/market/68769c664bc8130026a26373/photos/687a649a833033002674f66e/687a649a833033002674f66e_md.webp",
      "https://media.globy.com/public/market/68c417e5c8e97900262b7dc9/photos/68c417e6c8e97900262b7de0/68c417e6c8e97900262b7de0_md.webp",
      "https://media.globy.com/public/market/68c417e5c8e97900262b7dc9/photos/68c417e5c8e97900262b7dce/68c417e5c8e97900262b7dce_md.webp"
    ]
  },
  {
    id: 4,
    name: "Hibiscus Flower (Zobo)",
    category: "herbs",
    description: "Dried hibiscus flowers for herbal tea, beverages, and natural food coloring.",
    forms: ["Whole Dried", "Powder", "Extract", "Tea Bags"],
    packaging: ["20kg bags", "25kg cartons", "Custom packaging"],
    moq: "5 MT",
    season: "Dec-Mar",
    certifications: ["Organic", "Kosher", "Halal", "FDA"],
    specifications: {
      moistureContent: "≤ 10%",
      purity: "≥ 99%",
      color: "Deep red",
      shelfLife: "24 months"
    },
    priceRange: "$800 - $1,200/MT",
    leadTime: "2-4 weeks",
    origin: "Kano, Katsina, Jigawa States",
    images: [
      "https://files.selar.co/product-images/2023/products/ullrichfoods/hibiscus-flower-zobo-leav-selar.co-64533a3889b1c.jpg",
      "https://media.globy.com/public/market/673db3a07914cabeeda056bc/photos/673db3a07914cabeeda056c4/673db3a07914cabeeda056c4_md.webp",
      "https://media.globy.com/public/market/673db3a07914cabeeda056bc/photos/673db3a07914cabeeda056cc/673db3a07914cabeeda056cc_md.webp",
      "https://media.globy.com/public/market/673db3a07914cabeeda056bc/photos/673db3a17914cabeeda056d0/673db3a17914cabeeda056d0_md.webp"
    ]
  },
  {
    id: 5,
    name: "Charcoal (Hardwood)",
    category: "other",
    description: "Premium hardwood charcoal with high calorific value and long burning time.",
    forms: ["Lump Charcoal", "Briquettes", "Activated Carbon"],
    packaging: ["10kg bags", "25kg bags", "Bulk"],
    moq: "20 MT",
    season: "Year-round",
    certifications: ["FSC", "Sustainable Sourcing", "Quality Certified"],
    specifications: {
      calorificValue: "≥ 7,500 kcal/kg",
      ashContent: "≤ 3%",
      moistureContent: "≤ 5%",
      shelfLife: "36 months"
    },
    priceRange: "$300 - $500/MT",
    leadTime: "1-3 weeks",
    origin: "Oyo, Osun, Ekiti States",
    images: [
      "https://media.globy.com/public/market/689f236ae897b100265ee176/photos/689f236ae897b100265ee17f/689f236ae897b100265ee17f_md.webp",
      "https://media.globy.com/public/market/689f236ae897b100265ee176/photos/689f236ae897b100265ee183/689f236ae897b100265ee183_md.webp",
      "https://media.globy.com/public/market/689f236ae897b100265ee176/photos/689f236ae897b100265ee185/689f236ae897b100265ee185_md.webp"
    ]
  },
  {
    id: 6,
    name: "Palm Kernel Shell",
    category: "other",
    description: "Biomass fuel with high calorific value, ideal for power generation and industrial heating.",
    forms: ["Crushed", "Whole", "Powder"],
    packaging: ["Bulk", "Big bags", "Container load"],
    moq: "50 MT",
    season: "Year-round",
    certifications: ["Sustainable Sourcing", "Quality Certified"],
    specifications: {
      calorificValue: "≥ 4,000 kcal/kg",
      ashContent: "≤ 5%",
      moistureContent: "≤ 15%",
      shelfLife: "24 months"
    },
    priceRange: "$150 - $250/MT",
    leadTime: "1-2 weeks",
    origin: "Delta, Edo, Rivers States",
    images: [
      "https://media.globy.com/public/market/67d5662120cc1b033380fb3b/photos/67d5662120cc1b033380fb51/67d5662120cc1b033380fb51_md.webp",
      "https://media.globy.com/public/market/69c830ca20c22d002628c525/photos/69c830ca20c22d002628c531/69c830ca20c22d002628c531_md.webp"
    ]
  },
  {
    id: 7,
    name: "Moringa",
    category: "herbs",
    description: "Moringa leaves and powder with high nutritional value for food supplements and cosmetics.",
    forms: ["Leaves", "Powder", "Oil", "Capsules"],
    packaging: ["1kg bags", "25kg bags", "Custom packaging"],
    moq: "1 MT",
    season: "Year-round",
    certifications: ["Organic", "GMP", "FDA", "EU Compliant"],
    specifications: {
      moistureContent: "≤ 8%",
      purity: "100% pure",
      proteinContent: "≥ 25%",
      shelfLife: "24 months"
    },
    priceRange: "$2,000 - $3,500/MT",
    leadTime: "2-4 weeks",
    origin: "Kano, Kaduna, Plateau States",
    images: [
      "https://media.globy.com/public/market/68a6fa065e14190e576b07c5/photos/68a6fa065e14190e576b07cc/68a6fa065e14190e576b07cc_md.webp",
      "https://media.globy.com/public/market/6863f420a5de14025da77850/photos/6863f420a5de14025da7785a/6863f420a5de14025da7785a_md.webp"
    ]
  },
  {
    id: 8,
    name: "Dried Split Ginger",
    category: "spices",
    description: "Sun-dried split ginger pieces with concentrated flavor for spice blends and extracts.",
    forms: ["Split Pieces", "Powder", "Granules"],
    packaging: ["20kg bags", "25kg cartons", "Custom packaging"],
    moq: "5 MT",
    season: "Year-round",
    certifications: ["NAFDAC", "SON", "HACCP", "ISO 22000"],
    specifications: {
      moistureContent: "≤ 10%",
      purity: "≥ 99%",
      gingerolContent: "≥ 1.5%",
      shelfLife: "24 months"
    },
    priceRange: "$800 - $1,200/MT",
    leadTime: "2-4 weeks",
    origin: "Kaduna, Nasarawa, Benue States",
    images: [
      "https://media.globy.com/public/market/67d9cf7e0dd7e201b6322562/photos/67d9cf7e0dd7e201b6322568/67d9cf7e0dd7e201b6322568_md.webp",
      "https://media.globy.com/public/market/6852c71f880cec00f9b8c2b5/photos/6852c71f880cec00f9b8c2be/6852c71f880cec00f9b8c2be_md.webp"
    ]
  },
  {
    id: 9,
    name: "Soybeans",
    category: "beans",
    description: "Non-GMO soybeans with high protein content for animal feed and food processing.",
    forms: ["Whole", "Crushed", "Meal", "Flour"],
    packaging: ["50kg bags", "Big bags", "Bulk"],
    moq: "20 MT",
    season: "Sep-Dec",
    certifications: ["Non-GMO", "NAFDAC", "SON", "HACCP"],
    specifications: {
      proteinContent: "≥ 35%",
      moistureContent: "≤ 13%",
      purity: "≥ 99%",
      shelfLife: "12 months"
    },
    priceRange: "$400 - $600/MT",
    leadTime: "2-4 weeks",
    origin: "Benue, Plateau, Taraba States",
    images: [
      "https://media.globy.com/public/market/68502d64a31bc4096dc2a868/photos/68502d64a31bc4096dc2a86e/68502d64a31bc4096dc2a86e_md.webp",
      "https://media.globy.com/public/market/68502d64a31bc4096dc2a868/photos/68502d64a31bc4096dc2a870/68502d64a31bc4096dc2a870_md.webp",
      "https://media.globy.com/public/market/67b3d9fb6aea370118346c6a/photos/67b45e4aaa38d60169fde434/67b45e4aaa38d60169fde434_md.webp"
    ]
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "nuts", name: "Nuts" },
  { id: "beans", name: "Beans" },
  { id: "seeds", name: "Seeds" },
  { id: "oils", name: "Oils & Butter" },
  { id: "herbs", name: "Herbs & Tea" },
  { id: "spices", name: "Spices" },
  { id: "other", name: "Other Products" },
];

export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter(product => product.category === category);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery) ||
    product.category.toLowerCase().includes(lowerQuery)
  );
}
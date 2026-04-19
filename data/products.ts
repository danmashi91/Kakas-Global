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
    origin: "Kano, Kaduna, Ogun States"
  },
  {
    id: 2,
    name: "Cocoa Beans",
    category: "beans",
    description: "Fermented and dried cocoa beans with excellent flavor profiles for chocolate production.",
    forms: ["Fermented", "Unfermented", "Cocoa Powder", "Cocoa Butter"],
    packaging: ["60kg jute bags", "Big bags", "Custom packaging"],
    moq: "10 MT",
    season: "Main: Oct-Mar, Mid: May-Aug",
    certifications: ["UTZ", "Rainforest", "Organic", "EU Compliant"],
    specifications: {
      moistureContent: "≤ 7%",
      purity: "≥ 99.5%",
      size: "Medium to large beans",
      color: "Brown",
      shelfLife: "24 months"
    },
    priceRange: "$2,500 - $3,500/MT",
    leadTime: "3-5 weeks",
    origin: "Ondo, Cross River, Ogun States"
  },
  {
    id: 3,
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
    origin: "Nasarawa, Benue, Jigawa States"
  },
  {
    id: 4,
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
    origin: "Kwara, Niger, Kebbi States"
  },
  {
    id: 5,
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
    origin: "Kano, Katsina, Jigawa States"
  },
  {
    id: 6,
    name: "Ginger",
    category: "spices",
    description: "Fresh and dried ginger with high gingerol content, suitable for food and pharmaceutical use.",
    forms: ["Fresh", "Dried", "Powder", "Oil"],
    packaging: ["15kg mesh bags", "25kg bags", "Custom packaging"],
    moq: "10 MT",
    season: "Year-round",
    certifications: ["NAFDAC", "SON", "EU Compliant", "FDA"],
    specifications: {
      moistureContent: "≤ 12% (dried)",
      purity: "≥ 99%",
      gingerolContent: "≥ 2%",
      shelfLife: "18 months"
    },
    priceRange: "$600 - $1,000/MT",
    leadTime: "2-4 weeks",
    origin: "Kaduna, Nasarawa, Benue States"
  },
  {
    id: 7,
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
    origin: "Oyo, Osun, Ekiti States"
  },
  {
    id: 8,
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
    origin: "Delta, Edo, Rivers States"
  },
  {
    id: 9,
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
    origin: "Kano, Kaduna, Plateau States"
  },
  {
    id: 10,
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
    origin: "Kaduna, Nasarawa, Benue States"
  },
  {
    id: 11,
    name: "Palm Oil",
    category: "oils",
    description: "Crude and refined palm oil for food processing and industrial applications.",
    forms: ["Crude Palm Oil", "Refined Palm Oil", "Palm Olein", "Palm Stearin"],
    packaging: ["180kg drums", "Flexitanks", "Bulk vessels"],
    moq: "20 MT",
    season: "Year-round",
    certifications: ["RSPO", "MPOB", "NAFDAC", "EU Compliant"],
    specifications: {
      ffaContent: "≤ 5% (crude)",
      moistureContent: "≤ 0.1%",
      color: "Red to orange",
      shelfLife: "12 months"
    },
    priceRange: "$800 - $1,200/MT",
    leadTime: "3-5 weeks",
    origin: "Delta, Edo, Cross River States"
  },
  {
    id: 12,
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
    origin: "Benue, Plateau, Taraba States"
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
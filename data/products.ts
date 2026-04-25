export interface Product {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  certifications: string[];
  forms: string[];
  moq: string;
  origin: string;
  images: string[] | null;
  category: string;
  hsCode: string;
  specifications: { label: string; value: string }[];
  packaging: { label: string; value: string }[];
  season: string;
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export const products: Product[] = [
  {
    id: "cashew-nuts",
    name: "Cashew Nuts",
    description: "Premium quality raw cashew nuts (RCN) and cashew kernels sourced from Nigeria's finest growing regions.",
    fullDescription:
      "Nigeria is one of the world's largest producers of cashew nuts. Our cashew nuts are sourced from the best growing regions including Kogi, Enugu, and Oyo states. We offer both Raw Cashew Nuts (RCN) and processed cashew kernels graded to international standards. Our cashews are known for their high out-turn percentage, excellent kernel quality, and sweet flavor profile.",
    certifications: ["NAFDAC", "SON", "NEPC"],
    forms: ["Raw Cashew Nuts (RCN)", "Cashew Kernels (White)", "Cashew Kernels (Scorched)", "Cashew Kernels (Dessert)"],
    moq: "1 x 20ft Container",
    origin: "Nigeria",
    images: [
      "https://media.globy.com/public/market/680b19d776146e0057abcd44/photos/680b19d776146e0057abcd54/680b19d776146e0057abcd54_md.webp",
      "https://media.globy.com/public/market/680b19d776146e0057abcd44/photos/680b19d776146e0057abcd5a/680b19d776146e0057abcd5a_md.webp",
      "https://media.globy.com/public/market/6984e9a6a6c2ce665bb5d773/photos/6984e9a7a6c2ce665bb5d7f4/6984e9a7a6c2ce665bb5d7f4_md.webp",
    ],
    category: "Nuts & Seeds",
    hsCode: "0801.31",
    specifications: [
      { label: "Out-turn", value: "48-52 lbs (Standard), 53+ lbs (Premium)" },
      { label: "Moisture Content", value: "≤ 8%" },
      { label: "Nut Count", value: "170-200 per kg" },
      { label: "Defective", value: "≤ 5%" },
      { label: "Kernel Grade", value: "W180, W210, W240, W320, W450 (as required)" },
    ],
    packaging: [
      { label: "RCN", value: "80 kg jute bags" },
      { label: "Kernels", value: "25 kg vacuum-packed cartons" },
      { label: "Container", value: "20ft FCL (approx. 18-19 MT)" },
    ],
    season: "February – June",
  },
  {
    id: "sesame-seeds",
    name: "Sesame Seeds",
    description: "High-quality natural sesame seeds with excellent oil content, perfect for oil extraction and confectionery.",
    fullDescription:
      "Our sesame seeds are sourced from smallholder farmers in Nasarawa, Benue, and Jigawa states. We offer both natural and mechanically cleaned sesame seeds with high oil content and purity levels. Nigerian sesame seeds are prized in international markets for their rich nutty flavor and high oil yield, making them ideal for tahini production, baking, and oil extraction.",
    certifications: ["NAFDAC", "SON", "NEPC"],
    forms: ["Natural White", "Mechanically Cleaned", "Sortex Cleaned"],
    moq: "1 x 20ft Container",
    origin: "Nigeria",
    images: [
      "https://media.globy.com/public/market/68e4fd9c76a9730026281b82/photos/68e4fd9c76a9730026281ba9/68e4fd9c76a9730026281ba9_md.webp",
      "https://media.globy.com/public/market/695cd116270e10bb422d89f0/photos/695f615aba7ab4dda806e0db/695f615aba7ab4dda806e0db_md.webp",
      "https://media.globy.com/public/market/685da1c25d69290026de5a72/photos/685da1c25d69290026de5a7f/685da1c25d69290026de5a7f_md.webp",
    ],
    category: "Nuts & Seeds",
    hsCode: "1207.40",
    specifications: [
      { label: "Purity", value: "99% – 99.9% (depending on grade)" },
      { label: "Moisture Content", value: "≤ 6%" },
      { label: "Oil Content", value: "50% – 55%" },
      { label: "FFA", value: "≤ 2%" },
      { label: "Admixture", value: "≤ 1%" },
    ],
    packaging: [
      { label: "Standard", value: "50 kg PP bags" },
      { label: "Container", value: "20ft FCL (approx. 19-20 MT)" },
    ],
    season: "October – March",
  },
  {
    id: "shea-butter",
    name: "Shea Butter",
    description: "Pure, unrefined shea butter extracted from West African shea nuts, rich in vitamins and essential fatty acids.",
    fullDescription:
      "Our shea butter is produced from hand-harvested shea nuts collected from the shea parklands across Nigeria's middle belt. We offer both traditional unrefined (Grade A) and refined shea butter suitable for cosmetic, pharmaceutical, and food applications. Our shea butter is known for its high unsaponifiable content and excellent moisturizing properties.",
    certifications: ["NAFDAC", "SON", "NEPC"],
    forms: ["Raw", "Refined", "Fractionated"],
    moq: "1 x 20ft Container",
    origin: "Nigeria",
    images: [
      "https://media.globy.com/public/market/68c417e5c8e97900262b7dc9/photos/68c417e6c8e97900262b7e2a/68c417e6c8e97900262b7e2a_md.webp",
      "https://media.globy.com/public/market/68769c664bc8130026a26373/photos/687a649a833033002674f66e/687a649a833033002674f66e_md.webp",
      "https://media.globy.com/public/market/68c417e5c8e97900262b7dc9/photos/68c417e6c8e97900262b7de0/68c417e6c8e97900262b7de0_md.webp",
      "https://media.globy.com/public/market/68c417e5c8e97900262b7dc9/photos/68c417e5c8e97900262b7dce/68c417e5c8e97900262b7dce_md.webp",
    ],
    category: "Oils & Fats",
    hsCode: "1515.90",
    specifications: [
      { label: "FFA", value: "≤ 1% (Refined), ≤ 3% (Unrefined)" },
      { label: "Moisture & Volatile Matter", value: "≤ 0.1%" },
      { label: "Color (Lovibond)", value: "1.5R 15Y max (Refined)" },
      { label: "Melting Point", value: "32°C – 45°C" },
      { label: "Peroxide Value", value: "≤ 2 meq/kg" },
    ],
    packaging: [
      { label: "Unrefined", value: "25 kg blocks, 50 kg cartons" },
      { label: "Refined", value: "25 kg cartons, 200 kg drums" },
      { label: "Container", value: "20ft FCL (approx. 18-20 MT)" },
    ],
    season: "April – September",
  },
  {
    id: "hibiscus-flower",
    name: "Hibiscus Flower",
    description: "Dried hibiscus flowers (Hibiscus sabdariffa) with deep red color, prized for herbal teas and natural colorants.",
    fullDescription:
      "Our hibiscus flowers are cultivated in the fertile regions of Northern Nigeria, particularly Katsina, Kano, and Zamfara states. We offer deep red, well-dried hibiscus calyces (also known as Roselle or Zobo) that are carefully hand-picked and sun-dried to preserve their natural color, flavor, and nutritional properties. Nigerian hibiscus is highly sought after for its intense red color and tart flavor profile.",
    certifications: ["NAFDAC", "SON", "NEPC"],
    forms: ["Dried Whole", "Dried Cut", "Powdered"],
    moq: "1 x 20ft Container",
    origin: "Nigeria",
    images: [
      "https://files.selar.co/product-images/2023/products/ullrichfoods/hibiscus-flower-zobo-leav-selar.co-64533a3889b1c.jpg",
      "https://media.globy.com/public/market/673db3a07914cabeeda056bc/photos/673db3a07914cabeeda056c4/673db3a07914cabeeda056c4_md.webp",
      "https://media.globy.com/public/market/673db3a07914cabeeda056bc/photos/673db3a07914cabeeda056cc/673db3a07914cabeeda056cc_md.webp",
      "https://media.globy.com/public/market/673db3a07914cabeeda056bc/photos/673db3a17914cabeeda056d0/673db3a17914cabeeda056d0_md.webp",
    ],
    category: "Herbs & Spices",
    hsCode: "1211.90",
    specifications: [
      { label: "Color", value: "Deep Red / Dark Red" },
      { label: "Moisture Content", value: "≤ 12%" },
      { label: "Purity", value: "≥ 98%" },
      { label: "Foreign Matter", value: "≤ 1%" },
      { label: "Stems & Calyces", value: "≤ 2%" },
    ],
    packaging: [
      { label: "Standard", value: "25 kg or 50 kg PP bags" },
      { label: "Container", value: "20ft FCL (approx. 10-12 MT)" },
    ],
    season: "October – February",
  },
  {
    id: "charcoal",
    name: "Charcoal",
    description: "High-quality hardwood lump charcoal with excellent calorific value, ideal for shisha, BBQ, and industrial use.",
    fullDescription:
      "Our charcoal is produced from sustainably sourced Nigerian hardwood, processed using traditional kiln methods that ensure consistent quality and high carbon content. We offer various grades suitable for shisha/hookah, barbecue grilling, and industrial applications. Our charcoal is known for its long burn time, minimal smoke, and high heat output.",
    certifications: ["SON", "NEPC"],
    forms: ["Lump Charcoal", "Briquettes", "Shisha Charcoal"],
    moq: "1 x 20ft Container",
    origin: "Nigeria",
    images: [
      "https://media.globy.com/public/market/689f236ae897b100265ee176/photos/689f236ae897b100265ee17f/689f236ae897b100265ee17f_md.webp",
      "https://media.globy.com/public/market/689f236ae897b100265ee176/photos/689f236ae897b100265ee183/689f236ae897b100265ee183_md.webp",
      "https://media.globy.com/public/market/689f236ae897b100265ee176/photos/689f236ae897b100265ee185/689f236ae897b100265ee185_md.webp",
    ],
    category: "Energy & Fuel",
    hsCode: "4402.10",
    specifications: [
      { label: "Fixed Carbon", value: "≥ 75%" },
      { label: "Calorific Value", value: "≥ 7,000 kcal/kg" },
      { label: "Moisture Content", value: "≤ 8%" },
      { label: "Ash Content", value: "≤ 3%" },
      { label: "Volatile Matter", value: "≤ 15%" },
    ],
    packaging: [
      { label: "Standard", value: "10 kg, 15 kg, or 25 kg PP bags" },
      { label: "Container", value: "20ft FCL (approx. 18-20 MT)" },
    ],
    season: "Year-round",
  },
  {
    id: "palm-kernel-shell",
    name: "Palm Kernel Shell",
    description: "High-grade palm kernel shells (PKS) used as biomass fuel for industrial heating and energy generation.",
    fullDescription:
      "Our palm kernel shells are a by-product of palm oil processing, sourced from palm oil mills in Southern Nigeria. PKS is an increasingly popular biomass fuel used in cement kilns, power plants, and industrial boilers. We offer clean, well-screened palm kernel shells with low moisture content and high calorific value.",
    certifications: ["SON", "NEPC"],
    forms: ["Raw PKS", "Screened PKS", "Crushed PKS"],
    moq: "1 x 20ft Container",
    origin: "Nigeria",
    images: [
      "https://media.globy.com/public/market/67d5662120cc1b033380fb3b/photos/67d5662120cc1b033380fb51/67d5662120cc1b033380fb51_md.webp",
      "https://media.globy.com/public/market/69c830ca20c22d002628c525/photos/69c830ca20c22d002628c531/69c830ca20c22d002628c531_md.webp",
    ],
    category: "Energy & Fuel",
    hsCode: "2306.60",
    specifications: [
      { label: "Calorific Value", value: "≥ 4,000 kcal/kg" },
      { label: "Moisture Content", value: "≤ 12%" },
      { label: "Ash Content", value: "≤ 3%" },
      { label: "Size", value: "5-15 mm (screened)" },
      { label: "Fines", value: "≤ 5%" },
    ],
    packaging: [
      { label: "Standard", value: "1.5 MT jumbo bags" },
      { label: "Container", value: "20ft FCL (approx. 18-20 MT)" },
    ],
    season: "Year-round",
  },
  {
    id: "moringa",
    name: "Moringa",
    description: "Premium moringa oleifera products — leaves, powder, and seeds — known for exceptional nutritional value.",
    fullDescription:
      "Our moringa is cultivated in the nutrient-rich soils of Northern Nigeria. We offer a range of moringa products including dried leaf powder, whole leaves, and seeds. Nigerian moringa is recognized for its high nutritional density, with significant levels of vitamins, minerals, and antioxidants. Our processing methods preserve the natural goodness of this superfood.",
    certifications: ["NAFDAC", "SON", "NEPC"],
    forms: ["Moringa Leaf Powder", "Dried Whole Leaves", "Moringa Seeds", "Moringa Oil"],
    moq: "500 kg",
    origin: "Nigeria",
    images: [
      "https://media.globy.com/public/market/68a6fa065e14190e576b07c5/photos/68a6fa065e14190e576b07cc/68a6fa065e14190e576b07cc_md.webp",
      "https://media.globy.com/public/market/6863f420a5de14025da77850/photos/6863f420a5de14025da7785a/6863f420a5de14025da7785a_md.webp",
    ],
    category: "Herbs & Spices",
    hsCode: "1211.90",
    specifications: [
      { label: "Moisture Content", value: "≤ 8%" },
      { label: "Purity", value: "≥ 99%" },
      { label: "Protein Content", value: "≥ 25%" },
      { label: "Fiber", value: "≤ 8%" },
      { label: "Ash Content", value: "≤ 8%" },
    ],
    packaging: [
      { label: "Powder", value: "25 kg multi-layer paper bags with inner liner" },
      { label: "Leaves", value: "25 kg PP bags" },
      { label: "Container", value: "20ft FCL (approx. 8-10 MT)" },
    ],
    season: "Year-round",
  },
  {
    id: "dried-split-ginger",
    name: "Dried Split Ginger",
    description: "Aromatic dried split ginger with high oleoresin content, perfect for spice blends, pharmaceuticals, and essential oils.",
    fullDescription:
      "Our dried split ginger is sourced from Kaduna, Gombe, and Bauchi states — Nigeria's premier ginger-growing regions. Nigerian ginger is renowned for its high oleoresin and volatile oil content, making it highly valued in international markets. Our ginger is carefully harvested, peeled, sun-dried, and split to preserve its pungent aroma and bioactive compounds.",
    certifications: ["NAFDAC", "SON", "NEPC"],
    forms: ["Dried Split", "Dried Whole", "Ginger Powder", "Ginger Oleoresin"],
    moq: "1 x 20ft Container",
    origin: "Nigeria",
    images: [
      "https://media.globy.com/public/market/67d9cf7e0dd7e201b6322562/photos/67d9cf7e0dd7e201b6322568/67d9cf7e0dd7e201b6322568_md.webp",
      "https://media.globy.com/public/market/6852c71f880cec00f9b8c2b5/photos/6852c71f880cec00f9b8c2be/6852c71f880cec00f9b8c2be_md.webp",
    ],
    category: "Herbs & Spices",
    hsCode: "0910.11",
    specifications: [
      { label: "Volatile Oil Content", value: "≥ 2%" },
      { label: "Moisture Content", value: "≤ 10%" },
      { label: "Purity", value: "≥ 98%" },
      { label: "Foreign Matter", value: "≤ 1%" },
      { label: "Ash Content", value: "≤ 6%" },
    ],
    packaging: [
      { label: "Standard", value: "25 kg or 50 kg PP bags" },
      { label: "Container", value: "20ft FCL (approx. 12-14 MT)" },
    ],
    season: "October – March",
  },
  {
    id: "soybeans",
    name: "Soybeans",
    description: "Non-GMO soybeans with high protein and oil content, ideal for animal feed, oil extraction, and human consumption.",
    fullDescription:
      "Our soybeans are sourced from the agricultural heartlands of Benue, Taraba, and Kwara states. We offer Non-GMO soybeans with consistently high protein and oil content. Nigerian soybeans are increasingly preferred in international markets for their quality and traceability. Our soybeans are cleaned, graded, and prepared according to buyer specifications.",
    certifications: ["NAFDAC", "SON", "NEPC"],
    forms: ["Non-GMO Whole Beans", "Cleaned & Graded", "Soybean Meal"],
    moq: "1 x 20ft Container",
    origin: "Nigeria",
    images: [
      "https://media.globy.com/public/market/68502d64a31bc4096dc2a868/photos/68502d64a31bc4096dc2a86e/68502d64a31bc4096dc2a86e_md.webp",
      "https://media.globy.com/public/market/68502d64a31bc4096dc2a868/photos/68502d64a31bc4096dc2a870/68502d64a31bc4096dc2a870_md.webp",
      "https://media.globy.com/public/market/67b3d9fb6aea370118346c6a/photos/67b45e4aaa38d60169fde434/67b45e4aaa38d60169fde434_md.webp",
    ],
    category: "Grains & Legumes",
    hsCode: "1201.90",
    specifications: [
      { label: "Protein Content", value: "≥ 38%" },
      { label: "Oil Content", value: "≥ 18%" },
      { label: "Moisture Content", value: "≤ 10%" },
      { label: "Foreign Matter", value: "≤ 1%" },
      { label: "Splits & Damaged", value: "≤ 3%" },
    ],
    packaging: [
      { label: "Standard", value: "50 kg PP bags" },
      { label: "Container", value: "20ft FCL (approx. 19-20 MT)" },
    ],
    season: "October – March",
  },
];

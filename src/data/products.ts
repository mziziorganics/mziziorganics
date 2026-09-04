import hairOil from "@/assets/hair-growth-oil.jpg";
import dermaRoller from "@/assets/derma-roller.jpg";
import dermaRollerAlt from "@/assets/derma-roller-alt.jpg";

export interface ProductDetail {
  label: string;
  value: string;
}

export interface ProductReview {
  name: string;
  rating: number;
  body: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  price: string;
  priceValue: number;
  image: string;
  hoverImage: string;
  images: string[];
  isNew?: boolean;
  material: string;
  dimensions: string;
  weight: string;
  editorNote: string;
  description: string[];
  details: ProductDetail[];
  care: string[];
  rating: number;
  reviews: ProductReview[];
}

export const products: Product[] = [
  {
    id: "hair-growth-oil",
    name: "Hair Growth Oil",
    category: "Haircare",
    categorySlug: "haircare",
    price: "KSh 490",
    priceValue: 490,
    image: hairOil,
    hoverImage: hairOil,
    images: [hairOil],
    isNew: true,
    material: "Castor, Black Seed, Rosemary, Coconut & Fenugreek",
    dimensions: "120 ml applicator bottle",
    weight: "100% natural",
    editorNote:
      '"A scalp ritual rather than a quick fix — a few drops, two minutes of massage, and roots that feel awake again."',
    description: [],
    details: [
      { label: "SKU", value: "MZ-HGO-030" },
      { label: "Collection", value: "Root Ritual" },
      { label: "Key actives", value: "Rosemary, Castor, Amla" },
      { label: "Cruelty free", value: "Yes" },
    ],
    care: [
      "• Apply a few drops directly to the scalp",
      "• Massage gently to lift circulation",
      "• Use 5–6 times weekly",
      "• For external use only — avoid contact with eyes",
      "• Store in a cool, dry place",
    ],
    rating: 4.9,
    reviews: [],
  },
  {
    id: "derma-roller",
    name: "Derma Roller",
    category: "Haircare",
    categorySlug: "haircare",
    price: "KSh 490",
    priceValue: 490,
    image: dermaRoller,
    hoverImage: dermaRollerAlt,
    images: [dermaRoller, dermaRollerAlt],
    material: "540 medical-grade titanium needles, 0.5 mm",
    dimensions: "13.5 cm handle, 2 cm roller head",
    weight: "46 g",
    editorNote:
      '"The quiet multiplier — it turns whatever you apply next into something your skin actually absorbs."',
    description: [
      "540 medical-grade titanium microneedles set into a balanced, matte handle. Rolled over clean skin or scalp, it opens thousands of micro-channels so serums travel deeper instead of sitting on the surface.",
      "The 0.5 mm depth is chosen deliberately: enough to trigger collagen response and boost absorption, gentle enough for weekly home use.",
    ],
    details: [
      { label: "SKU", value: "MZ-DRM-050" },
      { label: "Collection", value: "Root Ritual" },
      { label: "Needle depth", value: "0.5 mm" },
      { label: "Storage case", value: "Included" },
    ],
    care: [
      "• Sterilise in 70% alcohol for five minutes before and after every use",
      "• Roll in four directions, four passes each, with light pressure",
      "• Follow immediately with the Hair Growth Oil or your serum",
      "• Replace the head every three months of weekly use",
    ],
    rating: 4.8,
    reviews: [],
  },
];

export const getProduct = (id?: string): Product =>
  products.find((product) => product.id === id) ?? products[0];

export const formatPrice = (value: number) =>
  `KSh ${value.toLocaleString("en-KE")}`;

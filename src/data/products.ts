import hairOil from "@/assets/hair-growth-oil.jpg";
import hairOilAlt from "@/assets/hair-growth-oil-alt.jpg";
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
    price: "€48",
    priceValue: 48,
    image: hairOil,
    hoverImage: hairOilAlt,
    images: [hairOil, hairOilAlt],
    isNew: true,
    material: "Rosemary, Castor & Amla in Cold-Pressed Jojoba",
    dimensions: "30 ml / 1 fl oz amber glass",
    weight: "112 g including dropper",
    editorNote:
      '"A scalp ritual rather than a quick fix — three drops, two minutes of massage, and roots that feel awake again."',
    description: [
      "A featherlight scalp serum built around cold-pressed jojoba, rosemary leaf and amla — a blend chosen to wake dormant follicles without leaving weight or shine behind.",
      "Formulated with no silicones, no mineral oil and no synthetic fragrance. Every batch is pressed in small runs so the actives reach your scalp while they are still alive.",
    ],
    details: [
      { label: "SKU", value: "MZ-HGO-030" },
      { label: "Collection", value: "Root Ritual" },
      { label: "Key actives", value: "Rosemary, Castor, Amla" },
      { label: "Cruelty free", value: "Yes" },
    ],
    care: [
      "• Apply three to five drops directly to a dry or damp scalp",
      "• Massage for two minutes to lift circulation",
      "• Use three evenings a week, or before a wash day",
      "• Store away from direct sunlight to protect the actives",
    ],
    rating: 4.9,
    reviews: [
      {
        name: "Amara K.",
        rating: 5,
        body: '"Six weeks in and my edges are visibly filling back in. It absorbs completely — no pillow stains, no heaviness."',
      },
      {
        name: "Nadia S.",
        rating: 5,
        body: '"The rosemary scent is real, not perfumed. My scalp stopped flaking within two weeks of switching."',
      },
      {
        name: "Priya R.",
        rating: 4,
        body: '"Beautiful dropper and it lasts a long time. I wish the bottle were bigger, which says everything."',
      },
    ],
  },
  {
    id: "derma-roller",
    name: "Derma Roller",
    category: "Haircare",
    categorySlug: "haircare",
    price: "€36",
    priceValue: 36,
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
    reviews: [
      {
        name: "Zainab M.",
        rating: 5,
        body: '"Paired with the oil it is a completely different result. My hairline responded within a month."',
      },
      {
        name: "Elise T.",
        rating: 5,
        body: '"The needles are genuinely smooth — no drag, no scratching. The handle feels premium in the hand."',
      },
      {
        name: "Hana B.",
        rating: 4,
        body: '"Clear instructions and a proper storage case. Start slow if you are new to microneedling."',
      },
    ],
  },
];

export const getProduct = (id?: string): Product =>
  products.find((product) => product.id === id) ?? products[0];

export const formatPrice = (value: number) =>
  `€${value.toLocaleString("en-GB")}`;

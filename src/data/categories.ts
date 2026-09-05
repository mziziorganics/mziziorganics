export interface CategoryInfo {
  slug: string;
  title: string;
  intro: string;
  comingSoon?: boolean;
  comingSoonNote?: string;
}

export const categories: CategoryInfo[] = [
  {
    slug: "haircare",
    title: "Haircare",
    intro:
      "A deliberately short line — a cold-pressed scalp oil and the tool that drives it deeper.",
  },
  {
    slug: "health-and-wellness",
    title: "Health & Wellness",
    intro: "Organic blends for the gut and the body — where our story began.",
    comingSoon: true,
    comingSoonNote:
      "Mzizi began with a family battle against severe stomach acidity, and relief came from raw, organic remedies. We are formulating that same care into a small range of wellness blends — and nothing ships until it works.",
  },
  {
    slug: "skincare",
    title: "Skincare",
    intro: "Whole-plant botanicals for skin that is fed, not coated.",
    comingSoon: true,
    comingSoonNote:
      "Cold-pressed oils and single-origin botanicals for the skin are in small-batch testing. We would rather arrive late than arrive with fluff.",
  },
];

export const getCategory = (slug?: string): CategoryInfo =>
  categories.find((category) => category.slug === slug) ?? {
    slug: slug ?? "all-products",
    title: "All Products",
    intro:
      "A deliberately short line — a cold-pressed scalp oil and the tool that drives it deeper.",
  };

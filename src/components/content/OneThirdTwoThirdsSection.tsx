import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";

const steps = [
  {
    number: "01",
    title: "Roll",
    body: "Four light passes with the 0.5 mm titanium roller across a clean, dry scalp.",
  },
  {
    number: "02",
    title: "Feed",
    body: "Three to five drops of the rosemary, castor and amla oil straight to the roots.",
  },
  {
    number: "03",
    title: "Repeat",
    body: "Once a week for the roller, three evenings a week for the oil. That is the whole ritual.",
  },
];

const OneThirdTwoThirdsSection = () => {
  return (
    <section className="w-full mb-16">
      <div className="bg-brand text-brand-foreground px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          <div className="lg:col-span-1">
            <p className="text-[0.65rem] tracking-[0.3em] uppercase text-brand-foreground/70 mb-4">
              How it works
            </p>
            <h2 className="text-2xl md:text-3xl font-light leading-tight mb-6">
              Two products. Three steps. No cabinet full of half-used bottles.
            </h2>
            <Link
              to="/product/derma-roller"
              className="inline-flex items-center gap-2 text-sm font-light border-b border-brand-foreground/40 pb-1 hover:border-brand-foreground transition-colors"
            >
              <span>Start with the roller</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="border-t border-brand-foreground/25 pt-5">
                <p className="text-xs tracking-[0.25em] text-brand-foreground/60 mb-3">
                  {step.number}
                </p>
                <h3 className="text-lg font-light mb-2">{step.title}</h3>
                <p className="text-sm font-light text-brand-foreground/75 leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="block overflow-hidden group"
            >
              <img
                src={product.hoverImage}
                alt={`${product.name} detail`}
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-64 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OneThirdTwoThirdsSection;

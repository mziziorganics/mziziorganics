import founderAmin from "@/assets/founder-amin.jpg.asset.json";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EditorialSection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 max-w-[630px]">
          <p className="text-[0.65rem] tracking-[0.3em] uppercase text-brand">
            Our Story
          </p>
          <h2 className="text-2xl md:text-3xl font-normal text-foreground leading-tight">
            Mzizi means root in Swahili. That is the whole idea.
          </h2>
          <p className="text-sm font-light text-foreground leading-relaxed">
            Look inside most bathroom cabinets and you will find the same story: eight
            bottles, four powders, three promises — and hair or a gut that is no better
            than it was a year ago. We have been sold volume instead of results.
          </p>
          <p className="text-sm font-light text-foreground leading-relaxed">
            I started Mzizi Organics to go back to the root, because the organic way has
            always worked — it was simply never as profitable as selling more. So we make
            fewer things and we make them properly: cold-pressed, small-batch, nothing
            added to pad the label. Two products, used honestly, doing what a shelf of ten
            never did.
          </p>
          <p className="text-sm font-light text-brand leading-relaxed">
            Fewer products. Real roots. Own your story™.
          </p>
          <Link
            to="/about/our-story"
            className="inline-flex items-center gap-2 text-sm font-light text-brand border-b border-brand/40 pb-1 hover:border-brand transition-colors duration-200"
          >
            <span>Read our full story</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        <div className="order-first md:order-last">
          <div className="w-full aspect-square overflow-hidden bg-brand-soft">
            <img
              src={founderAmin.url}
              alt="Amin, founder of Mzizi Organics"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;

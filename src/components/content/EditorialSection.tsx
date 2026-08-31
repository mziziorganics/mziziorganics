import founders from "@/assets/founders.png";
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
            Care That Starts at the Root
          </h2>
          <p className="text-sm font-light text-foreground leading-relaxed">
            Mzizi means root. Mzizi Organics began in a small kitchen with a single
            question: why do shelves overflow with hair products while so few of them
            reach the scalp? We answered it by cutting everything back to two objects —
            a cold-pressed oil and the tool that carries it deeper — and pressing each
            batch small enough that the actives are still alive when they arrive.
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
              src={founders}
              alt="The founders of Mzizi Organics"
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

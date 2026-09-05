import founderAmin from "@/assets/founder-amin.jpg.asset.json";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/ui/reveal";

const EditorialSection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Reveal variant="left" className="space-y-4 max-w-[630px]">
          <p className="text-[0.65rem] tracking-[0.3em] uppercase text-brand">Our Story</p>
          <h2 className="text-2xl md:text-3xl font-normal text-foreground leading-tight">
            Mzizi means root in Swahili. That is the whole idea.
          </h2>
          <p className="text-sm font-light text-foreground leading-relaxed">
            Look inside most bathroom cabinets and you will find the same story: eight
            bottles, four powders, three promises — and hair or a gut that is no better
            than it was a year ago. People are not failing; they are being sold hope
            instead of results.
          </p>
          <p className="text-sm font-light text-foreground leading-relaxed">
            Mzizi Organics goes back to the root, because the organic ways worked long
            before the marketing did — rosemary for the scalp, castor for the strand, amla
            for the root. Small-batch, traceable, with nothing added to pad
            a label. We sell what works, and nothing ships until it does.
          </p>
          <p className="text-sm font-light text-brand leading-relaxed">
            Real roots. Real results. Own your story™.
          </p>
          <Link
            to="/about/our-story"
            className="group inline-flex items-center gap-2 text-sm font-light text-brand border-b border-brand/40 pb-1 hover:border-brand transition-colors duration-300"
          >
            <span>Read our full story</span>
            <ArrowRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>

        <Reveal variant="right" delay={120} className="order-first md:order-last">
          <div className="w-full aspect-square overflow-hidden bg-brand-soft group">
            <img
              src={founderAmin.url}
              alt="Amin, founder of Mzizi Organics"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1200ms] ease-smooth group-hover:scale-[1.04]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default EditorialSection;

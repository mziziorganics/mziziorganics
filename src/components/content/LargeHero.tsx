import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";

const LargeHero = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="relative w-full aspect-[4/5] md:aspect-[16/9] overflow-hidden bg-brand-soft">
        <img
          src={products[0].hoverImage}
          alt="Hair growth oil applied to the scalp with a glass dropper"
          width={1024}
          height={1024}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-brand-foreground">
          <p className="text-[0.65rem] tracking-[0.3em] uppercase mb-3 text-brand-foreground/80">
            The Root Ritual
          </p>
          <h1 className="text-3xl md:text-5xl font-light leading-tight max-w-2xl">
            Roll it open. Feed it deep.
          </h1>
          <p className="text-sm font-light mt-4 max-w-md text-brand-foreground/80">
            Two products that work as one — a titanium derma roller followed by a
            cold-pressed rosemary scalp oil.
          </p>
          <Link
            to="/category/all-products"
            className="inline-flex items-center gap-2 mt-6 bg-brand-foreground text-brand px-6 py-3 text-sm font-light hover:opacity-90 transition-opacity"
          >
            <span>Shop the ritual</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LargeHero;

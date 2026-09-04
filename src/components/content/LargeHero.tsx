import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-hair-growth-oil.jpg";

const LargeHero = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="relative w-full aspect-[4/5] md:aspect-[16/9] overflow-hidden bg-brand-soft group">
        <img
          src={heroImage}
          alt="Mzizi hair growth oil in a black applicator bottle on a warm stone surface"
          width={1920}
          height={1080}
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/70 via-brand/15 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-brand-foreground">
          <p className="text-[0.65rem] tracking-[0.3em] uppercase mb-3 text-brand-foreground/80 animate-fade-up [animation-delay:80ms]">
            Own your story™
          </p>
          <h1 className="text-3xl md:text-5xl font-light leading-tight max-w-2xl animate-fade-up [animation-delay:200ms]">
            Roll it open. Feed it deep.
          </h1>
          <p className="text-sm font-light mt-4 max-w-md text-brand-foreground/80 animate-fade-up [animation-delay:340ms]">
            A titanium derma roller followed by a cold-pressed rosemary scalp oil — the
            organic way, done properly.
          </p>
          <div className="animate-fade-up [animation-delay:460ms]">
            <Link
              to="/category/all-products"
              className="group/cta inline-flex items-center gap-2 mt-6 bg-brand-foreground text-brand px-6 py-3 text-sm font-light transition-all duration-300 hover:gap-3 hover:opacity-90"
            >
              <span>Shop the ritual</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover/cta:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LargeHero;

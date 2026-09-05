import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroBonsai from "@/assets/hero-bonsai.png.asset.json";

const LargeHero = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="relative w-full aspect-[4/5] md:aspect-[16/9] overflow-hidden bg-brand-soft group">
        <img
          src={heroBonsai.url}
          alt="An ancient bonsai tree with deep, exposed roots — the emblem of Mzizi Organics"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover object-[72%_center] md:object-[68%_center] animate-slow-zoom"
        />

        {/* Premium tonal wash: deep burgundy from the left, clear on the right where the tree sits */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand/85 via-brand/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/60 via-transparent to-brand/10" />

        <div className="absolute inset-0 flex items-end md:items-center">
          <div className="p-6 md:p-14 lg:p-20 max-w-xl text-brand-foreground">
            <p className="text-[0.65rem] tracking-[0.3em] uppercase mb-3 text-brand-foreground/80 animate-fade-up [animation-delay:80ms]">
              Own your story™
            </p>
            <h1 className="text-3xl md:text-5xl font-light leading-tight animate-fade-up [animation-delay:200ms]">
              Everything begins at the root.
            </h1>
            <p className="text-sm font-light mt-4 max-w-md text-brand-foreground/85 animate-fade-up [animation-delay:340ms]">
              Pure, organic botanicals for the scalp — the way people cared for
              themselves long before the marketing did.
            </p>
            <div className="animate-fade-up [animation-delay:460ms]">
              <Link
                to="/category/haircare"
                className="group/cta inline-flex items-center gap-2 mt-8 bg-brand-foreground text-brand px-6 py-3 text-sm font-light transition-all duration-300 hover:gap-3 hover:opacity-90"
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
      </div>
    </section>
  );
};

export default LargeHero;

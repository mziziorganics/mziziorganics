import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Reveal from "@/components/ui/reveal";
import tipsHero from "@/assets/tips-hero-roots.png.asset.json";

const TipsAndTricks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero with the root background */}
        <section className="w-full px-6">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-foreground">
            <img
              src={tipsHero.url}
              alt="Ancient tree roots reaching across a moss-covered wall — Mzizi, meaning root"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center animate-slow-zoom"
            />

            {/* Readability washes — dark + burgundy, heavier on the left */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand/55 via-transparent to-black/20" />

            <div className="absolute inset-0 flex items-center">
              <div className="p-6 md:p-14 lg:p-20 max-w-xl text-brand-foreground">
                <p className="text-[0.65rem] tracking-[0.3em] uppercase mb-3 text-brand-foreground/80 animate-fade-up [animation-delay:80ms]">
                  Mzizi Organics
                </p>
                <h1 className="text-3xl md:text-5xl font-light leading-tight animate-fade-up [animation-delay:200ms]">
                  Tips &amp; Tricks
                </h1>
                <p className="text-sm font-light mt-4 max-w-md text-brand-foreground/85 animate-fade-up [animation-delay:340ms]">
                  Field notes from the root — rituals, remedies and real
                  guidance for healthier hair and scalp.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coming soon body */}
        <section className="w-full px-6 py-24 md:py-32">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-[0.65rem] tracking-[0.35em] uppercase text-brand">
                Coming soon
              </p>
              <span className="block w-12 h-px bg-brand/40 mt-5 mx-auto" />
              <h2 className="text-2xl md:text-4xl font-light text-foreground mt-6 leading-tight">
                We&apos;re tending the garden.
              </h2>
              <p className="text-sm md:text-base font-light text-muted-foreground leading-relaxed mt-6">
                Soon this will be a quiet letter — practical tips on caring for
                your scalp, getting the most from the oil and roller, and the
                organic habits that actually work. No noise, no ten-step
                routines. Just what works, from the root.
              </p>
              <p className="text-sm font-light text-brand leading-relaxed mt-6">
                Real roots. Real results. Own your story™.
              </p>
              <Link
                to="/category/haircare"
                className="group inline-flex items-center gap-2 mt-10 bg-brand text-brand-foreground px-6 py-3 text-sm font-light transition-all duration-300 hover:gap-3 hover:opacity-90"
              >
                <span>Shop haircare in the meantime</span>
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TipsAndTricks;

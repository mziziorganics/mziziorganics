import aboutHero from "@/assets/about-hero-waves.png.asset.json";

const AboutHero = () => {
  return (
    <section className="w-full px-6">
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-foreground">
        <img
          src={aboutHero.url}
          alt="Abstract flowing waves in deep navy and copper — the Mzizi Organics story"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center animate-slow-zoom"
        />

        {/* Tonal wash to settle text legibility on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand/75 via-brand/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/50 via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="p-6 md:p-14 lg:p-20 max-w-xl text-brand-foreground">
            <p className="text-[0.65rem] tracking-[0.3em] uppercase mb-3 text-brand-foreground/80 animate-fade-up [animation-delay:80ms]">
              Mzizi Organics
            </p>
            <h1 className="text-3xl md:text-5xl font-light leading-tight animate-fade-up [animation-delay:200ms]">
              Own your story™
            </h1>
            <p className="text-sm font-light mt-4 max-w-md text-brand-foreground/85 animate-fade-up [animation-delay:340ms]">
              Pure, organic botanicals that work — the way people cared for
              themselves long before the marketing did.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

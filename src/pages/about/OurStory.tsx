import founderAmin from "@/assets/founder-amin.jpg.asset.json";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import ImageTextBlock from "../../components/about/ImageTextBlock";
import AboutSidebar from "../../components/about/AboutSidebar";
import Reveal from "@/components/ui/reveal";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>

        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader title="Our Story" subtitle="Own your story™" />

          <ContentSection>
            <Reveal>
              <ImageTextBlock
                image={founderAmin.url}
                imageAlt="Amin, founder of Mzizi Organics"
                title="Back to the root"
                content="Mzizi means root in Swahili, and that single word is the whole argument.\n\nOpen almost any bathroom cabinet and you will find the evidence: half-used growth oils, gummies bought on a promise, gut powders, detox teas, a shampoo that was going to change everything. Ten, twenty, thirty products tried — and hair, skin and digestion that are no better than they were a year ago. People are not failing. They are being sold hope in a bottle, over and over, by an industry that profits from the next attempt rather than the result.\n\nMzizi Organics exists to end that cycle. Long before laboratories and marketing budgets, people cared for their hair and their bodies with plants they could name — rosemary for the scalp, castor for the strand, amla for the root — and it worked, because the plant was whole, alive and unadulterated.\n\nWe went back to those ways and refused every shortcut that dulls them: cold-pressed instead of heat-extracted, single-origin botanicals bought straight from growers, and formulas with nothing added to bulk out a bottle or perfume a thin idea. Nothing ships until it works — and what works, we sell. Own your story."
                imagePosition="left"
              />
            </Reveal>
          </ContentSection>

          <ContentSection title="What We Stand For">
            <div className="grid md:grid-cols-2 gap-12">
              <Reveal className="space-y-6" variant="left">
                <h3 className="text-xl font-light text-foreground">Only What Works</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every formula earns its place. If an ingredient is in the bottle, it is
                  there because it does something measurable for your scalp, your strands
                  or your skin — not because it looks impressive on a label.
                </p>
              </Reveal>
              <Reveal className="space-y-6" variant="right" delay={120}>
                <h3 className="text-xl font-light text-foreground">The Organic Way</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cold-pressed, small-batch, traceable to the farm. We keep the plant as
                  close to whole as we can, because that is where the potency lives — and
                  it is the way people cared for themselves long before the marketing came.
                </p>
              </Reveal>
            </div>
          </ContentSection>

          <ContentSection title="Our Values">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Honesty",
                  body: "We say what is in the bottle, where it came from and what it can realistically do for you.",
                },
                {
                  title: "Results",
                  body: "Consistency over collection. We would rather you finish one thing that works than start ten that do not.",
                },
                {
                  title: "Roots",
                  body: "Traditional botanical knowledge, treated as science rather than nostalgia.",
                },
              ].map((value, index) => (
                <Reveal key={value.title} className="space-y-4" delay={index * 120}>
                  <h3 className="text-lg font-light text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.body}</p>
                </Reveal>
              ))}
            </div>
          </ContentSection>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default OurStory;

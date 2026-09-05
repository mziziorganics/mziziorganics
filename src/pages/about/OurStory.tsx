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
                content="It started with a quiet, persistent struggle in our own home in Nairobi.\n\nFor years our family battled severe stomach acidity, moving through treatment after treatment in search of lasting comfort. We hold deep respect for modern medicine — but for this particular battle, the breakthrough came from the earth. When we stripped everything back and turned to pure, organic remedies, the relief we had been chasing finally arrived.\n\nThat changed everything.\n\nIn Swahili, Mzizi means root. That single word became our whole philosophy: whether you are healing your gut, restoring your skin or regrowing your hair, the real answer always sits at the source.\n\nWe are not here to reject science. We are here to reclaim the raw efficacy that most commercial products have forgotten. Look inside almost any bathroom cabinet and you will find the same story — bottles full of promises, and a year later, no change at all.\n\nOur standard is ruthlessly simple: we only make things that work. Cold-pressed botanicals for your scalp, organic blends for your body, ingredients that proved themselves long before the marketing did. No fillers. No shortcuts.\n\nWe went back to the roots to take control of our own health. Now we are here to help you own yours."
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

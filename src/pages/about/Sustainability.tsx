import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import AboutSidebar from "../../components/about/AboutSidebar";
import Reveal from "@/components/ui/reveal";

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>

        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader
            title="Sustainability"
            subtitle="Small-batch care that leaves the soil, the growers and the shelf better than we found them"
          />

          <ContentSection title="Our Environmental Commitment">
            <Reveal className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Ethical Sourcing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We buy rosemary, castor and amla directly from growers' cooperatives, at
                  prices agreed before harvest. Every batch is traceable back to the farm
                  that pressed it.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Small-Batch Pressing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Pressing in small runs means nothing sits in a warehouse losing potency —
                  and nothing is over-produced only to be written off later.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120} className="bg-muted/10 rounded-lg p-8">
              <h3 className="text-2xl font-light text-foreground mb-6">Our Impact Goals</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-light text-primary mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">
                    Carbon neutral operations by 2027
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-light text-primary mb-2">90%</div>
                  <p className="text-sm text-muted-foreground">Plastic-free packaging</p>
                </div>
                <div>
                  <div className="text-3xl font-light text-primary mb-2">Zero</div>
                  <p className="text-sm text-muted-foreground">Waste to landfill policy</p>
                </div>
              </div>
            </Reveal>
          </ContentSection>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Sustainability;

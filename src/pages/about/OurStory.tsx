import founderAmin from "@/assets/founder-amin.jpg.asset.json";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import ImageTextBlock from "../../components/about/ImageTextBlock";
import AboutSidebar from "../../components/about/AboutSidebar";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader 
            title="Our Story" 
            subtitle="Own your story™"
          />
          
          <ContentSection>
            <ImageTextBlock
              image={founderAmin.url}
              imageAlt="Amin, founder of Mzizi Organics"
              title="Back to the root"
              content="Mzizi means root, and that is not decoration — it is the argument. Walk into most homes and you will find a cabinet crowded with hair oils, growth gummies, gut powders and detox teas, each one bought in hope and abandoned by week three. The industry learned that selling more is easier than solving anything. I started Mzizi Organics to reverse that trade: to go back to the organic ways that worked long before the marketing did, and to give people the few things that actually deliver. So we make two products instead of twenty — cold-pressed in small batches, no fillers to bulk out the bottle, no fragrance to hide a thin formula — and we stand behind them. Fewer products, honestly made, used consistently. That is how roots recover, and that is how you own your story."
              imagePosition="left"
            />
          </ContentSection>

          <ContentSection title="Our Heritage">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Traditional Craftsmanship</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every piece in our collection is meticulously handcrafted by skilled artisans who have honed their craft over generations. We honor traditional techniques while embracing modern innovation, ensuring each piece meets our exacting standards for quality and beauty.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Sustainable Future</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe luxury and sustainability can coexist beautifully. Our commitment to ethical sourcing, recycled materials, and responsible manufacturing practices ensures that every piece you wear contributes to a more sustainable future.
                </p>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="Our Values">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Excellence</h3>
                <p className="text-muted-foreground">
                  We pursue perfection in every detail, from the initial design concept to the final polish.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Authenticity</h3>
                <p className="text-muted-foreground">
                  Each piece reflects genuine craftsmanship and tells an authentic story of artistry and care.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously evolve our designs and techniques while honoring timeless aesthetic principles.
                </p>
              </div>
            </div>
          </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default OurStory;
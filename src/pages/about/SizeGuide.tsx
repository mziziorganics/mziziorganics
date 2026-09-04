import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import { Button } from "../../components/ui/button";
import AboutSidebar from "../../components/about/AboutSidebar";
import { Link } from "react-router-dom";

const SizeGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>

        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader
            title="How to Use"
            subtitle="Two products, one weekly ritual — here is exactly how to run it"
          />

          <ContentSection title="The Weekly Ritual">
            <div className="space-y-8">
              <div className="bg-brand-soft/60 p-8">
                <h3 className="text-xl font-light text-foreground mb-6">
                  Roller first, oil second
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-medium text-brand">Step 1 — Derma Roller</h4>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                      <li>Sterilise the head in 70% alcohol for five minutes</li>
                      <li>Part dry, clean hair into sections</li>
                      <li>Roll four passes in each direction with light pressure</li>
                      <li>Never press hard — the needles do the work, not force</li>
                    </ol>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium text-brand">Step 2 — Hair Growth Oil</h4>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                      <li>Apply three to five drops straight to the scalp</li>
                      <li>Massage in circles for two minutes</li>
                      <li>Leave overnight, or for at least four hours</li>
                      <li>Wash out with a gentle, sulphate-free shampoo</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-brand text-brand-foreground">
                      <th className="border border-border p-3 text-left font-light">Week</th>
                      <th className="border border-border p-3 text-left font-light">Derma Roller</th>
                      <th className="border border-border p-3 text-left font-light">Hair Growth Oil</th>
                      <th className="border border-border p-3 text-left font-light">What to expect</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { week: "1 – 2", roller: "2 – 3 × per week", oil: "Daily", note: "Scalp calms, less flaking" },
                      { week: "3 – 4", roller: "2 – 3 × per week", oil: "Daily", note: "Less shedding on wash days" },
                      { week: "5 – 8", roller: "2 – 3 × per week", oil: "Daily", note: "First baby hairs at the hairline" },
                      { week: "9 – 12", roller: "2 – 3 × per week", oil: "Daily", note: "Visible density at the edges" },
                      { week: "12 +", roller: "New head fitted", oil: "Daily", note: "Hold the results" },
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-brand-soft/40">
                        <td className="border border-border p-3">{row.week}</td>
                        <td className="border border-border p-3">{row.roller}</td>
                        <td className="border border-border p-3">{row.oil}</td>
                        <td className="border border-border p-3 text-muted-foreground">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="Dosage & Care">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Hair Growth Oil — 30 ml</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Per application</span>
                    <span className="text-foreground">3 – 5 drops</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Frequency</span>
                    <span className="text-foreground">Daily</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Bottle lasts</span>
                    <span className="text-foreground">8 – 10 weeks</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Storage</span>
                    <span className="text-foreground">Cool, out of sunlight</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Derma Roller — 0.5 mm</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Needles</span>
                    <span className="text-foreground">540 titanium</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Frequency</span>
                    <span className="text-foreground">Once a week</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Sterilise</span>
                    <span className="text-foreground">Before & after use</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Replace head</span>
                    <span className="text-foreground">Every 3 months</span>
                  </div>
                </div>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="Need Help?">
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Unsure whether to roll before or after washing, or how the ritual fits
                around braids and protective styles? Our care team answers within one
                working day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="rounded-none">
                  Download the ritual card
                </Button>
                <Button className="rounded-none" asChild>
                  <Link to="/about/customer-care">Ask our care team</Link>
                </Button>
              </div>
            </div>
          </ContentSection>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default SizeGuide;

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion";
import AboutSidebar from "../../components/about/AboutSidebar";

const CustomerCare = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader 
          title="Customer Care" 
          subtitle="Questions about the ritual, your order or your scalp — we answer within one working day"
        />
        
        <ContentSection title="Contact Information">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-light text-foreground">Phone</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
              <p className="text-sm text-muted-foreground">Mon-Fri: 9AM-6PM EST<br />Sat: 10AM-4PM EST</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-light text-foreground">Email</h3>
              <p className="text-muted-foreground">care@mziziorganics.com</p>
              <p className="text-sm text-muted-foreground">Response within 24 hours</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-light text-foreground">Live Chat</h3>
              <Button variant="outline" className="rounded-none">
                Start Chat
              </Button>
              <p className="text-sm text-muted-foreground">Available during business hours</p>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Frequently Asked Questions">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="shipping" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                What are your shipping options and timeframes?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer free standard shipping (3-5 business days) on orders over $500. Express shipping (1-2 business days) is available for $25. All orders are fully insured and require signature confirmation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="returns" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                What is your return and exchange policy?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Unopened products can be returned within 30 days in their original condition. For hygiene reasons, opened oil bottles and used roller heads cannot be returned. Returns are free with our prepaid label.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="warranty" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                What warranty do you offer on your products?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Every Mzizi Organics product is covered for twelve months against manufacturing defects — a leaking dropper, a damaged roller head or a bent needle out of the box. We replace it, no return shipping charged.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sizing" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Can I use the roller if I have a sensitive scalp?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes — 0.5 mm is a gentle depth. Start with two passes per direction every ten days, and follow with the oil rather than an active serum. If your scalp is broken, inflamed or currently treated for a condition, speak to your dermatologist first.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="care" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                How should I care for my derma roller?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Rinse under hot water, then soak the head in 70% alcohol for five minutes before and after every use. Air-dry needles-up and store it in the case provided. Replace the head every three months of weekly use.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="authentication" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                How can I verify my products are genuine?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Every bottle carries a batch number and press date on the base, and every roller ships sealed with a tamper strip. Enter your batch number on our website to see where and when it was pressed, or contact our care team.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ContentSection>

        <ContentSection title="Contact Form">
          <div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-light text-foreground">First Name</label>
                  <Input className="rounded-none" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-light text-foreground">Last Name</label>
                  <Input className="rounded-none" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-light text-foreground">Email</label>
                <Input type="email" className="rounded-none" placeholder="Enter your email" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-light text-foreground">Order Number (Optional)</label>
                <Input className="rounded-none" placeholder="Enter your order number if applicable" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-light text-foreground">How can we help you?</label>
                <Textarea 
                  className="rounded-none min-h-[120px]" 
                  placeholder="Please describe your inquiry in detail"
                />
              </div>
              
              <Button type="submit" className="w-full rounded-none">
                Send Message
              </Button>
            </form>
          </div>
        </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default CustomerCare;
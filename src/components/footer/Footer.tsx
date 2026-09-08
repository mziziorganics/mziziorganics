import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-brand text-brand-foreground pt-16 pb-4 px-6 mt-48">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Brand - Left side */}
          <div>
            <p className="text-2xl font-light tracking-[0.3em] uppercase mb-4">
              Mzizi
              <span className="block text-[0.6rem] tracking-[0.45em] mt-1 text-brand-foreground/70">
                Organics
              </span>
            </p>
            <p className="text-base font-light tracking-[0.15em] text-brand-foreground/90 max-w-md mb-8">
Own your story™
            </p>

            {/* Contact Information */}
            <div className="space-y-2 text-sm font-light text-brand-foreground/70">
              <div>
                <p className="font-normal text-brand-foreground mb-1 tracking-[0.15em] uppercase text-xs">
                  Visit Us
                </p>
                <p>Nairobi, Kenya</p>
              </div>
              <div>
                <p className="font-normal text-brand-foreground mb-1 mt-4 tracking-[0.15em] uppercase text-xs">
                  Contact
                </p>
                <p>07 95 28 40 28</p>
                <p>mziziorganics@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Link lists - Right side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Shop */}
            <div>
              <h4 className="text-xs font-normal mb-4 tracking-[0.15em] uppercase">Shop</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/product/hair-growth-oil"
                    className="text-sm font-light text-brand-foreground/70 hover:text-brand-foreground transition-colors"
                  >
                    Hair Growth Oil
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product/derma-roller"
                    className="text-sm font-light text-brand-foreground/70 hover:text-brand-foreground transition-colors"
                  >
                    Derma Roller
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/haircare"
                    className="text-sm font-light text-brand-foreground/70 hover:text-brand-foreground transition-colors"
                  >
                    All Haircare
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-xs font-normal mb-4 tracking-[0.15em] uppercase">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about/size-guide"
                    className="text-sm font-light text-brand-foreground/70 hover:text-brand-foreground transition-colors"
                  >
                    How to Use
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/customer-care"
                    className="text-sm font-light text-brand-foreground/70 hover:text-brand-foreground transition-colors"
                  >
                    Customer Care
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/sustainability"
                    className="text-sm font-light text-brand-foreground/70 hover:text-brand-foreground transition-colors"
                  >
                    Sustainability
                  </Link>
                </li>
              </ul>
            </div>

            {/* Discover */}
            <div>
              <h4 className="text-xs font-normal mb-4 tracking-[0.15em] uppercase">Discover</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/tips-and-tricks"
                    className="text-sm font-light text-brand-foreground/70 hover:text-brand-foreground transition-colors"
                  >
                    Tips &amp; Tricks
                  </Link>
                </li>
              </ul>
            <div>
              <h4 className="text-xs font-normal mb-4 tracking-[0.15em] uppercase">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.instagram.com/mzizi.organics?igsi=bDVyeGd2Mmd3NzRo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-light text-brand-foreground/70 hover:text-brand-foreground transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@mzizi.organics?_r=1&_t=ZS-99MYAHFczSi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-light text-brand-foreground/70 hover:text-brand-foreground transition-colors"
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section - edge to edge separator */}
      <div className="border-t border-brand-foreground/20 -mx-6 px-6 pt-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm font-light text-brand-foreground/70 mb-2 md:mb-0">
            © 2026 Mzizi Organics. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/privacy-policy"
              className="text-sm font-light text-brand-foreground/70 hover:text-brand-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-sm font-light text-brand-foreground/70 hover:text-brand-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { ArrowRight, X, Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingBag from "./ShoppingBag";
import { products } from "@/data/products";
import { useFavorites } from "@/hooks/useFavorites";
import founderAmin from "@/assets/founder-amin.jpg.asset.json";

interface CartItem {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
  category: string;
}

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [offCanvasType, setOffCanvasType] = useState<'favorites' | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShoppingBagOpen, setIsShoppingBagOpen] = useState(false);
  const { favorites, removeFavorite } = useFavorites();
  const favoriteProducts = products.filter((p) => favorites.includes(p.id));

  // Shopping bag state seeded with the full ritual
  const [cartItems, setCartItems] = useState<CartItem[]>(
    products.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      category: product.category,
    }))
  );

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(items => items.filter(item => item.id !== id));
    } else {
      setCartItems(items =>
        items.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const popularSearches = [
    "Hair growth oil",
    "Derma roller",
    "Rosemary scalp serum",
    "Thinning edges",
    "The ritual set",
  ];

  const navItems = [
    {
      name: "Shop",
      href: "/category/all-products",
      groups: [
        {
          heading: "Haircare",
          items: [
            { label: "Hair Growth Oil", to: "/product/hair-growth-oil" },
            { label: "Derma Roller", to: "/product/derma-roller" },
            { label: "Shop all haircare", to: "/category/haircare" },
          ],
        },
      ],
      images: [
        { src: products[0].image, alt: "Hair Growth Oil", label: "Hair Growth Oil", to: "/product/hair-growth-oil" },
        { src: products[1].image, alt: "Derma Roller", label: "Derma Roller", to: "/product/derma-roller" },
      ],
    },
    {
      name: "About",
      href: "/about/our-story",
      groups: [
        {
          heading: "The Brand",
          items: [
            { label: "Our Story", to: "/about/our-story" },
            { label: "Sustainability", to: "/about/sustainability" },
            { label: "How to Use", to: "/about/size-guide" },
            { label: "Customer Care", to: "/about/customer-care" },
          ],
        },
      ],
      images: [
        { src: founderAmin.url, alt: "Amin, founder of Mzizi Organics", label: "Read our story", to: "/about/our-story" },
      ],
    },
  ];


  return (
    <nav 
      className="relative" 
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <div className="flex items-center justify-between h-16 px-6">
        {/* Mobile hamburger button */}
        <button
          className="lg:hidden p-2 mt-0.5 text-nav-foreground hover:text-nav-hover transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-5 relative">
            <span className={`absolute block w-5 h-px bg-current transform transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 top-2.5' : 'top-1.5'
            }`}></span>
            <span className={`absolute block w-5 h-px bg-current transform transition-all duration-300 top-2.5 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`absolute block w-5 h-px bg-current transform transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 top-2.5' : 'top-3.5'
            }`}></span>
          </div>
        </button>

        {/* Left navigation - Hidden on tablets and mobile */}
        <div className="hidden lg:flex space-x-8">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={item.href}
                className="text-nav-foreground hover:text-nav-hover transition-colors duration-200 text-sm font-light py-6 block"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Center logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="block">
            <img
              src="/LINEA-1.svg"
              alt="Mzizi Organics"
              className="h-6 w-auto"
            />
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center space-x-2">
          <button 
            className="p-2 text-nav-foreground hover:text-nav-hover transition-colors duration-200"
            aria-label="Search"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
          <button 
            className="hidden lg:block p-2 text-nav-foreground hover:text-nav-hover transition-colors duration-200 relative"
            aria-label="Favorites"
            onClick={() => setOffCanvasType('favorites')}
          >
            <Heart size={20} strokeWidth={1.5} className={favorites.length > 0 ? "fill-brand text-brand" : "fill-transparent"} />
            {favorites.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-4 h-4 px-1 flex items-center justify-center rounded-full bg-brand text-brand-foreground text-[0.55rem] font-medium pointer-events-none">
                {favorites.length}
              </span>
            )}
          </button>
          <button 
            className="p-2 text-nav-foreground hover:text-nav-hover transition-colors duration-200 relative"
            aria-label="Shopping bag"
            onClick={() => setIsShoppingBagOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-4 h-4 px-1 flex items-center justify-center rounded-full bg-brand text-brand-foreground text-[0.55rem] font-medium pointer-events-none">
                {totalItems}
              </span>
            )}

          </button>
        </div>
      </div>

      {/* Full width dropdown */}
      {activeDropdown && (
        <div 
          className="absolute top-full left-0 right-0 bg-nav border-b border-border z-50"
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="px-6 py-8">
            <div className="flex justify-between w-full">
              {/* Left side - Menu items */}
              <div className="flex-1 flex gap-16">
                {navItems
                  .find(item => item.name === activeDropdown)
                  ?.groups.map((group) => (
                    <div key={group.heading}>
                      <p className="text-[0.6rem] tracking-[0.3em] uppercase text-brand mb-4">
                        {group.heading}
                      </p>
                      <span className="block w-8 h-px bg-brand/40 mb-4" />
                      <ul className="space-y-2">
                        {group.items.map((subItem) => (
                          <li key={subItem.to}>
                            <Link
                              to={subItem.to}
                              className="group inline-flex items-center gap-2 text-nav-foreground hover:text-brand transition-colors duration-200 text-sm font-light py-1"
                            >
                              <span className="border-b border-transparent group-hover:border-brand/50 pb-0.5">
                                {subItem.label}
                              </span>
                              <ArrowRight
                                size={12}
                                className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>

              {/* Right side - Images */}
              <div className="flex space-x-6">
                {navItems
                  .find(item => item.name === activeDropdown)
                  ?.images.map((image, index) => (
                    <Link
                      key={index}
                      to={image.to}
                      className="w-[400px] h-[280px] cursor-pointer group relative overflow-hidden block bg-brand-soft"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-brand/90 text-brand-foreground px-3 py-2 text-xs font-light flex items-center gap-1">
                        <span>{image.label}</span>
                        <ArrowRight size={12} />
                      </div>
                    </Link>
                  ))}
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Search overlay */}
      {isSearchOpen && (
        <div 
          className="absolute top-full left-0 right-0 bg-nav border-b border-border z-50"
        >
          <div className="px-6 py-8">
            <div className="max-w-2xl mx-auto">
              {/* Search input */}
              <div className="relative mb-8">
                <div className="flex items-center border-b border-border pb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-nav-foreground mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search hair and scalp care..."
                    className="flex-1 bg-transparent text-nav-foreground placeholder:text-nav-foreground/60 outline-none text-lg"
                    autoFocus
                  />
                </div>
              </div>

              {/* Popular searches */}
              <div>
                <h3 className="text-brand text-xs tracking-[0.15em] uppercase mb-4">Popular Searches</h3>
                <div className="flex flex-wrap gap-3">
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      className="text-nav-foreground hover:text-brand-foreground hover:bg-brand text-sm font-light py-2 px-4 border border-border rounded-full transition-colors duration-200 hover:border-brand"
                    >
                      {search}
                    </button>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile navigation menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-nav border-b border-border z-50">
          <div className="px-6 py-8">
            <div className="space-y-6">
              {navItems.map((item, index) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="text-nav-foreground hover:text-nav-hover transition-colors duration-200 text-lg font-light block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                   <div className="mt-3 pl-4 space-y-4 border-l border-brand/30">
                     {item.groups.map((group) => (
                       <div key={group.heading}>
                         <p className="text-[0.6rem] tracking-[0.3em] uppercase text-brand mb-2">
                           {group.heading}
                         </p>
                         <div className="space-y-2">
                           {group.items.map((subItem) => (
                             <Link
                               key={subItem.to}
                               to={subItem.to}
                               className="text-nav-foreground/70 hover:text-brand text-sm font-light block py-1"
                               onClick={() => setIsMobileMenuOpen(false)}
                             >
                               {subItem.label}
                             </Link>
                           ))}
                         </div>
                       </div>
                     ))}
                   </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Shopping Bag Component */}
      <ShoppingBag 
        isOpen={isShoppingBagOpen}
        onClose={() => setIsShoppingBagOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        onViewFavorites={() => {
          setIsShoppingBagOpen(false);
          setOffCanvasType('favorites');
        }}
      />
      
      {/* Favorites Off-canvas overlay */}
      {offCanvasType === 'favorites' && (
        <div className="fixed inset-0 z-50 h-screen">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 h-screen"
            onClick={() => setOffCanvasType(null)}
          />
          
          {/* Off-canvas panel */}
          <div className="absolute right-0 top-0 h-screen w-96 bg-background border-l border-border animate-slide-in-right flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-lg font-light text-foreground">Your Favorites</h2>
              <button
                onClick={() => setOffCanvasType(null)}
                className="p-2 text-foreground hover:text-muted-foreground transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6 overflow-y-auto">
              {favoriteProducts.length === 0 ? (
                <p className="text-muted-foreground text-sm mb-6">
                  You haven't added any favorites yet. Browse our collection and click the heart icon to save items you love.
                </p>
              ) : (
                <ul className="space-y-6">
                  {favoriteProducts.map((product) => (
                    <li key={product.id} className="flex gap-4">
                      <Link
                        to={`/product/${product.id}`}
                        onClick={() => setOffCanvasType(null)}
                        className="w-20 h-20 shrink-0 bg-brand-soft overflow-hidden"
                      >
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      </Link>
                      <div className="flex-1 min-w-0">
                        <p className="text-[0.6rem] tracking-[0.2em] uppercase text-brand mb-1">
                          {product.category}
                        </p>
                        <Link
                          to={`/product/${product.id}`}
                          onClick={() => setOffCanvasType(null)}
                          className="text-sm font-light text-foreground hover:text-brand transition-colors block"
                        >
                          {product.name}
                        </Link>
                        <p className="text-sm font-light text-muted-foreground mt-1">{product.price}</p>
                      </div>
                      <button
                        onClick={() => removeFavorite(product.id)}
                        aria-label={`Remove ${product.name} from favorites`}
                        className="p-1 text-brand hover:text-muted-foreground transition-colors self-start"
                      >
                        <Heart size={16} strokeWidth={1.5} className="fill-brand" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
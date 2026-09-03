import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { products } from "@/data/products";
import { useFavorites } from "@/hooks/useFavorites";
import Reveal from "@/components/ui/reveal";

const ProductGrid = () => {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <section className="w-full px-6 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {products.map((product, index) => {
          const favorited = isFavorite(product.id);

          return (
            <Reveal key={product.id} delay={index * 140}>
              <Link to={`/product/${product.id}`}>
              <Card className="border-none shadow-none bg-transparent group cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-square mb-4 overflow-hidden bg-brand-soft relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-0"
                    />
                    <img
                      src={product.hoverImage}
                      alt={`${product.name} in use`}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-[900ms] ease-smooth opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-[1.05]"
                    />
                    {product.isNew && (
                      <div className="absolute top-3 left-3 bg-brand text-brand-foreground px-3 py-1 text-[0.65rem] tracking-[0.2em] uppercase">
                        New
                      </div>
                    )}
                    <button
                      type="button"
                      aria-label={
                        favorited
                          ? `Remove ${product.name} from favorites`
                          : `Add ${product.name} to favorites`
                      }
                      aria-pressed={favorited}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleFavorite(product.id);
                      }}
                      className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/60 text-foreground hover:text-brand hover:border-brand/50 transition-colors duration-200"
                    >
                      <Heart
                        size={16}
                        strokeWidth={1.5}
                        className={
                          favorited ? "fill-brand text-brand" : "fill-transparent"
                        }
                      />
                    </button>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs tracking-[0.18em] uppercase text-brand">
                      {product.category}
                    </p>
                    <div className="flex justify-between items-baseline gap-4">
                      <h3 className="text-base font-normal text-foreground">
                        {product.name}
                      </h3>
                      <p className="text-sm font-light text-foreground">
                        {product.price}
                      </p>
                    </div>
                    <p className="text-sm font-light text-muted-foreground">
                      {product.material}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ProductGrid;

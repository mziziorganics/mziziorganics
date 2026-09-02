import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Minus, Plus, Heart } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";
import type { Product } from "@/data/products";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(product.id);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div className="space-y-6">
      {/* Breadcrumb - Show only on desktop */}
      <div className="hidden lg:block">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={`/category/${product.categorySlug}`}>{product.category}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Product title and price */}
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-brand mb-2">
              {product.category}
            </p>
            <h1 className="text-2xl md:text-3xl font-light text-foreground">
              {product.name}
            </h1>
          </div>
          <div className="text-right">
            <p className="text-xl font-light text-foreground">{product.price}</p>
          </div>
        </div>
      </div>

      {/* Product details */}
      <div className="space-y-4 py-4 border-b border-border">
        <div className="space-y-2">
          <h3 className="text-sm font-light text-foreground">Formulated with</h3>
          <p className="text-sm font-light text-muted-foreground">{product.material}</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-light text-foreground">Size</h3>
          <p className="text-sm font-light text-muted-foreground">{product.dimensions}</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-light text-foreground">Weight</h3>
          <p className="text-sm font-light text-muted-foreground">{product.weight}</p>
        </div>

        <div className="space-y-2 border-l-2 border-brand pl-4">
          <h3 className="text-sm font-light text-foreground">Editor's notes</h3>
          <p className="text-sm font-light text-muted-foreground italic">
            {product.editorNote}
          </p>
        </div>
      </div>

      {/* Quantity and Add to Cart */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <span className="text-sm font-light text-foreground">Quantity</span>
          <div className="flex items-center border border-border">
            <Button
              variant="ghost"
              size="sm"
              onClick={decrementQuantity}
              aria-label="Decrease quantity"
              className="h-10 w-10 p-0 hover:bg-transparent hover:text-brand rounded-none border-none"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="h-10 flex items-center px-4 text-sm font-light min-w-12 justify-center border-l border-r border-border">
              {quantity}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={incrementQuantity}
              aria-label="Increase quantity"
              className="h-10 w-10 p-0 hover:bg-transparent hover:text-brand rounded-none border-none"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex gap-3">
          <Button className="flex-1 h-12 bg-brand text-brand-foreground hover:bg-brand/90 font-light rounded-none tracking-wide">
            Add to Bag
          </Button>
          <button
            type="button"
            onClick={() => toggleFavorite(product.id)}
            aria-pressed={favorited}
            aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
            className="h-12 w-12 flex items-center justify-center border border-border text-foreground hover:text-brand hover:border-brand transition-colors"
          >
            <Heart size={18} strokeWidth={1.5} className={favorited ? "fill-brand text-brand" : "fill-transparent"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

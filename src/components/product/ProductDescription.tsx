import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReviewProduct from "./ReviewProduct";
import type { Product } from "@/data/products";

const CustomStar = ({ filled, className }: { filled: boolean; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={`w-3 h-3 ${filled ? "text-brand" : "text-muted-foreground/30"} ${className}`}
  >
    <path
      fillRule="evenodd"
      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
      clipRule="evenodd"
    />
  </svg>
);

interface ProductDescriptionProps {
  product: Product;
}

const ProductDescription = ({ product }: ProductDescriptionProps) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isCareOpen, setIsCareOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);

  return (
    <div className="space-y-0 mt-8 border-t border-border">
      {/* Description */}
      <div className="border-b border-border">
        <Button
          variant="ghost"
          onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
          className="w-full h-14 px-0 justify-between hover:bg-transparent hover:text-brand font-light rounded-none transition-colors duration-300 press"
        >
          <span>Description</span>
          {isDescriptionOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
        {isDescriptionOpen && (
          <div className="pb-6 space-y-4 animate-fade-up">
            {product.description.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm font-light text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="border-b border-border">
        <Button
          variant="ghost"
          onClick={() => setIsDetailsOpen(!isDetailsOpen)}
          className="w-full h-14 px-0 justify-between hover:bg-transparent hover:text-brand font-light rounded-none transition-colors duration-300 press"
        >
          <span>Product Details</span>
          {isDetailsOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
        {isDetailsOpen && (
          <div className="pb-6 space-y-3 animate-fade-up">
            {product.details.map((detail) => (
              <div key={detail.label} className="flex justify-between">
                <span className="text-sm font-light text-muted-foreground">
                  {detail.label}
                </span>
                <span className="text-sm font-light text-foreground">{detail.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* How to use */}
      <div className="border-b border-border">
        <Button
          variant="ghost"
          onClick={() => setIsCareOpen(!isCareOpen)}
          className="w-full h-14 px-0 justify-between hover:bg-transparent hover:text-brand font-light rounded-none transition-colors duration-300 press"
        >
          <span>How to Use &amp; Care</span>
          {isCareOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
        {isCareOpen && (
          <div className="pb-6 space-y-4 animate-fade-up">
            <ul className="space-y-2">
              {product.care.map((step, index) => (
                <li key={index} className="text-sm font-light text-muted-foreground">
                  {step}
                </li>
              ))}
            </ul>
            <p className="text-sm font-light text-muted-foreground">
              Questions about your routine? Our care team answers within one business day.
            </p>
          </div>
        )}
      </div>

      {/* Customer Reviews */}
      <div className="border-b border-border lg:mb-16">
        <Button
          variant="ghost"
          onClick={() => setIsReviewsOpen(!isReviewsOpen)}
          className="w-full h-14 px-0 justify-between hover:bg-transparent hover:text-brand font-light rounded-none transition-colors duration-300 press"
        >
          <div className="flex items-center gap-3">
            <span>Customer Reviews</span>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <CustomStar key={star} filled={star <= product.rating} />
              ))}
              <span className="text-sm font-light text-muted-foreground ml-1">
                {product.rating}
              </span>
            </div>
          </div>
          {isReviewsOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
        {isReviewsOpen && (
          <div className="pb-6 space-y-6 animate-fade-up">
            <ReviewProduct />

            <div className="space-y-6">
              {product.reviews.map((review) => (
                <div key={review.name} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <CustomStar key={star} filled={star <= review.rating} />
                      ))}
                    </div>
                    <span className="text-sm font-light text-muted-foreground">
                      {review.name}
                    </span>
                  </div>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">
                    {review.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;

import { Link } from "react-router-dom";
import { products } from "@/data/products";
import Reveal from "@/components/ui/reveal";

const FiftyFiftySection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {products.map((product, index) => (
          <Reveal key={product.id} delay={index * 140}>
            <Link to={`/product/${product.id}`} className="block group">
              <div className="w-full aspect-square mb-4 overflow-hidden bg-brand-soft relative">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover transition-transform duration-[1100ms] ease-smooth group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-brand/0 transition-colors duration-500 group-hover:bg-brand/10" />
                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-brand text-brand-foreground px-3 py-1 text-[0.65rem] tracking-[0.2em] uppercase">
                    New
                  </span>
                )}
              </div>
            </Link>
            <div>
              <p className="text-xs tracking-[0.18em] uppercase text-brand mb-1">
                {product.category}
              </p>
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="text-base font-normal text-foreground transition-colors duration-300 group-hover:text-brand">
                  {product.name}
                </h3>
                <p className="text-sm font-light text-foreground">{product.price}</p>
              </div>
              <p className="text-sm font-light text-muted-foreground mt-1">
                {product.material}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default FiftyFiftySection;

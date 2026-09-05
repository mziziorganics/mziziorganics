import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/reveal";

interface ComingSoonProps {
  title: string;
  note: string;
}

const ComingSoon = ({ title, note }: ComingSoonProps) => {
  return (
    <section className="w-full px-6 mb-24">
      <Reveal>
        <div className="relative overflow-hidden bg-brand-soft border border-brand/10 px-6 py-16 md:px-16 md:py-24">
          <div className="max-w-xl">
            <p className="text-[0.65rem] tracking-[0.35em] uppercase text-brand">
              Coming soon
            </p>
            <span className="block w-12 h-px bg-brand/40 mt-5" />
            <h2 className="text-2xl md:text-4xl font-light text-foreground mt-6 leading-tight">
              {title} is in the making.
            </h2>
            <p className="text-sm font-light text-muted-foreground leading-relaxed mt-6">
              {note}
            </p>
            <p className="text-sm font-light text-brand leading-relaxed mt-6">
              Real roots. Real results. Own your story™.
            </p>
            <Link
              to="/category/haircare"
              className="group inline-flex items-center gap-2 mt-10 bg-brand text-brand-foreground px-6 py-3 text-sm font-light transition-all duration-300 hover:gap-3 hover:opacity-90"
            >
              <span>Shop haircare in the meantime</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default ComingSoon;

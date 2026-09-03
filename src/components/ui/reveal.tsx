import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** delay in ms before the reveal animation starts */
  delay?: number;
  /** how the element enters the viewport */
  variant?: "up" | "fade" | "blur" | "left" | "right";
  as?: "div" | "section" | "li" | "span";
}

const variantClass: Record<NonNullable<RevealProps["variant"]>, string> = {
  up: "translate-y-6",
  fade: "",
  blur: "blur-sm scale-[0.99]",
  left: "-translate-x-6",
  right: "translate-x-6",
};

/**
 * Subtle, premium scroll reveal. Respects prefers-reduced-motion.
 */
const Reveal = ({
  children,
  className,
  delay = 0,
  variant = "up",
  as: Tag = "div",
}: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-[900ms] ease-smooth will-change-transform",
        visible ? "opacity-100 translate-y-0 translate-x-0 blur-0 scale-100" : cn("opacity-0", variantClass[variant]),
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Reveal;

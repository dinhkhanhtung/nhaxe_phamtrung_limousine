import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    direction?: "up" | "left" | "right" | "scale";
    delay?: 0 | 1 | 2 | 3 | 4 | 5;
    threshold?: number;
}

const ScrollReveal = ({
    children,
    className = "",
    direction = "up",
    delay = 0,
    threshold = 0.1,
}: ScrollRevealProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("visible");
                    observer.unobserve(el);
                }
            },
            { threshold, rootMargin: "0px 0px -40px 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    const directionClass =
        direction === "left"
            ? "reveal reveal-left"
            : direction === "right"
                ? "reveal reveal-right"
                : direction === "scale"
                    ? "reveal reveal-scale"
                    : "reveal";

    const delayClass = delay > 0 ? `reveal-delay-${delay}` : "";

    return (
        <div ref={ref} className={`${directionClass} ${delayClass} ${className}`}>
            {children}
        </div>
    );
};

export default ScrollReveal;

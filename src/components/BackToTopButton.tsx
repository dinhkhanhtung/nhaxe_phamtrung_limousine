import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-20 md:bottom-6 right-6 z-40 p-3 rounded-full shadow-lg transition-all duration-300 border backdrop-blur-md flex items-center justify-center
        ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-75 pointer-events-none"
        }
        bg-background/80 border-primary/30 text-primary hover:bg-primary hover:text-white hover:border-primary active:scale-95`}
      aria-label="Quay lại đầu trang"
    >
      <ArrowUp className="w-6 h-6 animate-pulse" />
    </button>
  );
};

export default BackToTopButton;

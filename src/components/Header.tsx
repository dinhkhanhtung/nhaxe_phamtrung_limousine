import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Dịch vụ", href: "/#services" },
  { label: "Đội xe", href: "/#fleet" },
  { label: "Đánh giá", href: "/#testimonials" },
  { label: "Liên hệ", href: "/#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/50 py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" aria-label="Thuê Xe Nguyễn Hà - Trang chủ" className="font-display text-xl md:text-2xl font-bold">
            <span className="text-gold-gradient">Nguyễn Hà</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/80 hover:text-primary transition-colors link-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="gold" size="sm" asChild>
              <a href="tel:0868752888">
                <Phone className="w-4 h-4" />
                0868 752 888
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="gold" size="sm" className="mt-2" asChild>
                <a href="tel:0868752888">
                  <Phone className="w-4 h-4" />
                  0868 752 888
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

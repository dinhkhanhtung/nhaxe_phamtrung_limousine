import heroCar from "@/assets/vinfast-black.jpg";
import { Button } from "@/components/ui/button";
import { Phone, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCar}
          alt="Xe VinFast VIP - Nhà xe Phạm Trung Limousine"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm text-primary font-medium">Hạng Thương Gia - VIP ★★★★★</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Phạm Trung</span>
            <br />
            <span className="text-gold-gradient">Limousine</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Dịch vụ xe ghép 24/7 tuyến Thái Nguyên - Hà Nội - Sân bay & các tỉnh.
            Đón tận nhà – Trả tận nơi – Khởi hành liên tục. An toàn, uy tín, chuyên nghiệp.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" onClick={scrollToBooking}>
              Đặt Xe Zalo
            </Button>
            <Button variant="outline" size="xl" className="group" asChild>
              <a href="tel:0981528528">
                <Phone className="w-5 h-5" />
                0981 528 528
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/30 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-primary">24/7</p>
              <p className="text-sm text-muted-foreground mt-1">Phục vụ liên tục</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Đón trả tận nhà</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-primary">5★</p>
              <p className="text-sm text-muted-foreground mt-1">Đội xe VinFast VIP</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-sm">Khám phá</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;

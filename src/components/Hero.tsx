import heroCar from "@/assets/hero-car.jpg";
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
          alt="Xe cao cấp Hataxi - dịch vụ thuê xe cao cấp"
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
            <span className="text-sm text-primary font-medium">Dịch vụ cho thuê xe cao cấp</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Thương Hiệu</span>
            <br />
            <span className="text-gold-gradient">Nguyễn Hà</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Cho thuê xe du lịch, xe cưới và xe hợp đồng chất lượng cao tại Thái Nguyên. 
            Đội xe hiện đại, tài xế chuyên nghiệp, dịch vụ tận tâm.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" onClick={scrollToBooking}>
              Đặt Xe Ngay
            </Button>
            <Button variant="outline" size="xl" className="group" asChild>
              <a href="tel:0868752888">
                <Phone className="w-5 h-5" />
                0868 752 888
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/30 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground mt-1">Năm kinh nghiệm</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-primary">1000+</p>
              <p className="text-sm text-muted-foreground mt-1">Khách hàng tin tưởng</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold text-primary">20+</p>
              <p className="text-sm text-muted-foreground mt-1">Đầu xe hiện đại</p>
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

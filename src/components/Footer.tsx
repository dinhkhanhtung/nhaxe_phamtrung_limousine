import { Phone, MapPin, Clock } from "lucide-react";
import { BRAND_CONFIG } from "@/config/brand";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary/30 border-t border-border/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-bold mb-4">
              <span className="text-gold-gradient">{BRAND_CONFIG.name}</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {BRAND_CONFIG.description}
            </p>
            <div className="flex items-center gap-2 text-primary font-semibold">
              <Phone className="w-4 h-4" />
              <a href={`tel:${BRAND_CONFIG.hotlineRaw}`} className="hover:underline">{BRAND_CONFIG.hotline}</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Dịch vụ</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Xe Ghép 24/7</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Xe Hợp Đồng Du Lịch</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Đưa Đón Sân Bay</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Chuyển Phát Hỏa Tốc</a></li>
            </ul>
          </div>

          {/* Fleet */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Đội xe</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#fleet" className="hover:text-primary transition-colors">VinFast VF8 (VIP Black)</a></li>
              <li><a href="#fleet" className="hover:text-primary transition-colors">VinFast VF7 (VIP White)</a></li>
              <li><a href="#fleet" className="hover:text-primary transition-colors">SUV Fortuner / Everest</a></li>
              <li><a href="#fleet" className="hover:text-primary transition-colors">Xe Bán Tải Đa Dụng</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Liên hệ</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>{BRAND_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={`tel:${BRAND_CONFIG.hotlineRaw}`} className="hover:text-primary transition-colors">{BRAND_CONFIG.hotline}</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>Hỗ trợ 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-xl overflow-hidden border border-border/30">
          <iframe
            src={BRAND_CONFIG.googleMapsEmbedUrl}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${BRAND_CONFIG.name} Location`}
          />
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 {BRAND_CONFIG.name}. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Điều khoản</a>
            <a href="#" className="hover:text-primary transition-colors">Chính sách</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

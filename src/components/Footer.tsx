import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary/30 border-t border-border/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-bold mb-4">
              <span className="text-gold-gradient">Nhà Xe Kim Cương</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Dịch vụ xe chung Thái Nguyên - Hải Phòng tần suất 45p/chuyến qua cao tốc 5B và xe ghép Thái Nguyên - Hà Nội 24/7. Uy tín, an toàn, chu đáo.
            </p>
            <div className="flex items-center gap-2 text-primary font-semibold">
              <Phone className="w-4 h-4" />
              <a href="tel:0969862333" className="hover:underline">0969 862 333</a>
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
                <span>Tổ 10, Quan Triều, Thái Nguyên</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:0969862333" className="hover:text-primary transition-colors">0969 862 333</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 text-primary shrink-0 flex items-center justify-center font-bold text-sm">✉</span>
                <a href="mailto:Hoixechung@gmail.com" className="hover:text-primary transition-colors">Hoixechung@gmail.com</a>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.4988636735165!2d105.811802!3d21.605273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135272a80695029%3A0xf6b56bc7f59d57bc!2zUXVhbiBUcmnhu4N1LCBUaMOhaSBOZ3V5w6puLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1706000000000!5m2!1svi!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nhà Xe Kim Cương Location"
          />
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Nhà Xe Kim Cương. Tất cả quyền được bảo lưu.
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

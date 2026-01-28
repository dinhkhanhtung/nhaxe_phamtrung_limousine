import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary/30 border-t border-border/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-bold mb-4">
              <span className="text-gold-gradient">Nguyễn Hà</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Dịch vụ cho thuê xe cao cấp tại Thái Nguyên. Uy tín - Chất lượng - Tận tâm.
            </p>
            <div className="flex items-center gap-2 text-primary font-semibold">
              <Phone className="w-4 h-4" />
              <a href="tel:0868752888" className="hover:underline">0868 752 888</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Dịch vụ</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Xe du lịch theo tua</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Xe cưới & Ăn hỏi</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Đưa đón sân bay</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Thuê xe hợp đồng</a></li>
            </ul>
          </div>

          {/* Fleet */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Đội xe</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#fleet" className="hover:text-primary transition-colors">Toyota Camry</a></li>
              <li><a href="#fleet" className="hover:text-primary transition-colors">VinFast VF7/VF8</a></li>
              <li><a href="#fleet" className="hover:text-primary transition-colors">Mercedes-Benz S-Class</a></li>
              <li><a href="#fleet" className="hover:text-primary transition-colors">Xe 7-16 chỗ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Liên hệ</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>Sơn Cẩm, Phú Lương, Thái Nguyên</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:0868752888" className="hover:text-primary transition-colors">0868 752 888</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:contact@nguyenha.vn" className="hover:text-primary transition-colors">contact@nguyenha.vn</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>24/7 Hỗ trợ</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-xl overflow-hidden border border-border/30">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29727.21483982063!2d105.74361571562496!3d21.741666900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313531b1c5a2d6c7%3A0x78c4e7e8f6f0c8df!2zU8ahbiBI4bqhbSwgUGjDuiBMxrDGoW5nLCBUaMOhaSBOZ3V5w6pu!5e0!3m2!1svi!2s!4v1706000000000!5m2!1svi!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nguyễn Hà Location"
          />
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Nguyễn Hà. Tất cả quyền được bảo lưu.
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

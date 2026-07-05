import { Car, Plane, Zap, Calendar } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Xe Ghép 24/7",
    description: "Dịch vụ xe ghép đón tận nhà, trả tận nơi tuyến Thái Nguyên - Hà Nội - Sân bay. Tần suất liên tục, tiết kiệm chi phí tối đa.",
    features: ["Thái Nguyên - Hà Nội", "Đón tận nhà - Trả tận nơi", "Giá chỉ 150K/người"],
  },
  {
    icon: Calendar,
    title: "Nhận Xe Hợp Đồng",
    description: "Nhận hợp đồng xe du lịch, sự kiện, hiếu hỷ, đưa đón cán bộ công nhân viên cho các doanh nghiệp, công ty.",
    features: ["Xe du lịch - Sự kiện", "Xe cưới hỏi sang trọng", "Hợp đồng công ty"],
  },
  {
    icon: Plane,
    title: "Đưa Đón Sân Bay",
    description: "Dịch vụ đưa đón sân bay Nội Bài chuyên nghiệp. Tài xế đón đúng giờ, hỗ trợ khuân vác hành lý chu đáo từ A-Z.",
    features: ["Nội Bài - Thái Nguyên", "Đưa đón nhanh chóng", "Phục vụ 24/7 kể cả đêm"],
  },
  {
    icon: Zap,
    title: "Chuyển Phát Hỏa Tốc",
    description: "Gửi đồ ship hỏa tốc giữa Thái Nguyên - Hà Nội - Sân bay Nội Bài. Giao nhận hàng hóa tận tay an toàn, siêu tốc.",
    features: ["Nhận hàng tận tay", "Giao ngay trong ngày", "An toàn - Đúng hẹn"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Dịch vụ</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Dịch Vụ <span className="text-gold-gradient">Của Chúng Tôi</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Đa dạng dịch vụ cho thuê xe đáp ứng mọi nhu cầu của bạn
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-premium p-6 group hover:scale-[1.02] transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

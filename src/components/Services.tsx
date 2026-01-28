import { MapPin, Plane, Heart, Calendar } from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Du lịch theo tua",
    description: "Đưa đón khách du lịch tham quan các điểm đến trong và ngoài tỉnh. Tài xế am hiểu địa phương, phục vụ nhiệt tình.",
    features: ["Thái Nguyên - Hà Nội", "Thái Nguyên - Hạ Long", "Tour miền Bắc"],
  },
  {
    icon: Heart,
    title: "Xe cưới & Ăn hỏi",
    description: "Dịch vụ xe hoa cô dâu, xe ăn hỏi sang trọng. Trang trí đẹp mắt, đúng giờ, tạo ấn tượng cho ngày trọng đại.",
    features: ["Xe hoa cô dâu", "Xe ăn hỏi", "Trang trí theo yêu cầu"],
  },
  {
    icon: Plane,
    title: "Đưa đón sân bay",
    description: "Dịch vụ đưa đón sân bay Nội Bài chuyên nghiệp. Theo dõi chuyến bay, đón đúng giờ, hỗ trợ hành lý.",
    features: ["Sân bay Nội Bài", "Liên tỉnh", "Đúng giờ 100%"],
  },
  {
    icon: Calendar,
    title: "Thuê xe hợp đồng",
    description: "Cho thuê xe tháng, hợp đồng dài hạn cho doanh nghiệp. Giá cạnh tranh, linh hoạt, bảo dưỡng định kỳ.",
    features: ["Thuê tháng", "Hợp đồng năm", "Giá doanh nghiệp"],
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

import { Car, Plane, Zap, Calendar, Percent, HeartPulse, Heart, Users } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Xe Ghép 24/7",
    description: "Dịch vụ xe ghép đón tận nhà, trả tận nơi tuyến Thái Nguyên - Hà Nội - Sân bay. Tần suất liên tục, tiết kiệm chi phí tối đa.",
    features: ["Thái Nguyên - Hà Nội", "Đón tận nhà - Trả tận nơi", "Giá chỉ 150K/người"],
  },
  {
    icon: Percent,
    title: "Xe Tiện Chuyến",
    description: "Tận dụng xe chạy rỗng chiều về giúp bạn tiết kiệm chi phí tới 50% so với thông thường mà chất lượng không đổi.",
    features: ["Tiết kiệm đến 50%", "Liên kết nhiều hãng xe", "Nhiều khung giờ linh hoạt"],
  },
  {
    icon: Users,
    title: "Bao Xe Gia Đình",
    description: "Không gian riêng tư, thoải mái di chuyển theo lịch trình cá nhân bằng các dòng xe 4-7 chỗ đời mới, sạch sẽ.",
    features: ["Riêng tư & Thoải mái", "Lịch trình tự chọn", "Xe 4-7 chỗ đời mới"],
  },
  {
    icon: Plane,
    title: "Đưa Đón Sân Bay",
    description: "Dịch vụ đưa đón sân bay Nội Bài chuyên nghiệp. Tài xế đón đúng giờ, hỗ trợ khuân vác hành lý chu đáo từ A-Z.",
    features: ["Nội Bài - Thái Nguyên", "Đúng giờ - Không chờ đợi", "Theo dõi lịch bay sát sao"],
  },
  {
    icon: HeartPulse,
    title: "Đưa Đón Khám Bệnh",
    description: "Dịch vụ đưa đón đi khám bệnh Hà Nội chuyên nghiệp: khởi hành sớm từ 3-4h sáng, đón tận giường, hỗ trợ chờ đón về trong ngày.",
    features: ["Khởi hành từ 3-4h sáng", "Đón khách tận giường ngủ", "Đưa trả trực tiếp bệnh viện"],
  },
  {
    icon: Heart,
    title: "Xe Hoa Cưới Hỏi",
    description: "Cho thuê xe hoa, xe đón dâu, xe phục vụ hai bên gia đình trong ngày cưới hỏi trọng đại với phong cách lịch sự, sang trọng.",
    features: ["Xe cưới đời mới sang trọng", "Trang trí hoa cưới lộng lẫy", "Tài xế mặc chỉnh tề, đúng giờ"],
  },
  {
    icon: Calendar,
    title: "Nhận Xe Hợp Đồng",
    description: "Nhận hợp đồng xe du lịch, sự kiện, hiếu hỷ, đưa đón cán bộ công nhân viên cho các doanh nghiệp, công ty tại Thái Nguyên.",
    features: ["Xe du lịch - Sự kiện - Lễ hội", "Đưa đón nhân viên KCN", "Xe 4 - 7 - 16 chỗ đa dạng"],
  },
  {
    icon: Zap,
    title: "Chuyển Phát Hỏa Tốc",
    description: "Gửi đồ ship hỏa tốc giữa Thái Nguyên - Hà Nội - Sân bay Nội Bài. Giao nhận hàng hóa tận tay an toàn, siêu tốc trong ngày.",
    features: ["Nhận hàng tận tay", "Giao ngay trong ngày", "Đảm bảo hàng hóa nguyên vẹn"],
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
        <div className="flex overflow-x-auto pb-6 gap-6 snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-2 lg:grid-cols-4 md:pb-0">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-premium p-6 group hover:scale-[1.02] transition-transform duration-300 w-[85vw] sm:w-[320px] shrink-0 snap-start md:w-auto md:shrink flex flex-col items-center text-center md:items-start md:text-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors mx-auto md:mx-0">
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
              <ul className="space-y-2 w-fit mx-auto text-left md:mx-0">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
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

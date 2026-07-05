import { Shield, Clock, Award, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        icon: Shield,
        title: "An Toàn Tuyệt Đối",
        description: "Đội ngũ lái xe chuyên nghiệp, được đào tạo bài bản. Xe đời mới được bảo dưỡng định kỳ.",
    },
    {
        icon: Clock,
        title: "Đúng Giờ 24/7",
        description: "Phục vụ mọi lúc, mọi nơi. Cam kết đón khách đúng giờ, không để quý khách phải chờ đợi.",
    },
    {
        icon: Award,
        title: "Chất Lượng 5 Sao",
        description: "Không gian xe sang trọng, sạch sẽ, thoáng mát. Trang bị nước uống và khăn lạnh miễn phí.",
    },
    {
        icon: DollarSign,
        title: "Giá Cả Minh Bạch",
        description: "Báo giá trọn gói trước chuyến đi. Không phát sinh chi phí ẩn. Giảm giá 70% chiều về.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold font-playfair bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                        Tại Sao Chọn <span className="text-gold-gradient">Phạm Trung Limousine</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Chúng tôi cam kết mang đến trải nghiệm di chuyển đẳng cấp, an toàn và tiện lợi nhất cho mỗi hành trình của bạn.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="card-premium p-6 hover:translate-y-[-5px] transition-transform duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <feature.icon className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

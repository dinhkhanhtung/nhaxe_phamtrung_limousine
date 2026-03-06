import { PhoneCall, CalendarCheck, Car, Smile } from "lucide-react";

const steps = [
    {
        icon: PhoneCall,
        title: "1. Liên Hệ",
        description: "Gọi hotline hoặc đặt xe trực tuyến qua website/Zalo.",
    },
    {
        icon: CalendarCheck,
        title: "2. Xác Nhận",
        description: "Nhân viên xác nhận lộ trình, loại xe và báo giá chi tiết.",
    },
    {
        icon: Car,
        title: "3. Đón Khách",
        description: "Tài xế đón quý khách đúng giờ tại địa điểm đã hẹn.",
    },
    {
        icon: Smile,
        title: "4. Hoàn Thành",
        description: "Thanh toán sau khi kết thúc chuyến đi an toàn.",
    },
];

const HowItWorks = () => {
    return (
        <section className="py-20 relative overflow-hidden bg-background">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold font-playfair bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                        Quy Trình <span className="text-gold-gradient">Đặt Xe</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Đơn giản, nhanh chóng và chuyên nghiệp chỉ với 4 bước
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Connecting line for desktop */}
                    <div className="hidden lg:block absolute top-[2.5rem] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10" />

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-full bg-card border border-primary/20 flex items-center justify-center mb-6 shadow-lg shadow-primary/5 group-hover:scale-110 group-hover:border-primary transition-all duration-300 relative z-10">
                                <step.icon className="w-9 h-9 text-gold-gradient" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-playfair">{step.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

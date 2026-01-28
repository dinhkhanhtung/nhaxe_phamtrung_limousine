import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Anh Minh Tuấn",
    role: "Doanh nhân",
    content: "Dịch vụ xe cưới của Nguyễn Hà rất chuyên nghiệp. Xe đẹp, tài xế lịch sự, đúng giờ. Ngày cưới của tôi hoàn hảo nhờ có đội ngũ Nguyễn Hà.",
    rating: 5,
    avatar: "MT",
  },
  {
    id: 2,
    name: "Chị Thu Hương",
    role: "Giáo viên",
    content: "Thuê xe đi du lịch Hạ Long cùng gia đình. Tài xế am hiểu đường, nhiệt tình hướng dẫn. Giá cả hợp lý, sẽ tiếp tục sử dụng dịch vụ.",
    rating: 5,
    avatar: "TH",
  },
  {
    id: 3,
    name: "Anh Văn Đức",
    role: "Quản lý",
    content: "Công ty tôi thuê xe hợp đồng tháng của Nguyễn Hà đã 2 năm. Xe luôn sạch sẽ, bảo dưỡng tốt. Rất yên tâm khi sử dụng.",
    rating: 5,
    avatar: "VD",
  },
  {
    id: 4,
    name: "Chị Lan Anh",
    role: "Kế toán",
    content: "Đặt xe đưa đón sân bay Nội Bài, tài xế đã đợi sẵn dù chuyến bay delay. Rất ấn tượng với sự chu đáo của Nguyễn Hà.",
    rating: 5,
    avatar: "LA",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Đánh giá</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Khách Hàng <span className="text-gold-gradient">Nói Gì</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hơn 1000 khách hàng đã tin tưởng và hài lòng với dịch vụ của chúng tôi
          </p>
        </div>

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Main testimonial */}
          <div className="card-premium p-8 md:p-12 relative">
            {/* Quote icon */}
            <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />

            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrev}
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? "bg-primary w-6" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

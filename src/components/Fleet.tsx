import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Users, Zap, Crown, Car } from "lucide-react";
import vinfastWhite from "@/assets/vinfast-white.jpg";
import vinfastBlack from "@/assets/vinfast-black.jpg";

interface CarType {
  id: string;
  name: string;
  brand: string;
  seats: number;
  price: string;
  category: "ghep" | "bao" | "other";
  image: string;
  description: string;
}

const cars: CarType[] = [
  {
    id: "1",
    name: "Vé Lẻ Xe Ghép",
    brand: "Tuyến Thái Nguyên - Hà Nội",
    seats: 5,
    price: "150K/người",
    category: "ghep",
    image: vinfastWhite,
    description: "Xe ghép đón tận nhà, trả tận nơi cực kỳ tiện lợi và tiết kiệm. Khởi hành liên tục 24/7.",
  },
  {
    id: "2",
    name: "Bao Xe 4 Chỗ",
    brand: "Xe điện VinFast VF8/VF7 VIP",
    seats: 5,
    price: "500K/lượt",
    category: "bao",
    image: vinfastBlack,
    description: "Không gian riêng tư, sang trọng, đẳng cấp thương gia. Thích hợp đi công tác, đưa đón đối tác.",
  },
  {
    id: "3",
    name: "Bao Xe 7 Chỗ",
    brand: "SUV Fortuner / Everest",
    seats: 7,
    price: "650K/lượt",
    category: "bao",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&auto=format&fit=crop&q=60",
    description: "Xe SUV 7 chỗ gầm cao, khoang hành khách và hành lý cực kỳ rộng rãi cho gia đình và nhóm bạn.",
  },
  {
    id: "4",
    name: "Bao Xe Bán Tải",
    brand: "Ford Ranger / Hilux",
    seats: 5,
    price: "650K/lượt",
    category: "bao",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&auto=format&fit=crop&q=60",
    description: "Dòng xe bán tải đời mới khỏe khoắn, gầm cao, tải đồ thoải mái cho các hành trình đa dụng.",
  },
  {
    id: "5",
    name: "Gửi Đồ Ship Hỏa Tốc",
    brand: "Giao nhận tận nơi 24/7",
    seats: 0,
    price: "Từ 50K",
    category: "other",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=60",
    description: "Vận chuyển hàng hóa, giấy tờ hỏa tốc an toàn, đúng giờ giữa Thái Nguyên - Hà Nội - Sân bay.",
  },
];

const filters = [
  { id: "all", label: "Tất cả dịch vụ", icon: Car },
  { id: "ghep", label: "Xe Ghép Lẻ", icon: Users },
  { id: "bao", label: "Bao Xe Riêng", icon: Crown },
  { id: "other", label: "Dịch Vụ Khác", icon: Zap },
];

const Fleet = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCars = activeFilter === "all" 
    ? cars 
    : cars.filter(car => car.category === activeFilter);

  return (
    <section id="fleet" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Bảng giá & Dịch vụ</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Bảng Giá <span className="text-gold-gradient">Dịch Vụ Xe</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hệ thống xe đời mới hiện đại, đón tận nhà trả tận nơi với mức giá cạnh tranh nhất thị trường.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "gold" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
              className="gap-2"
            >
              <filter.icon className="w-4 h-4" />
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Car grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="card-premium overflow-hidden group flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  
                  {/* Seats badge */}
                  {car.seats > 0 && (
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                      <Users className="w-3 h-3" />
                      {car.seats} chỗ
                    </div>
                  )}

                  {/* Category badge */}
                  {car.category === "bao" && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      <Crown className="w-3 h-3" />
                      VIP
                    </div>
                  )}
                  {car.category === "ghep" && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-success text-success-foreground text-xs font-medium">
                      <Users className="w-3 h-3" />
                      Giá Rẻ
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <h3 className="font-display text-lg font-bold text-foreground line-clamp-1">
                      {car.name}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3 font-semibold">{car.brand}</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {car.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-muted-foreground">Giá cước:</span>
                  <span className="text-lg font-bold text-primary">{car.price}</span>
                </div>
                <Button 
                  variant="gold" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Đặt Xe Ngay
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;

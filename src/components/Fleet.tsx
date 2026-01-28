import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Users, Zap, Crown, Car } from "lucide-react";

interface CarType {
  id: string;
  name: string;
  brand: string;
  seats: number;
  category: "sedan" | "electric" | "luxury" | "multi";
  image: string;
  description: string;
}

const cars: CarType[] = [
  {
    id: "1",
    name: "Toyota Camry",
    brand: "Toyota",
    seats: 5,
    category: "sedan",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&auto=format&fit=crop&q=60",
    description: "Sedan cao cấp, tiện nghi, phù hợp công tác và du lịch",
  },
  {
    id: "2",
    name: "VinFast VF7",
    brand: "VinFast",
    seats: 5,
    category: "electric",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&auto=format&fit=crop&q=60",
    description: "Xe điện thông minh, hiện đại, thân thiện môi trường",
  },
  {
    id: "3",
    name: "VinFast VF8",
    brand: "VinFast",
    seats: 5,
    category: "electric",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=60",
    description: "SUV điện cao cấp, không gian rộng rãi, công nghệ tiên tiến",
  },
  {
    id: "4",
    name: "Mercedes-Benz S-Class",
    brand: "Mercedes",
    seats: 5,
    category: "luxury",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&auto=format&fit=crop&q=60",
    description: "Dòng xe sang bậc nhất, đẳng cấp VIP cho dịp đặc biệt",
  },
  {
    id: "5",
    name: "Toyota Fortuner",
    brand: "Toyota",
    seats: 7,
    category: "multi",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&auto=format&fit=crop&q=60",
    description: "SUV 7 chỗ rộng rãi, phù hợp gia đình và nhóm bạn",
  },
  {
    id: "6",
    name: "Ford Everest",
    brand: "Ford",
    seats: 7,
    category: "multi",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&auto=format&fit=crop&q=60",
    description: "SUV 7 chỗ mạnh mẽ, off-road tốt, tiện nghi cao cấp",
  },
  {
    id: "7",
    name: "Ford Transit",
    brand: "Ford",
    seats: 16,
    category: "multi",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=60",
    description: "Xe 16 chỗ lý tưởng cho đoàn du lịch và sự kiện",
  },
];

const filters = [
  { id: "all", label: "Tất cả", icon: Car },
  { id: "sedan", label: "Sedan", icon: Car },
  { id: "electric", label: "Xe điện", icon: Zap },
  { id: "luxury", label: "Hạng sang", icon: Crown },
  { id: "multi", label: "Nhiều chỗ", icon: Users },
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
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Đội xe</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Đội Xe <span className="text-gold-gradient">Đa Dạng</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Từ sedan sang trọng đến xe 16 chỗ, đáp ứng mọi nhu cầu di chuyển của bạn
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="card-premium overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                
                {/* Seats badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                  <Users className="w-3 h-3" />
                  {car.seats} chỗ
                </div>

                {/* Category badge */}
                {car.category === "luxury" && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    <Crown className="w-3 h-3" />
                    VIP
                  </div>
                )}
                {car.category === "electric" && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-success text-success-foreground text-xs font-medium">
                    <Zap className="w-3 h-3" />
                    Điện
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {car.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {car.description}
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="tel:0868752888">Liên hệ báo giá</a>
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

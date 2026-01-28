import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Clock, Car, Send } from "lucide-react";

const carTypes = [
  { value: "sedan", label: "Sedan (Toyota Camry)" },
  { value: "vinfast-vf7", label: "VinFast VF7" },
  { value: "vinfast-vf8", label: "VinFast VF8" },
  { value: "luxury", label: "Mercedes-Benz S-Class" },
  { value: "7-seat", label: "7 chỗ (Fortuner/Everest)" },
  { value: "16-seat", label: "16 chỗ (Ford Transit)" },
];

const BookingForm = () => {
  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropoffLocation: "",
    date: "",
    time: "",
    carType: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Format message for Zalo
    const message = `Xin chào, tôi muốn đặt xe:
- Điểm đón: ${formData.pickupLocation}
- Điểm đến: ${formData.dropoffLocation}
- Ngày: ${formData.date}
- Giờ: ${formData.time}
- Loại xe: ${carTypes.find(c => c.value === formData.carType)?.label || formData.carType}
- SĐT: ${formData.phone}`;
    
    // Open Zalo with message
    window.open(`https://zalo.me/0868752888?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="booking" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Đặt xe nhanh</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
              Đặt Xe <span className="text-gold-gradient">Trong 30 Giây</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Điền thông tin bên dưới và chúng tôi sẽ liên hệ xác nhận ngay lập tức
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="card-premium p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Pickup Location */}
              <div className="space-y-2">
                <Label htmlFor="pickup" className="text-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Điểm đón
                </Label>
                <Input
                  id="pickup"
                  placeholder="Nhập địa chỉ đón"
                  value={formData.pickupLocation}
                  onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                  required
                />
              </div>

              {/* Dropoff Location */}
              <div className="space-y-2">
                <Label htmlFor="dropoff" className="text-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Điểm đến
                </Label>
                <Input
                  id="dropoff"
                  placeholder="Nhập địa chỉ đến"
                  value={formData.dropoffLocation}
                  onChange={(e) => setFormData({ ...formData, dropoffLocation: e.target.value })}
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                  required
                />
              </div>

              {/* Date */}
              <div className="space-y-2">
                <Label htmlFor="date" className="text-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Ngày đi
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                  required
                />
              </div>

              {/* Time */}
              <div className="space-y-2">
                <Label htmlFor="time" className="text-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Giờ đón
                </Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                  required
                />
              </div>

              {/* Car Type */}
              <div className="space-y-2">
                <Label htmlFor="carType" className="text-foreground flex items-center gap-2">
                  <Car className="w-4 h-4 text-primary" />
                  Loại xe
                </Label>
                <Select value={formData.carType} onValueChange={(value) => setFormData({ ...formData, carType: value })}>
                  <SelectTrigger className="bg-secondary/50 border-border/50 focus:border-primary">
                    <SelectValue placeholder="Chọn loại xe" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {carTypes.map((car) => (
                      <SelectItem key={car.value} value={car.value}>
                        {car.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground flex items-center gap-2">
                  📱 Số điện thoại
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Nhập số điện thoại"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button type="submit" variant="gold" size="lg" className="w-full mt-8">
              <Send className="w-5 h-5" />
              Gửi Yêu Cầu Đặt Xe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;

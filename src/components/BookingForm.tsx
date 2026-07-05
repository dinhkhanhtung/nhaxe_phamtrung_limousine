import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Clock, Car, Send, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const carTypes = [
  { value: "ghep", label: "Vé lẻ xe ghép Thái Nguyên - Hà Nội (150K/người)" },
  { value: "bao-4", label: "Bao xe 4 chỗ (500K/lượt)" },
  { value: "bao-7", label: "Bao xe 7 chỗ (650K/lượt)" },
  { value: "ban-tai", label: "Bao xe bán tải (650K/lượt)" },
  { value: "gui-do", label: "Gửi đồ ship hỏa tốc" },
  { value: "hop-dong", label: "Hợp đồng xe (Du lịch, Sự kiện, Công ty)" },
];

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropoffLocation: "",
    date: "",
    time: "",
    carType: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  // Validate form data
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = "Vui lòng nhập địa chỉ đón";
    }
    if (!formData.dropoffLocation.trim()) {
      newErrors.dropoffLocation = "Vui lòng nhập địa chỉ đến";
    }
    if (!formData.date) {
      newErrors.date = "Vui lòng chọn ngày đi";
    }
    if (!formData.time) {
      newErrors.time = "Vui lòng chọn giờ đón";
    }
    if (!formData.carType) {
      newErrors.carType = "Vui lòng chọn loại xe";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!/^0\d{9,10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form first
    if (!validateForm()) {
      toast({
        title: "Lỗi",
        description: "Vui lòng kiểm tra lại thông tin bắt buộc",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Format message for Zalo
      const message = `Xin chào, tôi muốn đặt xe:
📍 Điểm đón: ${formData.pickupLocation}
📍 Điểm đến: ${formData.dropoffLocation}
📅 Ngày: ${new Date(formData.date).toLocaleDateString("vi-VN")}
⏰ Giờ: ${formData.time}
🚗 Loại dịch vụ: ${carTypes.find((c) => c.value === formData.carType)?.label || formData.carType}
📱 SĐT liên hệ: ${formData.phone}`;

      // Open Zalo with pre-filled message
      const zaloUrl = `https://zalo.me/0981528528?text=${encodeURIComponent(message)}`;
      window.open(zaloUrl, "_blank");

      // Show success message
      toast({
        title: "Thành công!",
        description: "Đã mở Zalo. Vui lòng ấn gửi để hoàn tất đặt xe",
      });

      // Reset form
      setFormData({
        pickupLocation: "",
        dropoffLocation: "",
        date: "",
        time: "",
        carType: "",
        phone: "",
      });
      setErrors({});
    } catch (error) {
      toast({
        title: "Lỗi",
        description: "Có lỗi xảy ra. Vui lòng thử lại",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
                  onChange={(e) => {
                    setFormData({ ...formData, pickupLocation: e.target.value });
                    if (errors.pickupLocation) setErrors({ ...errors, pickupLocation: "" });
                  }}
                  className={`bg-secondary/50 border-border/50 focus:border-primary ${
                    errors.pickupLocation ? "border-red-500" : ""
                  }`}
                  required
                />
                {errors.pickupLocation && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.pickupLocation}
                  </p>
                )}
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
                  onChange={(e) => {
                    setFormData({ ...formData, dropoffLocation: e.target.value });
                    if (errors.dropoffLocation) setErrors({ ...errors, dropoffLocation: "" });
                  }}
                  className={`bg-secondary/50 border-border/50 focus:border-primary ${
                    errors.dropoffLocation ? "border-red-500" : ""
                  }`}
                  required
                />
                {errors.dropoffLocation && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.dropoffLocation}
                  </p>
                )}
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
                  onChange={(e) => {
                    setFormData({ ...formData, date: e.target.value });
                    if (errors.date) setErrors({ ...errors, date: "" });
                  }}
                  className={`bg-secondary/50 border-border/50 focus:border-primary ${
                    errors.date ? "border-red-500" : ""
                  }`}
                  required
                />
                {errors.date && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.date}
                  </p>
                )}
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
                  onChange={(e) => {
                    setFormData({ ...formData, time: e.target.value });
                    if (errors.time) setErrors({ ...errors, time: "" });
                  }}
                  className={`bg-secondary/50 border-border/50 focus:border-primary ${
                    errors.time ? "border-red-500" : ""
                  }`}
                  required
                />
                {errors.time && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.time}
                  </p>
                )}
              </div>

              {/* Car Type */}
              <div className="space-y-2">
                <Label htmlFor="carType" className="text-foreground flex items-center gap-2">
                  <Car className="w-4 h-4 text-primary" />
                  Loại xe
                </Label>
                <Select
                  value={formData.carType}
                  onValueChange={(value) => {
                    setFormData({ ...formData, carType: value });
                    if (errors.carType) setErrors({ ...errors, carType: "" });
                  }}
                >
                  <SelectTrigger
                    className={`bg-secondary/50 border-border/50 focus:border-primary ${
                      errors.carType ? "border-red-500" : ""
                    }`}
                  >
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
                {errors.carType && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.carType}
                  </p>
                )}
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
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: "" });
                  }}
                  className={`bg-secondary/50 border-border/50 focus:border-primary ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                  required
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="gold"
              size="lg"
              className="w-full mt-8"
              disabled={isLoading}
            >
              <Send className="w-5 h-5" />
              {isLoading ? "Đang gửi..." : "Gửi Yêu Cầu Đặt Xe"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;

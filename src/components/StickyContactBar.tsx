import { Phone, Calendar } from "lucide-react";

const StickyContactBar = () => {
  const phoneNumber = "0981528528";
  const zaloLink = `https://zalo.me/${phoneNumber}`;
  const phoneLink = `tel:${phoneNumber}`;
  const messengerLink = "https://m.me/dinhkhanhtung";
  const mapLink = "https://www.google.com/maps/search/?api=1&query=Tổ+10+Quan+Triều+Thái+Nguyên";

  const handleBookingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#booking";
    }
  };

  return (
    <>
      {/* Desktop Floating Buttons */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3">
        {/* Zalo Button */}
        <a
          href={zaloLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full shadow-lg transition-all duration-300 w-14 h-14 hover:scale-110 bg-white animate-bounce"
          style={{ animationDuration: "2s" }}
          aria-label="Chat Zalo"
        >
          <img
            src="https://i.ibb.co/Wjz9N4P/AVv-Xs-Eg3-Dr-Zo-Aw-Hqb-R-Du-Iy32r-VDU8jh-XVN5-BI1-EFLFgt6-TLycc0-Ww9n1xen-D4-7r-MP4-jgdv-Hbyu-2-Gu-TN2h-O.png"
            alt="Zalo"
            className="w-14 h-14 rounded-full object-cover"
          />
        </a>

        {/* Phone Button */}
        <a
          href={phoneLink}
          className="flex items-center justify-center rounded-full shadow-lg transition-all duration-300 w-14 h-14 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:scale-110 animate-pulse-glow"
          aria-label="Gọi điện"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {/* Mobile Native-like Bottom Bar */}
      <div className="flex md:hidden fixed bottom-0 left-0 right-0 z-50 h-16 bg-background/85 backdrop-blur-lg border-t border-border/40 px-2 justify-around items-center pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        {/* Gọi ngay */}
        <a href={phoneLink} className="flex flex-col items-center justify-center w-16 h-full text-muted-foreground hover:text-primary active:scale-95 transition-all">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/80 text-primary">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-medium mt-1">Gọi xe</span>
        </a>

        {/* Zalo */}
        <a href={zaloLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-16 h-full text-muted-foreground hover:text-primary active:scale-95 transition-all">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white overflow-hidden shadow-sm">
            <img
              src="https://i.ibb.co/Wjz9N4P/AVv-Xs-Eg3-Dr-Zo-Aw-Hqb-R-Du-Iy32r-VDU8jh-XVN5-BI1-EFLFgt6-TLycc0-Ww9n1xen-D4-7r-MP4-jgdv-Hbyu-2-Gu-TN2h-O.png"
              alt="Zalo"
              className="w-8 h-8 object-cover"
            />
          </div>
          <span className="text-[10px] font-medium mt-1">Zalo</span>
        </a>

        {/* Đặt vé (Nổi ở giữa) */}
        <a href="#booking" onClick={handleBookingClick} className="flex flex-col items-center justify-center w-16 h-full text-primary-foreground -translate-y-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-primary/80 shadow-[0_4px_15px_rgba(37,99,235,0.4)] border-4 border-background active:scale-90 transition-all">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <span className="text-[10px] font-semibold text-primary mt-1">Đặt vé</span>
        </a>

        {/* Messenger */}
        <a href={messengerLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-16 h-full text-muted-foreground hover:text-primary active:scale-95 transition-all">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white overflow-hidden shadow-sm">
            <img
              src="https://i.ibb.co/B523cQD3/3c39891bc36c.png"
              alt="Messenger"
              className="w-8 h-8 object-cover"
            />
          </div>
          <span className="text-[10px] font-medium mt-1">Messenger</span>
        </a>

        {/* Chỉ đường */}
        <a href={mapLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-16 h-full text-muted-foreground hover:text-primary active:scale-95 transition-all">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white overflow-hidden shadow-sm">
            <img
              src="https://i.ibb.co/fdtwLz7F/397619b871de.png"
              alt="Google Maps"
              className="w-8 h-8 object-cover"
            />
          </div>
          <span className="text-[10px] font-medium mt-1">Chỉ đường</span>
        </a>
      </div>
    </>
  );
};

export default StickyContactBar;


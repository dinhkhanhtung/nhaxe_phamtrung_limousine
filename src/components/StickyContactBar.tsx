import { Phone, MessageCircle } from "lucide-react";

const StickyContactBar = () => {
  const phoneNumber = "0868752888";
  const zaloLink = `https://zalo.me/${phoneNumber}`;
  const phoneLink = `tel:${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Zalo Button */}
      <a
        href={zaloLink}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn w-14 h-14 bg-[#0068FF] hover:bg-[#0054CC] text-white animate-pulse-glow"
        aria-label="Chat Zalo"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Phone Button */}
      <a
        href={phoneLink}
        className="floating-btn w-14 h-14 bg-gradient-to-r from-gold to-gold-dark text-primary-foreground"
        aria-label="Gọi điện"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default StickyContactBar;

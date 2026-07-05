import { Phone } from "lucide-react";

const StickyContactBar = () => {
  const phoneNumber = "0981528528";
  const zaloLink = `https://zalo.me/${phoneNumber}`;
  const phoneLink = `tel:${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-50 flex flex-col gap-3">
      {/* Zalo Button */}
      <a
        href={zaloLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-full shadow-lg transition-all duration-300 w-12 h-12 md:w-14 md:h-14 hover:scale-110 bg-white animate-bounce"
        style={{ animationDuration: "2s" }}
        aria-label="Chat Zalo"
      >
        <img
          src="https://i.ibb.co/Wjz9N4P/AVv-Xs-Eg3-Dr-Zo-Aw-Hqb-R-Du-Iy32r-VDU8jh-XVN5-BI1-EFLFgt6-TLycc0-Ww9n1xen-D4-7r-MP4-jgdv-Hbyu-2-Gu-TN2h-O.png"
          alt="Zalo"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
        />
      </a>

      {/* Phone Button */}
      <a
        href={phoneLink}
        className="flex items-center justify-center rounded-full shadow-lg transition-all duration-300 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-gold to-gold-dark text-primary-foreground hover:scale-110 animate-pulse-glow"
        aria-label="Gọi điện"
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6" />
      </a>
    </div>
  );
};

export default StickyContactBar;


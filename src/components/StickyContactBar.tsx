import { Phone } from "lucide-react";

const StickyContactBar = () => {
  const phoneNumber = "0868752888";
  const zaloLink = `https://zalo.me/${phoneNumber}`;
  const phoneLink = `tel:${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 md:right-8 z-50 flex flex-col gap-3">
      {/* Zalo Button */}
      <a
        href={zaloLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-full shadow-lg transition-all duration-300 w-12 h-12 md:w-14 md:h-14 hover:scale-110"
        aria-label="Chat Zalo"
      >
        <img 
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3DrZoAwHqbR-DuIy32rVDU8jhXVN5BI1EFLFgt6TLycc0Ww9n1xenD4_7rMP4_jgdvHbyu_2GuTN2hO7nLrTMCXG0FRtxB8eMRVfep-xD-fBupQ-cbgJhURHIRyb7pruocOhes_T0Ha1pFftDu2wJ3r-DkNlCUELll4-KmsE5uA_5oBKc26GveRQf6x7N/s1600/Icon_of_Zalo.svg.webp"
          alt="Zalo"
          className="w-6 h-6 md:w-7 md:h-7"
        />
      </a>

      {/* Phone Button */}
      <a
        href={phoneLink}
        className="flex items-center justify-center rounded-full shadow-lg transition-all duration-300 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-gold to-gold-dark text-primary-foreground hover:scale-110"
        aria-label="Gọi điện"
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6" />
      </a>
    </div>
  );
};

export default StickyContactBar;

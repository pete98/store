import { useEffect, useState } from 'react';
import promoImage from '../assets/free cofee (1).png';

const PROMO_SEEN_KEY = 'krauszers-free-coffee-promo-seen';

function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(PROMO_SEEN_KEY)) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsVisible(true);
      sessionStorage.setItem(PROMO_SEEN_KEY, 'true');
    }, 550);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closePromo();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVisible]);

  const closePromo = () => {
    setIsClosing(true);
    window.setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 220);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`promo-popup fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-3 backdrop-blur-sm sm:p-6 ${
        isClosing ? 'promo-popup--closing' : ''
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Free coffee promotion"
      onClick={closePromo}
    >
      <div
        className="promo-popup__panel relative w-full max-w-[390px] rounded-[28px] bg-white p-2 shadow-2xl ring-1 ring-white/30 sm:max-w-[480px] sm:rounded-[32px] sm:p-3"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="absolute -left-3 -top-3 h-16 w-16 rounded-full bg-yellow-300 blur-xl sm:h-24 sm:w-24" aria-hidden="true" />
        <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-red-500/30 blur-xl sm:h-28 sm:w-28" aria-hidden="true" />

        <button
          type="button"
          className="absolute -right-2 -top-2 z-10 grid h-11 w-11 place-items-center rounded-full bg-black text-2xl leading-none text-white shadow-lg transition hover:scale-105 hover:bg-red-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-yellow-300"
          onClick={closePromo}
          aria-label="Close free coffee promotion"
        >
          &times;
        </button>

        <img
          src={promoImage}
          alt="Free coffee promotion"
          className="relative z-[1] aspect-square w-full rounded-[22px] object-contain sm:rounded-[26px]"
        />
      </div>
    </div>
  );
}

export default PromoPopup;

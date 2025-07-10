import React from 'react';
import giftCardIcon from '../assets/gift-card.png';
import phoneCallIcon from '../assets/phone-call.png';

function GiftCard() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 text-left">E-Gift and Phone Recharge</h1>

        {/* E-Gift Card Section */}
        <section className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <img src={giftCardIcon} alt="Gift Card Icon" className="h-7 w-7 object-contain" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">E-Gift Cards</h2>
          </div>
          <p className="text-base md:text-lg text-gray-700">
            At our store, you can purchase a wide variety of E-Gift cards for popular brands and services. Whether you need a last-minute gift or want to treat yourself, we offer options for shopping, dining, entertainment, and more. Ask us in-store for the latest available brands!
          </p>
        </section>

        {/* Phone Recharge Section */}
        <section className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <div className="flex items-center gap-3 mb-3">
            <img src={phoneCallIcon} alt="Phone Call Icon" className="h-7 w-7 object-contain" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Phone Recharge</h2>
          </div>
          <p className="text-base md:text-lg text-gray-700">
            Recharge prepaid phones for <span className="font-semibold">US numbers</span> and international numbers, including countries like <span className="font-semibold">Haiti</span> and <span className="font-semibold">Jamaica</span> and many more countries. Stay connected with friends and family—just let us know your carrier and destination, and we’ll handle the rest!
          </p>
        </section>

        {/* Call to action at bottom */}
        <div className="mt-8 ml-2 text-left">
          <span className="text-base md:text-lg text-gray-800 font-medium">
            For more info call:{' '}
            <a href="tel:+17324996748" className="text-blue-600 font-bold underline hover:text-blue-800">
              +1 (732) 499-6748
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default GiftCard;

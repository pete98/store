import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import coffeeImg from '../assets/Coffee.jpeg';
import lotteryImg from '../assets/lottery.jpeg';


import busIcon from '../assets/bus.png';
import lotteryIcon from '../assets/new_jersey_lottery.png';
import printerIcon from '../assets/printer.png';
import giftCardIcon from '../assets/gift-card.png';
import pay from '../assets/pay.png';
import newJerseyLottery from '../assets/new_jersey_lottery.png';
import njlotto from '../assets/njlotto.webp';
import wuLogo from '../assets/wu.png';
import frontImg from '../assets/front.jpeg';
import sittingImg from '../assets/sitting.jpeg';
import slipsImg from '../assets/slips.jpeg';
import ticketsImg from '../assets/tickets.jpeg';
import groceryImg1 from '../assets/grocery/IMG_1111.jpeg';
import groceryImg2 from '../assets/grocery/IMG_5547.jpeg';
import groceryImg3 from '../assets/grocery/IMG_5572.jpeg';
import groceryImg4 from '../assets/grocery/IMG_5604.jpeg';
import groceryImg6 from '../assets/grocery/IMG_5610.jpeg';
import groceryImg7 from '../assets/grocery/IMG_5611.jpeg';

// English-only content as plain variables/arrays
const heroTitle = 'Your Dedicated Friendly Neighborhood Store for over 30 Years.';
const heroSubtitle = 'Open every day from 6 AM to 11 PM';
const findUs = 'Find Us on Google Maps';
const storeAddress = '960 St Georges Ave, Rahway, NJ 07065';
const features = [
  {
    title: 'Western Union & Ria',
    desc: 'Send or receive money with Western Union and Ria. Click to learn more.'
  },
  {
    title: 'Pay Bills & Money Orders',
    desc: 'Pay bills and purchase money orders. Click to learn more.'
  },
  {
    title: 'Casino Bus Services',
    desc: 'Atlantic City and Wind Creek Bus Tickets. Click to learn more.'
  },
  {
    title: 'New Jersey Lottery',
    desc: 'Purchase lottery tickets and check winning numbers instantly.'
  },
  {
    title: 'Copy, Scan, Print & Fax',
    desc: 'Color Print, Copy, Fax, Scan, and more.'
  },
  {
    title: 'E-Gift Cards & Phone Recharge',
    desc: 'Buy e-gift cards or recharge U.S. prepaid and international numbers.'
  }
];


function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const lotteryImages = [
    { src: lotteryImg, alt: "Lottery Area" },
    { src: sittingImg, alt: "Sitting Area" },
    { src: slipsImg, alt: "Lottery Slips" },
    { src: ticketsImg, alt: "Lottery Tickets" }
  ];

  // Auto-advance slider every 2 seconds (faster for mobile)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === lotteryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [lotteryImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === lotteryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? lotteryImages.length - 1 : prevIndex - 1
    );
  };

  // Grocery slider state and images
  const groceryImages = [
    { src: groceryImg1, alt: 'Grocery 1' },
    { src: groceryImg2, alt: 'Grocery 2' },
    { src: groceryImg3, alt: 'Grocery 3' },
    { src: groceryImg4, alt: 'Grocery 4' },
    { src: groceryImg6, alt: 'Grocery 6' },
    { src: groceryImg7, alt: 'Grocery 7' },
  ];
  const [currentGroceryIndex, setCurrentGroceryIndex] = useState(0);
  const nextGroceryImage = () => {
    setCurrentGroceryIndex((prev) =>
      prev === groceryImages.length - 1 ? 0 : prev + 1
    );
  };
  const prevGroceryImage = () => {
    setCurrentGroceryIndex((prev) =>
      prev === 0 ? groceryImages.length - 1 : prev - 1
    );
  };
  useEffect(() => {
    const interval = setInterval(nextGroceryImage, 2000);
    return () => clearInterval(interval);
  }, [groceryImages.length]);

  return (
    <div className=" pt-10 min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-5 md:mx-auto mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Image Left */}
        <div className="w-full md:w-1/2 h-64 md:h-96">
          <img src={frontImg} alt="Store Front" className="w-full h-full object-cover" />
        </div>
        {/* Text Right */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-black md:rounded-r-xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">{heroTitle}</h1>
          <p className="text-white text-lg md:text-xl mb-1">{heroSubtitle}</p>
          <p className="text-white text-sm md:text-base mb-3">{storeAddress}</p>
          <a 
            href="https://maps.app.goo.gl/ajsP7umBxQCVA71fA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors duration-300 w-fit"
          >
            📍 {findUs}
          </a>
        </div>
      </div>
      {/* Our Services Heading */}
      <div className="max-w-6xl mx-auto px-4 mt-4 mb-2">
        <h2 className="text-2xl font-bold text-white text-center bg-black rounded-xl py-4">Our Services</h2>
      </div>
      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 py-10 px-4 md:px-0 max-w-6xl mx-auto">
        {features.map((feature, idx) =>
          idx === 0 ? (
            <Link to="/money-transfer" key={idx} className="flex flex-row md:flex-col items-center bg-yellow-300 text-left md:text-center rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <img src={wuLogo} alt="Western Union Logo" className="w-12 h-12 object-contain mb-0 md:mb-2 mr-4 md:mr-0 rounded" />
              <div>
                <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                <p className="text-gray-800">{feature.desc}</p>
              </div>
            </Link>
          ) : idx === 1 ? (
            <Link to="/bills" key={idx} className="flex flex-row md:flex-col items-center text-left md:text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <img src={pay} alt="Money Order Icon" className="w-12 h-12 object-contain mb-0 md:mb-2 mr-4 md:mr-0 rounded" />
              <div>
                <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            </Link>
          ) : idx === 2 ? (
            <Link
              to="/casino-bus-services"
              key={idx}
              className="flex flex-row md:flex-col items-center text-left md:text-center bg-blue-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <img src={busIcon} alt="Bus Icon" className="w-12 h-12 object-contain mb-0 md:mb-2 mr-4 md:mr-0 rounded" />
              <div>
                <h3 className="font-bold text-white text-lg mb-1">{feature.title}</h3>
                <p className="text-white">{feature.desc}</p>
              </div>
            </Link>
          ) : idx === 3 ? (
            <Link to="/new-jersey-lottery" key={idx} className="flex flex-row md:flex-col items-center text-left md:text-center bg-green-600 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <img src={newJerseyLottery} alt="Lottery Icon" className="w-12 h-12 object-contain mb-0 md:mb-2 mr-4 md:mr-0 rounded" />
              <div>
                <h3 className="font-bold text-white text-lg mb-1">{feature.title}</h3>
                <p className="text-white">{feature.desc}</p>
              </div>
            </Link>
          ) : idx === 4 ? (
            <Link to="/services" key={idx} className="flex flex-row md:flex-col items-center text-left md:text-center bg-blue-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={printerIcon} alt="Printer Icon" className="w-12 h-12 object-contain mb-0 md:mb-2 mr-4 md:mr-0 rounded" />
              <div>
                <h3 className="font-bold  text-lg mb-1">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            </Link>
          ) : (
            <Link
              to="/giftCard"
              key={idx}
              className="flex flex-row md:flex-col items-center text-left md:text-center bg-gradient-to-r from-[#b993d6] via-[#8ca6db] to-[#b993d6] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <img
                src={giftCardIcon}
                alt="Gift Card Icon"
                className="w-12 h-12 object-contain mb-0 md:mb-2 mr-4 md:mr-0 rounded"
              />
              <div>
                <h3 className="font-bold text-lg mb-1 text-white">{feature.title}</h3>
                <p className="text-white">{feature.desc}</p>
              </div>
            </Link>
          )
        )}
      </div>
      {/* New Modern Sections */}
      {/* Coffee Section */}
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-5 md:mx-auto my-12 bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Image Left */}
        <div className="w-full md:w-1/2 h-64 md:h-96 rounded-3xl md:rounded-l-3xl md:rounded-r-none overflow-hidden">
          <img src={coffeeImg} alt="Coffee Machine" className="w-full h-full object-cover rounded-3xl md:rounded-l-3xl md:rounded-r-none" />
        </div>
        {/* Text Right */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center rounded-3xl md:rounded-r-3xl md:rounded-l-none">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            <span className="text-black">Fresh</span> <span className="text-[#4B2E19]">Coffee</span>
          </h2>
          <div className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900">Every Day.</div>
          <p className="text-lg md:text-1xl text-red-600 mb-1">(Deal: Get Any Size Coffee, Butter Roll & Banana for $5.)</p>
          <p className="text-lg md:text-2xl text-gray-700 mb-2">Enjoy barista-quality Bunn Law Coffee, Cappuchino, Hot Chocolate and french vanilla from our state-of-the-art machine. Start your morning right or grab an afternoon pick-me-up in a modern, welcoming space.</p>
        </div>
      </div>
      {/* New Jersey Lottery Section */}
      <div className="flex flex-col-reverse md:flex-row items-center max-w-6xl mx-5 md:mx-auto my-12 bg-green-600 rounded-3xl shadow-2xl overflow-hidden">
        {/* Text Left */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center rounded-3xl md:rounded-l-3xl md:rounded-r-none">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3">
            <span className="text-white">New Jersey</span> <span className="text-white">Lottery</span>
          </h2>
          <p className="text-lg md:text-2xl text-white mb-2">Try your luck with the New Jersey Lottery! Purchase tickets, check results instantly, and enjoy our comfortable, pleasant sitting area while you play.</p>
        </div>
        {/* Image Slider Right */}
        <div className="w-full md:w-1/2 h-64 md:h-96 rounded-3xl md:rounded-r-3xl md:rounded-l-none overflow-hidden relative">
          <img 
            src={lotteryImages[currentImageIndex].src} 
            alt={lotteryImages[currentImageIndex].alt} 
            className="w-full h-full object-cover rounded-3xl md:rounded-r-3xl md:rounded-l-none transition-opacity duration-300"
          />
          {/* Navigation Buttons */}
          <button 
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 md:p-2 rounded-full hover:bg-black/80 transition-colors touch-manipulation"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 md:p-2 rounded-full hover:bg-black/80 transition-colors touch-manipulation"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 md:space-x-2">
            {lotteryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 md:w-2 md:h-2 rounded-full transition-colors touch-manipulation ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Grocery & Drinks Section */}
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-5 md:mx-auto my-12 bg-gradient-to-r from-yellow-500 via-orange-400 to-red-400 rounded-3xl shadow-2xl overflow-hidden">
        {/* Image Left (Slider) */}
        <div className="w-full md:w-1/2 h-64 md:h-96 rounded-3xl md:rounded-l-3xl md:rounded-r-none overflow-hidden relative">
          <img
            src={groceryImages[currentGroceryIndex].src}
            alt={groceryImages[currentGroceryIndex].alt}
            className="w-full h-full object-cover rounded-3xl md:rounded-l-3xl md:rounded-r-none transition-opacity duration-300"
          />
          {/* Navigation Buttons */}
          <button
            onClick={prevGroceryImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 md:p-2 rounded-full hover:bg-black/80 transition-colors touch-manipulation"
            aria-label="Previous grocery image"
          >
            <svg className="w-6 h-6 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextGroceryImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 md:p-2 rounded-full hover:bg-black/80 transition-colors touch-manipulation"
            aria-label="Next grocery image"
          >
            <svg className="w-6 h-6 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 md:space-x-2">
            {groceryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentGroceryIndex(index)}
                className={`w-3 h-3 md:w-2 md:h-2 rounded-full transition-colors touch-manipulation ${
                  index === currentGroceryIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to grocery image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Text Right */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center rounded-3xl md:rounded-r-3xl md:rounded-l-none">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">Grocery, Dairy & Drinks.</h2>
          <p className="text-lg md:text-2xl text-white mb-2">Discover a wide selection of groceries, candies, snacks, and refreshing drinks. We stock quality products to keep your pantry and fridge full.</p>
        </div>
      </div>
      
    </div>
  );
}

export default Home;

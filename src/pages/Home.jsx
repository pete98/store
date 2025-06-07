import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.jpg'; // Placeholder, add your own image

function Home() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[320px] md:h-[420px] flex items-center justify-center bg-black/60 overflow-hidden rounded-lg">
        <img src={heroImg} alt="Store" className="absolute inset-0 w-full h-full object-cover opacity-70" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Your Dedicated Friendly<br />Neighborhood Store</h1>
          <p className="text-white">Open every day from 6 AM to 11 PM</p>
        <a 
          href="https://www.google.com/maps/search/?api=1&query=978+Saint+Georges+Ave+Rahway+NJ+07065" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-2 bg-white text-black rounded-full hover:bg-gray-100 transition-colors duration-300"
        >
          📍 Find Us on Google Maps
        </a>
        </div>
      </div>
      {/* Features */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10 px-4 md:px-0 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
          <span className="text-4xl mb-2">💰</span>
          <h3 className="font-bold text-lg mb-1">Western Union and Ria</h3>
          <p className="text-gray-600">Pay bills and send money to your loved ones.</p>
        </div>
        <div className="flex flex-col items-center text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
          <span className="text-4xl mb-2">⏰</span>
          <h3 className="font-bold text-lg mb-1">Convenient Hours</h3>
          <p className="text-gray-600">Open every day from 6 AM to 11 PM for your convenience.</p>
        </div>
        <div className="flex flex-col items-center text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
          <span className="text-4xl mb-2">🎰</span>
          <h3 className="font-bold text-lg mb-1">New Jersey Lottery</h3>
          <p className="text-gray-600">Buy your tickets and check your numbers.</p>
        </div>
        <Link to="/services" className="flex flex-col items-center text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <span className="text-4xl mb-2">🛠️</span>
          <h3 className="font-bold text-lg mb-1">Services</h3>
          <p className="text-gray-600">Explore our convenient store services.</p>
        </Link>
      </div>

      {/* Featured Deals */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4">
              <span className="text-4xl">☕</span>
              <div>
                <h3 className="font-bold text-lg">Morning Coffee Special</h3>
                <p className="text-gray-600">Any size coffee + donut for $3.99</p>
                <p className="text-sm text-gray-500 mt-1">Valid 6AM-10AM daily</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🫖</span>
              <div>
                <h3 className="font-bold text-lg">Family Coffee Pack</h3>
                <p className="text-gray-600">2 large coffees + 2 pastries for $8.99</p>
                <p className="text-sm text-gray-500 mt-1">All day special</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🧋</span>
              <div>
                <h3 className="font-bold text-lg">Iced Coffee Deal</h3>
                <p className="text-gray-600">Any iced coffee + cookie for $4.99</p>
                <p className="text-sm text-gray-500 mt-1">Valid 2PM-6PM daily</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Products */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <a href="/products" className="text-black/70 hover:underline font-medium">View All</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {/* Product Cards - Replace with real images later */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png" alt="Vegetable Oil" className="w-20 h-20 object-contain mb-2" />
            <span className="font-medium">Vegetable Oil</span>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" alt="Potato Chips" className="w-20 h-20 object-contain mb-2" />
            <span className="font-medium">Potato Chips</span>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/1046/1046866.png" alt="Soft Drink" className="w-20 h-20 object-contain mb-2" />
            <span className="font-medium">Soft Drink</span>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/1046/1046871.png" alt="Yogurt" className="w-20 h-20 object-contain mb-2" />
            <span className="font-medium">Yogurt</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

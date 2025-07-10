import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="px-4 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo/Title */}
        <div className="flex flex-col leading-tight">
          <Link to="/" className="text-xl md:text-2xl font-bold poppins-black text-red-600">
            Krauszer's Food Store <span className="font-normal text-black">Rahway</span>
          </Link>
          <span className="text-xs md:text-sm text-gray-700 -mt-1">960 St Georges Ave, Rahway, NJ</span>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg">
          <Link to="/" className="poppins-regular hover:underline">Home</Link>
          {/* <Link to="/food" className="poppins-regular hover:underline">Food</Link>
          <Link to="/drink" className="poppins-regular hover:underline">Drink</Link> */}
          <Link to="/services" className="poppins-regular hover:underline">Services</Link>
          <Link to="/about" className="poppins-regular hover:underline">About</Link>
          <Link to="/contact" className="poppins-regular hover:underline">Contact</Link>
        </div>
        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
      {/* Mobile Menu - Slide from right */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/30 z-30" onClick={() => setMenuOpen(false)}></div>
          {/* Side Menu */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white z-40 shadow-lg flex flex-col gap-6 p-8 text-lg transform translate-x-0 transition-transform duration-300">
            <button className="self-end mb-4" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <Link to="/" className="poppins-regular hover:underline" onClick={() => setMenuOpen(false)}>Home</Link>
            {/* <Link to="/food" className="poppins-regular hover:underline" onClick={() => setMenuOpen(false)}>Food</Link>
            <Link to="/drink" className="poppins-regular hover:underline" onClick={() => setMenuOpen(false)}>Drink</Link> */}
            <Link to="/services" className="poppins-regular hover:underline" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/about" className="poppins-regular hover:underline" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" className="poppins-regular hover:underline" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
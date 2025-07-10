import React from 'react';

function Services() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-2 sm:px-4 md:px-6 lg:px-0">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Copy, Print & Fax Services</h1>
      <div className="flex flex-col gap-6">
        {/* Copies */}
        <section className="bg-white rounded-xl shadow-md p-4 sm:p-6 border border-gray-100">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Copies</h2>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 space-y-2">
            <li>We provide our customers color &amp; black-and-white copies.</li>
            <li>To change the size of the copy, customers must inform the cashier before making a copy.</li>
          </ul>
        </section>
        {/* Fax Services */}
        <section className="bg-white rounded-xl shadow-md p-4 sm:p-6 border border-gray-100">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Fax Services</h2>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 space-y-2">
            <li>The customer must have all the fax paper flat and clear.</li>
            <li>We provide confirmation for fax services.</li>
            <li>Customer must have all the pages straight to make the transaction easy and fast.</li>
            <li>Customer will receive confirmation for fax.</li>
          </ul>
        </section>
        {/* Printing */}
        <section className="bg-white rounded-xl shadow-md p-4 sm:p-6 border border-gray-100">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Printing</h2>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 space-y-2">
            <li>The customer can email the request to print pages at <span className="font-mono text-blue-700">KRZS9191@gmail.com</span>.</li>
            <li>If the printing pages are more than 10, the customer must pay the printing charges in advance.</li>
          </ul>
        </section>
        {/* General Note */}
        <section className="bg-white rounded-xl shadow-md p-4 sm:p-6 border border-gray-100">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Important Note</h2>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 space-y-2">
            <li>All customers are requested to turn off their cell phone when they come to do the transaction for Western Union.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Services; 
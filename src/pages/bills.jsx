import westernUnionLogo from '../assets/western-union.png';

function Bills() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left mb-10">
        <div className="w-full flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 text-center sm:text-left">
          <div className="flex-shrink-0 flex justify-center sm:justify-start w-full sm:w-auto">
            <img
              src={westernUnionLogo}
              alt="Western Union Logo"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain mx-auto sm:mx-0"
            />
          </div>
          <div className="flex flex-col justify-center items-center sm:items-start w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight text-center sm:text-left">
              Pay Bills & Purchase Money Orders at our Store
            </h1>
        
          </div>
        </div>
        
      </div>

      {/* Pay Bills Section */}
      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-black">
          <h2 className="text-xl md:text-2xl font-bold text-black text-center mb-4">How to Pay Your Bills</h2>
          
          <ul className="list-disc list-inside text-black text-base md:text-lg space-y-2">
            <li>Bring your <strong>invoice with name, address, and phone number</strong>.</li>
            <li>Accepted payment methods: <strong>cash or debit card</strong>.</li>
          </ul>
        </div>

        {/* Money Orders Section */}
        <div className="rounded-2xl bg-whiet shadow-lg p-6 md:p-8 text-black">
          <h2 className="text-xl md:text-2xl font-bold text-black text-center mb-4">Money Orders</h2>
          <ul className="list-disc list-inside text-black text-base md:text-lg space-y-2">
            <li><strong>Cash only</strong> is accepted for money orders.</li>
            <li>For amounts over <strong>$3,000</strong>, ID and further verification may be required.</li>
          </ul>
        </div>
        <span className="text-base text-center sm:text-left max-w-2xl rounded-xl bg-black text-white border border-black shadow-lg px-5 py-3 block">
              From car payments to utilities and mortgage, paying bills and purchasing Money Orders at our store is fast, convenient, and reliable. For more information call us at{' '}
              <a href="tel:+17324996748" className="underline hover:text-white font-bold text-lg text-yellow-300">
                +1 (732) 499-6748
              </a>
            </span>
      </div>
    </div>
  );
}

export default Bills;

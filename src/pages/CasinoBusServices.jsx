import React from 'react';

const BUS_SERVICES = [
  {
    destination: 'Atlantic City (New Jersey)',
    days: 'Mon, Tue, Wed, Thu, Fri, Sat, Sun',
    departure: '9:40 AM',
    return: '8:00 PM',
    notes: 'Bus times may change during national holidays and seasonal shifts. Call below number to confirm',
  },
  {
    destination: 'Wind Creek (Pennsylvania)',
    days: '', // We'll show custom timing rows below
    departure: '',
    return: '',
    notes: 'Bus times may change during national holidays and seasonal shifts. Call below number to confirm',
    customTimings: [
      { label: 'Friday', time: '12:15 PM' },
      { label: 'Wednesday & Saturday', time: '9:45 AM' },
      { label: 'Saturday only', time: '4:35 PM' },
    ],
  },
];

function CasinoBusServices() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-2 sm:px-4 md:px-6 lg:px-0">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Casino Bus Services</h1>
      <div className="bg-white rounded-xl shadow-md p-3 sm:p-4 md:p-6 lg:p-8 mb-6">
        <p className="text-base sm:text-lg mb-6 text-gray-700 text-center">
          We sell bus tickets to Atlantic City and Wind Creek casinos at our store. Check the details below for departure times and more. Please arrive at least 10 minutes before departure.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          {BUS_SERVICES.map((bus, idx) => (
            <div key={idx} className="flex-1 bg-gray-50 rounded-lg shadow p-4 min-w-0">
              <h2 className="text-lg font-bold mb-2 text-center text-blue-900">{bus.destination}</h2>
              <div className="space-y-1 text-sm sm:text-base">
                {bus.customTimings ? (
                  <>
                    <div className="font-semibold">Timings:</div>
                    <ul className="list-disc list-inside ml-4 mb-2">
                      {bus.customTimings.map((t, i) => (
                        <li key={i}><span className="font-medium">{t.label}:</span> {t.time}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <div><span className="font-semibold">Days:</span> {bus.days}</div>
                    <div><span className="font-semibold">Departure:</span> {bus.departure}</div>
                    <div><span className="font-semibold">Return:</span> {bus.return}</div>
                  </>
                )}
                <div><span className="font-semibold">Notes:</span> {bus.notes}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-gray-600 text-xs sm:text-sm text-center">
          <p className="text-sm sm:text-base mb-3">
            For more information, please call{' '}
            <a
              href="tel:+17324996748"
              className="font-semibold text-blue-700 underline hover:text-blue-900"
            >
              +1 (732) 499-6748
            </a>.
          </p>
          <p>Please do not park in the parking lot. We are not responsible for any tickets or fines.</p>
        </div>
      </div>
    </div>
  );
}

export default CasinoBusServices; 
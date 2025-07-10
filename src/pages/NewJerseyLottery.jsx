import React from 'react';

function NewJerseyLottery() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-2 sm:px-4 md:px-6 lg:px-0">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">New Jersey Lottery</h1>
      <div className="bg-white rounded-xl shadow-md p-3 sm:p-4 md:p-6 lg:p-8 mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 border-b pb-2">Rules &amp; Regulations</h2>
        <ol className="list-decimal list-inside space-y-3 text-sm sm:text-base text-gray-800">
          <li>We provide the services for our customer with honesty and dedication.</li>
          <li>Please make sure that you check your number and change before you leave the counter.</li>
          <li>Before approaching to the Lottery counter, please make sure you have your numbers ready so we can save the time.</li>
          <li>To save the time please play at the new Lotto vending machine.</li>
          <li>Please avoid to wait until last minute to play the number to save the time and the hassle.</li>
        </ol>
      </div>
    </div>
  );
}

export default NewJerseyLottery; 
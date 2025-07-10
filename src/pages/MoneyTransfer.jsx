import { useTranslation } from 'react-i18next';
import { FaMoneyCheckAlt, FaMoneyBillWave, FaMobileAlt, FaUniversity } from 'react-icons/fa';
import westernUnionLogo from '../assets/western-union.png';
import riaLogo from '../assets/ria-money-transfer-seeklogo.png';

function MoneyTransfer() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      {/* Logos Row */}
      <div className="flex items-center justify-center gap-8 mb-6 flex-wrap">
        <img src={westernUnionLogo} alt="Western Union Logo" className="h-14 md:h-20 w-auto object-contain" />
        <img src={riaLogo} alt="Ria Logo" className="h-10 md:h-16 w-auto object-contain" />
      </div>
      <h1 className="text-4xl font-extrabold text-center mb-10 tracking-tight">Money Transfer At Our Store</h1>

      <div className="flex flex-col gap-10">

        {/* Western Union */}
        <section className="bg-yellow-300 rounded-2xl shadow-lg p-6 md:p-8 transition hover:shadow-xl">
          <div className="bg-white rounded-xl shadow-md mb-6 p-6 md:p-8">
          <p className="text-lg md:text-xl text-black font-medium text-center leading-relaxed max-w-2xl mx-auto">
            At our store we offer convenient money transfer services through <span className="font-bold">Western Union</span> and <span className="font-bold">Ria</span>—helping you send money worldwide quickly and securely. For more information call us at{' '}
            <a
              href="tel:+17324996748"
              className="font-bold text-yellow-600 underline hover:text-yellow-700"
            >
              +1 (732) 499-6748
            </a>.
          </p>


          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Send Money Card */}
            <div className="flex-1 bg-black border border-black rounded-xl p-4 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl text-yellow-300 font-bold">To Send Money</h3>
              </div>
              <ol className="list-decimal list-inside text-sm md:text-base text-white">
                <li>
                  <strong>Before approaching the counter, have these ready:</strong>
                  <ul className="list-disc list-inside ml-4">
                    <li>Your phone number</li>
                    <li>Receiver name</li>
                    <li>Sending amount</li>
                    <li>Receiver phone number</li>
                    <li>If sending to a bank account, receiver's bank info</li>
                  </ul>
                </li>
                <li>Payment must be made by <strong>cash or debit card only</strong>.</li>
                <li><strong>No split payments</strong> between cash and card allowed.</li>
              </ol>
            </div>
            {/* Receive Money Card */}
            <div className="flex-1 bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold">To Receive Money</h3>
              </div>
              <ul className="list-disc list-inside text-sm md:text-base text-black">
                <li>Customer must have the <strong>MTCN number</strong>.</li>
                <li>Bring a valid <strong>license, passport, or government ID</strong>.</li>
                <li>If receiving <strong>$3,000+</strong>, additional verification is required.</li>
              </ul>
            </div>
          </div>
          

        </section>

        
        
        
        

      </div>
    </div>
  );
}

export default MoneyTransfer;

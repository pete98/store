function Drink() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Drink</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {/* Drink Cards - Replace with real images later */}
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <img src="https://cdn-icons-png.flaticon.com/512/1046/1046866.png" alt="Soft Drink" className="w-20 h-20 object-contain mb-2" />
          <span className="font-medium">Soft Drink</span>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <img src="https://cdn-icons-png.flaticon.com/512/1046/1046871.png" alt="Yogurt Drink" className="w-20 h-20 object-contain mb-2" />
          <span className="font-medium">Yogurt Drink</span>
        </div>
        {/* Add more drink items as needed */}
      </div>
    </div>
  );
}

export default Drink; 
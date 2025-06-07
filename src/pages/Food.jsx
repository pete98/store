function Food() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Food</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {/* Food Cards - Replace with real images later */}
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <img src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png" alt="Vegetable Oil" className="w-20 h-20 object-contain mb-2" />
          <span className="font-medium">Vegetable Oil</span>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <img src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" alt="Potato Chips" className="w-20 h-20 object-contain mb-2" />
          <span className="font-medium">Potato Chips</span>
        </div>
        {/* Add more food items as needed */}
      </div>
    </div>
  );
}

export default Food; 
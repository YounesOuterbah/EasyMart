export default function Carousel() {
  return (
    <div className="py-6">
      <div className="container">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl">Featured Products</h1>
          <ul className="flex gap-3">
            <li className="cursor-pointer text-lg duration-300 hover:text-red-600">All</li>
            <li className="cursor-pointer text-lg duration-300 hover:text-red-600">Dairy</li>
            <li className="cursor-pointer text-lg duration-300 hover:text-red-600">Fruit</li>
            <li className="cursor-pointer text-lg duration-300 hover:text-red-600">Vegetable</li>
            <li className="cursor-pointer text-lg duration-300 hover:text-red-600">Bakery</li>
            <li className="cursor-pointer text-lg duration-300 hover:text-red-600">Meat</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}

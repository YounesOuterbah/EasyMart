import Carousel from "./Carousel";

export default function CarouselContainer() {
  const productsCategory = ["Dairy", "Fruit", "Vegetable", "Bakery", "Vegan", "Meat"];
  return (
    <div className="py-6">
      <div className="container">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl">Featured Products</h1>
          <ul className="flex gap-3">
            {productsCategory.map((x, id) => (
              <li key={id} className="cursor-pointer text-lg duration-300 hover:text-red-600">
                {x}
              </li>
            ))}
          </ul>
        </div>
        <Carousel />
      </div>
    </div>
  );
}

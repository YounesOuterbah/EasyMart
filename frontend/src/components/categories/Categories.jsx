const category = [
  {
    id: 0,
    name: "Dairy",
    image: "/tomato.png",
    items: 12,
  },
  {
    id: 1,
    name: "Fruit",
    image: "/tomato.png",
    items: 8,
  },
  {
    id: 2,
    name: "Vegetable",
    image: "/meat.png",
    items: 142,
  },
  {
    id: 3,
    name: "Bakery",
    image: "/coffee.jpg",
    items: 52,
  },
  {
    id: 4,
    name: "Vegan",
    image: "/tea.png",
    items: 5,
  },
  {
    id: 5,
    name: "Meat",
    image: "/milk.jpg",
    items: 0,
  },
];

export default function Categories() {
  return (
    <div className="py-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {category.map((cate) => (
        <div
          key={cate.id}
          className="rounded cursor-pointer bg-gradient-to-r from-sky-500 to-indigo-500 shadow-md p-2 m-2"
        >
          <img
            src={cate.image}
            alt={cate.name}
            className="w-[140px] h-[140px] object-contain m-auto"
          />
          <h3 className="text-center text-2xl">{cate.name}</h3>
          <p className="text-center">{cate.items}</p>
        </div>
      ))}
    </div>
  );
}

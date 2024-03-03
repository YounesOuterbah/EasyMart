const category = [
  {
    id: 0,
    name: "Dairy",
    image: "/dairy.jpg",
  },
  {
    id: 1,
    name: "Fruit",
    image: "/fruit.jpg",
  },
  {
    id: 2,
    name: "Vegetable",
    image: "/vegetables.jpg",
  },
  {
    id: 3,
    name: "Bakery",
    image: "/bakery.jpg",
  },
  {
    id: 4,
    name: "Vegan",
    image: "/vegan.jpg",
  },
  {
    id: 5,
    name: "Meat",
    image: "/meat.jpg",
  },
];

export default function Categories() {
  return (
    <div className="py-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {category.map((cate) => (
        <div key={cate.id} className="rounded bg-green-100 overflow-hidden shadow-md">
          <img src={cate.image} alt={cate.name} className="w-full h-[150px] object-cover m-auto" />
          <h3 className="text-center text-2xl text-[--color-text]">{cate.name}</h3>
        </div>
      ))}
    </div>
  );
}

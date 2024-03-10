export default function Categories() {
  const categoryCount = 24;
  const category = Array.from({ length: categoryCount }, (_, index) => ({
    image: `/${index + 1}.webp`,
    name: `Category ${index + 1}`,
  }));
  return (
    <div className="py-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
      {category.map((cate, id) => (
        <div key={id}>
          <img src={cate.image} alt={cate.name} className="w-full  " />
        </div>
      ))}
    </div>
  );
}

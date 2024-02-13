import Categories from "../categories/Categories";

export default function Explore() {
  return (
    <div className="py-20">
      <div className="container">
        <div className=" flex items-center justify-between">
          <h1 className="text-3xl text-[--color-text]">Explore Categories</h1>
          <h1 className="text-lg text-[--color-text] cursor-pointer duration-300 hover:text-red-600">
            See All &gt;
          </h1>
        </div>
        <Categories />
      </div>
    </div>
  );
}

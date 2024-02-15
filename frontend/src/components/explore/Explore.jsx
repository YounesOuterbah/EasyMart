import Categories from "../categories/Categories";
import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <div className="py-20">
      <div className="container">
        <div className=" flex items-center justify-between">
          <h1 className="text-3xl text-[--color-text]">Explore Categories</h1>
          <Link
            to="category"
            className="text-lg text-[--color-text] cursor-pointer duration-300 hover:text-red-600"
          >
            See All &gt;
          </Link>
        </div>
        <Categories />
      </div>
    </div>
  );
}

import { IoGrid, IoMenu } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

export default function CategoryContent({ filterdAllItems, setSortItems, toggle, setToggle }) {
  const [view, setView] = useState("Grid");
  const dispatch = useDispatch();
  return (
    <div className="w-full">
      <button
        onClick={() => setToggle((prev) => !prev)}
        className={`xl:hidden bg-[#eee] p-2 rounded mb-2`}
      >
        category menu
      </button>
      <ul className="flex flex-wrap gap-2 items-center justify-between">
        <li className="flex gap-0">
          <IoGrid
            onClick={() => setView("Grid")}
            className="p-1 text-3xl bg-[#eee] hover:scale-75 duration-300 mr-2 cursor-pointer rounded"
          />
          <IoMenu
            onClick={() => setView("List")}
            className="p-1 text-3xl bg-[#eee] hover:scale-75 duration-300 mr-2 cursor-pointer rounded"
          />
        </li>
        <li>{filterdAllItems.length} product to show</li>
        <li>
          <select name="" id="" onChange={(e) => setSortItems(e.target.value)}>
            <option value="random">Random</option>
            <option value="lth">Price - Low to High</option>
            <option value="htl">Price - High to Low</option>
          </select>
        </li>
      </ul>
      <div
        className={`pt-6 ${
          view === "Grid" ? "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5" : "flex flex-col"
        }  gap-2`}
      >
        {filterdAllItems.map((product, id) => (
          <div key={id} className={`rounded ${view === "List" && "flex"} bg-[#eee]`}>
            <Link to={`/category/${id}`}>
              <img
                src={product.filename}
                className={`w-full ${
                  view === "Grid" ? "h-[150px]" : "h-[250px] w-[250px]"
                } object-cover rounded-t-lg`}
                alt={product.description}
              />
            </Link>
            <div className="p-2">
              <span
                className={`text-[--color-text-second] capitalize ${view === "List" && "text-xl"}`}
              >
                {product.type}
              </span>
              <h1 className={`font-bold ${view === "List" && "text-2xl"}`}>{product.title}</h1>
              <h1 className={`${view === "List" && "text-2xl"}`}>{product.rating} ⭐</h1>
              <div className="flex items-center justify-between">
                <div className="text-[--color-primary] font-bold">${product.price}</div>
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: id,
                        qty: 1,
                        title: product.title,
                        filename: product.filename,
                        price: product.price,
                      })
                    )
                  }
                  className="cursor-pointer flex mt-2 items-center gap-2 bg-[--color-primary] text-white px-4 py-1 rounded"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

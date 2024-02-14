import { IoGrid, IoMenu } from "react-icons/io5";

import { myProducts } from "../../products";
import { useState } from "react";

export default function CategoryContent() {
  const [view, setView] = useState("Grid");
  return (
    <div className="w-full">
      <ul className="flex items-center justify-between">
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
        <li>{myProducts.length} product to show</li>
        <li>
          <select name="" id="">
            <option value="random" defaultChecked>
              Random
            </option>
            <option value="lth">price - Low to High</option>
            <option value="htl">price - High to Low</option>
          </select>
        </li>
      </ul>
      <div
        className={`pt-6 ${
          view === "Grid" ? "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5" : "flex flex-col"
        }  gap-2`}
      >
        {myProducts.map((product, id) => (
          <div key={id} className="rounded  bg-red-200 ">
            <img
              src={product.filename}
              className="w-full h-[150px] object-cover rounded-t-lg"
              alt={product.description}
            />
            <div className="p-2">
              <span className="text-[--color-text-second] capitalize">{product.type}</span>
              <h1 className="font-bold text-sm">{product.title}</h1>
              <h1>{product.rating} ⭐</h1>
              <div className="flex items-center justify-between">
                <div className="text-[--color-primary] font-bold">${product.price}</div>
                <button className="cursor-pointer flex mt-2 items-center gap-2 bg-[--color-primary] text-white px-4 py-1 rounded">
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

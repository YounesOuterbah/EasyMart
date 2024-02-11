import { FiSearch, FiShoppingCart } from "react-icons/fi";
import img from "/shopping-bag.png";

export default function Header() {
  return (
    <div className="py-4">
      <div className="container flex flex-wrap items-center justify-between">
        <div className="flex items-center w-screen md:w-fit cursor-pointer">
          <img src={img} alt="grocery icon" className="w-[40px]" />
          <div className="ml-1">
            <div className="text-xl font-bold text-[--color-primary]">Groceyish</div>
            <div className="-mt-1 text-slate-400 text-sm">GROCERY</div>
          </div>
        </div>
        <div className="flex w-screen md:w-1/2 my-4 md:my-0">
          <input
            type="search"
            className="border w-full p-2 outline-none placeholder:text-slate-400 border-none bg-slate-100"
            placeholder="Search for items..."
          />
          <button className="bg-[--color-primary] text-white py-2 px-4">
            <FiSearch className="text-[25px]" />
          </button>
        </div>
        <ul className="flex gap-4 items-center ml-auto md:ml-0">
          <li className="cursor-pointer">
            <FiShoppingCart className="text-2xl" />
          </li>
          <li className="cursor-pointer">Login</li>
        </ul>
      </div>
    </div>
  );
}

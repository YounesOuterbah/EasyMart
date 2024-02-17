import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import img from "/shopping-bag.png";
import { useSelector } from "react-redux";

export default function Header() {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="py-4">
      <div className="container flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center w-screen md:w-fit cursor-pointer">
          <img src={img} alt="grocery icon" className="w-[40px]" />
          <div className="ml-1">
            <div className="text-xl font-bold text-[--color-primary]">Groceyish</div>
            <div className="-mt-1 text-slate-400 text-sm">GROCERY</div>
          </div>
        </Link>
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
          <Link to="cart" className="cursor-pointer relative">
            <FiShoppingCart className="text-2xl" />
            {cartItems.length > 0 && (
              <span className="bg-[--color-primary] text-white p-2 w-5 h-5 absolute flex items-center justify-center -top-2 -right-2 rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
          <Link to="login" className="cursor-pointer">
            Login
          </Link>
        </ul>
      </div>
    </div>
  );
}
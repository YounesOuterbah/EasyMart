import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import img from "/shopping-bag.png";
import { useSelector } from "react-redux";
import { myProducts } from "../../products";
import { useEffect, useState } from "react";

export default function Header() {
  const { cartItems } = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.user);
  const [filterData, setFilterData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const filterProduct = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setInputValue(inputValue);
    const filterMyProducts = myProducts.filter((x) => x.title.toLowerCase().includes(inputValue));
    setFilterData(filterMyProducts);
    console.log(inputValue);
  };

  useEffect(() => {}, [inputValue]);

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
        <div className="flex w-screen md:w-1/2 my-4 md:my-0 relative">
          <input
            type="search"
            className="border w-full p-2 outline-none placeholder:text-slate-400 border-none bg-slate-100"
            placeholder="Search for items..."
            onChange={filterProduct}
            value={inputValue}
          />
          <button className="bg-[--color-primary] text-white py-2 px-4">
            <FiSearch className="text-[25px]" />
          </button>
          {inputValue === "" ? (
            ""
          ) : (
            <div className="size-full absolute top-10 z-20">
              {filterData.map((x, id) => (
                <Link
                  to={`/category/${x.id}`}
                  key={id}
                  className="bg-slate-400 text-white p-2 block hover:bg-slate-900 duration-300 cursor-pointer"
                  onClick={() => (setFilterData([]), setInputValue(""))}
                >
                  {x.title}
                </Link>
              ))}
            </div>
          )}
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
          {currentUser ? (
            <Link to="/profile">
              <img
                src={currentUser.profilePicture}
                className="rounded-full w-8 h-8 object-cover"
                alt="profile"
              />
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </ul>
      </div>
    </div>
  );
}

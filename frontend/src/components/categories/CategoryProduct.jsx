import { useParams } from "react-router-dom";
import { myProducts } from "../../products";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { useState } from "react";

export default function CategoryProduct() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const filterProduct = myProducts.find((ele) => ele.id === +id);
  const [qty, setQty] = useState(1);

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: filterProduct.id,
        qty: +qty,
        price: filterProduct.price,
        title: filterProduct.title,
        type: filterProduct.type,
        rating: filterProduct.rating,
        filename: filterProduct.filename,
      })
    );
  };

  return (
    <section className="py-6">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 mb-8 md:w-1/2">
            <img
              className="object-contain w-full lg:h-96"
              src={`/${filterProduct.filename}`}
              alt=""
            />
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div>
              <span className="px-2.5 py-0.5 text-xs text-blue-600 bg-blue-100 rounded-xl">
                New Arrival
              </span>
              <h2 className="mt-6 mb-6 text-xl font-semibold leading-loose text-gray-700 md:text-2xl">
                {filterProduct.title}
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-gray-600 md:text-base">
                {filterProduct.description}
              </p>
              <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">
                <FaStar className="text-yellow-400" />
                <span>{filterProduct.rating}</span>
                <span className="ml-2 text-gray-400">19 reviews</span>
              </div>
              <div className="mb-6">
                <span className="font-semibold text-gray-800">Category:</span>
                <span className="ml-2">{filterProduct.type}</span>
              </div>
              <div className="flex items-center mb-6">
                <span className="text-2xl font-semibold text-gray-800">${filterProduct.price}</span>
                <span className="ml-4 text-gray-400">In Stock</span>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={addToCartHandler}
                  className="px-4 py-2 text-sm font-semibold text-gray-800 uppercase transition-colors duration-200 transform bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                >
                  Add to cart
                </button>
                <input
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  type="number"
                  min="1"
                  max="10"
                  className="px-4 py-2 text-sm font-semibold text-gray-800 uppercase transition-colors duration-200 transform bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

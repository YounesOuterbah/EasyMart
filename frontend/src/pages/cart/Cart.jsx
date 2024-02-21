import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, updateQuantity } from "../../redux/slices/cartSlice";
import { FaRegTrashCan } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Cart() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const total = cartItems.reduce((acc, cur) => acc + cur.price * cur.qty, 0).toFixed(2);

  return (
    <div className="py-6">
      <div className="container flex justify-between gap-4 flex-col xl:flex-row">
        <div className="w-full">
          <div className="flex justify-between mb-2">
            <div className="flex items-center gap-2 text-xl">
              Shopping Cart <AiOutlineShoppingCart />
            </div>
            <div>{cartItems.length} Items</div>
          </div>
          <table className="text-left rounded w-full bg-[#eee]">
            <thead className="p-2">
              <tr>
                <th className="p-2">PRODUCT DETAILS</th>
                <th className="p-2">QUANTITIY</th>
                <th className="p-2">PRICE</th>
                <th className="p-2">TOTAL</th>
              </tr>
            </thead>
            {cartItems.map((item) => (
              <tbody key={item.id}>
                <tr>
                  <td className="flex p-2">
                    <img src={item.filename} className="w-24" />
                    <div className="ml-4 flex flex-col justify-between">
                      <h1 className="font-bold text-xl">{item.title}</h1>
                      <p>category: {item.type}</p>
                      <p>rating: {item.rating}⭐</p>
                      <button
                        className="font-bold text-xl w-fit"
                        onClick={() =>
                          dispatch(
                            deleteFromCart({
                              id: item.id,
                            })
                          )
                        }
                      >
                        <FaRegTrashCan className="duration-300 hover:text-red-600" />
                      </button>
                    </div>
                  </td>
                  <td className="p-2">
                    <button
                      className="bg-white p-2 rounded-l"
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            qty:
                              item.qty != 1
                                ? item.qty - 1
                                : dispatch(
                                    deleteFromCart({
                                      id: item.id,
                                    })
                                  ),
                          })
                        )
                      }
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="w-12 text-center focus:outline-none p-2"
                      min="1"
                      max="10"
                      value={item.qty}
                      readOnly
                    />
                    <button
                      className="bg-white p-2 rounded-r"
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            qty: item.qty != 0 ? item.qty + 1 : (item.qty = 0),
                          })
                        )
                      }
                    >
                      +
                    </button>
                  </td>
                  <td className="p-2">${item.price}</td>
                  <td className="p-2">${(item.price * item.qty).toFixed(1)}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="bg-[#eee] p-2 rounded xl:w-[25%] h-fit w-full">
          <h2 className="text-2xl font-bold uppercase">Order Summary</h2>
          <div className="my-2">shipping: ${total >= 50 ? 0 : 13.2}</div>
          <p className="my-2">Total: ${total}</p>
          <button className="w-full my-2 bg-[--color-primary] text-white rounded duration-300 hover:bg-[#44e098]">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

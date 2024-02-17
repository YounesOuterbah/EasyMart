import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, updateQuantity } from "../../redux/slices/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="py-6">
      <div className="container flex justify-between gap-4">
        <div className="w-full">
          <div className="flex justify-between">
            <div>Shopping Cart</div>
            <div>{cartItems.length} Items</div>
          </div>
          <hr />
          <table className="bg-red-200 text-left rounded w-full">
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
                  <td className="p-2 flex">
                    <img src={item.filename} className="w-24" />
                    <div className="ml-4 flex flex-col justify-between">
                      <h1 className="font-bold text-xl">{item.title}</h1>
                      <button
                        className="font-bold text-4xl w-fit"
                        onClick={() =>
                          dispatch(
                            deleteFromCart({
                              id: item.id,
                            })
                          )
                        }
                      >
                        remove
                      </button>
                    </div>
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            qty: item.qty != 0 ? item.qty - 1 : (item.qty = 0),
                          })
                        )
                      }
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="w-10 text-center focus:outline-none p-2"
                      min="1"
                      max="10"
                      value={item.qty}
                      readOnly
                    />
                    <button
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
        <div className="bg-[#eee] p-2 rounded w-[20%]">
          <h2>Order Summary</h2>
          <hr />
          <div>subtotal: $20</div>
          <div>shipping: $0.3</div>
          <hr />
          <p>Total: ${cartItems.reduce((acc, cur) => acc + cur.price * cur.qty, 0).toFixed(2)}</p>
          <button>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}

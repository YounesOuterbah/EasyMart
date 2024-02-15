export default function Cart() {
  return (
    <div className="py-6">
      <div className="container flex justify-between gap-4">
        <div className="w-full">
          <div className="flex justify-between">
            <div>Shopping Cart</div>
            <div>3 Items</div>
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
            <tbody>
              <tr>
                <td className="p-2 flex">
                  <img src="https://m.media-amazon.com/images/I/71GFQpKTRYL.jpg" className="w-24" />
                  <div className="ml-4 flex flex-col justify-between">
                    <h1 className="font-bold text-xl">fifa 23</h1>
                    <button>remove</button>
                  </div>
                </td>
                <td className="p-2">
                  <button>-</button>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="w-10 text-center focus:outline-none p-2"
                    defaultValue={4}
                  />
                  <button>+</button>
                </td>
                <td className="p-2">$22</td>
                <td className="p-2">$88</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-[#eee] p-2 rounded w-[20%]">
          <h2>Order Summary</h2>
          <hr />
          <div>subtotal: $20</div>
          <div>shipping: $0.3</div>
          <hr />
          <p>Total: $20.3</p>
          <button>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}

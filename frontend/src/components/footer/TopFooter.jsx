import price from "/price.png";
import refund from "/refund.png";
import truck from "/truck.png";

export default function TopFooter() {
  return (
    <ul className="flex items-start justify-between flex-col lg:flex-row text-left gap-2 py-12 border-b">
      <li className="flex mb-6 lg:mb-0">
        <img src={price} className="object-contain mr-2" alt="price img" />
        <div>
          <h3 className="font-bold text-[--color-text]">Best Prices & Deals</h3>
          <p className="text-[--color-text-second]">
            Don’t miss our daily amazing deals and prices
          </p>
        </div>
      </li>
      <li className="flex mb-6 lg:mb-0">
        <img src={refund} className="object-contain mr-2" alt="refund img" />
        <div>
          <h3 className="font-bold text-[--color-text]">Refundable</h3>
          <p className="text-[--color-text-second]">
            If your items have damage we agree to refund it
          </p>
        </div>
      </li>
      <li className="flex mb-6 lg:mb-0">
        <img src={truck} className="object-contain mr-2" alt="delivery truck img" />
        <div>
          <h3 className="font-bold text-[--color-text]">Free delivery</h3>
          <p className="text-[--color-text-second]">
            Do purchase over $50 and get free delivery anywhere
          </p>
        </div>
      </li>
    </ul>
  );
}

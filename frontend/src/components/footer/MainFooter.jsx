import img from "/shopping-bag.png";

export default function MainFooter() {
  const info = [
    "Address: 1762 School House Road",
    "Call Us: (213) 658-3916",
    "Email: groceyish@contact.com",
    "Work hours: 8:00 - 20:00, Sunday - Thursday",
  ];

  const accountLinks = ["Wishlist", "Cart", "Customer Support"];

  const usefulLinks = ["About Us", "Contact"];

  const helpCenterLinks = ["Privacy Policy", "Terms of Use"];
  return (
    <ul className="flex pt-12 flex-wrap flex-col lg:flex-row items-center justify-between border-b pb-6">
      <li className="self-start">
        <div className="flex self-start items-center mb-4 w-fit cursor-pointer">
          <img src={img} alt="grocery icon" className="w-[40px]" />
          <div className="ml-1">
            <div className="text-xl font-bold text-[--color-primary]">Groceyish</div>
            <div className="-mt-1 text-slate-400 text-sm">GROCERY</div>
          </div>
        </div>
        {info.map((x, id) => (
          <p
            key={id}
            className="my-2 text-[--color-text-second] duration-300 hover:text-[--color-text] cursor-pointer"
          >
            {x}
          </p>
        ))}
      </li>
      <li className="self-start">
        <h1 className="font-bold text-xl text-[--color-text] mb-2 lg:mb-4">Account</h1>
        {accountLinks.map((x, id) => (
          <p
            key={id}
            className="text-[--color-text-second] duration-300 hover:text-[--color-text] cursor-pointer my-2"
          >
            {x}
          </p>
        ))}
      </li>
      <li className="self-start">
        <h1 className="font-bold text-xl text-[--color-text] mb-2 lg:mb-4">Useful links</h1>
        {usefulLinks.map((x, id) => (
          <p
            key={id}
            className="text-[--color-text-second] duration-300 hover:text-[--color-text] cursor-pointer my-2"
          >
            {x}
          </p>
        ))}
      </li>
      <li className="self-start">
        <h1 className="font-bold text-xl text-[--color-text] mb-2 lg:mb-4">Help Center</h1>
        {helpCenterLinks.map((x, id) => (
          <p
            key={id}
            className="text-[--color-text-second] duration-300 hover:text-[--color-text] cursor-pointer my-2"
          >
            {x}
          </p>
        ))}
      </li>
    </ul>
  );
}

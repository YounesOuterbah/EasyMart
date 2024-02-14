import payment from "/Payment.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function BottomFooter() {
  const social = [<FaFacebookF />, <FaLinkedinIn />, <FaInstagram />, <FaXTwitter />];
  const date = new Date().getFullYear();
  return (
    <div className="py-6 flex flex-col gap-y-4 md:flex-row md:gap-y-0 items-center justify-between">
      <div className="text-[--color-text-second] hover:text-[--color-text]">
        &copy; {date}, All rights reserved
      </div>
      <div>
        <img src={payment} alt="payment img" />
      </div>
      <ul className="flex gap-4">
        {social.map((x, id) => (
          <li
            key={id}
            className="text-2xl bg-[--color-primary] text-white p-2 rounded-full cursor-pointer"
          >
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
}

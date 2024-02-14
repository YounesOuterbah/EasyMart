import { BiCategory } from "react-icons/bi";
import { SlPhone } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="border-t py-4">
      <div className="container flex flex-wrap items-center justify-between">
        <Link
          to="category"
          className="flex w-screen md:w-fit mb-2 items-center p-2 rounded cursor-pointer bg-[--color-primary] text-white"
        >
          <BiCategory className="text-xl mr-2" />
          Browse All Categories
        </Link>
        <div className="flex items-center">
          <SlPhone className="text-xl text-[--color-primary] mr-1" />
          <span className="text-[--color-primary]">(213) 658-3916</span>
          <span className="text-sm text-slate-400 ml-2">24/7 customer support</span>
        </div>
      </div>
    </div>
  );
}

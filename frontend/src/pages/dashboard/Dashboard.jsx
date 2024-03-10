import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="container py-6 flex flex-col md:flex-row">
      <div className="w-[20%] mb-2 mr-2">
        <Link to="/dashboard/" className="text-2xl font-bold">
          Admin Dashboard
        </Link>
        <ul className="flex flex-col gap-2 mt-2">
          <li>
            <Link
              to="/dashboard/users"
              className="p-2 rounded cursor-pointer hover:bg-black hover:text-white duration-300"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/settings"
              className="p-2 rounded cursor-pointer hover:bg-black hover:text-white duration-300"
            >
              Settings
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-[80%]">
        <Outlet />
      </div>
    </div>
  );
}

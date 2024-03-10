import { useState } from "react";
import Profile from "../../components/profile/Profile";

export default function Dashboard() {
  const [toggle, setToggle] = useState(false);
  const rows = [
    {
      id: 0,
      name: "younes",
      email: "younesouterbah1@gmail.com",
    },
    {
      id: 1,
      name: "mohamed",
      email: "mohamedterba6@gmail.com",
    },
  ];
  return (
    <div className="container py-6 flex">
      <div className="w-[20%] mb-2">
        <h1 className="text-2xl mb-4 font-bold">Admin Dashboard</h1>
        <ul>
          <li className="cursor-pointer hover:bg-black hover:text-white duration-300">Users</li>
          <li className="cursor-pointer hover:bg-black hover:text-white duration-300">settings</li>
        </ul>
      </div>
      <div className="w-[80%]">
        <ul className="flex items-center justify-between gap-2">
          <li className="flex-1 cursor-pointer p-2 rounded border border-green-800">
            <h1>Users</h1>
            <p className="my-2">120</p>
            <button className="bg-green-700 p-2 rounded text-white">see all users</button>
          </li>
          <li className="flex-1 cursor-pointer p-2 rounded border border-green-800">
            <h1>Products</h1>
            <p className="my-2">50</p>
            <button className="bg-green-700 p-2 rounded text-white">add new product</button>
          </li>
        </ul>
      </div>

      {toggle ? (
        <table className="border rounded p-2 w-full">
          <thead>
            <tr className="text-left">
              <th className="border p-2">ID</th>
              <th className="border p-2">NAME</th>
              <th className="border p-2">EMAIL</th>
              <th className="border p-2">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item) => (
              <tr key={item.id}>
                <td className="border p-2">{item.id}</td>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.email}</td>
                <td className="flex p-2 items-center gap-2">
                  <button className="bg-green-400 flex-1 p-2 rounded hover:bg-green-800 duration-300 text-white">
                    view profile
                  </button>
                  <button className="bg-red-400 flex-1 p-2 rounded hover:bg-red-800 duration-300 text-white">
                    delete profile
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Profile />
      )}
    </div>
  );
}

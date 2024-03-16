import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DashboardMain() {
  const [users, setUsers] = useState();
  const getUsers = async () => {
    try {
      const res = await fetch("http://localhost:5001/api/auth/users");
      const data = await res.json();
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <ul className="flex items-center justify-between gap-2">
      <li className="flex-1 cursor-pointer p-2 rounded border border-green-800">
        <h1>Users</h1>
        <p className="my-2 font-bold">there is: {users?.length} users</p>

        <Link to="users" className="bg-green-700 inline-block p-2 rounded text-white">
          see all users
        </Link>
      </li>
      <li className="flex-1 cursor-pointer p-2 rounded border border-green-800">
        <h1>Products</h1>
        <p className="my-2">50</p>
        <button className="bg-green-700 p-2 rounded text-white">add new product</button>
      </li>
    </ul>
  );
}

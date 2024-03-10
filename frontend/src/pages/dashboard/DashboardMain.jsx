export default function DashboardMain() {
  return (
    <ul className="flex items-center justify-between gap-2">
      <li className="flex-1 cursor-pointer p-2 rounded border border-green-800">
        <h1>Users</h1>
        <p className="my-2">2</p>
        <button className="bg-green-700 p-2 rounded text-white">see all users</button>
      </li>
      <li className="flex-1 cursor-pointer p-2 rounded border border-green-800">
        <h1>Products</h1>
        <p className="my-2">50</p>
        <button className="bg-green-700 p-2 rounded text-white">add new product</button>
      </li>
    </ul>
  );
}

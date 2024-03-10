export default function Users() {
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
  );
}

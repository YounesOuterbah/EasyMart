import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);

  const getUsers = async () => {
    try {
      const res = await fetch("https://grocerystoreintern.onrender.com/api/auth/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async () => {
    try {
      const res = await fetch(
        `https://grocerystoreintern.onrender.com/api/user/remove/${userIdToDelete}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        setUsers(users.filter((user) => user._id !== userIdToDelete));
        setToggle(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <table className="border rounded p-2 w-full">
        <thead>
          <tr className="text-left">
            <th className="border p-2">ID</th>
            <th className="border p-2">NAME</th>
            <th className="border p-2">EMAIL</th>
            <th className="border p-2">JOIN DATE</th>
            <th className="border p-2">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, id) => (
            <tr key={id}>
              <td className="border p-2">{id}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.createdAt}</td>
              <td className="flex p-2 items-center gap-2">
                <button
                  onClick={() => {
                    setUserIdToDelete(user._id);
                    setToggle(true);
                  }}
                  className="bg-red-400 flex-1 p-2 rounded hover:bg-red-800 duration-300 text-white"
                >
                  delete profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {toggle && (
        <div className="fixed w-fit p-2 rounded z-10 shadow-md bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p>Are you sure you want to delete the account?</p>
          <div className="flex gap-1 mt-2">
            <button onClick={deleteUser} className="bg-green-500 p-2 rounded flex-1 text-white">
              Confirm
            </button>
            <button
              onClick={() => setToggle(false)}
              className="bg-red-500 p-2 rounded flex-1 text-white"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {toggle && <div className="fixed bg-black/60 top-0 left-0 size-full z-0"></div>}
    </>
  );
}

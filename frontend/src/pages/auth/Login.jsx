import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInFailure, signInStart, signInSuccess } from "../../redux/slices/userSlice";
import OAth from "../../components/OAth";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("http://localhost:5001/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      if (res.status === 404 || res.status === 401) {
        return dispatch(signInFailure());
      } else {
        navigate("/");
      }
    } catch (error) {
      return dispatch(signInFailure(error));
    }
  };
  return (
    <div className="py-6">
      <div className="container px-3 max-w-lg">
        <h1 className="text-3xl text-center font-bold mb-6">Sign in</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            onChange={handleChange}
            id="email"
            placeholder="Email"
            className="bg-slate-100 p-3 rounded-lg"
          />
          <input
            type="password"
            onChange={handleChange}
            id="password"
            placeholder="Password"
            className="bg-slate-100 p-3 rounded-lg"
          />
          <button
            disabled={loading}
            className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          >
            {loading ? "Loading ..." : "Continue"}
          </button>
          <OAth />
        </form>
        <div className="flex gap-2 mt-5">
          <p>New to Groceyish?</p>
          <Link to="/register">
            <span className="text-blue-500">Create you Groceyish account</span>
          </Link>
        </div>
        <p className="text-red-700 pt-5">{error && "Something went wrong!"}</p>
      </div>
    </div>
  );
}

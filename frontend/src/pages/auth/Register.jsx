import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAth from "../../components/OAth";

export default function Register() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("https://grocery-store-intern.vercel.app/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (res.status === 409) {
        return setError(true);
      } else {
        navigate("/login");
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div className="py-6">
      <div className="container px-3 max-w-lg">
        <h1 className="text-3xl text-center font-bold mb-6">Create account</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Name "
            id="name"
            className="bg-slate-100 p-3 rounded-lg"
          />
          <input
            type="email"
            onChange={handleChange}
            placeholder="Email"
            id="email"
            className="bg-slate-100 p-3 rounded-lg"
          />
          <input
            type="password"
            onChange={handleChange}
            placeholder="Password"
            id="password"
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
          <p>Already have an account?</p>
          <Link to="/login">
            <span className="text-blue-500">Sign in</span>
          </Link>
        </div>
        <p className="text-red-700 pt-5">{error && "Something went wrong!"}</p>
      </div>
    </div>
  );
}

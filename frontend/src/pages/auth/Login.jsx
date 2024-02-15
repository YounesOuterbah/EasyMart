import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="py-6">
      <div className="container px-3 max-w-lg">
        <h1 className="text-3xl text-center font-bold mb-6">Sign in</h1>
        <form className="flex flex-col gap-4">
          <input type="email" placeholder="Email" className="bg-slate-100 p-3 rounded-lg" />
          <input type="password" placeholder="Password" className="bg-slate-100 p-3 rounded-lg" />
          <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            Continue
          </button>
        </form>
        <div className="flex gap-2 mt-5">
          <p>New to Groceyish?</p>
          <Link to="/register">
            <span className="text-blue-500">Create you Groceyish account</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
export default function SignUp() {
  const [FormData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:3000/api/signup",
        FormData
      );

      setFormData({
        username: "",
        email: "",
        password: "",
      });
      console.log(res.data);
      setLoading(false);
      setError(false);
      toast.success("User created successfully!");
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg"
          value={FormData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          value={FormData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          value={FormData.password}
          onChange={handleChange}
        />
        <button
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          disabled={loading}
        >
          {loading ? "loading..." : "Sign up"}
        </button>
      </form>
      {/* <p
        className={`text-gray-500 p-2 text-center rounded-md mt-2 ${
          error ? "bg-red-300  " : ""
        }`}
      >
        {error && "Something went wrong"}
      </p> */}
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/signin">
          <span className="text-blue-500">Sign in</span>
        </Link>
      </div>
    </div>
  );
}

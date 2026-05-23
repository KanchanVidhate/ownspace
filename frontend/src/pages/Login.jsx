import { useState } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:8000/api/auth/login",
        formData
      );

      // SAVE TOKEN

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("✨ Welcome to your Own Space");

      navigate("/dashboard");

    } catch (err) {

      console.log(err);

      alert("Invalid Credentials");

    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F14] flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 shadow-2xl">

        <h1 className="text-5xl font-black text-white text-center">
          Welcome Back
        </h1>

        <p className="text-gray-400 text-center mt-4">
          Login to continue your poetry journey
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full bg-black/30 border border-white/10 rounded-3xl px-6 py-5 text-white outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full bg-black/30 border border-white/10 rounded-3xl px-6 py-5 text-white outline-none"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 py-5 rounded-3xl text-white font-bold hover:scale-105 transition"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default Login;
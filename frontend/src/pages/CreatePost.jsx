import { useState } from "react";

import axios from "axios";

import {
  FaFeatherAlt,
  FaMagic,
} from "react-icons/fa";

import { motion } from "framer-motion";

import BottomNav from "../components/BottomNav";

const CreatePost = () => {

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:8000/api/posts/create",
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("✨ Poetry published successfully");

      setTitle("");
      setContent("");

    } catch (err) {

  console.log(err);

  console.log(err.response?.data);

alert(
  err.response?.data?.message || "Failed to publish poetry"
);
}
  };

  return (
    <div className="min-h-screen bg-[#0F0F14] text-white pb-40">

      {/* BACKGROUND BLUR */}

      <div className="absolute top-0 left-0 w-full overflow-hidden -z-0">

        <div className="absolute w-[400px] h-[400px] bg-pink-500/20 blur-[150px] rounded-full top-0 left-0"></div>

        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[150px] rounded-full top-20 right-0"></div>

      </div>

      {/* PAGE */}

      <div className="relative z-10 px-6 pt-10 max-w-4xl mx-auto">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <div className="flex justify-center">

            <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-5 rounded-[30px] shadow-2xl">

              <FaFeatherAlt className="text-4xl text-white" />

            </div>

          </div>

          <h1 className="text-6xl font-black mt-8 leading-tight">
            Create Your <br /> Own Poetry
          </h1>

          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-8">
            Pour your emotions into words and let the world
            feel your thoughts beautifully.
          </p>

        </motion.div>

        {/* FORM */}

        <motion.form
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="mt-14 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-8 shadow-2xl"
        >

          {/* TITLE */}

          <div>

            <label className="text-lg text-gray-300">
              Poetry Title
            </label>

            <input
              type="text"
              placeholder="Give your poetry a beautiful title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mt-4 bg-black/30 border border-white/10 rounded-3xl px-6 py-5 outline-none text-white text-xl"
              required
            />

          </div>

          {/* CONTENT */}

          <div className="mt-10">

            <label className="text-lg text-gray-300">
              Your Emotions
            </label>

            <textarea
              rows="12"
              placeholder="Write your poetry here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full mt-4 bg-black/30 border border-white/10 rounded-3xl px-6 py-6 outline-none text-white text-lg leading-10 resize-none"
              required
            ></textarea>

          </div>

          {/* TIPS */}

          <div className="mt-8 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-6 flex gap-5">

            <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-2xl h-fit">

              <FaMagic className="text-white text-2xl" />

            </div>

            <div>

              <h3 className="text-2xl font-bold">
                Writing Tip
              </h3>

              <p className="text-gray-400 mt-2 leading-7">
                Poetry becomes powerful when emotions feel
                real, honest, and deeply personal.
              </p>

            </div>

          </div>

          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-10 bg-gradient-to-r from-pink-500 to-purple-600 py-5 rounded-3xl text-xl font-bold hover:scale-[1.02] transition duration-300 shadow-2xl"
          >

            {loading ? "Publishing..." : "Publish Poetry ✨"}

          </button>

        </motion.form>

      </div>

      {/* NAVBAR */}

      <BottomNav />

    </div>
  );
};

export default CreatePost;
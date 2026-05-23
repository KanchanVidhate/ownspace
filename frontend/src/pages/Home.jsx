import { useEffect, useState } from "react";

import { getAllPosts } from "../api/post";

import PoetryCard from "../components/PoetryCard";
import BottomNav from "../components/BottomNav";

const Home = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const fetchPosts = async () => {

      try {

        const res = await getAllPosts();

        setPosts(res.data);

      } catch (err) {

        console.log(err);

      }
    };

    fetchPosts();

  }, []);

  return (
    <div className="min-h-screen bg-[#0F0F14] text-white pb-40">

      {/* HERO */}

      <div className="px-6 pt-10">

        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-[40px] p-10 shadow-2xl">

          <h1 className="text-5xl font-black leading-tight">
            Welcome to <br /> Own Space
          </h1>

          <p className="text-white/80 mt-5 text-lg max-w-xl">
            Express emotions beautifully through poetry,
            stories, and soulful writing.
          </p>

          <button className="mt-8 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
            Explore Poetry
          </button>

        </div>

      </div>

      {/* SEARCH */}

      <div className="px-6 mt-10">

        <input
          type="text"
          placeholder="Search poetry..."
          className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-5 outline-none text-white"
        />

      </div>

      {/* CATEGORY */}

      <div className="px-6 mt-10 flex gap-4 overflow-auto">

        <div className="bg-blue-500 px-6 py-5 rounded-3xl min-w-[170px]">
          <h3 className="font-bold text-xl">
            Sad Poetry
          </h3>
        </div>

        <div className="bg-pink-500 px-6 py-5 rounded-3xl min-w-[170px]">
          <h3 className="font-bold text-xl">
            Love Poetry
          </h3>
        </div>

        <div className="bg-orange-500 px-6 py-5 rounded-3xl min-w-[170px]">
          <h3 className="font-bold text-xl">
            Life Poetry
          </h3>
        </div>

      </div>

      {/* FEED */}

      <div className="px-6 mt-14">

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-4xl font-black">
            Public Feed
          </h2>

          <button className="text-pink-400">
            View all
          </button>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {posts.map((post) => (

            <PoetryCard
              key={post._id}
              post={post}
            />

          ))}

        </div>

      </div>

      {/* NAVBAR */}

      <BottomNav />

    </div>
  );
};

export default Home;
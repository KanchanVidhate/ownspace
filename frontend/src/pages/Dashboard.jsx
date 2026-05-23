import { useEffect, useState } from "react";

import {
  FaHeart,
  FaFire,
  FaPenFancy,
  FaAward,
} from "react-icons/fa";

import { getMyPosts } from "../api/post";

import BottomNav from "../components/BottomNav";

const Dashboard = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const fetchPosts = async () => {

      try {

        const res = await getMyPosts();

        setPosts(res.data);

      } catch (err) {

        console.log(err);

      }
    };

    fetchPosts();

  }, []);

  return (
    <div className="min-h-screen bg-[#0F0F14] text-white pb-40">

      {/* TOP SECTION */}

      <div className="px-6 pt-10">

        <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-xl shadow-2xl">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">

            {/* PROFILE */}

            <div className="flex items-center gap-6">

              <div className="w-28 h-28 rounded-[30px] bg-gradient-to-r from-pink-500 to-purple-500"></div>

              <div>

                <h1 className="text-5xl font-black">
                  Kanchan
                </h1>

                <p className="text-gray-400 mt-2 text-lg">
                  Poetry Writer • Dreamer • Creator
                </p>

                <button className="mt-5 bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
                  Edit Profile
                </button>

              </div>

            </div>

            {/* STATS */}

            <div className="grid grid-cols-3 gap-5">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center">

                <FaPenFancy className="mx-auto text-pink-400 text-2xl mb-3" />

                <h2 className="text-3xl font-black">
                  {posts.length}
                </h2>

                <p className="text-gray-400 text-sm mt-1">
                  Poems
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center">

                <FaHeart className="mx-auto text-red-400 text-2xl mb-3" />

                <h2 className="text-3xl font-black">
                  248
                </h2>

                <p className="text-gray-400 text-sm mt-1">
                  Likes
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center">

                <FaFire className="mx-auto text-orange-400 text-2xl mb-3" />

                <h2 className="text-3xl font-black">
                  8
                </h2>

                <p className="text-gray-400 text-sm mt-1">
                  Day Streak
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* REWARDS */}

      <div className="px-6 mt-10">

        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-[35px] p-8 shadow-2xl">

          <div className="flex items-center gap-5">

            <div className="bg-white/20 p-5 rounded-3xl">

              <FaAward className="text-4xl" />

            </div>

            <div>

              <h2 className="text-3xl font-black">
                Daily Reward Unlocked ✨
              </h2>

              <p className="text-white/80 mt-2">
                You completed 8 days streak and unlocked
                cute digital stickers.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* YOUR POETRY */}

      <div className="px-6 mt-14">

        <div className="flex items-center justify-between">

          <h2 className="text-4xl font-black">
            Your Poetry
          </h2>

          <button className="text-pink-400">
            View all
          </button>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10">

          {posts.map((post) => (

            <div
              key={post._id}
              className="bg-white/5 border border-white/10 rounded-[35px] p-7 backdrop-blur-xl hover:-translate-y-2 transition duration-300"
            >

              <p className="text-pink-400 text-sm mb-3">
                @{post.userId?.username || "writer"}
              </p>

              <h3 className="text-3xl font-black leading-tight">
                {post.title}
              </h3>

              <p className="text-gray-300 mt-5 leading-8">
                {post.content}
              </p>

              <div className="flex items-center justify-between mt-8">

                <button className="text-pink-400 flex items-center gap-2">
                  <FaHeart />
                  Like
                </button>

                <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold">
                  Read
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* LIKED POEMS */}

      <div className="px-6 mt-16">

        <h2 className="text-4xl font-black mb-10">
          Liked Poems
        </h2>

        <div className="bg-white/5 border border-white/10 rounded-[35px] p-10 text-center">

          <h3 className="text-2xl font-bold">
            No liked poems yet
          </h3>

          <p className="text-gray-400 mt-3">
            Start exploring and liking poetry.
          </p>

        </div>

      </div>

      {/* NAV */}

      <BottomNav />

    </div>
  );
};

export default Dashboard;
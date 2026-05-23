import { FaHeart, FaShareAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const PoetryCard = ({ post }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 shadow-2xl transition"
    >

      <div className="flex items-center gap-3 mb-5">

        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>

        <div>
          <h3 className="text-white font-semibold">
            @{post.userId?.username || "writer"}
          </h3>

          <p className="text-gray-400 text-sm">
            Poetry Writer
          </p>
        </div>

      </div>

      <h2 className="text-3xl font-bold text-white leading-tight">
        {post.title}
      </h2>

      <p className="text-gray-300 mt-5 leading-8 text-lg">
        {post.content.slice(0, 160)}...
      </p>

      <div className="flex items-center justify-between mt-8">

        <button className="flex items-center gap-2 text-pink-400 hover:scale-105 transition">
          <FaHeart />
          <span>Like</span>
        </button>

        <button className="flex items-center gap-2 text-purple-400 hover:scale-105 transition">
          <FaShareAlt />
          <span>Share</span>
        </button>

      </div>

    </motion.div>
  );
};

export default PoetryCard;
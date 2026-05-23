import {
  FaHome,
  FaPlus,
  FaUser,
  FaHeart,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-white/10 border border-white/10 backdrop-blur-xl px-8 py-4 rounded-full flex gap-8 z-50">

      <Link to="/" className="text-white text-xl">
        <FaHome />
      </Link>

      <Link to="/create" className="text-white text-xl">
        <FaPlus />
      </Link>

      <Link to="/dashboard" className="text-white text-xl">
        <FaHeart />
      </Link>

      <Link to="/profile" className="text-white text-xl">
        <FaUser />
      </Link>

    </div>
  );
};

export default BottomNav;
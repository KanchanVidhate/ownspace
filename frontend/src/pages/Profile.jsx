const Profile = () => {

  const rewards = ["💖", "🌙", "✨", "🖋️"];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-5xl mx-auto">

        {/* Profile Card */}
        <div className="bg-white/5 border border-white/10 rounded-[35px] p-10 backdrop-blur-xl">

          <div className="flex flex-col md:flex-row items-center gap-10">

            <img
              src="https://i.pravatar.cc/200"
              alt="profile"
              className="w-40 h-40 rounded-full border-4 border-pink-500 object-cover"
            />

            <div>

              <h1 className="text-5xl font-black">
                Kanchan
              </h1>

              <p className="text-gray-400 mt-3 text-lg">
                Writing emotions nobody can explain.
              </p>

              <div className="flex gap-8 mt-8 flex-wrap">

                <div>
                  <h2 className="text-3xl font-bold text-pink-400">
                    54
                  </h2>

                  <p className="text-gray-400">
                    Poems
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-purple-400">
                    1.2K
                  </h2>

                  <p className="text-gray-400">
                    Followers
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-orange-400">
                    8 🔥
                  </h2>

                  <p className="text-gray-400">
                    Day Streak
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Rewards */}
        <div className="mt-14">

          <h2 className="text-3xl font-black mb-8">
            Rewards & Stickers
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {rewards.map((reward, index) => (

              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-xl"
              >

                <div className="text-6xl">
                  {reward}
                </div>

                <p className="mt-4 text-gray-300">
                  Reward Badge
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;
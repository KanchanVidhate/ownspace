const checkReward = (user) => {

  if (user.streak === 8) {

    user.rewards.push({
      name: "Cute Heart Sticker",
      image: "/stickers/heart.png"
    });

    return {
      unlocked: true,
      reward: "Cute Heart Sticker"
    };
  }

  return { unlocked: false };
};

module.exports = checkReward;
import axios from "axios";

export default async (req, res) => {
  try {
    let user_hi_scores = await axios.get(
      `https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=${req.params.id}`
    );

    // RETURNS SKILLS IN RANK, LEVEL AND EXP IN BELOW ORDER:
    const stats_order = [
      "Overall",
      "Attack",
      "Defence",
      "Strength",
      "Hitpoints",
      "Ranged",
      "Prayer",
      "Magic",
      "Cooking",
      "Woodcutting",
      "Fletching",
      "Fishing",
      "Firemaking",
      "Crafting",
      "Smithing",
      "Mining",
      "Herblore",
      "Agility",
      "Thieving",
      "Slayer",
      "Farming",
      "Runecrafting",
      "Hunter",
      "Construction",
    ];

    if (user_hi_scores.data) {
      user_hi_scores = user_hi_scores.data
        .split("\n")
        .filter((item, index) => index + 1 <= stats_order.length);

      let remapped_stats = {};

      user_hi_scores.forEach((item, index) => {
        const stats = item.split(",");

        remapped_stats = {
          ...remapped_stats,
          [stats_order[index]]: {
            rank: stats[0] ? stats[0] : 0,
            level: stats[1] ? stats[1] : 0,
            xp: stats[2] ? stats[2] : 0,
          },
        };
      });

      res.send(remapped_stats);
    }
  } catch {
    res.status(404);
    res.send({ error: "No hi scores for this user exists" });
  }
};

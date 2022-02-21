import axios from "axios";

export default async (req, res) => {
  try {
    let user_hi_scores = await axios.get(
      `https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=${req.params.username}`
    );

    console.log(user_hi_scores);

    res.send({ user_hi_scores });
  } catch {
    res.status(404);
    res.send({ error: "No hi scores for this user exists" });
  }
};

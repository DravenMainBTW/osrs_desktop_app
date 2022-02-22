import axios from "axios";

export default async (req, res) => {
  try {
    await axios
      .get(
        `https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=${req.query.username}`
      )
      .then(() => res.send({ exist: true }))
      .catch(() => res.send({ exist: false }));
  } catch {
    res.status(404);
    res.send({ error: "No hi scores for this user exists" });
  }
};

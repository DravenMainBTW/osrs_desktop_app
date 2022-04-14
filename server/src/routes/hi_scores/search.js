import axios from "axios";

// Checks to see if the user exists
export default async (req, res) => {
  try {
    let username_check = await axios.get(
      `https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=${req.query.username}`
    );

    if (username_check) {
      res.send({ exist: true });
    }
  } catch {
    res.send({ exist: false });
  }
};

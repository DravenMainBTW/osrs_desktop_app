import { Item } from "../../models";
import axios from "axios";

export default async (req, res) => {
  try {
    let item = await Item.findOne({ _id: req.params.id });

    if (item && !item.image_link) {
      let item_image = await axios.get(
        `https://secure.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=${item.reference_id}`
      );

      item.image_link = item_image.data.item.icon_large;

      item.save();
    }

    res.send(item);
  } catch {
    res.status(404);
    res.send({ error: "Item doesn't exist" });
  }
};

import { Item } from "../models";
import Axios from "axios";

export default async function ItemSync() {
  let res = await Axios.get(
    "https://prices.runescape.wiki/api/v1/osrs/mapping"
  );

  if (res.data) {
    await Promise.all(
      res.data.map(async (item) => {
        const exist_check = await Item.findOne({ reference_id: item.id });

        if (!exist_check) {
          let new_item = await new Item({
            title: item.name.toString().toLowerCase(),
            description: item.examine,
            reference_id: item.id,
          });

          await new_item.save();
        }
      })
    ).then(() => {
      console.log(`# Synced ${res.data.length} #`);
    });
  }
}

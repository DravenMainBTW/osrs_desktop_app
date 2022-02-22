import { Item } from "../../models";
import axios from "axios";
import dayjs from "dayjs";

export default async (req, res) => {
  try {
    let item = await Item.findOne({ _id: req.params.id });

    let item_image = await axios.get(
      `https://secure.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=${item.reference_id}`
    );

    item_image =
      item_image.data && item_image.data.item
        ? item_image.data.item.icon_large
        : "";

    let market_data = await axios.get(
      `https://prices.runescape.wiki/api/v1/osrs/timeseries?timestep=24h&id=${item.reference_id}`
    );

    market_data =
      market_data.data && market_data.data.data
        ? market_data.data.data.map((item) => {
            return {
              Name: dayjs.unix(item.timestamp).format("DD/MM/YY"),
              VolumeHigh: item.highPriceVolume,
              VolumeLow: item.lowPriceVolume,
              PriceHigh: item.avgHighPrice,
              PriceLow: item.avgLowPrice,
            };
          })
        : [];

    if (req.query.days_to_view) {
      market_data = market_data.slice(
        Math.max(market_data.length - parseFloat(req.query.days_to_view), 1)
      );
    }

    res.send({ item, item_image, market_data });
  } catch {
    res.status(404);
    res.send({ error: "Item doesn't exist" });
  }
};

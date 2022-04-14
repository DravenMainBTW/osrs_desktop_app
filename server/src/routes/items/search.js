import { Item } from "../../models";

// Searchs item database by search string
export default async (req, res) => {
  const item = await Item.find({
    title: { $regex: new RegExp(req.query.item_name, "ig") },
  })
    .sort({ title: 1 })
    .limit(20)
    .lean();

  res.send(item);
};

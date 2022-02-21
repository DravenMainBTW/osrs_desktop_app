import { Item } from "../../models";

export default async (req, res) => {
  const item = await Item.find({
    title: { $regex: new RegExp(req.query.item_name, "ig") },
  })
    .sort({ title: 1 })
    .limit(10)
    .lean();

  res.send(item);
};
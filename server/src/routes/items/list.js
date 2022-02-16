import { Item } from "../../models";

export default async (req, res) => {
  const items = await Item.find();

  res.send(items);
};

import { Item } from "../../models";

// Lists all items
export default async (req, res) => {
  const items = await Item.find();

  res.send(items);
};

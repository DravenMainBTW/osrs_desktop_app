import express from "express";
import { Item } from "../models";

// REQUIRES UPDATE. BASIC FOR TESTING

const router = express.Router();

router.get("/item", async (req, res) => {
  const posts = await Item.find();
  res.send(posts);
});

router.get("/item/search", async (req, res) => {
  const posts = await Item.find({
    title: { $regex: new RegExp(req.query.item_name, "ig") },
  })
    .sort({ title: 1 })
    .limit(10)
    .lean();

  res.send(posts);
});

router.get("/item/:id", async (req, res) => {
  try {
    const post = await Item.findOne({ _id: req.params.id });
    res.send(post);
  } catch {
    res.status(404);
    res.send({ error: "Item doesn't exist" });
  }
});

module.exports = router;

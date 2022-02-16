import express from "express";
import Items from "./items";

const router = express.Router();

const route_array = [...Items];

for (let index = 0; index < route_array.length; index++) {
  const element = route_array[index];

  router[element.method](element.path, element.handler);
}

module.exports = router;

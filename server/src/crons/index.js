import cron from "node-cron";
import { Item } from "../models";

import ItemSync from "./item_sync";

class CronManager {
  async setup() {
    // Sync if no items exist in current DB
    const item_count = await Item.countDocuments({});

    if (item_count === 0) {
      console.log("###################");
      console.log("# First Time Sync #");
      console.log("###################");

      ItemSync();
    }

    console.log("##################");
    console.log("# Starting CRONS #");
    console.log("##################");

    // Every Thursday
    cron.schedule("0 0 * * 4", () => {
      ItemSync();
    });
  }
}

export default new CronManager();

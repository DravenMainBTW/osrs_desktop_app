import cron from "node-cron";

import ItemSync from "./ItemSync";

class CronManager {
  setup() {
    console.log("##################");
    console.log("# Starting CRONS #");
    console.log("##################");

    cron.schedule("0 0 * * 4", () => {
      ItemSync();
    });
  }
}

export default new CronManager();

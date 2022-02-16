import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import routes from "./routes";
import CronManager from "./crons";

const mongoDB = "mongodb://localhost:27017/OSRS_GE_APP";
// TEMP FOR TESTING
const corsOptions = {
  origin: "http://localhost:3000",
};

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", () => {
  console.log("###########################################");
  console.log("# Error Encountered While Starting Server #");
  console.log("###########################################");
});

db.once("open", async () => {
  const app = express();

  app.use(cors(corsOptions));
  app.use(express.json());

  app.use("/api", routes);

  await CronManager.setup(app);

  app.listen(5000, () => {
    console.log("########################");
    console.log("# Started Successfully #");
    console.log("########################");
  });
});

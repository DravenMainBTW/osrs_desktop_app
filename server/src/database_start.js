import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import routes from "./routes";
import CronManager from "./crons";

// FOR TESTING
const mongoDB = "mongodb://localhost:27017/OSRS_GE_APP";
const corsOptions = {
  origin: "http://localhost:3000",
};

// Conection
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

// On error
db.on("error", () => {
  console.log("###########################################");
  console.log("# Error Encountered While Starting Server #");
  console.log("###########################################");
});

db.once("open", async () => {
  const app = express();

  // Setting up CORS to allow frontend to communicate
  app.use(cors(corsOptions));

  // JSON parsing middleware
  app.use(express.json());

  // Adding routes on to "/api"
  app.use("/api", routes);

  // Setting up crons
  await CronManager.setup(app);

  app.listen(5000, () => {
    console.log("########################");
    console.log("# Started Successfully #");
    console.log("########################");
  });
});

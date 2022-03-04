import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
import colors from "colors";
import connectDB from "./config/db";
const morgan = require("morgan");

//Load env vars
require("dotenv").config({ path: "./config/config.env" });

// Connect to database
connectDB();

//create express app
const app = express();

// apply middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//Mount routers
readdirSync("./routes").map((r) =>
  app.use("/api/v1", require(`./routes/${r}`))
);

//port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App listening on port ${port}!`.yellow.bold);
});

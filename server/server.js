import express from "express";
import cors from "cors";
const morgan = require("morgan");

//Load env vars
require("dotenv").config({ path: "./config/config.env"});

// create express app
const app = express();

// apply middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// route
app.get("/", (req, res) => {
  res.send("you hit server endpoint");
});

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

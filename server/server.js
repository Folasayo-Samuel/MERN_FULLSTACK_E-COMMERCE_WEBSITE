require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
// const config = require("config");
const db = require("./config/db");

const app = express();
app.use(express.json());

// Used in production to serve client files
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// connecting to mongoDB and then running server on port 5000
// const ATLAS_URI = config.get("ATLAS_URI");
const PORT = process.env.PORT || 4000;

db.then(() => {
  console.log("Database connected...");
  app.listen(
    PORT,
    () =>
      console.log(
        `Server started on ${process.env.NODE_ENV} mode on port ${PORT}`
      ),
    "0.0.0.0"
  );
}).catch((err) => console.log("Error: " + err));

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDatabase = require("./helpers/database/connectDatabase");

dotenv.config({ path: "./config/env/config.env" });
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Welcome to the API",
  });
});

app.listen(PORT, () => {
  connectDatabase();
  console.log(`Server running on port ${PORT} | ${process.env.NODE_ENV}`);
});

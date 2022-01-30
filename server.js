const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");
// const path = require("path")

const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(require("./routes/index"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

// module.exports = db;

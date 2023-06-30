const express = require("express");
const mongoose = require("mongoose");

//invoking express
const app = express();

const PORT = 8000;
const DB_URL =
  "mongodb+srv://uma:uma123@cluster0.jmecq7c.mongodb.net/myMernApp?retryWrites=true&w=majority";

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("DB connected...");
  })
  .catch((error) => console.log("DB connection error", error));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});

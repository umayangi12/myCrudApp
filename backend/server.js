const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

//define the port
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

//connect the db
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//create db connection
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected");
})

const studentRouter = require('./routes/students');
app.use("/student", studentRouter);


//create server connection
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

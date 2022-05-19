const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

// Middlewares
// Import Routes
const postRoute = require("./routes/postRotes");
app.use("/posts", postRoute);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to First Express App");
});

// Connect to DB
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the DB");
  })
  .catch((err) => {
    console.log(err);
  });

// Start the server
app.listen(3000, () => {
  console.log("Server started.");
  console.log("APP_URL: " + process.env.APP_URL);
});

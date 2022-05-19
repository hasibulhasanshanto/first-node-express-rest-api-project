const express = require("express");

const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to First Express App");
});

// Start the server
app.listen(3000, () => {
  console.log("Server started.");
});

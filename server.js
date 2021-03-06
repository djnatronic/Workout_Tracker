// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 80;

// Requiring our models for syncing
var db = require("./models");
let mongoose = require("mongoose");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nathanbworkouttracker", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });

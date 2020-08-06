// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");
let mongoose = require("mongoose");



// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/workouts", function(req, res) {
    console.log(req)
    db.Workout.find({})
    .then(dbWorkout => {
      console.log(dbWorkout)
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

  app.post("/api/workouts", function(req, res) {
    console.log(req)
    db.Workout.create({})
    .then(dbWorkout => {
      console.log(dbWorkout)
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});


app.put("/api/workouts/:id", (req, res) => {
  db.Workout.updateOne({
    _id: req.params.id
  },{ 
    $push: { exercises: [req.body] }
  },)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});
 

app.get("/api/workouts/range", (req, res) => {

  db.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });

});

};
 

  



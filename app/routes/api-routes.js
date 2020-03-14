const mongoose = require("mongoose");
const db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    db.find()
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.post("/api/workouts", function(req, res) {
    db.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", function(req, res) {
    db.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", function(req, res) {
    db.find()
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
};